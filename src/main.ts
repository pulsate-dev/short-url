import { Hono } from './deps.ts';

const app = new Hono();

app.get('/discord', (c) => {
  return c.text('Preparing...');
});

app.get('/github', (c) => {
  return c.redirect('https://github.com/pulsate-dev/', 302);
});

app.get('/x', (c) => {
  return c.redirect('https://x.com/PulsateDev', 302);
});

app.get('/youtube', (c) => {
  return c.redirect('https://youtube.com/@pulsate-dev', 302);
});

app.get('/community', (c) => {
  return c.redirect('https://github.com/orgs/pulsate-dev/discussions', 302);
});

Deno.serve(app.fetch);
