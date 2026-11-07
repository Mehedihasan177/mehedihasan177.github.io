"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import Buildable from "../build/Buildable";

const FILMS = [
  { key: "btv", label: "BTV E-Service" },
  { key: "m2m", label: "M2M Tracking" },
  { key: "dayexam", label: "DayExam" },
];

function Wireframe() {
  const box = "border border-white/20";
  return (
    <div className="absolute inset-0 grid grid-cols-[1fr_1.3fr] gap-[4%] bg-[#0c0c10] p-[6%]">
      <div className="flex flex-col gap-[6%]">
        <div className={`h-[10%] w-1/3 ${box}`} />
        <div className={`h-[8%] w-full bg-white/15`} />
        <div className={`h-[8%] w-4/5 bg-white/15`} />
        <div className={`h-[6%] w-3/5 bg-white/10`} />
        <div className={`mt-auto h-[12%] w-2/5 ${box}`} />
      </div>
      <div className="grid grid-cols-3 gap-[6%]">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`relative rounded-[14px] ${box}`}>
            <div className="absolute inset-x-[12%] top-[6%] h-[4%] bg-white/15" />
            <div className="absolute inset-[12%] top-[16%] bottom-[30%] bg-[linear-gradient(to_top_right,transparent_calc(50%-0.5px),rgba(255,255,255,.2)_50%,transparent_calc(50%+0.5px)),linear-gradient(to_top_left,transparent_calc(50%-0.5px),rgba(255,255,255,.2)_50%,transparent_calc(50%+0.5px))]" />
            <div className="absolute inset-x-[12%] bottom-[12%] h-[8%] rounded-full border border-white/20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [film, setFilm] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  // Wireframe → live wipe as the section scrolls into the centre
  const liveClip = useTransform(scrollYProgress, [0.45, 0.9], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  const scanX = useTransform(scrollYProgress, [0.45, 0.9], ["0%", "100%"]);
  const scanOpacity = useTransform(scrollYProgress, [0.44, 0.5, 0.86, 0.92], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [6, 0]);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [film]);

  return (
    <section id="showcase" ref={ref} className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.4fr]">
        <div>
          <p className="eyebrow mb-4">Where ideas take shape</p>
          <Buildable label="Heading / H2" className="w-fit">
            <h2 className="font-display text-[clamp(56px,7.5vw,120px)]">
              From
              <br />
              wireframe.
              <br />
              <span className="text-accent">To the store.</span>
            </h2>
          </Buildable>
          <Buildable label="Text / body" delay={0.2} className="mt-6">
            <p className="max-w-[340px] text-[13px] leading-relaxed text-white/60">
              Every app starts as grey boxes in Figma. I turn them into fast, secure Flutter apps on Android, iOS and
              desktop — then ship them to the Play Store and App Store.
            </p>
          </Buildable>
          <div className="mt-8 flex flex-wrap gap-2">
            {FILMS.map((f, i) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilm(i)}
                className={`rounded-full border px-4 py-2 text-[12px] transition ${
                  film === i ? "border-accent bg-accent text-white" : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div style={{ rotateX: rotate, transformPerspective: 1400 }} className="relative">
          <Buildable label="Frame / App film — 1280" className="rounded-2xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c10] shadow-[0_40px_120px_-30px_rgb(var(--accent-rgb)/0.45)]">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
                {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                  <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
                ))}
                <span className="ml-4 rounded-md bg-white/5 px-3 py-0.5 text-[10px] text-white/40">
                  {FILMS[film].key}_app_film.mp4
                </span>
              </div>
              <div className="relative aspect-video">
                <Wireframe />
                <motion.div style={{ clipPath: liveClip }} className="absolute inset-0 bg-black">
                  <video
                    ref={videoRef}
                    key={FILMS[film].key}
                    className="h-full w-full object-cover"
                    src={asset(`web/video/${FILMS[film].key}.mp4`)}
                    poster={asset(`web/video/${FILMS[film].key}-poster.webp`)}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                  />
                </motion.div>
                <motion.div
                  style={{ left: scanX, opacity: scanOpacity }}
                  className="pointer-events-none absolute inset-y-0 w-px bg-blue shadow-[0_0_20px_4px_rgba(47,123,255,0.7)]"
                />
              </div>
            </div>
          </Buildable>
          <p className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.18em] text-white/35">
            <span>Figma → Flutter → Store</span>
            <span>Scroll to render</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
