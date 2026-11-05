<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — FUEL Landing Page

## 1. Project Title

**FUEL Landing Page** — Marketing site for the FUEL iOS app that helps drivers find the cheapest, safest, and most vehicle-appropriate gas stations nearby (styled after Find My iPhone, but for gas stations).

## 2. Application Building Context

Read the following files in order before implementing or making any architectural decision:

1. `context/project-overview.md` – product definition, goals, features, and scope
2. `context/architecture.md` – system structure, boundaries, storage model, and invariants
3. `context/ui-context.md` – theme, colors, typography, and component conventions
4. `context/code-standards.md` – implementation rules and conventions
5. `context/ai-workflow-rules.md` – development workflow, scoping rules, and delivery approach
6. `context/progress-tracker.md` – current phase, completed work, open questions, and next steps

## 3. Workflow

### Before Starting Any Work
- [ ] Read `AGENTS.md` fully (this file)
- [ ] Read all files in `/context/` directory
- [ ] Follow the rules in `context/ai-workflow-rules.md`
- [ ] Update `context/progress-tracker.md` before and after each task

### Task Execution Rules
- **Branch Naming Convention**
  - Feature work: `feature/[short-description]`
  - Bug fixes: `fix/[short-description]`
  - Only create branches for repos that are actually receiving changes in that item
- **Type Safety — Zero Tolerance**
  - `any` is forbidden — define an explicit interface instead
  - `unknown` must be narrowed — never leave it unresolved
  - No implicit types — all function parameters, return types, and API responses must be explicitly typed
  - No non-null assertions (`!`) — handle null/undefined explicitly
- **Protected Files — Do Not Modify Without Explicit Permission**
  - `package.json` — only touched for installs/uninstalls
  - `next.config.ts` — Next.js config, changes require explicit approval
- **Branch Creation Process**
  1. Create a branch FIRST — tell the user "Branch created: [name]"
  2. Wait for approval before making changes
  3. NEVER commit — the user handles commits personally
  4. NEVER modify `package.json` except when installing/uninstalling packages
- **Progress Tracking**
  - Update `context/progress-tracker.md` after every meaningful change

## 4. Project Overview

**Project Name** – FUEL Landing Page

- **Purpose:** Market the FUEL iOS app to drivers; convert visitors into app downloads. Single-page scroll marketing site with nav bar, scroll-to sections, and a Team section routing to dynamic member pages (left blank for the team to fill in).
- **Scope:** Next.js App Router landing page, Tailwind CSS, Framer Motion, shadcn/ui Base UI, static deploy to Hostinger (no Vercel). Out of scope: backend, auth, user accounts, blog, e-commerce.
- **Owner:** Noah Goss — Product Manager (contact); engineering owns build/deploy.

## 5. Architecture

### Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript + React 19
- **Language:** TypeScript (strict)
- **Key Libraries:** Tailwind CSS v4, Framer Motion (motion that whispers), shadcn/ui Base UI, Lucide React (icons), next/image, next/Link

### Key Directories

```
root/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Landing page (scroll sections)
│   ├── team/
│   │   └── [slug]/         # Dynamic team member page (blank stub)
│   └── globals.css         # Tailwind + design tokens
├── components/
│   ├── nav/                # Top nav bar (scroll links to section IDs)
│   ├── sections/           # Hero, Features, HowItWorks, Team, CTA, Footer
│   └── ui/                 # shadcn Base UI components
├── lib/                    # Utilities (cn, scroll helpers)
├── public/
│   └── img/                # FUEL logo + intentional imagery
├── context/                # Shared configuration and templates
└── assets/                 # Images, icons, fonts
```

### System Boundaries

- **Core Domain:** Marketing the FUEL app; driving app-store downloads.
- **Integrations:** App-store download links (Apple App Store), team member dynamic routes.
- **Data Flow:** Visitor scrolls sections → nav highlights active section → clicks Team card → routes to `/team/[slug]` (blank stub for team to fill).

## 6. Current Change Request

Build the FUEL landing page per the 8 design points: POV not template, typography that does work, restrained color system, hierarchy that breathes, imagery with intent, motion that whispers (Framer Motion), mobile designed not shrunk, the invisible expensive stuff.

**Currently on:** Template setup (AGENTS.md + context/ folder)

## 7. Active Branches

- `feature/fuel-landingpage-plan` — Template updates and landing page scaffolding

## 8. Contacts

- **Noah Goss** — Product Manager (product contact)
- **[Engineering lead]** — Build and deploy owner

## 9. Implementation Progress

### Completed Phases ✅

- **Phase 0:** Boilerplate Next.js app created (`pnpm create next-app@latest .`), Tailwind v4 installed, AGENTS.md + context/ templates exist (generic)

### Current Focus

- **Phase 1:** Update AGENTS.md and context/ templates for the FUEL landing page (this session)
- *Next steps:* Scaffold components (nav, sections), add Framer Motion, shadcn Base UI, Team dynamic route, verify build + lint

---

*Last updated: November 5, 2026*
*Version: 1.0*
