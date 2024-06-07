import Button from "./Button";
import Input from "./Input";

export default function NewProject({ onSaveAddProject, onCancelAddProject }) {
  return (
    <div class="mt-8">
      <menu className="flex justify-end gap-2 my-4">
        <Button secondary onClick={onCancelAddProject}>
          Cancel
        </Button>
        <Button onClick={onSaveAddProject}>Save</Button>
      </menu>
      <Input label="Title" />
      <Input multiline label="Description" />
      <Input type="date" label="Due Date" />
    </div>
  );
}
