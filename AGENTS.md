<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# José's Portfolio

Personal portfolio of a frontend developer (React, Next.js, TypeScript) who is job hunting. Goal: a recruiter understands in 30 seconds who I am, what I've built, and how to contact me.

## Communication
- Reply to me in Spanish. Code, comments, commit messages, and identifiers in English.
- Be brief and direct. No long explanations unless I ask.
- Do not paste whole files in your replies; I can read the diff.

## Token budget (free plan)
- Read only the files the current step needs. Do not explore the whole repo.
- For Next.js docs: list or grep `node_modules/next/dist/docs/` first, then read only the one guide for the API you are touching. Do not re-read a guide already read in this session.
- Never run `pnpm dev` (it never exits). I run it myself.
- When `pnpm lint` or `pnpm build` fails, report only the relevant error lines.

## Plan and workflow
- The implementation plan is in `PLAN.md`. Its "Decisions" section overrides anything else in the plan.
- Work on one plan step at a time, only the step I name.
- Maximum 3 new files per step. If more are needed, stop and propose splitting the step.
- Do not touch files outside the scope of the step. If another file needs changes, tell me instead of editing it.
- Do not change the stack, structure, or conventions in this file.
- If something is ambiguous, ask before implementing.
- Before calling a step done, run `pnpm lint` and `pnpm build`, and fix only the errors they report.
- When finishing, reply with: (1) files changed, (2) `TODO:` items left, (3) anything I need to decide or approve.

## Stack and environment
- Next.js 16.3+ (App Router), React 19, strict TypeScript, Tailwind CSS 4, next-intl 4 (already installed).
- If the installed `next` version in `package.json` is below 16.3, stop and tell me: `next/root-params` requires it.
- Package manager: **pnpm** (never npm or yarn).
- Commands: `pnpm lint`, `pnpm build` (and `pnpm dev`, which I run).
- Environment: WSL (Ubuntu), Node LTS via fnm.
- Never install dependencies without my explicit approval. Show me the exact command and wait.
- Use `proxy.ts`, not `middleware.ts` (deprecated in Next 16).
- `cacheComponents` is enabled. `dynamicParams = false` does not work with it: validate the locale with `hasLocale()` and `notFound()`.
- `app/[locale]/layout.tsx` is the root layout (no `app/layout.tsx`). It exports `generateStaticParams` returning both locales so pages prerender.
- Use `next/root-params` as documented by next-intl for the installed version. Do not use `setRequestLocale`.
- `next/root-params` does not work in Route Handlers or Server Actions. In `sitemap.ts`, `robots.ts`, and any route handler, pass the locale explicitly.

## Bilingual site (EN / ES)
- Two locales: `en` (default and fallback) and `es`. Routes: `/en/...` and `/es/...` via a `[locale]` segment.
- `/` redirects by `Accept-Language`: Spanish browsers go to `/es`, everything else to `/en`. `x-default` points to `/en`.
- Language switcher in the navbar; keep the current path and hash when switching.
- UI strings live in `messages/en.json` and `messages/es.json`. Never hardcode user-facing text in components.
- Both files must always have the same keys. `messages/parity.ts` enforces this at type level. Missing keys are a bug.
- Localized content in `data/` uses `{ en: string; es: string }` fields with strict types.
- Set `<html lang>` per locale, `hreflang` alternates, localized metadata and Open Graph.

## Who writes which text
- **UI microcopy** (nav labels, section titles, button text, `aria-label`s, metadata templates): you may write it in both languages. Spanish: neutral, direct, professional. English: clear and natural, not a literal translation.
- **Personal content** (bio, projects, experience, skills, dates, metrics): comes only from `data/`. If a value or its translation is missing, leave a visible `TODO:` and tell me. Never write or translate it yourself.

## Structure
- `app/[locale]/`: root layout and the home page.
- `components/`: small reusable components, one per file.
- `data/` (root level, outside `app/`): `types.ts`, `profile.ts`, `projects.ts`, `experience.ts`, `skills.ts`.
- `i18n/`: `routing.ts`, `request.ts`, `navigation.ts`.
- `messages/`: translation JSON files and `parity.ts`.
- `lib/site.ts`: resolves the site URL from `NEXT_PUBLIC_SITE_URL`, falling back to `http://localhost:3000`.
- `public/`: images and CVs (`cv-en.pdf`, `cv-es.pdf`).
- Home page: one page per locale with sections in this order: Hero, About, Projects, Experience, Skills, Contact. Navbar links scroll to the section anchors.
- Projects: cards with description, stack, and links (demo, repo). No detail pages.
- Contact: links only (email, LinkedIn, GitHub) and a CV download button per locale. No form, no backend.

## Content (critical rule)
- **Do not invent** projects, metrics, technologies, companies, or dates.
- Total experience: 3 years as a frontend developer, including the most recent ~9 months at Cevaldom on a JSF/PrimeFaces stack. Mention that stack as a separate note; never present it as years of Java expertise.
- No filler phrases. Short, concrete text.

## Design
- Dark theme only. No light mode, no theme toggle, no `prefers-color-scheme` logic.
- Almost-black background, one lime accent (`#C9F24D`), Sora for headings and Inter for body, loaded with `next/font`.
- Modern and simple, with personality. Show only relevant information. No decorative filler.
- Mobile-first and responsive. Layout must tolerate longer Spanish text without breaking.
- Animations: subtle, CSS only (hover states; fade/slide on scroll via CSS scroll-driven animations inside `@supports`). Content must be fully visible without them. Disable them under `prefers-reduced-motion`. No JS observers.

## Quality
- No `any` in TypeScript.
- Server Components by default; `"use client"` only for `MobileNav` and `LocaleSwitcher` unless I approve more.
- Accessibility: skip link, semantic landmarks, one `h1`, ordered headings, `alt` on images, keyboard navigation, visible focus, WCAG AA contrast, translated `aria-label`s.
- SEO: per-page metadata, Open Graph, `sitemap` and `robots` covering both locales.
- Use `next/image` and `next/font`.
- Target: Lighthouse > 90 in all categories.