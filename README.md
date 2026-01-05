# wavvvvylines

A small monorepo that powers a personal site and leaves room for future side projects. The root keeps
tooling and TypeScript config shared, while each app stays self-contained.

## What lives here

- `apps/personal-website/` — Next.js + Tailwind static site for the Casey Lentz portfolio; ships to a
  static bundle for simple hosting (Pages, S3, etc.).
- `tsconfig.base.json` — shared compiler settings to keep packages consistent.
- `package.json` — workspace root with scripts that forward into apps.

## Intent and principles

- Keep the personal site fast and portable by exporting static HTML.
- Keep styling minimal and utility-first with Tailwind; adopt Base UI components only where they add
  clarity.
- Keep the root lean so additional apps/packages can plug in without heavy rewiring.

