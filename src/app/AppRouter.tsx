import { Route, Switch } from "wouter-hono";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { AppProps } from "./App";

export const AppRouter = ({ initialState = {} }: AppProps) => (
  <Switch>
    <Route path={"/"}>
      <Home {...(initialState["/"] || {})} />;
    </Route>
    <Route path={"/about/:id"}>
      <About {...(initialState["/about/:id"] || {})} />;
    </Route>
  </Switch>
);
