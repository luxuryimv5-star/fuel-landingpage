# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- **Phase 9:** Dark mode — ThemeProvider context + pre-hydration script + hydration guard — complete

## Current Goal

- Deployed manually via hPanel File Manager: ran `pnpm build` locally, dragged `out/` contents into `/domains/fuel-us.com/public_html/`. Site live at `https://fuel-us.com/`.

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
- **Phase 4:** Root SEO metadata in `app/layout.tsx` ✅ — title template, description, keywords, authors, robots meta, Open Graph, Twitter cards, canonical URL
- **Phase 4:** Page-level metadata in `app/page.tsx` ✅
- **Phase 4:** JSON-LD structured data in `app/page.tsx` ✅ — Organization + WebSite
- **Phase 4:** `public/robots.txt` ✅ (static file served by Next.js)
- **Phase 4:** `public/sitemap.xml` ✅ — static sitemap with /, /coming-soon, /team/noah-goss (replaced app/sitemap.ts for static export compatibility)
- **Phase 5:** Whitespace refined to balanced UI/UX values ✅ — all sections consistent `px-6`, hero `pt-20 pb-24`, grid gap `gap-6`, footer `pt-14 pb-8`, hero badge `self-start w-fit`
- **Phase 6:** Coming-soon page built (`app/coming-soon/page.tsx` + `app/coming-soon/layout.tsx`) ✅ — email capture form, "Notify Me" CTA, Framer Motion entrance, metadata via layout.tsx
- **Phase 6:** All "Download on App Store" buttons rerouted to `/coming-soon` (navbar desktop, navbar mobile, hero, CTA) ✅ — removed `window.open`/`APP_STORE_URL`, using `next/Link` instead
- **Phase 7:** FUEL color tokens added to globals.css (`app/globals.css`) ✅
  - 11 CSS custom properties: olive-base, olive-surface, olive-text-primary, olive-text-muted, olive-success, coral-primary, coral-error, coral-highlight, beige-border, beige-background, beige-text
  - Light mode values: olive `#6b8d58` / coral `#ff6b6b` / beige `#e8e6e3`
  - Dark mode values: muted variants for all tokens
  - Exposed via `@theme inline` as `--color-fuel-*` Tailwind classes
- **Phase 7:** All logo.png Image usages consistent with Hero section ✅
  - `components/nav/navbar.tsx`: `h-8 w-8` → `h-8 w-8 rounded-2xl border border-border shadow-2xl`
  - `components/sections/hero.tsx`: already had `rounded-2xl border border-shadow-2xl` (reference style)
  - `app/coming-soon/page.tsx`: `mx-auto mb-8 h-20 w-20` → `mx-auto mb-8 h-20 w-20 rounded-2xl border border-border shadow-2xl`
- **Phase 8:** Static export configured (`output: "export"` in next.config.ts) ✅
- **Phase 8:** `generateStaticParams` added to `app/team/[slug]/page.tsx` ✅ (required for static export of dynamic routes)
- **Phase 8:** `deploy.ps1` created ✅ — rsync over SSH port 65002 to `u382076499@82.197.83.79:/domains/fuel-us.com/public_html/`, falls back to scp (fixed 3 `$RemoteHost:` variable-reference errors, scp invoked with separate args, local source enumeration with `-Force`, optional `-IdentityFile` + opt-in `-BatchMode`)
- **Phase 8:** `tsc --noEmit` passes ✅
- **Phase 8:** `pnpm run lint` passes ✅
- **Phase 8:** `pnpm run build` passes ✅ (static pages: `/`, `/coming-soon`, `/team/noah-goss`, `/sitemap.xml`)
- **Phase 8:** Site deployed live at `https://fuel-us.com/` via hPanel File Manager drag-n-drop of `out/` contents ✅
- **Phase 9:** Dark mode — `components/theme-provider.tsx` rewritten: init effect runs once (empty deps), theme read via ref (no closure-stale reads), `mounted` guard returns `null` until hydrated, `useTheme` context hook exported, stored value validated (`"light"`|`"dark"`|`"device"`, else `"device"`) ✅
- **Phase 9:** `components/theme-toggle.tsx` now consumes `useTheme` context (no duplicate state); added `type="button"` ✅
- **Phase 9:** `app/layout.tsx`: inline pre-hydration script sets `dark` class from localStorage before first paint; `suppressHydrationWarning` on `<html>` ✅
- **Phase 9:** `pnpm run build`, `pnpm run lint`, `npx tsc --noEmit` all pass ✅
- **Phase 10:** Team section headshot support — roster extracted to `components/team-members.ts` (`image?` optional), cards show `next/Image` headshot or initials fallback ✅
- **Phase 10:** `app/team/[slug]/page.tsx` consumes shared roster with `generateStaticParams` + `notFound` (async `params` per Next.js 16) ✅
- **Phase 10:** `pnpm run lint`, `pnpm run build`, `npx tsc --noEmit` pass ✅
- **Phase 11:** Navbar + Footer moved into `app/layout.tsx` (wrap `{children}`) so they render on every route including `/team/[slug]`; removed duplicates from `app/page.tsx` ✅
- **Phase 11:** `pnpm run lint`, `pnpm run build`, `npx tsc --noEmit` pass ✅

