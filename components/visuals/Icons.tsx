import {
  siAndroidstudio,
  siAppstore,
  siDart,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGoogleplay,
  siGooglemaps,
  siLeetcode,
  siPostman,
  siWebrtc,
  siXcode,
} from "simple-icons";
import type { ContactIcon } from "@/data/site";

const brand = {
  flutter: siFlutter,
  dart: siDart,
  firebase: siFirebase,
  androidstudio: siAndroidstudio,
  xcode: siXcode,
  figma: siFigma,
  git: siGit,
  postman: siPostman,
  webrtc: siWebrtc,
  googlemaps: siGooglemaps,
} as const;

export type ToolName = keyof typeof brand;

export function BrandIcon({ name, className = "h-7 w-7" }: { name: ToolName; className?: string }) {
  const icon = brand[name];
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" role="img" aria-label={icon.title}>
      <path d={icon.path} />
    </svg>
  );
}

export function StoreIcon({ store, className = "h-4 w-4" }: { store: "play" | "ios"; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d={(store === "play" ? siGoogleplay : siAppstore).path} />
    </svg>
  );
}

export function ContactGlyph({ icon, className = "h-4 w-4" }: { icon: ContactIcon; className?: string }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (icon) {
    case "leetcode":
      return <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d={siLeetcode.path} /></svg>;
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        </svg>
      );
    case "mail":
      return <svg viewBox="0 0 24 24" className={className} {...stroke}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case "phone":
      return <svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" /></svg>;
    case "cv":
      return <svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></svg>;
    case "form":
      return <svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" /></svg>;
    case "pin":
      return <svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
  }
}

export function Arrow({ className = "h-4 w-4", dir = "up-right" }: { className?: string; dir?: "up-right" | "right" | "left" | "down" }) {
  const rot = { "up-right": 0, right: 45, left: 225, down: 135 }[dir];
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ transform: `rotate(${rot}deg)` }}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
