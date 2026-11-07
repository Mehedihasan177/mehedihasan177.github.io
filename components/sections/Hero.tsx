"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/data/site";
import Portrait from "../visuals/Portrait";
import Buildable from "../build/Buildable";
import { Arrow } from "../visuals/Icons";
import { useScramble } from "../visuals/useScramble";

const ease = [0.22, 1, 0.36, 1] as const;

// One size for every word (based on the longest) so the height never jumps while rotating.
const longest = Math.max(...site.heroWords.map((w) => w.length));
const wordSize = `min(${Math.min((24 * 9) / longest, 30).toFixed(2)}vw, 64vh)`;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const wordY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const word = useScramble(site.heroWords);

  return (
    <section id="top" ref={ref} className="grain relative min-h-[100svh] overflow-hidden md:h-[100svh] md:min-h-[640px]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_60%_40%,rgb(var(--accent-rgb)/0.18),transparent_70%)]" />

      {/* Giant background word(s) — decodes and rotates through site.heroWords */}
      <motion.div style={{ y: wordY }} className="absolute inset-x-0 top-[92px] flex justify-center md:top-[11%]">
        <Buildable label={`Text / ${site.heroWords[0]}`} delay={0.1}>
          <h2 aria-hidden className="portfolio-word font-display select-none whitespace-nowrap leading-[0.8]" style={{ fontSize: wordSize }}>
            {word}
          </h2>
        </Buildable>
      </motion.div>

      {/* Portrait */}
      <motion.div
        style={{ y: portraitY }}
        className="absolute left-1/2 top-[110px] aspect-[577/1000] h-[400px] -translate-x-1/2 md:bottom-0 md:top-auto md:h-[88%] md:-translate-x-[38%]"
      >
        {/* soft glow behind the photo (kept outside Buildable so its clip doesn't cut it into a box) */}
        <div aria-hidden className="pointer-events-none absolute -inset-x-1/2 -inset-y-[10%] bg-[radial-gradient(closest-side,rgb(var(--accent-rgb)/0.28),transparent)]" />
        <Buildable label="Image / profile.webp" skeleton delay={0.5} className="h-full">
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease }}
            className="h-full origin-bottom [mask-image:linear-gradient(to_bottom,#000_55%,transparent_96%)] md:[mask-image:linear-gradient(to_bottom,#000_76%,transparent)]"
          >
            <Portrait className="h-full w-full" />
          </motion.div>
        </Buildable>
      </motion.div>

      {/* Outline copy of the word IN FRONT of the photo — gives the "standing inside the type" depth */}
      <motion.div
        aria-hidden
        style={{ y: wordY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.2 }}
        className="pointer-events-none absolute inset-x-0 top-[92px] flex justify-center md:top-[11%]"
      >
        <h2
          className="font-display select-none whitespace-nowrap leading-[0.8] text-transparent [-webkit-text-stroke:1.5px_rgb(255_255_255/0.28)]"
          style={{ fontSize: wordSize }}
        >
          {word}
        </h2>
      </motion.div>

      {/* Left column */}
      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col justify-start px-5 pb-28 pt-[440px] md:h-full md:justify-center md:px-10 md:pb-0 md:pt-10"
      >
        <div className="max-w-[440px]">
          <Buildable label="Text / greeting" delay={0.3}>
            <p className="font-script -mb-2 -rotate-3 text-[clamp(28px,4.4vw,64px)] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,.6)]">
              Hello, I&apos;m
            </p>
          </Buildable>
          <Buildable label="Heading / name" delay={0.45}>
            <h1 className="font-display text-[clamp(64px,10vw,150px)] text-white drop-shadow-[0_8px_40px_rgba(0,0,0,.6)]">
              {site.firstName}
              <span className="text-accent">.</span>
            </h1>
          </Buildable>
          <Buildable label="Text / role" delay={0.6} className="mt-3 w-fit">
            <p className="font-wide text-[clamp(14px,1.5vw,20px)] leading-[1.05] text-accent">
              {site.role[0]}
              <br />
              {site.role[1]}
            </p>
          </Buildable>
          <Buildable label="Text / bio" delay={0.75} className="mt-5">
            <p className="max-w-[300px] text-[13px] leading-relaxed text-white/70">
              {site.bio.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Buildable>
          <Buildable label="Button / CTA" delay={0.9} className="mt-6 w-fit">
            <a
              href="#work"
              className="group flex items-center gap-6 rounded-[4px] bg-accent px-5 py-3 text-[13px] font-semibold text-white shadow-[0_10px_40px_-10px_rgb(var(--accent-rgb)/0.8)] transition hover:bg-white hover:text-black"
            >
              See my work
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" dir="right" />
            </a>
          </Buildable>
          <div className="mt-7 grid grid-cols-3 gap-3 border-t border-line pt-5 md:hidden">
            {site.stats.map((st) => (
              <div key={st.label}>
                <span className="font-display block text-[34px] leading-none text-accent">{st.value}</span>
                <span className="mt-1 block whitespace-pre-line text-[9px] uppercase leading-tight tracking-wider text-white/55">{st.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Based in {site.location}
          </p>
        </div>
      </motion.div>

      {/* Right column — stats */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute right-5 top-1/2 z-10 hidden -translate-y-[10%] flex-col gap-6 md:right-10 md:flex"
      >
        {site.available && (
          <div className="flex items-center gap-2 text-[11px] leading-tight text-white/70">
            <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
            Freelance
            <br />
            available
          </div>
        )}
        {site.stats.map((s, i) => (
          <Buildable key={s.label} label={`Stat / ${i + 1}`} delay={1 + i * 0.15}>
            <div className="flex items-center gap-4">
              <span className="font-display w-[90px] text-right text-[44px] text-accent">{s.value}</span>
              <span className="whitespace-pre-line text-[10px] uppercase leading-tight tracking-wider text-white/60">{s.label}</span>
            </div>
          </Buildable>
        ))}
      </motion.div>

      {/* Bottom bar */}
      <div className="absolute inset-x-0 bottom-6 z-10 mx-auto flex max-w-[1440px] items-center justify-between px-5 text-[10px] uppercase tracking-[0.2em] text-white/50 md:px-10">
        <a href="#showcase" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-accent/60 text-accent transition group-hover:bg-accent group-hover:text-white">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M2 1l7 4-7 4z" /></svg>
          </span>
          <span className="hidden sm:block">
            <b className="block text-white/80">Watch app films</b>3 videos
          </span>
        </a>
        <span className="flex items-center gap-2">
          Scroll to explore
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <Arrow className="h-3 w-3" dir="down" />
          </motion.span>
        </span>
        <span className="hidden sm:block">Currently at {site.company}</span>
      </div>
    </section>
  );
}
