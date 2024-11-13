import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { ToDoProvider } from "./contexts/ToDoContext";
import ListItem from "./components/ListItem";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const checkBox =(id)=>{
      todos.map(ele=>console.log(ele.id))
      setTodos((prev)=>prev.map((ele)=>ele.id==id?{...ele,completed:!ele.completed}:prev))
      console.log(todos)
  }
  const deleteToDo =(id)=>{}
  const updateToDo=(id,todo)=>{}
  return (
    <ToDoProvider value={{ todos, addTodo, checkBox, updateToDo, deleteToDo }}>
      <h1>TODO....</h1>
      <Input />
      {console.log(todos)}
      <ol>
      {todos.map(ele=><li key={ele.id}><ListItem todo={ele}/></li>)}
      </ol>
    </ToDoProvider>
  );
}

export default App;
