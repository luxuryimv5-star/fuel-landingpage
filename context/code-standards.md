# Code Standards

## General

- Keep modules small and single-purpose.
- Fix root causes; do not layer workarounds.
- Do not mix unrelated concerns in one component or route.
- Use HTML5 semantic tags where appropriate (`<header>`, `<nav>`, `<section>`, `<main>`, `<footer>`).
- Always resort to Next.js tags first: `next/Link` for links, `next/Image` for images.

## TypeScript

- Strict mode is required throughout the project.
- `any` is forbidden — define explicit interfaces instead.
- `unknown` must be narrowed — never left unresolved.
- No implicit types — all function parameters, return types, and API responses explicitly typed.
- No non-null assertions (`!`) — handle null/undefined explicitly.

## Next.js

- Default to Server Components; add `'use client'` only when browser interactivity requires it (Framer Motion sections, nav).
- Use `next/Link` for all internal navigation; plain `<a>` with `rel="noopener noreferrer"` only for external links (app store).
- Use `next/Image` for all images with `width`, `height`, `alt`, and `priority` where appropriate.
- Keep route handlers focused on a single responsibility.
- Use the App Router; every major section gets a stable `id` for scroll-to behavior.

## Styling

- Use CSS custom property tokens — no hardcoded hex values (see `ui-context.md`).
- Follow the border radius scale defined in `ui-context.md`.
- Tailwind utility classes; avoid arbitrary values where a token exists.
- Mobile-first responsive design; mobile is designed, not shrunk.

## Component Conventions

- shadcn Base UI components only (unstyled primitives).
- All component props explicitly typed with interfaces.
- Framer Motion used for subtle entrance/scroll motion ("whispers").
- Section components accept no required props unless needed; expose an `id` for scroll-to.

## File Organization

- `app/layout.tsx` — Root layout, metadata, fonts
- `app/page.tsx` — Landing page (imports sections)
- `app/team/[slug]/page.tsx` — Dynamic team member page (blank typed stub)
- `components/nav/` — Nav bar component(s)
- `components/sections/` — Hero, Features, HowItWorks, Team, CTA, Footer
- `components/ui/` — shadcn Base UI primitives
- `lib/` — Utilities (`cn`, scroll helpers, section ID constants)
- `public/img/` — Images (FUEL logo, intentional imagery)
- `app/globals.css` — Tailwind + design token CSS variables

## Verification

- `pnpm run build` must pass before considering a unit complete.
- `pnpm run lint` must pass with zero errors.
