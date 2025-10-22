const BACKEND_FALLBACK = 'https://vibevault-backend.vercel.app'

const BACKEND_BASE_URL = (
  process.env.BACKEND_BASE_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  BACKEND_FALLBACK
).replace(/\/$/, '')

const IGNORED_FORWARD_HEADERS = new Set(['connection', 'content-length', 'host'])

const READ_METHODS = new Set(['GET', 'HEAD'])

const toBuffer = async (readable) => {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks)
}

const sanitizeCookies = (cookies) =>
  cookies.map((cookie) => cookie.replace(/;\s*Domain=[^;]+/gi, ''))

const setForwardedHeaders = (req) => {
  const headers = new Headers()

  Object.entries(req.headers).forEach(([key, value]) => {
    if (!value || IGNORED_FORWARD_HEADERS.has(key.toLowerCase())) return
    if (Array.isArray(value)) {
      headers.set(key, value.join(','))
    } else {
      headers.set(key, value)
    }
  })

  if (!headers.has('x-forwarded-for') && req.socket?.remoteAddress) {
    headers.set('x-forwarded-for', req.socket.remoteAddress)
  }
  if (!headers.has('x-forwarded-host') && req.headers.host) {
    headers.set('x-forwarded-host', req.headers.host)
  }
  if (!headers.has('x-forwarded-proto')) {
    headers.set('x-forwarded-proto', req.headers['x-forwarded-proto'] || 'https')
  }

  return headers
}

const writeResponse = async (req, res, upstreamResponse, includeBody = true, options = {}) => {
  const upstreamHeaders = upstreamResponse.headers

  const headerEntries = []
  upstreamHeaders.forEach((value, key) => {
    headerEntries.push([key, value])
  })

  headerEntries.forEach(([key, value]) => {
    const lowerKey = key.toLowerCase()
    if (lowerKey === 'set-cookie' || lowerKey === 'location') return
    const existing = res.getHeader(key)
    if (existing) {
      const merged = Array.isArray(existing) ? existing.concat(value) : [existing, value]
      res.setHeader(key, merged)
    } else {
      res.setHeader(key, value)
    }
  })

  let setCookies = []
  if (typeof upstreamHeaders.getSetCookie === 'function') {
    setCookies = upstreamHeaders.getSetCookie()
  } else {
    const maybeCookie = upstreamHeaders.get('set-cookie')
    if (maybeCookie) {
      setCookies = [maybeCookie]
    }
  }

  if (setCookies.length > 0) {
    res.setHeader('set-cookie', sanitizeCookies(setCookies))
  }

  const locationHeader = upstreamHeaders.get('location')
  if (locationHeader) {
    const rewrittenLocation = options.rewriteLocation ? options.rewriteLocation(locationHeader, req) : locationHeader
    if (rewrittenLocation) {
      res.setHeader('location', rewrittenLocation)
    }
  }

  res.status(upstreamResponse.status)

  if (!includeBody) {
    res.end()
    return
  }

  const responseBuffer = Buffer.from(await upstreamResponse.arrayBuffer())
  res.send(responseBuffer)
}

export const proxyToBackend = async (req, res, pathOverride, options = {}) => {
  const targetPath = pathOverride ?? req.url ?? ''
  const targetUrl = `${BACKEND_BASE_URL}${targetPath}`

  const headers = setForwardedHeaders(req)

  let body
  if (!READ_METHODS.has((req.method || 'GET').toUpperCase())) {
    body = await toBuffer(req)
    headers.delete('content-type')
    if (req.headers['content-type']) {
      headers.set('content-type', req.headers['content-type'])
    }
  }

  try {
    const upstreamResponse = await fetch(targetUrl, {
      method: req.method,
      headers,
      redirect: 'manual',
      body
    })

    const shouldIncludeBody = req.method?.toUpperCase() !== 'HEAD' && upstreamResponse.status !== 204
    await writeResponse(req, res, upstreamResponse, shouldIncludeBody, options)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown proxy error'
    res.status(502).json({ message: 'Upstream request failed', detail: message })
  }
}

export default BACKEND_BASE_URL
