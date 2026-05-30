# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `pnpm dev` — start the dev server
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — lint and check with Biome (`biome check`)
- `pnpm format` — auto-format with Biome (`biome format --write`)

## Stack

- **Next.js 16** (App Router) with React 19 and the React Compiler enabled (`reactCompiler: true` in `next.config.ts`).
- **Tailwind CSS v4** via `@tailwindcss/postcss` — CSS-first, no `tailwind.config`. Tokens live in `src/app/globals.css` (`@theme`), layered on the shadcn `base-nova` theme imported with `@import "shadcn/tailwind.css"`; `tw-animate-css` for animation utilities.
- **shadcn/ui** (`base-nova`, see `components.json`) + **Base UI** (`@base-ui/react`) primitives, **Embla** carousels (`embla-carousel-react`), **lucide-react** icons. Class merging via `cn()` in `src/lib/utils.ts`.
- **TypeScript** strict mode; path alias `@/*` → `./src/*`.
- **Biome 2** for lint + format (2-space indent, recommended rules, Next/React domains, organize-imports).
- **pnpm** as package manager.

## Architecture

Single-page, French-language showcase site (App Router). Content is **static** — there is no backend or API route; interactive controls (carousels, nav, CTAs) are presentational.

- `src/app/` — `layout.tsx` (root: `lang="fr"`, Roboto Slab font variable, metadata, skip-to-content link), `page.tsx` (composes the landing sections), `globals.css` (theme + design tokens).
- `src/components/landing/` — page sections: `HeroSection`, `FormatsSection`, `EventsCarousel`/`EventCard`, `ThemesGrid`/`ThemeTile`, `ExpertsCarousel`/`ExpertCard`, `TestimonialsSection`, `PricingSection`, `ReassuranceBar`.
- `src/components/layout/` — `Header`, `Footer`, `MobileNav`.
- `src/components/ui/` — shadcn/ui primitives (`button`, `card`, `badge`, `dialog`, `sheet`, `separator`, `carousel`) plus local helpers (`container`, `fade-in`, `section-heading`).
- `src/data/landing.ts` — single source of truth for all page content (events, experts, themes, testimonials, subscription `plan`) and its TypeScript interfaces. Edit content here, not in components.
- `src/lib/` — `utils.ts` (`cn`), `fonts.ts` (Roboto Slab via `next/font/google`).

`page.tsx` order: Header → Hero → Formats → Events → Themes → Experts → Testimonials → Pricing → Footer. Non-hero sections are wrapped in `<FadeIn>` for on-scroll reveal.

## Conventions

- **Design tokens** (`globals.css`): brand palette is terracotta `#b3543d`, anthracite `#1f2233`, creme `#faf9f5`, beige `#efe9e1`, sage `#a9c1bd`, gold `#c4a87a`. Type is Roboto Slab. Reuse tokens/utility classes (e.g. `badge-signature`, `abo-*`); honor `prefers-reduced-motion`.
- **Copy** is French and uses *vouvoiement*; no emojis. The word "atelier" is avoided across the site.
- **Imagery** is loaded from external hosts (Unsplash, Shutterstock) — whitelisted in `images.remotePatterns` (`next.config.ts`). Add new hosts there before using them.
