# pulsate-dev/link.pulsate.dev

[![CI](https://github.com/pulsate-dev/link.pulsate.dev/actions/workflows/ci.yaml/badge.svg)](https://github.com/pulsate-dev/link.pulsate.dev/actions/workflows/ci.yaml)
[![Deploy](https://github.com/pulsate-dev/link.pulsate.dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/pulsate-dev/link.pulsate.dev/actions/workflows/deploy.yml)

Shortened URL using pulsate.dev: can be used to access each community.

link.pulsate.dev uses [Hono](https://github.com/honojs/hono) and is deployed
with [Cloudflare Workers](https://workers.cloudflare.com/).

## Usage

The endpoint `link.pulsate.dev/` has a redirect destination for each endpoint.

Accessing an endpoint with no destination will return a [`404`](https://developer.mozilla.org/ja/docs/Web/HTTP/Status/404). If the redirection succeeds, you will be redirected to the destination with a [`302`](https://developer.mozilla.org/ja/docs/Web/HTTP/Status/302) status code.

| Endpoint       | Redirects to ...                   |
| -------------- | ---------------------------------- |
| `/`            | Pulsate Website                    |
| `/discord`     | Pulsate Discord Server             |
| `/github`      | Pulsate GitHub                     |
| `/x`           | Pulsate X                          |
| `/youtube`     | Pulsate YouTube                    |
| `/discussions` | Pulsate Org Discussion             |
| `/rules`       | Pulsate Code of Conduct            |
| `/rules-ja`    | Pulsate Code of Conduct (Japanese) |
