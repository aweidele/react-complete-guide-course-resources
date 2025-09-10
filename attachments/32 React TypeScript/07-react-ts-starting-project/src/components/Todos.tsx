import Todo from "../models/todo";
import { TodoItem } from "./TodoItem";

// Add the React Functional Component as the type for the function
// Angled bracket plugs in a concrete value
export const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
