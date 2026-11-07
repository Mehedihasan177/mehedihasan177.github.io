"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { AGENT_COLORS, useBuild } from "./BuildContext";

export default function BuildToolbar() {
  const { total, built: builtRaw, agentsOn, setAgentsOn } = useBuild();
  // Reaching the end of the page ships the whole document (some layers,
  // like off-screen carousel cards, may never scroll into view).
  const [reachedEnd, setReachedEnd] = useState(false);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.985 && !reachedEnd) setReachedEnd(true);
  });
  const built = reachedEnd ? total : builtRaw;
  const live = built >= total;
  const pct = Math.round((built / total) * 100);

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-4 left-1/2 z-[70] -translate-x-1/2"
    >
      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#16161c]/90 px-3 py-2 text-[11px] text-white/80 shadow-2xl shadow-black/60 backdrop-blur-md">
        <div className="flex -space-x-1">
          {AGENT_COLORS.slice(0, 5).map((c) => (
            <span key={c} className="h-3 w-3 rounded-full ring-2 ring-[#16161c]" style={{ background: c }} />
          ))}
        </div>
        <span className="hidden sm:inline">
          <b className="text-white">26</b> agents
        </span>
        <span className="h-4 w-px bg-white/10" />
        <span className="whitespace-nowrap tabular-nums">
          <b className="text-white">{built}</b> / {total} layers
        </span>
        <div className="hidden h-1 w-20 overflow-hidden rounded-full bg-white/10 sm:block">
          <motion.div className="h-full bg-blue" animate={{ width: `${pct}%` }} transition={{ duration: 0.6 }} />
        </div>
        <span
          className={`flex items-center gap-1.5 rounded-md px-2 py-1 font-semibold ${
            live ? "bg-emerald-500/15 text-emerald-400" : "bg-blue/20 text-[#7fb0ff]"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-400" : "bg-[#7fb0ff] pulse-dot"}`} />
          {live ? "Live" : "Building"}
        </span>
        <button
          type="button"
          onClick={() => setAgentsOn(!agentsOn)}
          aria-pressed={agentsOn}
          title={agentsOn ? "Hide agents" : "Show agents"}
          className="grid h-6 w-6 place-items-center rounded-md bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white"
        >
          {agentsOn ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><rect x="1" y="1" width="3" height="8" rx="0.5" /><rect x="6" y="1" width="3" height="8" rx="0.5" /></svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M2 1l7 4-7 4z" /></svg>
          )}
        </button>
      </div>
    </motion.div>
  );
}
