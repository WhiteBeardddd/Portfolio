# Portfolio engineering guidance

@AGENTS.md

## Working here with Claude Code

- Read `AGENTS.md` (above) and `design.md` before changing UI or content.
- Follow the BioSphere habits this repo inherited: trace the real flow
  (page -> component -> `lib/` content), make the smallest change that solves
  the problem, and prove it with `npm run lint`, `npm test`, `npm run build`,
  and `npm run check:links`.
- For UI work, use the `design-taste-frontend` and `web-design-guidelines`
  skills; for browser proof, `playwright-cli` (installed globally) or
  `/check verify`; for broken links, `/check-links`.
- Port 3000 may already be taken on this machine. Use another port for
  `next start` (the link checker defaults to 3100) and never stop a process
  you did not start.
- Never commit secrets, browser auth state, or screenshots with personal data.
  Keep temporary captures out of `public/`.
- Do not push, deploy, or force push without the owner asking.
