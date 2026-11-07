"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Project } from "@/data/site";
import { asset } from "@/lib/asset";
import { Arrow, StoreIcon } from "../visuals/Icons";

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [zoom, setZoom] = useState<string | null>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoom) setZoom(null);
        else onClose();
      }
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, zoom, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] overflow-y-auto overscroll-contain bg-black/80 backdrop-blur-md"
          data-lenis-prevent
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative mx-auto my-6 w-[min(1100px,calc(100%-24px))] rounded-2xl border border-white/10 bg-[#0e0e13] md:my-12"
          >
            {/* header */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-2xl border-b border-white/10 bg-[#0e0e13]/95 p-5 backdrop-blur md:p-7">
              <div>
                <p className="eyebrow">{project.platform}</p>
                <h3 className="font-wide mt-1 text-[clamp(22px,3vw,38px)] leading-none">{project.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                {project.play && (
                  <a href={project.play} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-black transition hover:bg-accent hover:text-white sm:flex">
                    <StoreIcon store="play" /> Google Play
                  </a>
                )}
                {project.ios && (
                  <a href={project.ios} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[12px] font-semibold transition hover:border-accent hover:bg-accent sm:flex">
                    <StoreIcon store="ios" /> App Store
                  </a>
                )}
                <button type="button" onClick={onClose} aria-label="Close" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-xl transition hover:bg-accent">
                  ×
                </button>
              </div>
            </div>

            <div className="space-y-10 p-5 md:p-7">
              {project.video && (
                <video
                  className="aspect-video w-full rounded-xl bg-black"
                  src={asset(`web/video/${project.video}.mp4`)}
                  poster={asset(`web/video/${project.video}-poster.webp`)}
                  controls
                  playsInline
                  preload="metadata"
                />
              )}

              <div>
                <p className="eyebrow mb-4">Screens</p>
                <div
                  className={`grid gap-3 ${
                    project.wideGallery ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
                  }`}
                >
                  {project.gallery.map((g, i) => (
                    <motion.button
                      type="button"
                      key={g}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.06 }}
                      onClick={() => setZoom(g)}
                      className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:border-accent"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={asset(g)} alt={`${project.title} screen ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="eyebrow mb-3">Overview</p>
                  <p className="text-[14px] leading-relaxed text-white/70">{project.description}</p>
                  <p className="eyebrow mb-3 mt-8">Key features</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-[13px] text-white/75">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-3">Built with</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/75">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 sm:hidden">
                    {project.play && (
                      <a href={project.play} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-black">
                        <StoreIcon store="play" /> Google Play
                      </a>
                    )}
                    {project.ios && (
                      <a href={project.ios} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[12px] font-semibold">
                        <StoreIcon store="ios" /> App Store
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {project.roles && (
                <div>
                  <p className="eyebrow mb-4">User roles</p>
                  <div className="grid gap-3 md:grid-cols-3">
                    {project.roles.map((r) => (
                      <div key={r.name} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                        <p className="text-[14px] font-bold">{r.name}</p>
                        <p className="mt-2 text-[12px] leading-relaxed text-white/55">{r.description}</p>
                        <ul className="mt-4 space-y-1.5">
                          {r.features.map((f) => (
                            <li key={f} className="flex gap-2 text-[12px] text-white/70">
                              <Arrow className="mt-0.5 h-3 w-3 shrink-0 text-accent" dir="right" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <AnimatePresence>
            {zoom && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[90] grid place-items-center bg-black/90 p-4"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom(null);
                }}
              >
                { }
                <motion.img
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  src={asset(zoom)}
                  alt=""
                  className="max-h-[92vh] max-w-full rounded-xl object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
