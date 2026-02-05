import { Layout } from "./Layout";
import { Route, Link, Switch } from "wouter-hono";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

export interface AppProps {
  initialState?: {
    [key: string]: any;
  };
}

export function App({ initialState = {} }: AppProps) {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about/123">About</Link>
        </li>
      </ul>
      <Switch>
        <Route path={"/"}>
          <Home {...(initialState["/"] || {})} />;
        </Route>
        <Route path={"/about/:id"}>
          <About {...(initialState["/about/:id"] || {})} />;
        </Route>
      </Switch>
    </>
  );
}
