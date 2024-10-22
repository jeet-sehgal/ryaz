import './App.css'
import {NavLink} from "react-router-dom"

function App() {
  
  return (
    <>
      <ul>
        <li>
          <NavLink className={({isActive})=>isActive?"active":""} to="/">
            1
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>isActive?"active":""} to="/">
            2
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>isActive?"active":""} to="/">
            3
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>isActive?"active":""} to="/home">
            4
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default App
