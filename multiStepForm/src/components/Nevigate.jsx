import React from 'react'

function Nevigate({heading=null,desc=null}) {
  return (
    <>
        <h3>{heading}</h3>
        <p>{desc}</p>
    </>
  )
}

export default Nevigate