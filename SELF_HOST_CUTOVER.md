# Self-Hosted Cutover Runbook

This runbook is for moving `unlokie-landing` to self-hosted Docker runtime with safe rollout and fast rollback.

## Scope

- App runtime: Next.js standalone server (`node server.js`)
- Container base: Node 24 Alpine
- Package manager: pnpm 10
- Healthcheck: `GET /` on port `3000`

## Environment Matrix

| Variable | Required | Example | Notes |
| --- | --- | --- | --- |
| `NODE_ENV` | Yes | `production` | Must be `production` in runtime container. |
| `PORT` | No | `3000` | Container default is `3000`. |
| `HOSTNAME` | No | `0.0.0.0` | Container default binds all interfaces. |
| `NEXT_PUBLIC_SITE_URL` | Yes | `https://unlokie.com` | Public canonical site URL. |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Optional | `https://formspree.io/f/xxxxxxx` | Contact form endpoint. |
| `CONTACT_EMAIL` | Optional | `forms@unlokie.com` | Operational contact fallback. |
| `NEXT_TELEMETRY_DISABLED` | Optional | `1` | Set if you want telemetry disabled. |

## Pre-Cutover Checklist

1. Build and checks pass locally:
   - `pnpm install --frozen-lockfile`
   - `pnpm run build`
   - `pnpm run typecheck`
2. Security check is clean:
   - `pnpm audit --prod`
3. Container build and local smoke test pass:
   - `docker build -t unlokie-landing:<release-tag> .`
   - `docker run --rm -p 3000:3000 unlokie-landing:<release-tag>`
4. Confirm DNS TTL is reduced before cutover (example: 60-300s).
5. Record current production image tag as rollback target.

## Build and Push

```bash
# Example tag
export RELEASE_TAG=2026-02-10-01

docker build -t registry.example.com/unlokie-landing:$RELEASE_TAG .
docker push registry.example.com/unlokie-landing:$RELEASE_TAG
```

## Deploy (Single-Host Docker Example)

```bash
export RELEASE_TAG=2026-02-10-01

docker pull registry.example.com/unlokie-landing:$RELEASE_TAG
docker rm -f unlokie-landing || true
docker run -d \
  --name unlokie-landing \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_SITE_URL=https://unlokie.com \
  -e NEXT_PUBLIC_FORM_ENDPOINT="$NEXT_PUBLIC_FORM_ENDPOINT" \
  -e CONTACT_EMAIL="$CONTACT_EMAIL" \
  registry.example.com/unlokie-landing:$RELEASE_TAG
```

## Reverse Proxy Header Mapping

Set security headers at the reverse proxy.

### Nginx Mapping

```nginx
location / {
  proxy_pass http://127.0.0.1:3000;
  proxy_http_version 1.1;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;

  add_header X-Frame-Options "DENY" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header X-XSS-Protection "1; mode=block" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;
  add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
  add_header Cache-Control "no-store, max-age=0" always;
}
```

### Caddy Mapping

```caddy
unlokie.com {
  reverse_proxy 127.0.0.1:3000

  header {
    X-Frame-Options "DENY"
    X-Content-Type-Options "nosniff"
    X-XSS-Protection "1; mode=block"
    Referrer-Policy "strict-origin-when-cross-origin"
    Permissions-Policy "camera=(), microphone=(), geolocation=()"
    Cache-Control "no-store, max-age=0"
  }
}
```

## Post-Cutover Validation

1. Health:
   - `docker inspect --format '{{.State.Health.Status}}' unlokie-landing` returns `healthy`.
2. HTTP checks:
   - `curl -I https://unlokie.com`
   - `curl -I https://unlokie.com/robots.txt`
   - `curl -I https://unlokie.com/sitemap.xml`
3. Browser checks:
   - Home page loads and renders styles.
   - Contact section is visible and submit flow works.
4. Confirm security headers are present via response headers.

## Rollback Procedure

Assume previous known-good tag is in `PREV_TAG`.

```bash
export PREV_TAG=<previous-good-tag>

docker pull registry.example.com/unlokie-landing:$PREV_TAG
docker rm -f unlokie-landing || true
docker run -d \
  --name unlokie-landing \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_SITE_URL=https://unlokie.com \
  -e NEXT_PUBLIC_FORM_ENDPOINT="$NEXT_PUBLIC_FORM_ENDPOINT" \
  -e CONTACT_EMAIL="$CONTACT_EMAIL" \
  registry.example.com/unlokie-landing:$PREV_TAG
```

Rollback verification:

1. `docker inspect --format '{{.State.Health.Status}}' unlokie-landing` is `healthy`.
2. `curl -I https://unlokie.com` returns `200`.
3. Validate homepage + contact flow manually.

## Legacy Cloudflare Artifacts

Legacy Cloudflare files were removed from this repo as part of self-host migration.
