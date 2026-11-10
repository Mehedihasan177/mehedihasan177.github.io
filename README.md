# Md. Mehedi Hasan — Portfolio

Plain **HTML + CSS + JavaScript** — no framework, no build step, no backend.
GitHub Pages serves the files exactly as they are.

## Files
| Path | What it is |
|---|---|
| `index.html` | Page structure + static text (hero, about, contact…) |
| `css/style.css` | All styling. Theme colours are the tokens at the top (`--a1`, `--a2`, `--grad`) |
| `js/data.js` | **Edit this** to change projects, jobs, education, process steps and skills |
| `js/main.js` | Rendering + all animation (preloader, smooth scroll, pinned gallery, modal…) |
| `js/vendor/` | GSAP 3.12.5, ScrollTrigger, Lenis 1.1.13 — bundled locally, no CDN needed |
| `assets/` | Images, app films (`assets/video`), CV (`assets/cv`), tech icons (`assets/tech`), favicons |

## Preview locally
```bash
cd mehedi-portfolio
python3 -m http.server 8000   # then open http://localhost:8000
```
(Opening `index.html` directly also works.)

## Publish on GitHub Pages
1. Create a repo named **`<your-username>.github.io`** (e.g. `mehedihasan177.github.io`).
2. Put the *contents* of this folder in the repo root and push to `main`:
   ```bash
   git init && git add . && git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. Repo → **Settings → Pages → Source: Deploy from a branch** → `main` / `(root)`.
4. Live at `https://<your-username>.github.io/` in about a minute.

`.nojekyll` is included so GitHub serves every file untouched.

## Change the accent colour
In `css/style.css`, edit `--a1`, `--a2` and the `--grad` gradient (e.g. violet: `#8b5cf6` → `#ec4899`).
