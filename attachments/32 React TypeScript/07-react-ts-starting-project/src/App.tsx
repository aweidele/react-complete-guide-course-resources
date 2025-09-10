import "./App.css";
import { NewTodo } from "./components/NewTodo";
import { Todos } from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  const addTodoHandler = (todoText: string) => {};
  return (
    <div>
      <Todos items={todos} />
      <NewTodo onAddTodo={addTodoHandler} />
    </div>
  );
}

export default App;
