import { Hono } from "hono";
import { App } from "./app/App";
import { serveStatic } from "@hono/node-server/serve-static";
import { routes } from "./api/routes";
import { Router } from "wouter-hono";
import { Layout } from "./app/Layout";

const renderPage = async (c: any, loader: any) => {
  const ssrSearch = c.req.url.split("?")[1] || "";
  const currentPath = c.req.path;
  const initialState = await loader(c);

  return c.html(
    <Layout initialState={initialState}>
      <Router ssrPath={currentPath} ssrSearch={ssrSearch}>
        <App initialState={initialState || {}} />
      </Router>
    </Layout>
  );
};

const app = new Hono()
  .use("/static/*", serveStatic({ root: "./" }))
  .route("/api", routes)
  .get("/", async (c) => {
    const { loader } = await import("./app/pages/Home");
    return renderPage(c, loader);
  })
  .get("/about/:id", async (c) => {
    const { loader } = await import("./app/pages/About");
    return renderPage(c, loader);
  });

export type AppType = typeof app;

export default app;
