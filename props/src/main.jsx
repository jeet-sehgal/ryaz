import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App heading="jeet sehgal" para='And I am a simple text paragraph. The color of this text is styled with CSS. Click the button below to remove me through the power JavaScript' btn="learn less (not working)"/>
    <App />
  </StrictMode>,
)
