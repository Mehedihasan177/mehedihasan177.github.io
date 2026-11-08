# Md. Mehedi Hasan — Portfolio

Plain **HTML + CSS + JavaScript**. No framework, no build step, no backend —
GitHub Pages serves these files as they are.

## Files
| File | What it is |
|---|---|
| `index.html` | All page text (hero, about, journey, contact…) — edit directly |
| `css/style.css` | All styling. Theme colours are at the top (`--accent…`) |
| `js/data.js` | Projects (cards + popups), hero rotating words, 3D phone apps |
| `js/main.js` | Build effect, hero word, parallax, cards/popup, accordion, cursors |
| `js/playground.js` | The interactive 3D phone section |
| `js/icons.js` | Brand icon shapes (Flutter, Dart, Google Play…) |
| `web/` | Images, app films, CV |

## Preview locally
Open `index.html` in a browser, or run any static server, e.g. `npx serve .`

## Publish on GitHub Pages
1. Put these files in the root of the `mehedihasan177.github.io` repo and push to `main`.
2. Repo → **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Live at https://mehedihasan177.github.io/ after ~1 minute.

`.nojekyll` is included so GitHub serves every file untouched.
