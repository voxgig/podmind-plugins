import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, '/src/PodW.vue'),
      name: 'VoxgigPodWNuxt',
      minify: false,
      target: 'es6'
    },
    rollupOptions: {
      external: ['vue', 'nuxt'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
