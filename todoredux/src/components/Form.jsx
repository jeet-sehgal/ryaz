import React, { useState } from 'react'
import {add} from '../features/todo'
import { useDispatch } from 'react-redux'


function Form() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={()=>{
            dispatch(add(input));
            setInput('')
        }}>Add</button>
    </div>
  )
}

export default Form