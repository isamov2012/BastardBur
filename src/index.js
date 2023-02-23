import React from "react";
import ReactDOM from "react-dom/client";
import Email from "./email/Email";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Hejhej</h1>
    <Email />
    <Email />
    <p> paragraph</p>
  </React.StrictMode>
);
