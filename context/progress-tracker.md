# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- **Phase 1:** Template setup (AGENTS.md + context/ folder) — complete

## Current Goal

- Update AGENTS.md and context/ templates to guide the FUEL landing page build

## Completed

- **Phase 0:** Boilerplate Next.js app created (`pnpm create next-app@latest .`), Tailwind v4 installed, generic AGENTS.md + context/ templates exist
- **Phase 1:** AGENTS.md updated with FUEL landing page project details ✅
- **Phase 1:** context/project-overview.md updated ✅
- **Phase 1:** context/architecture.md updated ✅
- **Phase 1:** context/ui-context.md updated ✅
- **Phase 1:** context/code-standards.md updated ✅
- **Phase 1:** context/ai-workflow-rules.md updated ✅
- **Phase 1:** context/progress-tracker.md updated ✅

## In Progress

- None.

## Next Up

- Scaffold landing page components: top nav bar (scroll-to section IDs), hero, features, how-it-works, team, CTA, footer
- Install shadcn Base UI components (button, card, etc.) via CLI
- Add Framer Motion for subtle entrance/scroll motion
- Create dynamic team route `/team/[slug]` as a blank typed stub
- Add `next/Image` and `next/Link` usage per conventions
- Verify `pnpm run build` and `pnpm run lint` pass
- Prepare for Hostinger static export (no Vercel)

## Open Questions

- Confirm exact app-store URL(s) for download CTAs (Apple App Store link needed)
- Confirm team member slugs/content to leave as blank stub placeholders
- Confirm FUEL logo asset location (`public/img/logo.png` exists — verify usage)

## Architecture Decisions

- Next.js 16 App Router + TypeScript + Tailwind CSS v4 + pnpm
- shadcn/ui Base UI versions only (unstyled primitives)
- Framer Motion for motion that whispers
- Deploy to Hostinger (static export), not Vercel
- Restrained color system: olive (`#6b8d58`) / coral (`#ff6b6b`) / beige (`#e8e6e3`) tokens
- Team dynamic route `/team/[slug]` left blank for team to fill in

## Session Notes

- Templates updated; ready to scaffold components next session.
- Branch: `feature/fuel-landingpage-plan` (off `main`, not committed — user handles commits).
