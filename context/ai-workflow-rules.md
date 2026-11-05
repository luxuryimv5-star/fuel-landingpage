# AI Workflow Rules

## Approach

Build the FUEL landing page incrementally using a spec-driven workflow. Context files define what to build, how to build it, and the current state of progress. Always implement against these specs — do not infer or invent behavior from scratch.

Follow the 8 design points:
1. Point of view, not a template
2. Typography that does work
3. A restrained color system
4. Hierarchy that breathes
5. Imagery with intent
6. Motion that whispers (Framer Motion)
7. Mobile that's designed, not shrunk
8. The invisible expensive stuff (accessibility, performance, SEO, semantic HTML)

Reference landings for tone/structure: Verdin (verdingroup.com) and Due Time (duetimegroup.com).

## Scoping Rules

- Work on one feature unit at a time (nav, then hero, then features, etc.).
- Prefer small, verifiable increments over large speculative changes.
- Do not combine unrelated system boundaries in a single implementation step.

## When to Split Work

Split an implementation step if it combines:

- UI changes and interactivity changes (e.g. layout + Framer Motion)
- Multiple unrelated sections (e.g. hero + footer in one step)
- Behavior not clearly defined in the context files

If a change cannot be verified end to end quickly (build + lint), the scope is too broad — split it.

## Handling Missing Requirements

- Do not invent product behavior not defined in the context files.
- If a requirement is ambiguous, resolve it in the relevant context file before implementing.
- If a requirement is missing, add it as an open question in `progress-tracker.md` before continuing.
- The Team member dynamic page is intentionally left blank for the team to fill in — do not invent team member content.

## Protected Files

Do not modify the following unless explicitly instructed:

- `package.json` — only touched for installs/uninstalls
- `next.config.ts` — Next.js config
- `components/ui/*` — generated shadcn Base UI components

## Keeping Docs in Sync

Update the relevant context file whenever implementation changes:

- System architecture or boundaries
- Color tokens or typography
- Component conventions
- Feature scope (add/remove sections)

## Before Moving to the Next Unit

1. The current unit works end to end within its defined scope.
2. No invariant defined in `architecture.md` was violated.
3. `progress-tracker.md` reflects the completed work.
4. `pnpm run build` and `pnpm run lint` pass.
