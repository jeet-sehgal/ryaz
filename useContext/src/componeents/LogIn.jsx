import React, { useContext, useState } from 'react'
import JeetContext from '../context/JeetContext'

function LogIn() {
    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")
    const {setJeet} = useContext(JeetContext)
    function handel(){
        setJeet({user,pass})
    }
  return (
    <div>
        <input type="text" placeholder='username'value={user} onChange={(e)=>{setUser(e.target.value)}}/>
        <input type="password" placeholder='password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/><br />
        <button onClick={handel}>submit</button>
    </div>
  )
}

export default LogIn