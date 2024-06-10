export default function TaskList({ tasks }) {
  return (
    <ul className="my-4">
      {tasks.map((task) => (
        <li className="my-2 flex justify-between p-8 bg-slate-100">
          <span>{task.name}</span>
          <button>Clear</button>
        </li>
      ))}
    </ul>
  );
}
