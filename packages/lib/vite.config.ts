import * as path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],

  build: {
    outDir: 'dist',
    cssCodeSplit: true,
    // minify: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'lib', // 🐈
      fileName: 'lib', // 🐈
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
  },
})
