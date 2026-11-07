# Portfolio

Static portfolio built with **Next.js (static export) + TypeScript + Tailwind CSS + Framer Motion + Lenis**. No backend.

## Develop
```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content
- **Text, projects, jobs, contacts:** `data/site.ts`.
- **Images, app films, CV:** `public/web/` (copied from the old site's `assets/web/`). Project covers/screenshots are referenced by file name in `data/site.ts`.
- **Hero photo:** `public/web/profile.webp` (transparent cut-out); the red/blue grade is applied in `components/visuals/Portrait.tsx`.
- **Contact box:** "Tell me about your project" opens the visitor's mail app pre-filled (no server needed).

## Build & deploy
```bash
npm run build      # outputs static files to ./out
```
Upload `out/` to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, cPanel).

## The "live build" effect
- `components/build/Buildable.tsx` — blue selection box + grey skeleton that renders each block as it scrolls in.
- `components/build/AgentCursors.tsx` — colourful agent cursors (they swarm the section being built and orbit your mouse).
- `components/build/BuildToolbar.tsx` — bottom toolbar with layer counter; pause button hides the cursors.

## Deploy to GitHub Pages
1. Create an empty repo on GitHub (e.g. `portfolio`) and push this project to its `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which builds and publishes the site to
   `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` if the repo is named `<username>.github.io`).
