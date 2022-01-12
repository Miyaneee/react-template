import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from '@/App'
import '@/index.less'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
