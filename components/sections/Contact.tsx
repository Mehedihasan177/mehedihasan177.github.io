"use client";

import { useRef, useState } from "react";
import { contact, contactEmail, site } from "@/data/site";
import { asset } from "@/lib/asset";
import Buildable from "../build/Buildable";
import Portrait from "../visuals/Portrait";
import { Arrow, ContactGlyph } from "../visuals/Icons";
import { Eyebrow } from "./Work";
import { Logo } from "./Header";

export default function Contact() {
  const [msg, setMsg] = useState("");
  const [playing, setPlaying] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const form = contact.find((c) => c.icon === "form");

  // No backend: the message opens the visitor's own mail app, pre-filled.
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(msg || "Hi Mehedi! I'd like to talk about an app.");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent("New project enquiry")}&body=${body}`;
  };

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-[1440px] px-5 pt-24 md:px-10 md:pt-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr_1.1fr] lg:items-center">
        <div>
          <Eyebrow n="04">Your next project</Eyebrow>
          <Buildable label="Heading / H2" className="w-fit">
            <h2 className="font-display text-[clamp(56px,6vw,100px)]">
              Let&apos;s build
              <br />
              together<span className="text-accent">.</span>
            </h2>
          </Buildable>
          <p className="mt-5 max-w-[320px] text-[13px] leading-relaxed text-white/60">
            Ready to bring your mobile app idea to life? I&apos;d love to hear about your project.
          </p>
          <a
            href={form?.href ?? `mailto:${contactEmail}`}
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-accent"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-accent transition group-hover:bg-accent group-hover:text-white">
              <Arrow className="h-3.5 w-3.5" />
            </span>
            Start a conversation
          </a>
        </div>

        <ul className="divide-y divide-line">
          {contact.map((c, i) => {
            const href = asset(c.href);
            const external = !href.startsWith("mailto:");
            return (
              <Buildable key={c.label} label={`Link / ${c.label}`} delay={i * 0.08}>
                <li>
                  <a href={href} target={external ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-4 py-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                      <ContactGlyph icon={c.icon} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] uppercase tracking-[0.16em] text-white/40">{c.label}</span>
                      <span className="block truncate text-[13px] font-semibold">{c.value}</span>
                    </span>
                    <Arrow className="h-3.5 w-3.5 text-white/30 transition group-hover:translate-x-1 group-hover:text-accent" dir="right" />
                  </a>
                </li>
              </Buildable>
            );
          })}
        </ul>

        <Buildable label="Video / btv.mp4" skeleton delay={0.2} className="rounded-xl">
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0e0a1f] to-[#0b0b10]">
            <video
              ref={video}
              src={asset("web/video/btv.mp4")}
              poster={asset("web/video/btv-poster.webp")}
              playsInline
              preload="none"
              onEnded={() => setPlaying(false)}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${playing ? "opacity-100" : "opacity-0"}`}
            />
            <div className={`transition-opacity duration-500 ${playing ? "pointer-events-none opacity-0" : "opacity-100"}`}>
              <span className="absolute left-5 top-4 text-[10px] font-bold text-white/70">{site.fullName}</span>
              <span className="absolute left-[30%] right-[20%] top-4 h-3 rounded-full bg-[var(--duo-left)]/80" />
              <div className="absolute bottom-[12%] left-[32%] h-[86%] w-[44%]">
                <Portrait className="h-full w-full" tone={0.95} />
              </div>
              <div className="absolute bottom-0 left-[64%] top-0 w-[3%] bg-accent shadow-[0_0_30px_8px_rgb(var(--accent-rgb)/0.6)]" />
              <p className="font-display absolute left-5 top-[28%] text-[clamp(30px,3.4vw,52px)] text-white">
                Build
                <br />
                <span className="text-accent">smarter.</span>
              </p>
              <p className="font-wide absolute right-4 top-[28%] text-right text-[clamp(12px,1.3vw,20px)] leading-tight text-white/45">
                Flutter.
                <br />
                iOS · Android.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-[12%] bg-[#d9d6cf]/80" />
            </div>
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pause film" : "Play film"}
              className="absolute bottom-[16%] right-5 grid h-11 w-11 place-items-center rounded-full bg-accent text-white shadow-lg transition hover:scale-110"
            >
              {playing ? (
                <svg width="12" height="12" viewBox="0 0 10 10" fill="currentColor"><rect x="1.5" y="1" width="2.5" height="8" /><rect x="6" y="1" width="2.5" height="8" /></svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 10 10" fill="currentColor"><path d="M2 1l7 4-7 4z" /></svg>
              )}
            </button>
          </div>
        </Buildable>
      </div>

      <form onSubmit={send} className="mt-16 flex items-center gap-4 border-y border-line py-5">
        <label htmlFor="msg" className="sr-only">
          Tell me about your project
        </label>
        <input
          id="msg"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Tell me about your project"
          className="flex-1 bg-transparent text-[15px] font-semibold text-white outline-none placeholder:text-white/70"
        />
        <button type="submit" aria-label="Send" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white transition hover:bg-accent">
          <Arrow className="h-4 w-4" dir="right" />
        </button>
      </form>

      <footer className="flex flex-wrap items-center justify-between gap-4 py-8 pb-24 text-[11px] text-white/40">
        <Logo />
        <span>
          © {new Date().getFullYear()} {site.fullName}. Built with a Flutter mindset.
        </span>
        <a href="#top" className="flex items-center gap-2 uppercase tracking-[0.18em] hover:text-white">
          Back to top
          <Arrow className="h-3 w-3" dir="up-right" />
        </a>
      </footer>
    </section>
  );
}
