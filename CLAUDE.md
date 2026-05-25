# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `pnpm dev` — start dev server (Turbopack)
- `pnpm build` — production build
- `pnpm lint` — lint and check with Biome (`biome check`)
- `pnpm format` — auto-format with Biome (`biome format --write`)

## Stack

- **Next.js 16** (App Router) with React 19 and React Compiler enabled
- **Tailwind CSS v4** via `@tailwindcss/postcss` (CSS-first config — theme tokens defined in `globals.css` with `@theme inline`, no `tailwind.config` file)
- **Biome 2** for linting and formatting (2-space indent, recommended rules, Next/React domains)
- **TypeScript** in strict mode; path alias `@/*` → `./src/*`
- **pnpm** as package manager

## Architecture

Single-page Next.js app using the App Router. All application code lives under `src/app/`. The root layout (`layout.tsx`) sets up Geist fonts and global styles; `page.tsx` is the sole page.
