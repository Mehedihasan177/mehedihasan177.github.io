"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { projects, tools, type Project } from "@/data/site";
import { asset } from "@/lib/asset";
import Buildable from "../build/Buildable";
import { Arrow, BrandIcon, StoreIcon } from "../visuals/Icons";
import ProjectModal from "./ProjectModal";

const FILTERS = ["All", "Enterprise", "Tracking & Live", "Consumer"] as const;

export function Eyebrow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="eyebrow mb-3">
      <span className="text-white/80">{n}</span> / {children}
    </p>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const track = useRef<HTMLDivElement>(null);
  const list = projects.filter((p) => filter === "All" || p.group === filter);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth / 3 + 8), behavior: "smooth" });
  };

  return (
    <section id="work" className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-24 md:px-10 md:pt-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow n="01">Selected work</Eyebrow>
          <Buildable label="Heading / H2" className="w-fit">
            <h2 className="font-wide text-[clamp(30px,4.6vw,64px)] leading-none">Work that speaks.</h2>
          </Buildable>
          <div className="no-scrollbar mt-6 flex gap-6 overflow-x-auto text-[12px]">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`relative shrink-0 pb-2 transition ${filter === f ? "text-white" : "text-white/45 hover:text-white/80"}`}
              >
                {f}
                {filter === f && <motion.span layoutId="tab" className="absolute inset-x-0 bottom-0 h-[2px] bg-accent" />}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.18em] text-white/50">
          <span className="hidden md:inline">{list.length} projects · click to open</span>
          <div className="flex gap-2">
            {([-1, 1] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => scrollBy(d)}
                aria-label={d < 0 ? "Previous" : "Next"}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white transition hover:border-accent hover:bg-accent"
              >
                <Arrow className="h-3.5 w-3.5" dir={d < 0 ? "left" : "right"} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={track}
        className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:-mx-10 md:px-10"
      >
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.button
              type="button"
              layout
              key={p.key}
              onClick={() => setOpen(p)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group w-[82%] shrink-0 snap-start text-left sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
            >
              <Buildable label={`Frame / ${p.key}.webp`} skeleton delay={i * 0.18} className="overflow-hidden rounded-xl">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(p.cover)}
                    alt={p.title}
                    loading="lazy"
                    style={{ objectPosition: p.coverPosition ?? "center" }}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 translate-y-2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    View case study
                  </span>
                  <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/90 backdrop-blur">
                    {p.category}
                  </span>
                </div>
              </Buildable>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="font-display text-[28px] text-accent">{String(projects.indexOf(p) + 1).padStart(2, "0")}</span>
                  <div className="pt-1">
                    <p className="text-[13px] font-bold uppercase tracking-wide">{p.title}</p>
                    <p className="text-[11px] text-white/45">{p.platform}</p>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  {p.play && <StoreIcon store="play" className="h-3.5 w-3.5 text-white/40" />}
                  {p.ios && <StoreIcon store="ios" className="h-3.5 w-3.5 text-white/40" />}
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/60 transition group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <Arrow className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Built with */}
      <div className="mt-20">
        <div className="flex items-end justify-between">
          <p className="eyebrow leading-relaxed">
            Built with
            <br />
            <span className="text-white/85">The tools I trust</span>
          </p>
          <p className="eyebrow">{tools.length} tools</p>
        </div>
        <div className="mt-8 grid grid-cols-5 gap-y-8 border-y border-line py-8 lg:grid-cols-10">
          {tools.map((t, i) => (
            <Buildable key={t} label={`Icon / ${t}`} delay={i * 0.08} className="mx-auto w-fit">
              <motion.div whileHover={{ y: -4, scale: 1.1 }} className="text-white/80 transition-colors hover:text-accent" title={t}>
                <BrandIcon name={t} className="h-8 w-8" />
              </motion.div>
            </Buildable>
          ))}
        </div>
      </div>

      <ProjectModal project={open} onClose={close} />
    </section>
  );
}
