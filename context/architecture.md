# Architecture Context

## Stack

| Layer     | Technology                  | Role                                                   |
| --------- | --------------------------- | ------------------------------------------------------ |
| Framework | Next.js 16 (App Router)     | UI layer, routing, server components, static export    |
| Language  | TypeScript 5                | Type safety throughout                                 |
| UI        | Tailwind CSS v4             | Styling, design tokens                                 |
| Motion    | Framer Motion               | Subtle entrance/scroll animations                      |
| Components| shadcn/ui Base UI           | Unstyled accessible primitives (Base UI versions only) |
| Icons     | Lucide React                | Stroke-based icons                                     |
| Images    | next/Image                  | Optimized images with intent                           |
| Links     | next/Link                   | Client-side navigation                                 |
| Deploy    | Hostinger (static export)   | Hosting (no Vercel)                                    |

## System Boundaries

- `app/layout.tsx` — Root layout, metadata, fonts, global CSS
- `app/page.tsx` — Landing page: scroll document, all sections
- `app/team/[slug]/page.tsx` — Dynamic team member page (blank typed stub)
- `components/nav/` — Top nav bar; scroll-to section links; active-section highlight
- `components/sections/` — Hero, Features, HowItWorks, Team, CTA, Footer sections
- `components/ui/` — shadcn Base UI primitives (button, card, etc.)
- `lib/` — Utilities (`cn`, scroll helpers, section ID constants)
- `public/img/` — FUEL logo and intentional imagery
- `context/` — Templates guiding the build (this folder)

## Storage Model

- No database. Static site; content lives in components/pages.
- Images served from `public/img/` via `next/Image`.
- No auth; no user-generated content.

## Auth and Access Model

- No authentication. Public marketing site.
- All content is read-only and publicly accessible.

## Invariants

1. Every major section has a stable, unique `id` for scroll-to navigation.
2. `next/Link` is used for all internal links; plain `<a>` only for external (app-store) links.
3. `next/Image` is used for all images; plain `` only as a last resort.
4. Colors reference CSS design tokens (restrained palette) — no hardcoded hex values.
5. `any` is forbidden; all component props and function returns explicitly typed.
6. shadcn components must be Base UI versions (unstyled), not the styled React variants.
7. Motion is subtle ("whispers") — never distracting or autoplay-looping.
8. Mobile is designed intentionally, not a shrunk desktop layout.
