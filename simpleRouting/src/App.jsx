import { useState } from 'react'
import {Link} from "react-router-dom"

function App() {
  

  return (
    <>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </>
  )
}

export default App
