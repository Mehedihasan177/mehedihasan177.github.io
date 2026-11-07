"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { site } from "@/data/site";
import { asset } from "@/lib/asset";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`font-display text-[22px] tracking-wide text-white ${className}`} aria-label="Home">
      {site.firstName}
      <span className="text-accent">.</span>
    </a>
  );
}

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/75 backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-10">
        <Logo />
        <nav className="hidden items-center gap-9 md:flex">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="group relative text-[13px] text-white/75 transition hover:text-white">
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-4">
          {site.available && (
            <span className="hidden items-center gap-2 text-[11px] text-white/60 lg:flex">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for work
            </span>
          )}
          <a
            href={asset(site.cv)}
            target="_blank"
            rel="noreferrer"
            className="hidden text-[12px] font-medium text-white/70 transition hover:text-white sm:inline-block"
          >
            My CV
          </a>
          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 px-4 py-1.5 text-[12px] font-medium text-white transition hover:border-accent hover:bg-accent sm:inline-block"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-[2px] w-5 bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-[2px] w-5 bg-white transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-bg/95 px-5 py-4 backdrop-blur md:hidden">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-display py-2 text-3xl">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  );
}
