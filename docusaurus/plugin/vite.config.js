import { defineConfig } from 'vite';
import path from 'node:path'
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, '/src/PodW.jsx'),
      name: 'VoxgigPodWDocusaurus',
      minify: false,
      target: 'es6',
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@docusaurus/core'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
});
