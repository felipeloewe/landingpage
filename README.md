# Landing kit

Reusable **static HTML/CSS** landing page for product pitches. Customize brand tokens and copy per domain; no Node build required. Optional vanilla JS powers a few motions only.

## Quick start

```bash
git clone https://github.com/felipeloewe/landingpage.git
cd landingpage
```

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8080

# PHP
php -S localhost:8080
```

Then visit `http://localhost:8080`.

## Layout

```
├── index.html              # Generic demo landing
├── css/
│   ├── tokens.css          # Brand colors, fonts, spacing
│   ├── base.css
│   ├── layout.css
│   ├── hero.css
│   └── motion.css
├── js/
│   └── motion.js           # Optional entrance / scroll reveals
├── assets/hero/            # Dominant hero visual
└── sites/
    └── booklet.cl/         # Example domain overlay (Repositoria)
```

## Customize brand tokens

All brandable values live in `css/tokens.css` as CSS variables:

- Colors: `--color-brand`, `--color-accent`, `--color-ink`, `--hero-wash-*`
- Fonts: `--font-brand`, `--font-display`, `--font-body`
- Rhythm: `--space-*`, `--page-gutter`, `--hero-min-height`

**Per-domain overlay**

1. Copy `sites/<domain>/tokens.css` → `css/tokens.site.css`
2. Uncomment the `tokens.site.css` link in `index.html` (booklet’s page already includes it)
3. Replace headlines, support line, and CTA URLs in the HTML

See [`sites/booklet.cl/README.md`](sites/booklet.cl/README.md) for a full Repositoria / booklet.cl example (CTA → [repositoria.booklet.cl](https://repositoria.booklet.cl/)).

## Design constraints (kit defaults)

- First viewport is **one composition**: brand, one headline, one support line, one CTA group, one full-bleed dominant image
- No cards or floating overlays in the hero
- Atmosphere via gradients + subtle pattern (not a flat fill)
- Expressive fonts via Google Fonts (Syne / Fraunces / Figtree)—not Inter, Roboto, or Arial
- Two–three intentional motions; respects `prefers-reduced-motion`

## Deploy to cPanel document root

1. Prepare files to upload:
   - `index.html` (generic or a `sites/<domain>/` variant)
   - `css/` (include `tokens.site.css` if you use an overlay)
   - `js/motion.js`
   - `assets/`
2. In cPanel → **Domains** → select the domain → note the **document root** path (for example `public_html` or `public_html/booklet.cl`).
3. Upload the files **into** that document root so `index.html` is reachable at `/`.
4. Do not nest an extra folder unless the domain’s document root points at it.
5. Open the domain in a browser and verify CTAs.

No build, no `npm install`. If the host serves from a subdirectory, adjust relative asset paths or set the document root to the kit folder.

### booklet.cl → Repositoria

```bash
cp sites/booklet.cl/tokens.css css/tokens.site.css
cp sites/booklet.cl/index.html index.html
# upload css/ js/ assets/ index.html to booklet.cl document root
```

Primary CTA targets `https://repositoria.booklet.cl/`.

## Browser support

Modern evergreen browsers. CSS `color-mix` and `svh` are used; very old browsers may need simpler fallbacks if you must support them.

## License

Private / product use unless otherwise noted.
