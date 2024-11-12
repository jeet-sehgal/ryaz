import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { ToDoProvider } from "./contexts/ToDoContext";
function App() {
  const [input, setInput] = useState("");
  const [todos,setTodos] = useState([])
  return (
    <ToDoProvider value={{todos,addTodo,checkBox,updateToDo,deleteToDo}}>
      <h1>TODO....</h1>
      <Input inputValue={input} setInputValue={setInput}></Input><button>Add</button>
    </ToDoProvider>
  );
}

export default App;
