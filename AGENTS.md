<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Project Agent Template

## 1. Project Title

**[Project Name]** – Brief description of the project's purpose and scope.

## 2. Application Building Context

Read the following files in order before implementing or making any architectural decision:

1. `context/project-overview.md` – product definition, goals, features, and scope
2. `context/architecture.md` – system structure, boundaries, storage model, and invariants
3. `context/02-database-schema.md` – production database tables, indexes, and relationships
4. `context/ui-context.md` – theme, colors, typography, and component conventions
5. `context/code-standards.md` – implementation rules and conventions
6. `context/ai-workflow-rules.md` – development workflow, scoping rules, and delivery approach
7. `context/progress-tracker.md` – current phase, completed work, open questions, and next steps

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
  - `contexts/AuthContext.tsx` — core auth, changes require explicit approval
  - `services/auth.service.ts` — core auth service
  - `app.json` — Expo config, changes require explicit approval
- **Branch Creation Process**
  1. Create a branch FIRST — tell Tone "Branch created: [name]"
  2. Wait for approval before making changes
  3. NEVER commit — Tone commits all changes
  4. NEVER modify `package.json` except when installing/uninstalling packages
- **Progress Tracking**
  - Update `context/progress-tracker.md` after every meaningful change

## 4. Project Overview

**Project Name** – *[brief description]*

- **Purpose:** *[Why this project exists]*
- **Scope:** *[What is included / out of scope]*
- **Owner:** *[Team member or role]*

## 5. Architecture

### Tech Stack

- **Framework:** *[e.g., React, Vue, Flutter, SwiftUI]*
- **Language:** *[e.g., TypeScript, Kotlin, Swift, Rust]*
- **Key Libraries:** *[list relevant libraries]*

### Key Directories

```
root/
├── src/
│   ├── components/       # Reusable UI components
│   ├── services/        # API clients, data layers
│   ├── utils/           # Helpers, utilities
│   ├── models/          # Data models / domain entities
│   └── tests/           # Unit / integration tests
├── context/             # Shared configuration, constants, enums
├── assets/              # Images, icons, fonts
├── docs/               # Documentation, design specs
└── migrations/         # Database migration scripts
```

### System Boundaries

- **Core Domain:** *[What the system primarily handles]*
- **Integrations:** *[External APIs, third-party services]*
- **Data Flow:** *[How data moves through the system]*

## 6. Current Change Request

See `context/change-requests.md` (or equivalent) for all active items and their status.

**Currently on:** *[item number or title]*

## 7. Active Branches

- `feature/[short-description]` — *[brief description]*
- `fix/[short-description]` — *[brief description]*
- `docs/[topic]` — *[brief description]*
- `refactor/[task]` — *[brief description]*

## 8. Contacts

- **Tone King** — Senior Full-Stack Developer, technical lead
- **[Other team members...]**

## 9. Implementation Progress

### Completed Phases ✅

- **Phase 1:** *[description]*
- **Phase 2:** *[description]*
- **Phase 3:** *[description]*

### Current Focus

- *[What is being worked on right now]*
- *Next steps:* *[next concrete task]*

---

*Last updated: [date]*
*Version: [1.x]*
