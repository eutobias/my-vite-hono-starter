import { render } from "hono/jsx/dom";
import { App } from "./app/App";
import { Router } from "wouter-hono";

const root = document.getElementById("root")!;

// Obtém os dados iniciais que foram injetados no servidor
const initialState = (window as any).__INITIAL_STATE__ || {};

render(
  <Router>
    <App initialState={initialState} />
  </Router>,
  root,
);
