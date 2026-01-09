import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/' is correct because you are using a custom CNAME domain.
  // If you were not using a custom domain, this would need to be '/repository-name/'
  base: '/', 
  build: {
    outDir: 'dist',
  }
})