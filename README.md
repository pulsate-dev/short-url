# pulsate-dev/link.pulsate.dev

[![Deno CI](https://github.com/pulsate-dev/link.pulsate.dev/actions/workflows/deno.yaml/badge.svg)](https://github.com/pulsate-dev/link.pulsate.dev/actions/workflows/deno.yaml)
[![Deploy](https://github.com/pulsate-dev/link.pulsate.dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/pulsate-dev/link.pulsate.dev/actions/workflows/deploy.yml)

Shortened URL using pulsate.dev: can be used to access each community.

---

link.pulsate.dev uses [Hono](https://github.com/honojs/hono) and is deployed
with [Deno Deploy](https://deno.com/deploy).

| Endpoint       | Redirects to                       |
| -------------- | ---------------------------------- |
| `/`            | Pulsate Website                    |
| `/discord`     | Pulsate Discord Server             |
| `/github`      | Pulsate GitHub                     |
| `/x`           | Pulsate X                          |
| `/youtube`     | Pulsate YouTube                    |
| `/discussions` | Pulsate Org Discussion             |
| `/rules`       | Pulsate Code of Conduct            |
| `/rules-ja`    | Pulsate Code of Conduct (Japanese) |

> [!IMPORTANT]
>
> The `/community` endpoint is obsolete. Now when you access this endpoint, you
> will receive
> [`410: Gone`](https://developer.mozilla.org/ja/docs/Web/HTTP/Status/410) and a
> text prompting you to use the `/discussions` endpoint.\
> We plan to remove the `410` emission in the future.

- When redirecting, a status code of
  [`302`](https://developer.mozilla.org/ja/docs/Web/HTTP/Status/302) is returned
  uniformly.
- Routing in preparation will return
  [`404`](https://developer.mozilla.org/ja/docs/Web/HTTP/Status/404) as a status
  code when accessed.
