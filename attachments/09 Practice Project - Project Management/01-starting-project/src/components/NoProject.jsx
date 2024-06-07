import logo from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProject({ onChangeMode }) {
  return (
    <div className="text-center py-10">
      <img src={logo} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="font-bold text-lg my-6">No Project Selected</h2>
      <p className="my-6">Select a project or get started with a new one</p>
      <p>
        <Button action={() => onChangeMode("new-project")}>Create New Project</Button>
      </p>
    </div>
  );
}
