import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete, tasks, onAddTask }) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div>
      <header className="border-b-2 py-8">
        <div className="text-xs">{project.id}</div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl text-slate-600 my-6">{project.title}</h1>
          <button onClick={onDelete}>Delete</button>
        </div>
        <p className="mb-4 text-slate-600">{formattedDate}</p>
        <p className="text-slate-500 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks tasks={tasks.filter((task) => task.project === project.id)} onAddTask={onAddTask} />
    </div>
  );
}
