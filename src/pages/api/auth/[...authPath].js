import { proxyToBackend } from '../../../lib/backendProxy'

export const config = {
  api: {
    bodyParser: false
  }
}

const rewriteAuthPath = (url = '') => url.replace(/^\/api\/auth/i, '/auth')

const authProxy = async (req, res) => {
  const targetPath = rewriteAuthPath(req.url)
  const rewriteLocation = (location) => {
    if (!location) return location
    let parsed
    try {
      parsed = new URL(location, 'http://placeholder.local')
    } catch {
      return location
    }
    const pathname = parsed.pathname.startsWith('/') ? parsed.pathname : `/${parsed.pathname}`
    if (!pathname.startsWith('/auth/')) return location
    const host = req.headers.host
    if (!host) return location
    const protocol = req.headers['x-forwarded-proto'] || 'https'
    return `${protocol}://${host}/api${pathname}${parsed.search}${parsed.hash}`
  }
  await proxyToBackend(req, res, targetPath, { rewriteLocation })
}

export default authProxy
