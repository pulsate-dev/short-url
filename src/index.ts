import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	return c.redirect("https://pulsate.dev", 302);
});

app.get("/discord", (c) => {
	return c.redirect("https://discord.gg/NmczMnWGvh", 302);
});

app.get("/github", (c) => {
	return c.redirect("https://github.com/pulsate-dev/", 302);
});

app.get("/x", (c) => {
	return c.redirect("https://x.com/pulsate_dev", 302);
});

app.get("/youtube", (c) => {
	return c.redirect("https://youtube.com/@pulsate-dev", 302);
});

app.get("/discussions", (c) => {
	return c.redirect("https://github.com/orgs/pulsate-dev/discussions", 302);
});

export default app;
