# Portfolio agent rules

Tool agnostic rules every agent and skill reads before changing this repo.
`CLAUDE.md` points here and adds Claude specific notes.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version (Next.js 16) has breaking changes: APIs, conventions, and file
structure may all differ from your training data. Read the relevant guide in
`node_modules/next/dist/docs/` before writing any code, and heed deprecation
notices. Examples that bite in this repo:

- Dynamic route `params` is a `Promise` (`await props.params`), typed with the
  global `PageProps<'/projects/[slug]'>` helper.
- `next/image` `priority` is deprecated; use `preload`. Image `qualities`
  defaults to `[75]`, so do not pass any other `quality` without config.

<!-- END:nextjs-agent-rules -->

## What this repo is

A personal portfolio (Next.js App Router, TypeScript, Tailwind CSS 4,
framer-motion). Every page is static: content lives in `lib/`, pages render it.

- `lib/types.ts`: content model. `Project` and `Certificate` both carry a STAR
  write-up (situation, task, action, result).
- `lib/projects.ts`, `lib/certificates.ts`: the content. One object per item.
- `lib/data.ts`: experience, contacts, categories, colour tones, selectors
  (`securityProjects`, `ongoingProjects`, `getProject`, ...).
- `app/projects/[slug]`, `app/certifications/[slug]`: case study pages,
  prerendered with `generateStaticParams` and `dynamicParams = false`.
- `components/caseStudy/`: building blocks shared by both detail pages.
- `public/images/projects/<slug>/`: evidence images (WebP, max 1600px wide).
- `public/files/`: original reports and certificates (PDF).

## Content rules (they are the product)

1. Every project and certificate page follows STAR. Situation and Task are one
   or two sentences; Action and Result are short bullet lists.
2. Results are concrete and sourced: numbers come from the linked report,
   repo, or manuscript. Never invent a metric, team size, or outcome.
3. `teamRole` decides the team section: `Leader` needs `leadership` (how I led),
   `Member` needs `contribution` (what I contributed), `Solo` needs neither.
   The content tests enforce this.
4. The `toolbox` explains "I used this tool to solve this problem": one tool,
   one concrete problem, per row.
5. Homepage "Featured work" is every project with `category: "Security"`.
   Do not hand pick; tag the project instead.
6. Screenshots must not show visitor emails, phone numbers, passwords, tokens,
   or other personal data. Crop or skip a capture that does. Every gallery
   image needs `alt` (what it shows) and `caption` (why it matters), plus its
   real pixel `width` and `height`.
7. Items marked `// REVIEW:` in `lib/` are written from indirect evidence and
   should be confirmed by the owner before they are treated as fact.

## Code standards

- Server components by default. Add `"use client"` only for state, effects,
  or framer-motion, and keep client components small (filters, lightbox, nav).
- Use design tokens from `app/globals.css` (`ink`, `panel`, `line`, `accent`,
  `accent-strong`, ...). No raw hex colours in components. See `design.md`.
- Internal navigation uses `next/link`; external links open in a new tab with
  `rel="noopener noreferrer"`. Cards that link somewhere use the stretched link
  pattern; never nest an `<a>` inside another `<a>`.
- Images that matter use `next/image` with explicit `width`/`height`.
- Keep keyboard access and visible `:focus-visible` rings. Toggle buttons
  expose `aria-pressed`; decorative images use `alt=""`.
- Comments explain responsibility or an invariant, not each line.
- Commit messages follow `COMMIT_GUIDELINES.md` (conventional commits).

## Commands and verification

```powershell
npm run dev            # local dev server
npm run lint           # ESLint (next core web vitals + typescript)
npm test               # Vitest content and link-target validation
npm run build          # production build, prerenders every case study
npm run check:links    # builds must exist; starts next start and crawls every page
npm run check:links:external   # same, plus every external URL (slower)
```

A change is done when lint, tests, build, and the internal link check pass.
External link failures are reported separately because third party sites
(LinkedIn, Facebook) often refuse automated requests.

## Skills available in `.claude/skills`

Transferred from the BioSphere frontend and backend repos (see
`skills-lock.json` for sources): `design-taste-frontend`,
`web-design-guidelines`, `image-to-code`, `playwright-cli`, `architect`,
`audit`, `check`, `debug`, `develop`, `document`, `scope`, `sync`, `test`;
plus the portfolio specific `check-links`.
