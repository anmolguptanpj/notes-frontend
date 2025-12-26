import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server:{
    hmr:true
  },
  plugins: [
    tailwindcss(),
  ],
})