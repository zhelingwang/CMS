import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 10010,
    strictPort: true,
    open: true,
    hmr: true
  },
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // 需使用绝对路径
    }
  }
})
