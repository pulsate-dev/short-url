import { Hono, logger, poweredBy } from './deps.ts';

const app = new Hono();

app.use('*', logger(), poweredBy());
// todo: faviconを提供する
// app.all('/favicon.ico', serveStatic('./public/favicon.ico'));

app.get('/', (c) => {
  return c.redirect('https://pulsate.dev', 302);
});

app.get('/discord', (c) => {
  return c.redirect('https://discord.gg/Pf5EFQ5zbj', 302);
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
