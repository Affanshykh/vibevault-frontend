import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || 'https://vibevault-backend.vercel.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient
