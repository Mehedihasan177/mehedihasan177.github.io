/** Prefix a /public file path with the GitHub Pages base path (if any). */
export function asset(path: string) {
  if (/^(https?:|mailto:|tel:|#|data:)/.test(path)) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}/${path.replace(/^\//, "")}`;
}
