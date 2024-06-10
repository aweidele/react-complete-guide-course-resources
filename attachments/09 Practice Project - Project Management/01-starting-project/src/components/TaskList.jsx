export default function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul className="my-4">
      {tasks.map((task) => (
        <li key={task.id} className="my-2 flex justify-between p-8 bg-slate-100">
          <span>{task.name}</span>
          <button onClick={() => onDeleteTask(task.id)}>Clear</button>
        </li>
      ))}
    </ul>
  );
}
