import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	return c.redirect("https://pulsate.dev", 302);
});

app.get("/discord", (c) => {
	return c.redirect("https://discord.gg/Pf5EFQ5zbj", 302);
});

app.get("/github", (c) => {
	return c.redirect("https://github.com/pulsate-dev/", 302);
});

app.get("/x", (c) => {
	return c.redirect("https://x.com/PulsateDev", 302);
});

app.get("/youtube", (c) => {
	return c.redirect("https://youtube.com/@pulsate-dev", 302);
});

app.get("/discussions", (c) => {
	return c.redirect("https://github.com/orgs/pulsate-dev/discussions", 302);
});

// TODO: remove /community
app.get("/community", (c) => {
	return c.text(
		"410 Gone: このエンドポイントは現在 /discussions に置き換わっています.",
		410,
	);
});

// TODO: replace pulsate.dev/code-of-conduct
app.get("/rules", (c) => {
	return c.redirect(
		"https://github.com/pulsate-dev/.github/blob/main/CODE_OF_CONDUCT.md",
		302,
	);
});

// TODO: replace pulsate.dev/code-of-conduct-ja
app.get("/rules-ja", (c) => {
	return c.redirect(
		"https://github.com/pulsate-dev/.github/blob/main/CODE_OF_CONDUCT_JA.md",
		302,
	);
});

export default app;
