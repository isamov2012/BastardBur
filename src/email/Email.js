import { useState } from "react";

function Email() {
  const [input, setInput] = useState("oo@fsdfsd");
  const changeEmailAddress = () => setInput("klasda@vsdfs");

  function InputChanged(event) {
    setInput(event.target.value);
  }
  // const buttonClicked = () => console.log(" Button clicked");
  return (
    <div className="center">
      <article className="box">
        <h1>Sign up</h1>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            value={input}
            onChange={InputChanged}
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
          />
        </div>
        <div className="alert alert-primary">{input}</div>
        <div className="mb-3">
          <label htmlFor="emailInput-Again" className="form-label">
            Enter again
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput-Again"
            placeholder="name@example.com"
          />
        </div>
        <button
          type="button"
          onClick={changeEmailAddress}
          className="btn btn-primary btn-lg mb-4">
          Ok
        </button>
      </article>
    </div>
  );
}

export default Email;
