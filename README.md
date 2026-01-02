# wavvvvylines

Monorepo scaffold with a Next.js personal website (`apps/personal-website`) using Base UI and Tailwind
CSS. The site is configured for static export so it can be published to GitHub Pages.

## Getting started

From the repo root:

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

1. If you are publishing to a project page (e.g. `username.github.io/repo-name`), set
   `NEXT_PUBLIC_BASE_PATH=/repo-name` before building so asset URLs are prefixed correctly.
2. Export the site to static HTML:

```bash
npm run export
```

The static bundle will be written to `apps/personal-website/out`. Point your Pages workflow at that
directory (or copy it to the folder you deploy).

## Structure

- `package.json` — workspace root with scripts that forward into the app.
- `tsconfig.base.json` — shared TypeScript options for the monorepo.
- `apps/personal-website/` — Next.js app with Tailwind CSS, Base UI, and static-export config.

