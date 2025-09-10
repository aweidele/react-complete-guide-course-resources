import classes from "./TodoItem.module.css";

export const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
  return (
    <li className={classes.item}>
      {props.text} <button onClick={props.onRemoveTodo}>delete</button>
    </li>
  );
};
