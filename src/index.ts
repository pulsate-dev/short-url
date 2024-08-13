import { Elysia } from "elysia";

const app = new Elysia();

app
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
	});

export default {
	async fetch(request: Request): Promise<Response> {
		return await app.fetch(request);
	},
};
