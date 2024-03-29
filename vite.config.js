import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: process.env.NODE_ENV === 'production'
  },
  build:{
    target: 'esnext',
    polyfillDynamicImport: true,
  }
})
