import { Hono } from "hono";
import { App } from "./app/App";
import { serveStatic } from "@hono/node-server/serve-static";
import { routes } from "./api/routes";
import { Router } from "wouter-hono";

const app = new Hono()
  .use("/static/*", serveStatic({ root: "./" }))
  .route("/api", routes)
  // For all other routes, render the React app with server-side rendering
  .get("/*", (c) => {
    const ssrSearch = c.req.url.split("?")[1] || "";
    return c.html(
      <Router ssrPath={c.req.path} ssrSearch={ssrSearch}>
        <App />
      </Router>,
    );
  });

export type AppType = typeof app;

export default app;
