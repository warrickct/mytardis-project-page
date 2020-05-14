import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Project from "./components/Project";
import * as serviceWorker from "./serviceWorker";

let mountPoint = document.getElementById("root");

const { href } = window.location;
console.log(href);

const projectId = href.substring(href.lastIndexOf("/") + 1);
console.log(projectId);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Project projectId={projectId} />
  </React.StrictMode>,
  mountPoint
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
