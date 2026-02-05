import { ClockButton } from "./components/ClockButton";
import { Counter } from "./components/Counter";
import { Layout } from "./Layout";
import { Route, Link, Router, Switch } from "wouter-hono";
import { useSearch } from "wouter-hono";

export function App() {
  const searchString = useSearch();

  return (
    <Layout>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/about">
          <p>About page</p>
        </Route>
        <Route path="/">
          <p>Home page</p>

          <h1>Hello hono/jsx/dom!</h1>
          <h2>Example of useState()</h2>
          <Counter />
          <h2>Example of API fetch()</h2>
          <ClockButton />
        </Route>
      </Switch>
    </Layout>
  );
}
