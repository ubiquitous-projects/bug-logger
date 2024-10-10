import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

let root = document.createElement("div");

root.id = "root";
document.body.appendChild(root);

render(<App />, document.getElementById("root"));
