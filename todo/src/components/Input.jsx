import React, { useState } from "react";
import { useToDo } from "../contexts/ToDoContext";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useToDo();
  const add = () => {
    if (!inputValue) return;
    else addTodo({todo:inputValue,completed:false})
    setInputValue("")
  };
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="write todo..."
        onKeyDown={(e)=>{if(e.key=="Enter") add()}}
      />
      <button onClick={add} id="add">Add</button>
    </>
  );
}

export default Input;
