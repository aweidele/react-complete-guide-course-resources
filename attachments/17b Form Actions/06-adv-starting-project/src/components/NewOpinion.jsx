import { useActionState } from "react";

function isNotEmpty(value) {
  return value.trim() !== "";
}

const newOpinionAction = (prevFormState, formData) => {
  for (const entry of formData.entries()) {
    const key = entry[0];
    const value = entry[1];
    console.log(key, value);
  }
  const userName = formData.get("userName");
  const title = formData.get("title");
  const body = formData.get("body");
  const errors = [];

  if (!isNotEmpty(userName)) errors.push("Please provide your name");
  if (!isNotEmpty(title)) errors.push("Please provide your title");
  if (!isNotEmpty(body)) errors.push("Please share your opinion");

  if (errors.length > 0) {
    const submitted = {
      errors,
      enteredValues: { userName, title, body },
    };
    console.log(submitted);
    return submitted;
  }

  return { errors: null };
};

export function NewOpinion() {
  const [formState, formAction, pending] = useActionState(newOpinionAction, { errors: null });
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValues?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredValues?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValues?.body}></textarea>
        </p>
        {formState?.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li>{error}</li>
            ))}
          </ul>
        )}

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
