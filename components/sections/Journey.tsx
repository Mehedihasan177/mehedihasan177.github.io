"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { journey, projects } from "@/data/site";
import Buildable from "../build/Buildable";
import { Arrow, StoreIcon } from "../visuals/Icons";
import { Eyebrow } from "./Work";

const shipped = projects.filter((p) => p.play || p.ios);

export default function Journey() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="journey" className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow n="03">The journey</Eyebrow>
          <Buildable label="Heading / H2" className="w-fit">
            <h2 className="font-wide text-[clamp(28px,4.2vw,60px)] leading-none">Keep building. Keep shipping.</h2>
          </Buildable>
        </div>
        <p className="eyebrow">From intern to lead · since 2021</p>
      </div>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.7fr_1fr]">
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-2 left-[150px] top-2 hidden w-px origin-top bg-gradient-to-b from-accent via-white/15 to-transparent sm:block"
          />
          {journey.map((j, i) => {
            const isOpen = openIdx === i;
            return (
              <Buildable key={j.org} label={`Row / ${j.org.split(" ")[0]}`} delay={i * 0.15}>
                <div className="group grid gap-2 border-b border-line py-6 sm:grid-cols-[150px_1fr] sm:gap-0">
                  <div>
                    <span className={`block text-[11px] uppercase tracking-wider ${j.current ? "text-accent" : "text-white/45"}`}>{j.years}</span>
                    <span className="mt-1 block text-[10px] text-white/30">{j.location}</span>
                  </div>
                  <div className="relative sm:pl-10">
                    <span
                      className={`absolute -left-[5px] top-1.5 hidden h-[10px] w-[10px] rounded-full border-2 sm:block ${
                        j.current ? "border-accent bg-accent shadow-[0_0_12px_rgb(var(--accent-rgb)/.9)]" : "border-white/30 bg-bg group-hover:border-accent"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 text-left"
                    >
                      <span>
                        <span className="block text-[15px] font-bold transition group-hover:text-accent">{j.role}</span>
                        <span className="text-[11px] uppercase tracking-wider text-white/40">{j.org}</span>
                      </span>
                      <span className={`mt-1 text-xl leading-none text-white/40 transition ${isOpen ? "rotate-45 text-accent" : ""}`}>+</span>
                    </button>
                    <p className="mt-2 max-w-[560px] text-[13px] leading-relaxed text-white/55">{j.desc}</p>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-1.5">
                            {j.points.map((p) => (
                              <li key={p} className="flex gap-2 text-[12px] text-white/65">
                                <Arrow className="mt-0.5 h-3 w-3 shrink-0 text-accent" dir="right" />
                                {p}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {j.tags.map((t) => (
                              <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-white/60">
                                {t}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Buildable>
            );
          })}
        </div>

        <div>
          <p className="eyebrow">On the stores</p>
          <Buildable label="Heading / H3" className="mt-3 w-fit">
            <h3 className="font-display text-[clamp(44px,4.4vw,72px)]">
              Shipped.
              <br />
              <span className="text-accent">Live. Used.</span>
            </h3>
          </Buildable>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {shipped.map((s, i) => (
              <Buildable key={s.key} label={`Link / ${s.key}`} delay={i * 0.08}>
                <li>
                  <a href={s.play || s.ios} target="_blank" rel="noreferrer" className="group flex items-center justify-between py-4">
                    <span>
                      <span className="block text-[14px] font-semibold transition group-hover:text-accent">{s.title}</span>
                      <span className="text-[11px] text-white/45">{s.short}</span>
                    </span>
                    <span className="flex items-center gap-2 text-white/40">
                      {s.play && <StoreIcon store="play" className="h-3.5 w-3.5" />}
                      {s.ios && <StoreIcon store="ios" className="h-3.5 w-3.5" />}
                      <Arrow className="h-4 w-4 transition group-hover:rotate-45 group-hover:text-accent" />
                    </span>
                  </a>
                </li>
              </Buildable>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
