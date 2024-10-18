import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/<week-5-main>/'
    : '/'
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    outDir: 'dist'
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
