# booklet.cl overlay — Repositoria

Domain customization for **booklet.cl**, pitching **Repositoria** and sending visitors to the app login at [https://repositoria.booklet.cl/](https://repositoria.booklet.cl/).

## What this folder contains

| File | Role |
| --- | --- |
| `tokens.css` | Brand color / type overrides for Repositoria |
| `index.html` | Spanish product pitch + CTAs to the app |
| `README.md` | This guide |

Shared kit assets (`css/`, `js/`, `assets/`) stay at the repository root. This overlay only swaps tokens and copy.

## Apply on a local preview

From the kit root:

```bash
cp sites/booklet.cl/tokens.css css/tokens.site.css
cp sites/booklet.cl/index.html index.html
```

Open `index.html` in a browser (or any static server). The booklet page already links `css/tokens.site.css`.

## Deploy to cPanel (booklet.cl document root)

1. Build a publish folder with the kit files:
   - `css/` (all stylesheets)
   - `js/motion.js`
   - `assets/hero/`
   - `index.html` ← use **this** overlay’s `index.html`
   - `css/tokens.site.css` ← copy from `sites/booklet.cl/tokens.css`
2. In cPanel → **Domains** → manage `booklet.cl` → set **document root** (often `public_html` or a subdomain folder).
3. Upload the publish folder contents into that document root (not a nested subfolder unless the domain points there).
4. Visit `https://booklet.cl/` and confirm the primary CTA opens `https://repositoria.booklet.cl/`.

No Node build step. Optional: enable HTTPS in cPanel if it is not already on.

## Copy checklist (edit before launch)

- [ ] Hero brand, headline, and support line
- [ ] Primary CTA URL (`https://repositoria.booklet.cl/`)
- [ ] “Qué es” / “Cómo funciona” sections
- [ ] Footer credit line
- [ ] `<title>` and meta description
- [ ] `lang` attribute (`es` for booklet.cl)

## Tokens to tweak

Edit `tokens.css` (then re-copy to `css/tokens.site.css`):

- `--color-brand` / `--color-brand-deep` — primary blue
- `--color-accent` — teal accent
- `--hero-wash-*` — atmosphere gradients
- `--font-brand`, `--font-display`, `--font-body` — keep expressive; avoid Inter / Roboto / Arial
