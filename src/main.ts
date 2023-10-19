import { Hono } from './deps.ts';

const app = new Hono();

app.get('/discord', (c) => {
  return c.text('Preparing...');
});

Deno.serve(app.fetch);
