import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from '@nabla/vite-plugin-eslint'
import path from 'node:path'

const basename = '/react-template/'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  const base = isDev ? '/' : basename

  return {
    // Ignore basename in developement to aviod url issues.
    // When build and preview, add basename what it is.
    base,
    define: {
      'process.env.basename': JSON.stringify(base)
    },
    resolve: {
      alias: [
        {
          find: /@\/(.*)/,
          replacement: path.join(__dirname, 'src', '$1')
        }
      ]
    },
    plugins: [react(), eslint()]
  }
})
