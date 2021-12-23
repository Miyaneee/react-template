import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from '@nabla/vite-plugin-eslint'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: { alias: [{ find: /@\/(.*)/, replacement: path.join(__dirname, 'src', '$1') }] },
  plugins: [react(), eslint()]
})
