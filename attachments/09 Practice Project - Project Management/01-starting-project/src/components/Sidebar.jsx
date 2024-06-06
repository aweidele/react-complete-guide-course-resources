import Button from "./Button";

export default function Sidebar() {
  return (
    <aside className="bg-slate-900 text-white p-10 w-1/3 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase">Your Projects</h2>
      <div>
        <Button>+ Add Project</Button>
      </div>
    </aside>
  );
}
