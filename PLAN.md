# PLAN.md — José's Portfolio

Verified base: Next.js 16.4.5, React 19.3.0, next-intl 4.14.9, Tailwind 4. No new dependencies needed.

## Decisions
These override anything else in this plan.
- `defaultLocale: "en"`. `x-default` → `/en`. `/` sends Spanish browsers to `/es`, everyone else to `/en`.
- Accent: lime `#C9F24D` only. Headings: Sora. Body: Inter. No other accent.
- Java/JSF/PrimeFaces: separate note on the Cevaldom entry ("~9 months"). Cevaldom counts toward the 3 years of frontend; never present it as Java expertise.
- Site URL: `NEXT_PUBLIC_SITE_URL`, fallback `http://localhost:3000`. Production domain: TODO (owner).
- Deploy target: Vercel (`proxy.ts` needs a server runtime; no static export).
- Content (`data/`, CV PDFs, tagline, links): filled by the owner, never by the agent. Missing → visible `TODO:`.
- Section order on the page: Hero, About, Projects, Experience, Skills, Contact, even if built in another order.
- Namespace `common` holds strings shared across sections (e.g. `downloadCv`).

## Owner tasks (not agent steps)
- Before step 7: fill `TODO:` items in `data/` (tagline, GitHub, LinkedIn, project descriptions/stack/URLs) and add `public/cv-en.pdf`, `public/cv-es.pdf`.
- After step 14: manual QA, final TODO sweep, Vercel deploy.

## Steps
Each step ends with `pnpm lint` and `pnpm build` passing.

1. **Messages** — new: `messages/en.json`, `messages/es.json`, `messages/parity.ts`. Namespaces: metadata, nav, hero, about, projects, experience, skills, contact, footer, a11y. UI microcopy only. Done: removing a key from `es.json` breaks the build (verify, then restore).
2. **next-intl core** — new: `i18n/routing.ts`, `i18n/request.ts`, `i18n/navigation.ts`. Edit `next.config.ts`: add `withNextIntl("./i18n/request.ts")`, keep `cacheComponents`, `partialPrefetching`, Turbopack rule. `request.ts` uses `next/root-params`, `hasLocale()`, `notFound()`.
3. **Routes and proxy** — new: `proxy.ts`, `app/[locale]/layout.tsx`, `app/[locale]/page.tsx`. Delete default `app/layout.tsx`, `app/page.tsx`. Layout: `<html lang>`, `generateStaticParams` (en, es), locale validation, `NextIntlClientProvider`. Proxy matcher excludes `_next`, `api`, dotted files. Invalid locale returns 404 (follow the next-intl guide for not-found with a `[locale]` root layout). Done: build lists `/en` and `/es` as prerendered.
4. **Theme, fonts, types** — new: `global.d.ts` (next-intl `AppConfig`). Edit `app/globals.css`, layout. Color tokens, `@theme inline`, focus-visible, `scroll-margin-top`, reduced-motion base. Sora + Inter via `next/font` (latin, swap).
5. **Layout primitives** — new: `components/Container.tsx`, `components/Section.tsx`, `components/SkipLink.tsx`. Edit layout: skip link + `<main>`.
6. **Navbar** — new: `components/Navbar.tsx`, `components/MobileNav.tsx` (client), `components/LocaleSwitcher.tsx` (client, keeps path + hash). Sticky; links to `#about #projects #experience #skills #contact`. Mobile menu: `aria-expanded`, `aria-controls`, Escape, closes on navigate.
7. **Hero** — new: `components/Hero.tsx`, `components/CvLink.tsx`. Only `h1`. Name, role, tagline, CTAs to projects/contact. No photo.
8. **About + Skills** — new: `components/About.tsx`, `components/Skills.tsx`. About: summary, languages, education. Skills: grouped chips, no progress bars or invented levels.
9. **Projects** — new: `components/Projects.tsx`, `components/ProjectCard.tsx`, `components/ExternalLink.tsx`. Edit `data/types.ts` only if URLs must become optional. Links rendered only when present.
10. **Experience** — new: `components/Experience.tsx`, `components/ExperienceItem.tsx`. Semantic list, dates localized with next-intl, "current" badge when `end` is null, Java note per Decisions.
11. **Contact + Footer** — new: `components/Contact.tsx`, `components/Footer.tsx`. Email, LinkedIn, GitHub, CV per locale (reuse `CvLink`). No form.
12. **Metadata, sitemap, robots** — new: `lib/site.ts`, `app/sitemap.ts`, `app/robots.ts`. Edit layout/page: `metadataBase`, localized title/description, canonical, `alternates.languages` (en, es, x-default), Open Graph, Twitter. Sitemap/robots pass locales explicitly (no root-params).
13. **OG image and icon** — new: `app/[locale]/opengraph-image.tsx` (1200×630, `next/og`, per locale), `app/icon.svg`. Delete default `app/favicon.ico`.
14. **A11y and motion pass** — no new files. Check one `h1`, heading order, landmarks, focus, AA contrast (report lime-on-background ratio), translated aria-labels. Add CSS scroll fade/slide inside `@supports`, disabled under reduced motion. Remove unused default SVGs in `public/`.
