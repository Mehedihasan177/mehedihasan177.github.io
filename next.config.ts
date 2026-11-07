import type { NextConfig } from "next";

// Fully static site: `npm run build` emits plain HTML/CSS/JS into ./out
// that can be hosted anywhere (Netlify, Vercel, GitHub Pages, cPanel...).
// GitHub Pages serves project sites from https://<user>.github.io/<repo>/,
// so the deploy workflow sets NEXT_PUBLIC_BASE_PATH="/<repo>". Locally it's empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
