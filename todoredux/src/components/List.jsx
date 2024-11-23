import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { reduce } from '../features/todo';

function List() {
    const todo=useSelector(state=>state.todos);
    const dispatch= useDispatch()
  return (
    <ol>
        {todo.map(ele=>{
            return (
            <li key={ele.id}>
                {ele.text}
                <button id='re'onClick={()=>{dispatch(reduce(ele.id))}}>X</button>
            </li>)
        })}
        
    </ol>
  )
}

export default List