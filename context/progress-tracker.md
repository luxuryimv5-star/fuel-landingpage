# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- **Phase 4:** SEO optimization — complete
- **Phase 5:** Whitespace refinement — complete
- **Phase 6:** Coming-soon page — complete

## Current Goal

- Add FUEL color tokens to globals.css (restrained palette)
- Prepare for Hostinger static export (no Vercel)

## Completed

- **Phase 0:** Boilerplate Next.js app created (`pnpm create next-app@latest .`), Tailwind v4 installed, generic AGENTS.md + context/ templates exist
- **Phase 1:** AGENTS.md + all context/ templates updated ✅
- **Phase 2:** shadcn Base UI initialized (`npx shadcn@latest init`) ✅
- **Phase 2:** framer-motion installed ✅
- **Phase 2:** shadcn button + card + separator components added ✅
- **Phase 2:** Navbar component built (`components/nav/navbar.tsx`) ✅
- **Phase 2:** Hero section built (`components/sections/hero.tsx`) ✅ — badge reads "Coming Soon to the App Store", badge width fixed (`self-start w-fit`), section/element padding reduced
- **Phase 2:** Features grid section built (`components/sections/features.tsx`) ✅
- **Phase 2:** How-it-works section built (`components/sections/how-it-works.tsx`) ✅
- **Phase 2:** Team section built (`components/sections/team.tsx`) ✅
- **Phase 2:** Dynamic team route built (`app/team/[slug]/page.tsx`) ✅
- **Phase 2:** CTA strip section built (`components/sections/cta.tsx`) ✅ — removed redundant "Meet the team" link (Team section precedes CTA); final download CTA only
- **Phase 2:** Footer section built (`components/sections/footer.tsx`) ✅
- **Phase 2:** All sections composed in `app/page.tsx` ✅
- **Phase 2:** Metadata title updated to "FUEL — Find cheaper, safer gas stations nearby" (`app/layout.tsx`) ✅
- **Phase 3:** `tsc --noEmit` passes with zero errors ✅
- **Phase 3:** `pnpm run lint` passes with zero errors/warnings ✅
- **Phase 3:** `pnpm run build` passes (static pages: `/`, `/team/[slug]`) ✅
- **Phase 4:** Root SEO metadata in `app/layout.tsx` ✅
  - title template, description, keywords, authors, creator, publisher
  - robots meta (index, follow, max-snippet, max-image-preview, max-video-preview)
  - Open Graph (title, description, url, siteName, type, locale, images)
  - Twitter cards (summary_large_image, title, description, images, creator, site)
  - alternates canonical URL
- **Phase 4:** Page-level metadata in `app/page.tsx` ✅
- **Phase 4:** JSON-LD structured data in `app/page.tsx` ✅
  - Organization (name, url, logo, description, sameAs, contactPoint)
  - WebSite (name, url, potentialAction search)
- **Phase 4:** `public/robots.txt` ✅ (static file served by Next.js)
- **Phase 4:** `app/sitemap.ts` ✅ (generates /sitemap.xml with / and /team/noah-goss)
- **Phase 4:** `tsc --noEmit` passes with zero errors ✅
- **Phase 4:** `pnpm run lint` passes with zero errors/warnings ✅
- **Phase 5:** Whitespace refined to balanced UI/UX values ✅
  - All sections consistent `px-6` horizontal padding (including Hero — fixed missing `px-6`)
  - Hero: `pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-32`
  - Content sections: `py-20 sm:py-28 lg:py-32`, title `mb-12`, grid gap `gap-6` (24px)
  - Footer: `pt-14 pb-8`
  - Hero badge: `self-start w-fit px-2 py-0.5`
- **Phase 5:** `tsc --noEmit` passes ✅
- **Phase 5:** `pnpm run lint` passes ✅
- **Phase 5:** `pnpm run build` passes ✅
- **Phase 6:** Coming-soon page built (`app/coming-soon/page.tsx` + `app/coming-soon/layout.tsx`) ✅ — email capture form, "Notify Me" CTA, Framer Motion entrance, metadata via layout.tsx
- **Phase 6:** All "Download on App Store" buttons rerouted to `/coming-soon` (navbar desktop, navbar mobile, hero, CTA) ✅ — removed `window.open`/`APP_STORE_URL`, using `next/Link` instead
- **Phase 6:** `tsc --noEmit` passes ✅
- **Phase 6:** `pnpm run lint` passes ✅
- **Phase 6:** `pnpm run build` passes (static pages: `/`, `/coming-soon`, `/team/[slug]`) ✅

## In Progress

- None.

## Next Up

- Add FUEL color tokens to globals.css (restrained palette: olive/coral/beige)
- Prepare for Hostinger static export (no Vercel)

## Open Questions

- Confirm exact app-store URL(s) for download CTAs (Apple App Store link needed)
- Confirm team member slugs/content to leave as blank stub placeholders
- Confirm FUEL logo asset location (`public/img/logo.png` exists — verify usage)
- Confirm canonical domain URL for sitemap/robots (currently https://fuelapp.com)

## Architecture Decisions

- Next.js 16 App Router + TypeScript + Tailwind CSS v4 + pnpm
- shadcn/ui Base UI versions only (unstyled primitives)
- Framer Motion for motion that whispers
- Deploy to Hostinger (static export), not Vercel
- Restrained color system: olive (`#6b8d58`) / coral (`#ff6b6b`) / beige (`#e8e6e3`) tokens
- Team dynamic route `/team/[slug]` left blank for team to fill in
- SEO: Open Graph + Twitter cards + JSON-LD (Organization, WebSite) + public/robots.txt + app/sitemap.ts
- `app/robots.ts` avoided (Turbopack incompatibility); static `public/robots.txt` used instead
- "Download on App Store" buttons route to `/coming-soon` until App Store launch (email capture), not external App Store URL

## Session Notes

- Branch: `feature/fuel-landingpage-components` (off `main`, not committed — user handles commits).
- Template work committed to main via PR #1; component work on feature branch.
- Corrections applied: hero badge now reads "Coming Soon to the App Store"; metadata title/description updated from boilerplate.
- Removed redundant "Meet the team" link from CTA section — Team section precedes CTA.
- All "Download on App Store" buttons rerouted to `/coming-soon` until App Store launch.
