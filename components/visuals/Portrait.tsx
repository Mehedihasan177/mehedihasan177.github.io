import { site } from "@/data/site";
import { asset } from "@/lib/asset";

/**
 * Hero portrait: the transparent cut-out from /public/web/profile.webp,
 * graded into the accent/cyan duotone look of the design.
 * `tone` = how strong the duotone is (0 = original photo, 1 = full duotone).
 */
export default function Portrait({ className = "", tone = 0.85 }: { className?: string; tone?: number }) {
  const src = asset(site.portrait);
  const mask = {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "bottom center",
    maskPosition: "bottom center",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  } as const;

  return (
    <div className={`relative ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={site.fullName}
        className="absolute inset-0 h-full w-full object-contain object-bottom contrast-[1.08] saturate-[0.6]"
      />
      {/* cyan key light on the left, accent colour on the right */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-color"
        style={{ ...mask, opacity: tone, background: "linear-gradient(90deg,var(--duo-left) 0%,var(--duo-left) 22%,var(--accent-mid) 60%,var(--accent) 100%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-soft-light"
        style={{ ...mask, opacity: tone * 0.9, background: "linear-gradient(90deg,var(--duo-left) 0%,transparent 45%,var(--accent-light) 100%)" }}
      />
    </div>
  );
}
