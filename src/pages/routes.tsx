import { Hono } from "hono";
import { Layout } from "../app/Layout";
import { Router } from "wouter-hono";
import { App } from "../app/App";

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

export const routes = new Hono()
  .get("/", async (c) => {
    const { loader } = await import("./Home");
    return renderPage(c, loader);
  })
  .get("/about/:id", async (c) => {
    const { loader } = await import("./About");
    return renderPage(c, loader);
  });
