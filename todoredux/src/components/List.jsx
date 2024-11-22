import React from 'react'
import { useSelector } from 'react-redux'


function List() {
    const todo=useSelector(state=>state.todos)
  return (
    <div>
        {todo.map(ele=>{
            return (
            <li key={ele.id}>
                {ele.text}
                {console.log(ele.text)}
            </li>)
        })}
        {console.log(todo)}
    </div>
  )
}

export default List