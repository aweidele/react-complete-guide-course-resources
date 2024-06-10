import Button from "./Button";
import TaskList from "./TaskList";
import { useRef } from "react";

export default function Tasks({ tasks, onAddTask }) {
  const newTask = useRef();
  function handleNewTask() {
    onAddTask({
      name: newTask.current.value,
    });
    newTask.current.value = "";
  }
  return (
    <div class="my-8">
      <h2 class="font-bold text-xl text-slate-600 my-6">Tasks</h2>
      <div class="flex gap-4">
        <input ref={newTask} className="block bg-slate-300 p-1 border-b-slate-400 border-b-2" />
        <Button onClick={handleNewTask}>Add Task</Button>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}
