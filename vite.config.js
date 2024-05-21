import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {   // 2. Add your css config here
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
})
