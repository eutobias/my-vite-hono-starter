import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { routes as apiRoutes } from "./api/routes";
import { routes as pagesRoutes } from "./pages/routes";

const app = new Hono()
  .use("/static/*", serveStatic({ root: "./" }))
  .route("/api", apiRoutes)
  .route("/", pagesRoutes);

export type AppType = typeof app;

export default app;
