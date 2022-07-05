import React from "react";
import ReactDOM from "react-dom/client";

import "./clear.scss";
import "./index.scss";

import Container from "./Components/Container/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
