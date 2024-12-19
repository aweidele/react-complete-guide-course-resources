import { useState } from "react";
import { useRef } from "react";
import Input from "./Input";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  function handleSumbit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);

    alert(`${enteredEmail} / ${enteredPassword}`);
  }
  return (
    <form onSubmit={handleSumbit}>
      <h2>Login</h2>

      <div className="control-row">
        {/* <Input label="Email" id="email" type="email" name="email" onChange={(event) => handleInputChange("email", event.target.value)} value={enteredValues.email} onBlur={() => handleInputBlur("email")} /> */}
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          {emailIsInvalid && <div className="control-error">Email is invalid</div>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
