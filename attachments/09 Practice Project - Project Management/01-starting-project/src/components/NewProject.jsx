import Button from "./Button";
import Input from "./Input";

export default function NewProject() {
  return (
    <div class="mt-8">
      <menu className="flex justify-end gap-2 my-4">
        <Button secondary>Cancel</Button>
        <Button>Save</Button>
      </menu>
      <Input label="Title" />
      <Input multiline label="Description" />
      <Input type="date" label="Due Date" />
    </div>
  );
}
