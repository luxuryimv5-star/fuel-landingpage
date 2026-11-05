# FUEL Landing Page

## Overview

FUEL is an iOS app (SwiftUI) that helps drivers find the cheapest, safest, and most vehicle-appropriate gas stations nearby — styled after Find My iPhone, but for gas stations. This landing page markets the app to drivers, communicating the product's point of view, converting visitors into downloads, and introducing the team behind it. The product manager is Noah Goss.

## Goals

1. Communicate FUEL's point of view (not a template feel) in the hero and feature sections.
2. Convert visitors to app-store downloads via clear CTAs and trust signals.
3. Showcase the design system (olive green / coral / beige restrained palette, strong typography, intentional imagery, whisper motion).
4. Present the team with a dynamic member page (left blank for the team to fill in).

## Core User Flow

1. Visitor lands on the hero — headline + subhead + primary download CTA.
2. Visitor scrolls through feature sections (each with an ID for scroll-to from the nav).
3. Nav bar highlights the active section as the user scrolls.
4. Visitor clicks a team card → routes to `/team/[slug]` (blank stub).
5. Visitor clicks a download CTA → opens the Apple App Store link.

## Features

### Marketing Sections
- Hero with headline, subhead, app screenshot/imagery, dual CTAs (App Store + learn more)
- Features grid (each with icon, heading, description)
- How it works (numbered steps with scroll IDs)
- Team section (cards linking to dynamic member pages)
- CTA strip (final download push)
- Footer (links, copyright, social)

### Navigation
- Top nav bar with logo + scroll-to section links
- Mobile-responsive nav (hamburger on small screens)

### Team
- Dynamic route `/team/[slug]` — blank component stub for the team to fill in

## Scope

### In Scope

- Next.js App Router landing page (single scroll page)
- Tailwind CSS + Framer Motion + shadcn/ui Base UI
- Top nav bar with section IDs for scroll-to behavior
- HTML5 semantic tags where appropriate; `next/Link` for links, `next/Image` for images
- Deploy to Hostinger (static export), not Vercel
- Team dynamic route (blank stub)

### Out of Scope

- Backend, database, auth, user accounts
- Blog, CMS, e-commerce
- App-store listing content (only the link)

## Success Criteria

1. `pnpm run build` and `pnpm run lint` pass with zero errors.
2. Page is a single scroll document; every major section has a stable `id`.
3. Nav bar scrolls to section IDs on click; active section highlighted on scroll.
4. Mobile layout is designed (not shrunk): touch targets, readable type, stacked sections.
5. Framer Motion used for entrance/scroll motion that "whispers" (subtle, not distracting).
6. Team route `/team/[slug]` exists as a blank typed stub.
7. Colors use the restrained FUEL palette (olive/coral/beige) via CSS tokens, no hardcoded hex.
8. `any` forbidden; all props/returns explicitly typed.
