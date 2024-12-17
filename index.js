import { serveStatic } from 'hono/bun';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();
app.use("/*", cors());

app.use('/json/*', serveStatic({root: "./"}));

app.get("/albums", (c) => {
  return c.redirect('/json/albums.json');
});

const port = 8088;

const server = Bun.serve({
  port,
  fetch: app.fetch,
});

console.log(`Server is running on ${server.port} port!`);


export default app;