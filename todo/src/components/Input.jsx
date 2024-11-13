import React, { useState } from "react";
import { useToDo } from "../contexts/ToDoContext";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useToDo();
  const add = () => {
    if (!inputValue) return;
    else addTodo({todo:inputValue,completed:false})
  };
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={add}>Add</button>
    </>
  );
}

export default Input;
