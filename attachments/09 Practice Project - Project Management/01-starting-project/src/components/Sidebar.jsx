import Button from "./Button";

export default function Sidebar({ onStartAddProject, onSelectProject, projects, selectedProject }) {
  return (
    <aside className="bg-slate-900 text-white p-10 w-1/3 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul class="my-8">
        {projects.map((project) => {
          const buttonClasses = `w-full text-left px-2 py-1 rounded-sm my-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800${project.id === selectedProject && " bg-slate-700"}`;
          return (
            <li key={project.id}>
              <button onClick={() => onSelectProject(project.id)} className={buttonClasses} disabled={project.id === selectedProject}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
