import { useState } from "react";

import "./App.css";
import { NewTodo } from "./components/NewTodo";
import { Todos } from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((current) => {
      return [...todos, newTodo];
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
