import { render } from "hono/jsx/dom";
import { App } from "./app/App";
import { Router } from "wouter-hono";

const root = document.getElementById("root")!;
render(
  <Router>
    <App />
  </Router>,
  root,
);
