import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "https://kainar9292.github.io/kmg/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
},
})
