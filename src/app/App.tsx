import { Link } from "wouter-hono";
import { AppRouter } from "./AppRouter";

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
      <AppRouter initialState={initialState} />
    </>
  );
}
