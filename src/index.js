import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

// CSS
import "./css/normalize.css";
import "./css/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
