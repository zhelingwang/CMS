import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 10010,
    strictPort: true,
    open: true,
    hmr: true
  },
  base: './',
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/
      ],
      imports: [
        'vue',
        'vue-router',
        {
          'dayjs': [
            ['default', 'dayjs']
          ]
        }
      ]
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // 需使用绝对路径
    }
  }
})
