import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: { alias: [{ find: /@\/(.*)/, replacement: path.join(__dirname, 'src', '$1') }] },
  plugins: [react()],
})