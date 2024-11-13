import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateToDo: (id, todo) => {},
  deleteToDo: (id) => {},
  checkBox: (id) => {},
});
export const ToDoProvider = ToDoContext.Provider;

export const useToDo = () => useContext(ToDoContext);
