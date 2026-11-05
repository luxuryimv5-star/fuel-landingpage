# UI Context

## Theme

FUEL landing page is a restrained, editorial marketing site — not a template. Dark-aware but primarily light with olive/coral/beige accents applied sparingly. The visual language borrows from the FUEL iOS app design system (olive green, coral, beige) translated to web tokens. Hierarchy breathes with generous whitespace; motion whispers via Framer Motion. Mobile is designed from the ground up, not shrunk.

## Colors — Design Tokens (CSS custom properties)

All components must use these tokens — no hardcoded hex values.

| Role            | CSS Variable       | Value    |
| --------------- | ------------------ | -------- |
| Page background | `--bg-base`        | `#ffffff` |
| Surface         | `--bg-surface`     | `#f8f7f4` |
| Primary text    | `--text-primary`   | `#1a1a1a` |
| Muted text      | `--text-muted`     | `#5a5a5a` |
| Primary accent  | `--accent-primary` | `#ff6b6b` (coral) |
| Accent secondary| `--accent-secondary`| `#6b8d58` (olive) |
| Border          | `--border-default` | `#e8e6e3` (beige) |
| Error           | `--state-error`    | `#ff5252` |
| Success         | `--state-success`  | `#7cb34a` |

### Color Palette Definitions

#### Olive Green Family
- `olive-base` — `#6b8d58` — primary accent surfaces
- `olive-surface` — `#8fa26f` — card surfaces, secondary backgrounds
- `olive-text-primary` — `#2d3a20` — primary text
- `olive-text-muted` — `#5a6b3d` — secondary text
- `olive-success` — `#7cb34a` — success states

#### Coral Family
- `coral-primary` — `#ff6b6b` — primary accents, interactive elements, buttons
- `coral-error` — `#ff5252` — error states, warnings
- `coral-highlight` — `#ff8c6a` — highlights, badges

#### Beige Family
- `beige-border` — `#e8e6e3` — borders, separators
- `beige-background` — `#f5f5f0` — light alternative backgrounds
- `beige-text` — `#4a4a45` — body text on dark backgrounds

### Color Usage Guidelines
- Primary action buttons: `coral-primary`
- Background surfaces: `olive-base` / `olive-surface`
- Text: `olive-text-primary` / `olive-text-muted`
- Borders/separators: `beige-border`
- Coral accents used sparingly (restrained system)

## Typography

Typography does work — strong, readable, hierarchical.

| Role      | Font              | Variable      | Usage                  |
| --------- | ----------------- | ------------- | ---------------------- |
| Display/Headline | Inter (or system sans) | `--font-display` | Hero headlines, section titles |
| UI text   | Inter (or system sans) | `--font-sans` | Body, nav, buttons     |
| Code/mono | JetBrains Mono (or system mono) | `--font-mono` | Code, technical details |

Scale:
- Headline: `text-4xl` to `text-6xl`, `font-bold`, `leading-tight`
- Section title: `text-2xl` to `text-3xl`, `font-semibold`
- Body: `text-base` to `text-lg`, `font-normal`, `leading-relaxed`
- Caption: `text-sm`, `font-medium`, `text-muted`
- Small: `text-xs`, `font-medium`, `text-muted`

## Border Radius

| Context           | Class             |
| ----------------- | ----------------- |
| Inline / small UI | `rounded-md` (6px)|
| Cards / panels    | `rounded-xl` (12px)|
| Modals / overlays | `rounded-2xl` (16px)|
| Buttons           | `rounded-full` or `rounded-lg` |

## Component Library

- shadcn/ui on top of Tailwind — **Base UI versions only** (unstyled primitives).
- Components live in `components/ui/`. Use the shadcn CLI (`npx shadcn@latest add`) to add new components rather than writing from scratch.
- Buttons, cards, dialogs, popovers, separators, etc. come from shadcn Base UI and are styled with the FUEL token classes.

## Layout Patterns

- Navbar: top bar, logo left, scroll-to links right, hamburger on mobile; bottom border separator.
- Sections: full-width, container-constrained (`max-w-7xl mx-auto`), generous `py` padding.
- Hero: headline left, imagery/CTA right on desktop; stacked on mobile.
- Team grid: responsive grid of cards; each links to `/team/[slug]`.
- Footer: columnar links, copyright, social icons.

## Icons

- Lucide React. Stroke-based icons only. Sizes: `h-4 w-4` inline, `h-5 w-5` for buttons, `h-6 w-6` for section icons.
