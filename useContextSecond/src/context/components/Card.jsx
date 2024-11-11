import React from 'react'
import useData from '../DataContext'

function Card() {
    let {user,password}=useData()
    user= "karan"
  return (
    <div>
        <h1>I am a tag </h1>
        <p>{user} ------------------- this is the global data</p>
        <p>username = {user}</p>
        <p>password = {password}</p>
    </div>
  )
}

export default Card