## In Progress

- None.

## Next Up

- None (site live).

## Open Questions

- Confirm exact app-store URL(s) for download CTAs (Apple App Store link needed — for post-launch)
- Confirm team member slugs/content to leave as blank stub placeholders
- FUEL logo asset confirmed at `public/img/logo.png` ✅

## Architecture Decisions

- Next.js 16 App Router + TypeScript + Tailwind CSS v4 + pnpm
- shadcn/ui Base UI versions only (unstyled primitives)
- Framer Motion for motion that whispers
- Deploy to Hostinger (static export), not Vercel
- Restrained color system: olive (`#6b8d58`) / coral (`#ff6b6b`) / beige (`#e8e6e3`) tokens
- Team dynamic route `/team/[slug]` left blank for team to fill in
- SEO: Open Graph + Twitter cards + JSON-LD (Organization, WebSite) + public/robots.txt + public/sitemap.xml
- `app/sitemap.ts` replaced with static `public/sitemap.xml` (incompatible with `output: "export"`)
- `app/robots.ts` avoided (Turbopack incompatibility); static `public/robots.txt` used instead
- "Download on App Store" buttons route to `/coming-soon` until App Store launch (email capture), not external App Store URL
- Static export: `output: "export"` + `images: { unoptimized: true }` (required for `next/Image` in export mode) + `generateStaticParams` on dynamic routes

## Session Notes

- Branch: `feature/fuel-static-export-deploy` (off `main`, not committed — user handles commits).
- Template work committed to main via PR #1; component work on feature branch.
- All phases complete: templates, components, SEO, whitespace, color tokens, logo consistency, static export, deploy script.
- Fixed `next/Image` + `output: "export"` incompatibility by adding `images: { unoptimized: true }` to next.config.ts
- deploy.ps1 ready for user execution: `./deploy.ps1` builds and rsyncs to Hostinger.
- Fixed 3 PowerShell variable-reference errors in deploy.ps1 (`$RemoteHost:` → `${RemoteHost}:` on lines 59, 96, 104) — now valid `user@host:path` syntax.
- Fixed scp fallback: invokes `scp` directly with separate arguments via `& scp -P ... -r ... ...` instead of passing a command string (which PowerShell treated as a command name).
- Fixed scp local source expansion: enumerates `out/` with `Get-ChildItem -Force` (includes hidden entries) and passes each full path as a separate argument, since OpenSSH scp does not expand local globs like `"$outDir/*"`.
- Fixed scp SSH auth: passes `StrictHostKeyChecking`/`BatchMode` options to scp (was missing entirely), adds optional `-IdentityFile` parameter, and uses `IdentitiesOnly=yes` so ssh-agent doesn't flood Hostinger with too many keys (fixes "Too many authentication failures"). BatchMode is opt-in via `-BatchMode` switch so interactive password/passphrase prompts remain available by default for this user-run deployment.
- Site deployed live at `https://fuel-us.com/` via hPanel File Manager: `pnpm build` → drag-n-drop `out/` contents into `/domains/fuel-us.com/public_html/`.
- **Phase 9:** Dark mode added — created `components/theme-provider.tsx` and `components/theme-toggle.tsx`; wired `ThemeProvider` into `app/layout.tsx`; added theme toggle to `components/nav/navbar.tsx` (desktop + mobile); `pnpm run build`, `pnpm run lint`, `npx tsc --noEmit` all pass.
- **Phase 9 findings fixed:** `theme-provider.tsx` — `localStorage.getItem`/`setItem` wrapped in try/catch (privacy-mode safe); removed mounted guard so children render on first pass (SEO-safe static export). `app/layout.tsx` — pre-hydration inline script converted from raw `<script>` to `next/script` with `strategy="beforeInteractive"` to fix React console error about script tag in React component. `context/progress-tracker.md` updated.
