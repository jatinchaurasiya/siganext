# Siganext — Brand / Style Kit

A self-contained design system for the **Signal → Power → Data** brand.
This is a *style kit*, not a full site: it ships the tokens, typography,
color usage, the earned 01–04 vertical numbering, the flowing-trace motif,
and a working Three.js + GSAP hero that respects `prefers-reduced-motion`.

## Files
- `tokens.css` — single source of truth: colors, type scale, spacing, motion vars.
- `brand.css` — components: type, layout, service cards, trace motif, reveals, hero.
- `hero.js` — Three.js + GSAP hero (flowing trace: teal → gold → green).
- `index.html` — live demonstration of every part of the system.
- `assets/siganextlogo.png` — logo.

## Open it
No build step. Either open `index.html` directly, or serve it (recommended for
ES module imports + WebGL):

```bash
cd brand-kit
python3 -m http.server 8080
# visit http://localhost:8080
```

## Color
| Token | Value | Role |
|-------|-------|------|
| `--grid-navy` | `#0B1220` | base dark (circuit board / night) |
| `--panel-mist` | `#EDEFEA` | base light (cool sage-white) |
| `--signal-teal` | `#2FB8C6` | primary — connectivity / data |
| `--marigold-gold` | `#E8A33D` | secondary — solar / sun |
| `--sahyadri-green` | `#1F6E4A` | tertiary — sustainability (sparing) |
| `--ink` | `#10151F` | text on light |
| `--paper` | `#F5F7FA` | text on dark |

Use accents *semantically*: teal = signal/data, gold = solar, green = earth/
sustainability. Green is used sparingly.

## Typography
- **Display** — Space Grotesk (500–700, tight tracking) for headlines/hero.
- **Body** — IBM Plex Sans (400–500). Has a Devanagari cut — kept for the
  planned Hindi toggle.
- **Utility** — IBM Plex Mono, uppercase, `letter-spacing: 0.08em`, small.
  Used for eyebrows, nav labels, CIN/spec numbers, data figures.

## Numbering
`01 / 02 / 03 / 04` are an **earned** taxonomy (the four verticals per the MOA).
Use them only for services — never decoratively elsewhere.
See `.vertical-index` and `.service-card` in `brand.css`.

## Motion principle
- One orchestrated moment per page: the hero (GSAP entrance + flowing trace).
- Everywhere else: quiet scroll reveals (`.reveal` + IntersectionObserver).
- `prefers-reduced-motion`: all CSS transitions collapse to ~0ms and the
  Three.js hero is skipped entirely — a static gradient `.hero__static`
  end-state shows instead. No scattered hover bounces or parallax.

## The trace motif
Recurs three ways:
1. **3D hero** — `hero.js`, a tube geometry coloured teal→gold→green with a
   travelling white pulse and a faint node field (dashboards resolving).
2. **Section dividers** — `.trace-divider` SVG with a gradient path.
3. **Icon language** — `.trace-ico` SVGs: data pulse, solar current, node.

## Notes on assets
The provided Gemini images are brand/photography assets (2048–3168px). They are
not wired into this style kit; drop them into `assets/` and reference them where
a photographic vertical section makes sense (e.g. a `.section--photo` block).
Keep image usage quiet — the system leads with type, color, and the trace.
