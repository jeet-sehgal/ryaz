import React, { useRef, useState } from "react";
import { useToDo } from "../contexts/ToDoContext";

function ListItem({ todo }) {
  const { checkBox, updateToDo, deleteToDo } = useToDo();
  const [msg, setMsg] = useState(todo.todo);
  const [edit, setEdit] = useState(false);
  const input = useRef(null);
  return (
    <div className={todo.completed?"done":""} id="item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          checkBox(todo.id);
        }}
      />
      <input
        type="text"
        readOnly={!edit}
        ref={input}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setEdit(!edit);
            edit
              ? (updateToDo(todo.id, msg), input.current.blur())
              : (setEdit(!edit), input.current.focus());
          }
        }}
        className={todo.completed?"done":""}
      />
      <button
        onClick={() => {
          setEdit(!edit);
          edit
            ? (updateToDo(todo.id, msg), input.current.blur())
            : (setEdit(!edit), input.current.focus());
        }}
        id="control"
      >
        {edit ? "📁" : "✏️"}
      </button>
      <button
        onClick={() => {
          deleteToDo(todo.id);
        }}
        id="control"
      >
        ❌
      </button>
    </div>
  );
}

export default ListItem;
