import { useState } from "react";

const Email = () => {
  const [input, setInput] = useState("asdasdas");
  const inputChange = (event) => setInput(event.target.value);
  const changeEmailAddress = () => {
    setInput("klas@katt.nu");
  };

  return (
    <div className="center">
      <article className="box">
        <h1 className="display-4 mb-4">Sign up</h1>
        <div className="mb-3">
          <label for="emailInput" className="form-label">
            Email address
          </label>
          <input
            value={input}
            onChange={inputChange}
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
          />
        </div>
        <div className="alert alert-primary" role="alert">
          {input}
        </div>
        <div className="mb-3">
          <label for="emailInput-Again" className="form-label">
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
          onClick={changeEmailAddress}
          type="button"
          className="btn btn-primary btn-lg mb-4">
          Ok
        </button>
      </article>
    </div>
  );
};

export default Email;
