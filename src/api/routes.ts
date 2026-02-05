import { Hono } from "hono";

export const routes = new Hono()
  .get("/clock", (c) => {
    return c.json({
      time: new Date().toLocaleTimeString(),
    });
  });
