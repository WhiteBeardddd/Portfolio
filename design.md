---
name: portfolio-blue-design-system
character: "A security minded builder's case file. Deep navy night with one clear blue signal colour. Calm, precise, evidence first: every claim sits next to the screenshot or report that proves it."
tokens: "real values live in app/globals.css (@theme block); read them there, never duplicated in components"
contrast: "on ink #050a14: text #e6edf7 16.9:1, muted #94a3b8 7.4:1, accent #60a5fa 7.6:1, accent-soft #93c5fd 11:1. White on accent-strong #2563eb 5.2:1. Use accent-strong only as a fill behind white text, never as small text on ink (3.9:1)."
---

# Portfolio design direction

## Principles (and the books they come from)

The overhaul applies a handful of well known design books. Each rule below says
what it changes on the page, so it can be checked in review.

1. **Don't Make Me Think (Steve Krug).** Pages are scanned, not read.
   - Three item navigation, current page always highlighted.
   - Breadcrumbs on every detail page; "Back to all projects" at the end.
   - Headings say what the section is ("What I contributed"), never clever.
   - Whole cards are clickable and look clickable (hover lift, arrow).
2. **Refactoring UI (Adam Wathan and Steve Schoger).** Hierarchy before decoration.
   - Emphasise with weight and colour, de-emphasise with muted grey, before
     reaching for size.
   - One spacing scale (Tailwind 4px steps), one radius family
     (`rounded-xl` controls, `rounded-2xl` cards, `rounded-full` pills).
   - Fewer borders: separate with spacing and background (`panel`) first,
     hairline `line` borders second.
   - A real colour palette: navy neutrals plus one blue, with semantic
     category tones used only for small chips and dots.
3. **Laws of UX (Jon Yablonski).**
   - Von Restorff effect: blue is reserved for the thing to click next.
     One filled blue button per view.
   - Hick's law: filters show counts and only the categories that exist.
   - Serial position effect: the homepage opens with the strongest work
     (security case studies) and closes with the call to contact.
   - Jakob's law: conventional patterns (top nav, card grids, breadcrumbs).
4. **Show Your Work! (Austin Kleon).** Show the process, not only the result.
   Case studies include the screenshots, diagrams, and reports behind the
   claims, and link to the source documents.
5. **Made to Stick (Chip and Dan Heath).** Concrete beats abstract. Each case
   study leads with numbers that came from the work ("33 failed logins
   detected", "156 of 157 test cases passed").
6. **The Design of Everyday Things (Don Norman).** Signifiers and feedback:
   visible focus rings, hover states on everything interactive, external
   links marked with an arrow, the lightbox closes with Escape.

## Story model (STAR)

Every project and certificate detail page tells its story as
**Situation, Task, Action, Result**, followed by:

- **Toolbox**: "I used *tool* to solve *problem*", one row per tool.
- **Team section**: "How I led the team" for `Leader`, "What I contributed to
  the team" for `Member`, nothing extra for `Solo`.
- **Evidence**: captioned screenshots and diagrams, then source documents.

## Tokens (see app/globals.css)

| Token | Use |
| --- | --- |
| `ink` | page background |
| `panel`, `panel-2` | cards, raised surfaces |
| `line` | hairline borders and dividers |
| `fg`, `muted`, `subtle` | primary, secondary, tertiary text |
| `accent` | blue text, icons, focus rings, active states on dark |
| `accent-soft` | hover text, highlights |
| `accent-strong` | filled primary buttons (white text) |

Category tones (chips and dots only): Security rose, Networking emerald,
Web and Fullstack violet, Mobile amber, Game Development orange, Cloud sky.

## Composition

- Page width `max-w-6xl`, gutters `px-4 sm:px-6`, sections `py-16`.
- Detail pages: header, cover image, metric strip, then a two column body
  (STAR main column, sticky "At a glance" aside) that collapses to one column
  below `lg`.
- Motion: short fade and rise on reveal, skipped under
  `prefers-reduced-motion`.

## Accessibility

- Works from 375px wide with no horizontal scroll.
- Every interactive element is a real `a` or `button` with a visible
  `focus-visible` ring in `accent`.
- Gallery images have meaningful `alt`; captions explain why they matter.
