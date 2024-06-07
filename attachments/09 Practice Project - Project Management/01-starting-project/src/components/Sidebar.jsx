import Button from "./Button";

export default function Sidebar({ onStartAddProject, projects }) {
  return (
    <aside className="bg-slate-900 text-white p-10 w-1/3 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => (
          <li>{project.title}</li>
        ))}
      </ul>
    </aside>
  );
}
