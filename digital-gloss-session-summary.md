# Digital Gloss Landing Page — Session Summary

**Project folder:** `digital-gloss-website/`
**Files:** `index.html`, `styles.css`, `script.js`

## What we built

A single-page marketing site for Digital Gloss, an agency offering web
development, digital marketing, and AI solutions. Sections: hero, services
(3 disciplines), 4-step process, pull-quote statement, contact, footer.

## Design history

1. **First pass — "wet paint" identity.** Warm paper background, chunky
   Anton display type, neubrutalist color-block cards (lacquer red / acid
   lime / cobalt), cursor-tracked gloss/shine effect as the signature
   element, tied literally to the "Gloss" name.
2. **Contrast/accessibility fixes.** Deepened the lacquer red token
   (`#E63D1F` → `#D93815`) so white text cleared WCAG AA (4.5:1) against
   it. Removed an opacity-dimmed hero subhead that hurt legibility for no
   visual gain. Hid the decorative hero streak graphic on mobile where it
   was cutting through the headline.
3. **Full style pivot — dark/glass identity.** At the user's request, rebuilt
   to match the visual register of tequila.ae (a Dubai web agency site):
   near-black background (`#0D0D0D`), light-weight **Instrument Sans**
   display headlines paired with elegant **Instrument Serif** lede
   paragraphs, fully pill-shaped buttons, frosted-glass service cards with
   a cursor-tracked color glow (cyan / amber / violet per discipline), and
   ambient blurred glow orbs standing in for the reference site's glossy
   3D-render imagery (built as original CSS art, not copied assets).
   Also fixed a real performance issue found along the way: the sticky
   nav's `backdrop-filter: blur()` was forcing expensive repaints on every
   scroll frame — swapped for a solid translucent background.
4. **Small polish requests.** CTA copy changed from "Start a project" to
   "Get a free quote" (nav + hero). Contact email set to
   `inquires@digitalgloss.com`. Nav logo doubled in size (1.05rem → 2.1rem).

## Current design tokens (styles.css)

- **Colors:** ink `#0D0D0D`, raised surface `#141414`, white text with
  70%/45% translucent tiers, hairline borders at 12% white. Accent glows:
  cyan `#5EE7F5`, violet `#9B87F5`, amber `#FFA45C`.
- **Type:** Instrument Sans (display/UI, weights 300–600), Instrument Serif
  (lede paragraphs, pull-quotes), both via Google Fonts.
- **Components:** pill buttons (`--pill: 999px`), glass cards
  (`--radius: 20px`, 1px hairline border, radial glow on hover).

## How to preview locally

```bash
cd digital-gloss-website
python3 -m http.server 8073
# open http://localhost:8073/index.html
```

## Open items / possible next steps

- No real portfolio/testimonial content yet — the statement section is a
  point-of-view line, not a case study, since no real client data was
  available.
- Contact form is a `mailto:` link only — no backend form.
- Favicon not set.
