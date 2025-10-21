import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const apiBase = process.env.VITE_API_BASE_URL || 'https://vibevault-backend.vercel.app'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: apiBase,
        changeOrigin: true,
        secure: false
      },
      '/api': {
        target: apiBase,
        changeOrigin: true,
        secure: false
      }
    }
  }
})
