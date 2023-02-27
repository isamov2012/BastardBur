/*
    Get different variants of the components using parameters
*/
import { useState } from "react";

function Email(props) {
  const [input, setInput] = useState("");
  const [inputAgain, setInputAgain] = useState("");

  const [message, setMessage] = useState("");
  const [messageState, setMessageState] = useState("hidden");

  const successMessage =
    props["success-message"] ?? "The email addresses are the same :)";
  const background = props["background"] ?? "white";
  const borderThickness = props["border-thickness"] ?? 0;

  const inputChange = (event) => {
    setInput(event.target.value);
    [];
  };

  const inputAgainChange = (event) => {
    setInputAgain(event.target.value);
  };

  const sendForm = () => {
    if (input === "") {
      setMessage("Empty email adress");
      setMessageState("error");
      return;
    }

    if (!isValidEmailAddress(input)) {
      setMessage("Invalid email address");
      setMessageState("error");
      return;
    }

    if (input !== inputAgain) {
      setMessage("Not the same");
      setMessageState("error");
      return;
    }

    setMessageState("success");
    setMessage(successMessage);
  };

  const displayMessage = () => {
    if (messageState === "hidden") return;

    const alertType =
      messageState === "success" ? "alert-success" : "alert-danger";

    return (
      <div className={`alert ${alertType} mt-3`} role="alert">
        {message}
      </div>
    );
  };

  return (
    <article
      className="box"
      style={{
        backgroundColor: background,
        border: "solid " + borderThickness + "px",
      }}>
      <h1>Sign up</h1>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email address
        </label>
        <input
          type="email"
          value={input}
          onChange={inputChange}
          className="form-control"
          id="emailInput"
          placeholder="name@example.com"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="emailAgainInput" className="form-label">
          Enter again
        </label>
        <input
          type="email"
          value={inputAgain}
          onChange={inputAgainChange}
          className="form-control"
          id="emailAgainInput"
          placeholder="name@example.com"
        />
      </div>

      <button onClick={sendForm} className="btn btn-primary btn-lg">
        Ok
      </button>

      {displayMessage()}
    </article>
  );
}

function isValidEmailAddress(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export default Email;
