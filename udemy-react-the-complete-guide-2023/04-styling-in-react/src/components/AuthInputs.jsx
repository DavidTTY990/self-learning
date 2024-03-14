import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

// const ControlsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="mx-auto w-full max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800"
    >
      <div className="flex flex-col gap-2 mb-6">
        <Input label={"email"} invalid={emailNotValid}></Input>
        <Input label={"password"} invalid={passwordNotValid}></Input>
      </div>
      <div className="actions flex justify-end gap-4 text-amber-400 hover:text-amber-500">
        <button type="button" className="text-button">
          Create a new account
        </button>
        {/* <button className="button">Sign In</button> */}
        <Button onClick={handleLogin} title={"Sign In"}></Button>
      </div>
    </div>
  );
}
