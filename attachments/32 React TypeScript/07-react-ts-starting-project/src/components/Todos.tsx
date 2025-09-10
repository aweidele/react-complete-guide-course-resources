import Todo from "../models/todo";

// Add the React Functional Component as the type for the function
// Angled bracket plugs in a concrete value
export const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};
