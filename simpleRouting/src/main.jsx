import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from "./components/Home"
import About from "./components/About"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'

const route=createBrowserRouter([
  {path : "/",
    element :  <Home />,
  },
  {path : "/about",
    element :  <About />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider route={route}></RouterProvider> */}
  </StrictMode>,
)
