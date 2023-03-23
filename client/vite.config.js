import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')


// https://vitejs.dev/config/
// specifically defined port for development
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001
  }
})
