import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const apiBase = process.env.VITE_API_BASE_URL || 'http://localhost:5002'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
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
