import React from 'react'
import "./mainComp.css"

function MainComp({heading=null,desc=null,child=null}) {
  return (
    <>
        <h3>{heading}</h3>
        <p>{desc}</p>
        {child}
    </>
)
}

export default MainComp