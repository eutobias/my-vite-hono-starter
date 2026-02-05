import { useState } from "hono/jsx";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      You clicked me {count} times
    </button>
  );
}
