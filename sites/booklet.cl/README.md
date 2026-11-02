# booklet.cl overlay — Repositoria

Domain customization for **booklet.cl**, pitching **Repositoria** and sending visitors to the app login at [https://repositoria.booklet.cl/](https://repositoria.booklet.cl/).

## What this folder contains

| File | Role |
| --- | --- |
| `tokens.css` | Brand color / type overrides for Repositoria |
| `config.js` | Product strip + Planes / Inicia FREE flags |
| `index.html` | Spanish product pitch + CTAs to the app |
| `README.md` | This guide |

Shared kit assets (`css/`, `js/site.js`, `js/motion.js`, `assets/`) stay at the repository root. This overlay swaps tokens, config, and copy.

## Apply on a local preview

From the kit root:

```bash
cp sites/booklet.cl/tokens.css css/tokens.site.css
cp sites/booklet.cl/config.js js/config.js
cp sites/booklet.cl/index.html index.html
```

Open `index.html` in a browser (or any static server). The booklet page already links `css/tokens.site.css`.

## Config highlights

`config.js` seeds:

- **Product strip:** `ECOMMERCE`, `ERP` (placeholder hrefs — point each at that product’s landing)
- **`showFreeCta: true`** — filial (b) free tier; set `false` to hide **Inicia FREE**
- **Planes** → `#planes`; **Inicia FREE** → `https://repositoria.booklet.cl/registro`; **Ingresar** → `https://repositoria.booklet.cl/login`

## Deploy to cPanel (booklet.cl document root)

1. Build a publish folder with the kit files:
   - `css/` (all stylesheets)
   - `js/config.js` ← from this overlay
   - `js/site.js`, `js/motion.js`
   - `assets/` (hero + products marks)
   - `index.html` ← this overlay’s `index.html`
   - `css/tokens.site.css` ← copy from `sites/booklet.cl/tokens.css`
2. In cPanel → **Domains** → manage `booklet.cl` → set **document root**.
3. Upload the publish folder contents into that document root.
4. Visit `https://booklet.cl/` and confirm CTAs and the product strip.

No Node build step.

## Copy checklist (edit before launch)

- [ ] Hero brand, headline, and support line
- [ ] Ingresar → `https://repositoria.booklet.cl/login`; Inicia FREE → `https://repositoria.booklet.cl/registro`
- [ ] `products[]` labels (max 2 words) and landing hrefs
- [ ] `showFreeCta` matches the commercial plan
- [ ] “Qué es” / “Cómo funciona” / “Planes” sections
- [ ] Footer credit line
- [ ] `<title>` and meta description
- [ ] `lang` attribute (`es` for booklet.cl)
