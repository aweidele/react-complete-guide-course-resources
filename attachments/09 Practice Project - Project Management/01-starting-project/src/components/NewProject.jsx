import Button from "./Button";
import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <menu className="flex justify-end gap-2">
        <Button>Cancel</Button>
        <Button>Save</Button>
      </menu>
      <Input label="Title" />
      <Input multiline label="Description" />
      <Input type="date" label="Due Date" />
    </div>
  );
}
