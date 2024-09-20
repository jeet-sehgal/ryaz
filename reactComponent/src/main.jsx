import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const ele=React.createElement("h1",{href:"ffs"},"hi my name is jeet")

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {ele}
    <App />
  </StrictMode>
)
