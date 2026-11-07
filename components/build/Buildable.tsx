"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useBuild } from "./BuildContext";

type Props = {
  children: React.ReactNode;
  /** Small layer name shown on the selection tag, Figma style. */
  label?: string;
  className?: string;
  /** Show a grey skeleton placeholder before the content "renders". */
  skeleton?: boolean;
  delay?: number;
  as?: "div" | "section" | "span";
};

/**
 * Wraps a block so that, when it scrolls into view, it is "built live":
 * a blue selection box with handles snaps around it, a grey placeholder
 * resolves into the real content, then the selection fades away.
 */
export default function Buildable({ children, label, className = "", skeleton = false, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const { register, markBuilt, focus } = useBuild();
  const [phase, setPhase] = useState<"idle" | "select" | "render" | "done">("idle");

  useEffect(() => register(), [register]);

  useEffect(() => {
    if (!inView) return;
    const timers: number[] = [];
    timers.push(
      window.setTimeout(() => {
        setPhase("select");
        const r = ref.current?.getBoundingClientRect();
        if (r) focus.current = { x: r.left + r.width / 2, y: r.top + Math.min(r.height / 2, 260), t: performance.now() };
      }, delay * 1000),
    );
    timers.push(window.setTimeout(() => setPhase("render"), delay * 1000 + 380));
    timers.push(
      window.setTimeout(() => {
        setPhase("done");
        markBuilt();
      }, delay * 1000 + 1300),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, delay, markBuilt, focus]);

  const showContent = phase === "render" || phase === "done";
  const showSelection = phase === "select" || phase === "render";

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        className="h-full"
        initial={false}
        animate={
          showContent
            ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", filter: "blur(0px)" }
            : { opacity: 0, clipPath: "inset(0% 0% 100% 0%)", filter: "blur(6px)" }
        }
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>

      {skeleton && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[#9aa0aa]/70"
          initial={false}
          animate={{ opacity: phase === "select" ? 1 : phase === "idle" ? 0.15 : 0 }}
          transition={{ duration: 0.35 }}
        />
      )}

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-1 z-20 border border-blue"
        initial={false}
        animate={{ opacity: showSelection ? 1 : 0, scale: showSelection ? 1 : 0.985 }}
        transition={{ duration: 0.25 }}
      >
        {["-left-1 -top-1", "-right-1 -top-1", "-left-1 -bottom-1", "-right-1 -bottom-1"].map((p) => (
          <span key={p} className={`absolute ${p} h-2 w-2 border border-blue bg-white`} />
        ))}
        {label && (
          <span className="absolute -top-5 left-0 max-w-full truncate whitespace-nowrap rounded-sm bg-blue px-1.5 py-[1px] font-mono text-[10px] leading-4 text-white">
            {label}
          </span>
        )}
      </motion.div>
    </div>
  );
}
