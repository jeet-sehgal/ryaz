import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const ele=(<a href="https://google.com" target='_blank'>click</a>)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {ele}
    <App />
  </StrictMode>
)
