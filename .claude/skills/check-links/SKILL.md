---
name: check-links
description: Find broken links on the portfolio. Use when asked to "check links", "find broken links", "validate the site", before a commit that adds projects, certificates, files or images, or after renaming anything in public/. Crawls the built site and reports every internal page, asset, anchor and (optionally) external URL that fails.
allowed-tools: Bash, Read, Grep, Glob
argument-hint: [internal | external]
---

# Check links

The portfolio is static content, so a broken link is the most likely defect.
This skill runs the repo's own checker, `tools/check-links.mjs`, which has no
dependencies beyond Node 22.

## Steps

1. Make sure a production build exists and is current:
   `npm run build` (skip only if nothing changed since the last build).
2. Run the checker. It starts `next start` on port 3100 by itself, crawls from
   `/`, and stops the server when done:
   - internal only (default, fast, must pass): `npm run check:links`
   - plus external URLs: `npm run check:links:external`
3. Read the report. Each failure lists the page it was found on, the URL, and
   the status or error.
4. Fix the source, not the symptom:
   - Missing file under `/files` or `/images`: correct the path in `lib/`
     or add the file to `public/`.
   - Broken `#anchor`: the target page has no element with that `id`.
   - External 404: update or remove the link in `lib/`. External 401, 403,
     429 and 999 are reported as "unverified" (sites like LinkedIn block
     bots); open them by hand before deciding they are broken.
5. Re-run `npm test` too: `lib/content.test.ts` checks that every path in the
   content model points at a real file before anything is built.

## Options

```text
node tools/check-links.mjs [--base http://localhost:3100] [--no-serve]
                           [--external] [--port 3100] [--timeout 10000]
```

`--no-serve` checks an already running server at `--base` (for example a
preview deployment). Never stop a server you did not start.
