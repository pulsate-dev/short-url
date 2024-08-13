import { Elysia } from "elysia";

new Elysia()
	.get("/", ({ redirect }) => {
		return redirect("https://pulsate.dev", 302);
	})
	.get("/docs", ({ redirect }) => {
		return redirect("https://docs.pulsate.dev", 302);
	})
	.get("/api", ({ redirect }) => {
		return redirect("https://api.pulsate.dev/reference", 302);
	})
	.get("/discord", ({ redirect }) => {
		return redirect("https://discord.gg/NmczMnWGvh", 302);
	})
	.get("/github", ({ redirect }) => {
		return redirect("https://github.com/pulsate-dev", 302);
	})
	.get("/x", ({ redirect }) => {
		return redirect("https://x.com/pulsate_dev", 302);
	})
	.get("/youtube", ({ redirect }) => {
		return redirect("https://youtube.com/@pulsate-dev", 302);
	})
	.get("/discussions", ({ redirect }) => {
		return redirect("https://github.com/orgs/pulsate-dev/discussions", 302);
	})
	.listen(3000);

if (process.env.NODE_ENV !== "production") {
	console.log("Listening on port 3000 - http://localhost:3000");
}
