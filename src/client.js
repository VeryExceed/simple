import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
