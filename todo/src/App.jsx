import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { ToDoProvider } from "./contexts/ToDoContext";
import ListItem from "./components/ListItem";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const checkBox = (id) => {
    todos.map((ele) => console.log(ele.id));
    setTodos((prev) =>
      prev.map((ele) =>
        ele.id == id ? { ...ele, completed: !ele.completed } : ele
      )
    );
  };
  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((ele) => ele.id !== id));
  };
  const updateToDo = (id, todo) => {
    setTodos(todos.map((ele) => (ele.id == id ? { ...ele, todo: todo } : ele)));
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    <ToDoProvider value={{ todos, addTodo, checkBox, updateToDo, deleteToDo }}>
      <h1>TO DO....</h1>
      <Input />
      {console.log(todos)}
      <div className="work">
        <ol>
          {todos.map((ele) => (
            <li key={ele.id}>
              <ListItem todo={ele} />
            </li>
          ))}
        </ol>
      </div>
    </ToDoProvider>
  );
}

export default App;
