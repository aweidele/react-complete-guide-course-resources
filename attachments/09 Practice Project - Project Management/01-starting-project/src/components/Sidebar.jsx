import Button from "./Button";

export default function Sidebar({ onStartAddProject, projects }) {
  return (
    <aside className="bg-slate-900 text-white p-10 w-1/3 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul class="my-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800">{project.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
