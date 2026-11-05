<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# José's Portfolio

Personal portfolio of a frontend developer (React, Next.js, TypeScript) who is job hunting. Goal: a recruiter understands in 30 seconds who I am, what I've built, and how to contact me.

## Communication
- Reply to me in Spanish. Code, comments, commit messages, and identifiers in English.

## Stack and environment
- Next.js (App Router), strict TypeScript, Tailwind CSS.
- Package manager: **pnpm** (never npm or yarn).
- Commands: `pnpm dev`, `pnpm lint`, `pnpm build`.
- Environment: WSL (Ubuntu), Node LTS via fnm.
- Do not install new dependencies without asking me first.

## Key feature: bilingual site (EN / ES)
- Two locales: `en` and `es` (default). Routes: `/en/...` and `/es/...` via a `[locale]` segment.
- Language switcher in the navbar; keep the current page when switching.
- Redirect `/` to the best locale (from `Accept-Language`), falling back to `en`.
- UI strings live in `messages/en.json` and `messages/es.json`. Never hardcode user-facing text in components.
- Both files must always have the same keys. Missing keys are a bug.
- Localized content in `data/` uses `{ en: string, es: string }` fields, typed in TypeScript (using strict helpers/interfaces).
- Set `<html lang>` per locale, `hreflang` alternates, and localized metadata and Open Graph.
- i18n library: Use **`next-intl`** integrated with the `[locale]` App Router structure. Wait for my approval before running the installation command.
- Spanish copy: neutral, direct, professional. English copy: clear and natural, not literal translation.

## Structure
- `app/[locale]/`: routes, layouts, and page components.
- `components/`: small reusable components, one per file.
- `data/`: typed content (`projects.ts`, `experience.ts`, `skills.ts`) located at the **root level** (outside `app/` to prevent Next.js route generation).
- `messages/`: translation json files.
- `public/`: images and CV (one CV file per locale).

## Content (critical rule)
- Use only the data in `data/`. **Do not invent** projects, metrics, technologies, companies, or dates.
- If data is missing, leave a visible `TODO:` instead of filling it in.
- Do not translate on your own initiative when a translation is missing: leave a `TODO:` and tell me.
- Total experience: 3 years (frontend). Java/JSF/PrimeFaces is recent experience of about 7 months, presented separately and never as part of the 3 years.
- No filler phrases. Short, concrete text.

## Design
- Minimalist, clear typography, good contrast.
- Dark and light mode.
- Mobile-first and responsive.
- Subtle animations only; nothing that hurts performance.
- Layout must tolerate longer Spanish text without breaking.

## Quality
- No `any` in TypeScript.
- Server Components by default; `"use client"` only when needed.
- Accessibility: semantic HTML, `alt` on images, keyboard navigation, visible focus, translated `aria-label`s.
- SEO: per-page metadata, Open Graph, `sitemap` and `robots` covering both locales.
- Use `next/image` and `next/font`.
- Target: Lighthouse > 90 in all categories.

## Workflow
- One small change at a time (one section or component per task).
- Before calling anything done, run `pnpm lint` and `pnpm build`.
- If something is ambiguous, ask before implementing.
- Do not touch files outside the scope of the task.