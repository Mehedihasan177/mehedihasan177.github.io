"use client";

import { motion } from "framer-motion";
import { about, site, tools } from "@/data/site";
import { asset } from "@/lib/asset";
import Buildable from "../build/Buildable";
import { BrandIcon } from "../visuals/Icons";
import { Eyebrow } from "./Work";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <Eyebrow n="02">Behind the craft</Eyebrow>
          <Buildable label="Heading / H2" className="w-fit">
            <h2 className="font-display text-[clamp(48px,6.4vw,104px)]">
              More than code.
              <br />
              Crafting <span className="text-accent">experiences.</span>
            </h2>
          </Buildable>
        </div>
        <Buildable label="Text / intro" delay={0.2} className="self-end">
          <p className="text-[13px] leading-relaxed text-white/60">{about.intro}</p>
        </Buildable>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_1fr_0.8fr]">
        {/* Expertise */}
        <div>
          <h3 className="font-wide text-[13px]">Expertise &amp; skills</h3>
          <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Education &amp; learning</p>
          <div className="mt-3 divide-y divide-line">
            {about.learning.map((l, i) => (
              <Buildable key={l.title} label={`Row / ${i + 1}`} delay={i * 0.12}>
                <div className="flex items-center gap-4 py-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-lg bg-white p-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset(l.logo)} alt="" className="h-full w-full object-contain" loading="lazy" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold">{l.title}</p>
                    <p className="text-[12px] text-white/50">{l.desc}</p>
                  </div>
                  <span className="shrink-0 text-[10px] uppercase tracking-wider text-accent">{l.year}</span>
                </div>
              </Buildable>
            ))}
          </div>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Creative &amp; tech toolkit</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {about.toolkit.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/75 transition hover:border-accent hover:text-white"
              >
                {t}
              </motion.span>
            ))}
          </div>
          <div className="mt-6 flex gap-4 text-white/60">
            {tools.slice(0, 8).map((t) => (
              <BrandIcon key={t} name={t} className="h-4 w-4" />
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <h3 className="font-wide text-[13px]">From concept to launch</h3>
          <ol className="mt-5 space-y-1">
            {about.process.map((p, i) => (
              <Buildable key={p.title} label={`Step / ${p.title}`} delay={i * 0.12}>
                <li className="group flex gap-4 rounded-lg p-2 transition hover:bg-white/[0.03]">
                  <span className="font-display text-[22px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-accent transition group-hover:bg-accent" />
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-wider">{p.title}</p>
                    <p className="text-[12px] leading-snug text-white/50">{p.desc}</p>
                  </div>
                </li>
              </Buildable>
            ))}
          </ol>
        </div>

        {/* Red quote card */}
        <Buildable label="Card / quote" skeleton delay={0.3} className="h-full rounded-xl">
          <div className="relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-xl bg-gradient-to-br from-[var(--accent)] via-[var(--accent-mid)] to-[var(--accent-deep)] p-7">
            <span className="font-display text-[56px] leading-none text-white/25">&ldquo;</span>
            <p className="relative z-10 mt-4 text-[clamp(24px,2.2vw,32px)] font-medium leading-[1.1] tracking-tight text-white">
              {about.quote.map((l, i) => (
                <span key={i} className={`block ${i >= 2 ? "text-white/70" : ""}`}>
                  {l}
                </span>
              ))}
            </p>
            <p className="font-script relative z-10 mt-5 text-4xl text-white">{site.shortName}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(site.portrait)}
              alt=""
              className="pointer-events-none absolute -bottom-2 -right-10 h-[62%] object-contain opacity-30 mix-blend-luminosity"
            />
            <div className="relative z-10 mt-auto pt-10 text-[10px] uppercase tracking-[0.18em] text-white/80">
              <b className="block text-white">{site.fullName}</b>
              {site.title}
              <br />
              {site.company}
            </div>
          </div>
        </Buildable>
      </div>
    </section>
  );
}
