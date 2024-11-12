import React from 'react'

function Input({inputValue,setInputValue}) {
  return (
    <>
        <input type="text"  value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
    </>
  )
}

export default Input