import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import BastardBurger from "./bastardBurger/BastardBurger";
import "./bastardBurger/custom.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BastardBurger />
  </>
);
