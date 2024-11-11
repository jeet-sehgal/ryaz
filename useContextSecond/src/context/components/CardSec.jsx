import React from 'react'
import useData from '../DataContext'

function CardSec() {
    let {user}=useData()
  return (
    <div>CardSec {user}</div>
  )
}

export default CardSec