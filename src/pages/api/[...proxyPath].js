import { proxyToBackend } from '../../lib/backendProxy'

export const config = {
  api: {
    bodyParser: false
  }
}

const apiProxy = async (req, res) => {
  await proxyToBackend(req, res)
}

export default apiProxy
