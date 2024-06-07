import { useRef } from "react";

import Button from "./Button";
import Input from "./Input";

export default function NewProject({ onSaveAddProject, onCancelAddProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const dialog = useRef();

  function handleSave() {
    if (title.current.value === "" || description.current.value === "" || date.current.value === "") {
      dialog.current.showModal();
      return;
    }
    onSaveAddProject(title.current.value, description.current.value, date.current.value);
    title.current.value = "";
    description.current.value = "";
    date.current.value = "";
  }

  function closeModal() {
    dialog.current.closeModal();
  }

  return (
    <>
      <div class="mt-8">
        <menu className="flex justify-end gap-2 my-4">
          <Button secondary onClick={onCancelAddProject}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </menu>
        <Input ref={title} label="Title" />
        <Input ref={description} multiline label="Description" />
        <Input ref={date} type="date" label="Due Date" />
      </div>
      <dialog ref={dialog}>
        You need to fill out all the fields.
        <Button onClick={closeModal}>Ok.</Button>
      </dialog>
    </>
  );
}
