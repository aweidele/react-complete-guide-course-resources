import Button from "./Button";
import TaskList from "./TaskList";
import { useRef, useState } from "react";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") handleNewTask();
  }

  function handleNewTask() {
    onAddTask({
      name: enteredTask,
    });
    setEnteredTask("");
  }
  return (
    <div class="my-8">
      <h2 class="font-bold text-xl text-slate-600 my-6">Tasks</h2>
      <div class="flex gap-4">
        <input value={enteredTask} onChange={handleChange} onKeyUp={handleKeyPress} className="block bg-slate-300 p-1 border-b-slate-400 border-b-2" />
        <Button onClick={handleNewTask}>Add Task</Button>
      </div>
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask} />
    </div>
  );
}
