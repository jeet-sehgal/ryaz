import React from 'react'
import { useToDo } from '../contexts/ToDoContext'

function ListItem({todo}) {
  const {checkBox} = useToDo()
  const done=()=>{
    checkBox(todo.id)
  }
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={done} />
      {todo.todo}
    </div>
  )
}

export default ListItem