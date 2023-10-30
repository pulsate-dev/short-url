# pulsate-dev/link.pulsate.dev

[![Deno CI](https://github.com/pulsate-dev/link.pulsate.dev/actions/workflows/deno.yaml/badge.svg)](https://github.com/pulsate-dev/link.pulsate.dev/actions/workflows/deno.yaml)
[![Deploy](https://github.com/pulsate-dev/link.pulsate.dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/pulsate-dev/link.pulsate.dev/actions/workflows/deploy.yml)

Shortened URL using pulsate.dev: can be used to access each community.

---

link.pulsate.dev uses [Hono](https://github.com/honojs/hono) and is deployed
with [Deno Deploy](https://deno.com/deploy).

| Endpoint     | Redirects to                              |
| ------------ | ----------------------------------------- |
| `/`          | Pulsate Website                           |
| `/discord`   | Pulsate Discord Server                    |
| `/github`    | Pulsate GitHub                            |
| `/x`         | Pulsate X                                 |
| `/youtube`   | Pulsate YouTube                           |
| `/community` | Pulsate Community (GitHub Org Discussion) |

- When redirecting, a status code of
  [`302`](https://developer.mozilla.org/ja/docs/Web/HTTP/Status/302) is returned
  uniformly.
- Routing in preparation will return
  [`404`](https://developer.mozilla.org/ja/docs/Web/HTTP/Status/404) as a status
  code when accessed.
