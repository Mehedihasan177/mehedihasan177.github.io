"use client";

/**
 * App playground — interactive 3D phone (ported from the previous portfolio).
 * - Phone tilts with the mouse, bobs, and spins + blurs when switching apps.
 * - Home screen shows app tiles; each app shows an auto-playing screenshot reel.
 * - Glass tech chips + orbs float around, dodge the cursor, get sucked into the
 *   phone on switch and burst back out showing that app's tech stack.
 * - Section glow re-colours per app.
 */

import { animate, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { phoneApps, phoneHome, site, type PhoneApp } from "@/data/site";
import { asset } from "@/lib/asset";

const ALL = [phoneHome, ...phoneApps];
const byKey = (k: string) => ALL.find((a) => a.key === k) ?? phoneHome;

// Chip / orb layout around the phone column (percent of the stage).
type ChipDef = { kind: "chip" | "orb"; top: number; left: number; big?: boolean; size?: number; hideSm?: boolean; alt?: boolean };
const FG: ChipDef[] = [
  { kind: "chip", top: 12, left: 12, big: true },
  { kind: "chip", top: 26, left: 74, big: true },
  { kind: "chip", top: 72, left: 14 },
  { kind: "chip", top: 62, left: 76, hideSm: true },
  { kind: "chip", top: 88, left: 44 },
  { kind: "chip", top: 4, left: 56, hideSm: true },
  { kind: "chip", top: 44, left: 4, hideSm: true },
  { kind: "orb", top: 50, left: 84, size: 56 },
  { kind: "orb", top: 34, left: 22, size: 32, hideSm: true, alt: true },
];
const BG: ChipDef[] = [
  { kind: "chip", top: 6, left: 28 },
  { kind: "chip", top: 80, left: 66, hideSm: true },
  { kind: "chip", top: 58, left: 6, hideSm: true },
  { kind: "orb", top: 16, left: 70, size: 46 },
  { kind: "orb", top: 86, left: 26, size: 28, hideSm: true, alt: true },
];

type ChipState = {
  bx: number; by: number; rx: number; ry: number;
  tilt: number; scale: number; opacity: number; dur: number; spin: number; isText: boolean;
};

const BACK_OUT = [0.34, 1.56, 0.64, 1] as const;
const SOFT_BACK = [0.3, 1.25, 0.6, 1] as const;

export default function AppPlayground() {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const chipEls = useRef<(HTMLDivElement | null)[]>([]);
  const chipState = useRef<ChipState[]>([]);
  const spin = useRef(0);
  const switching = useRef(false);

  const [active, setActive] = useState("home");
  const [screenKey, setScreenKey] = useState("home");
  const [chipTexts, setChipTexts] = useState<string[]>(phoneHome.chips);

  const allDefs = [...FG, ...BG];

  // ── init chip state (random bits only on the client) ──
  useEffect(() => {
    const durs = [5, 7, 6, 8, 5.5, 6.5, 9, 11, 10, 7.5];
    chipState.current = allDefs.map((d, i) => ({
      bx: 0, by: 0, rx: 0, ry: 0,
      tilt: (Math.random() - 0.5) * 16,
      scale: 1, opacity: 1,
      dur: durs[i % durs.length],
      spin: Math.random() * 360,
      isText: d.kind === "chip",
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── main loop: tilt, parallax, floating + cursor repel ──
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const mouse = { x: 0, y: 0, px: -9999, py: -9999 };
    const eased = { x: 0, y: 0 };
    let visible = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX / window.innerWidth - 0.5;
      mouse.y = e.clientY / window.innerHeight - 0.5;
      mouse.px = e.clientX;
      mouse.py = e.clientY;
    };
    const onLeave = () => {
      mouse.px = -9999;
      mouse.py = -9999;
    };
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
    if (sectionRef.current) io.observe(sectionRef.current);

    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      const t = performance.now() / 1000;
      eased.x += (mouse.x - eased.x) * 0.06;
      eased.y += (mouse.y - eased.y) * 0.06;
      if (phoneRef.current)
        phoneRef.current.style.transform = `rotateZ(-6deg) rotateY(${eased.x * 36 + spin.current}deg) rotateX(${-eased.y * 22}deg)`;
      if (fgRef.current) fgRef.current.style.transform = `translate(${eased.x * 60}px, ${eased.y * 60}px)`;
      if (bgRef.current) bgRef.current.style.transform = `translate(${eased.x * -30}px, ${eased.y * -30}px)`;

      chipState.current.forEach((c, i) => {
        const el = chipEls.current[i];
        if (!el) return;
        if (!switching.current) {
          const r = el.getBoundingClientRect();
          const dx = mouse.px - (r.left + r.width / 2);
          const dy = mouse.py - (r.top + r.height / 2);
          const dist = Math.hypot(dx, dy) || 1;
          let tx = 0;
          let ty = 0;
          let speed = 1;
          if (dist < 320) {
            const f = (320 - dist) / 320;
            tx = (dx / dist) * f * -90;
            ty = (dy / dist) * f * -90;
            speed = 1 + f * 5;
          }
          c.rx += (tx - c.rx) * 0.1;
          c.ry += (ty - c.ry) * 0.1;
          c.spin += 0.25 * speed;
        }
        const ph = (t + i * 0.7) * ((Math.PI * 2) / c.dur);
        const rot = c.isText ? c.tilt + Math.cos(ph) * 5 : c.spin;
        el.style.transform = `translate(${c.bx + c.rx}px, ${c.by + c.ry + Math.sin(ph) * 14}px) rotate(${rot}deg) scale(${c.scale})`;
        el.style.opacity = String(c.opacity);
      });
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  // ── switch the phone's app ──
  const switchTo = useCallback(
    (key: string) => {
      if (switching.current || key === active) return;
      const data = byKey(key);
      setActive(key);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        setScreenKey(key);
        setChipTexts(data.chips);
        return;
      }
      switching.current = true;

      // phone: spin out with blur → swap screen → spin in with overshoot
      const setBlur = (b: number) => floatRef.current && (floatRef.current.style.filter = b > 0.05 ? `blur(${b}px)` : "none");
      animate(0, 1, {
        duration: 0.6,
        ease: "easeIn",
        onUpdate: (p) => {
          spin.current = p * 360;
          setBlur(p * 12);
        },
        onComplete: () => {
          setScreenKey(key);
          animate(0, 1, {
            duration: 1.5,
            ease: SOFT_BACK,
            onUpdate: (p) => {
              spin.current = 360 + p * 360;
              setBlur((1 - p) * 12);
            },
            onComplete: () => {
              spin.current = 0;
              setBlur(0);
            },
          });
        },
      });

      // chips: get sucked into the phone, change text, burst back out
      const pr = phoneRef.current?.getBoundingClientRect();
      if (!pr) {
        switching.current = false;
        return;
      }
      const pcx = pr.left + pr.width / 2;
      const pcy = pr.top + pr.height / 2;
      let done = 0;
      window.setTimeout(() => setChipTexts(data.chips), 560);
      chipState.current.forEach((c, i) => {
        const el = chipEls.current[i];
        if (!el) {
          done++;
          return;
        }
        const r = el.getBoundingClientRect();
        const ox = r.left + r.width / 2 - (c.bx + c.rx);
        const oy = r.top + r.height / 2 - (c.by + c.ry);
        c.rx = 0;
        c.ry = 0;
        const from = { bx: c.bx, by: c.by, tilt: c.tilt };
        const to = { bx: pcx - ox, by: pcy - oy, tilt: c.tilt + 60 };
        animate(0, 1, {
          duration: 0.5,
          delay: i * 0.015,
          ease: "easeIn",
          onUpdate: (p) => {
            c.bx = from.bx + (to.bx - from.bx) * p;
            c.by = from.by + (to.by - from.by) * p;
            c.tilt = from.tilt + (to.tilt - from.tilt) * p;
            c.scale = 1 - 0.9 * p;
            c.opacity = 1 - p;
          },
          onComplete: () => {
            const start = { bx: c.bx, by: c.by, tilt: c.tilt };
            const end = { bx: (Math.random() - 0.5) * 220, by: (Math.random() - 0.5) * 220, tilt: (Math.random() - 0.5) * 16 };
            animate(0, 1, {
              duration: 0.9,
              delay: 0.3,
              ease: BACK_OUT,
              onUpdate: (p) => {
                c.bx = start.bx + (end.bx - start.bx) * p;
                c.by = start.by + (end.by - start.by) * p;
                c.tilt = start.tilt + (end.tilt - start.tilt) * p;
                c.scale = 0.1 + 0.9 * p;
                c.opacity = Math.min(1, p * 1.4);
              },
              onComplete: () => {
                if (++done >= chipState.current.length) switching.current = false;
              },
            });
          },
        });
      });
    },
    [active],
  );

  let textIdx = 0;
  const renderLayer = (defs: ChipDef[], offset: number, layer: "fg" | "bg") =>
    defs.map((d, j) => {
      const i = offset + j;
      if (d.kind === "orb") {
        return (
          <div
            key={i}
            ref={(el) => {
              chipEls.current[i] = el;
            }}
            className={`absolute rounded-full will-change-transform ${d.hideSm ? "hidden md:block" : ""}`}
            style={{
              top: `${d.top}%`,
              left: `${d.left}%`,
              width: d.size,
              height: d.size,
              opacity: layer === "bg" ? 0.75 : 1,
              background: d.alt
                ? "radial-gradient(circle at 30% 28%, #fff 0 6%, var(--duo-left) 24%, #0b6f86 60%, #04161d 100%)"
                : "radial-gradient(circle at 30% 28%, #fff 0 6%, var(--accent-light) 20%, var(--accent) 48%, var(--accent-deep) 100%)",
              boxShadow: "0 20px 40px rgba(0,0,0,.4)",
            }}
          />
        );
      }
      const text = chipTexts[textIdx++ % chipTexts.length];
      return (
        <div
          key={i}
          ref={(el) => {
            chipEls.current[i] = el;
          }}
          className={`absolute whitespace-nowrap border border-white/25 font-mono font-semibold text-white will-change-transform [backdrop-filter:blur(8px)] ${
            d.hideSm ? "hidden md:block" : ""
          } ${
            layer === "bg"
              ? "rounded-2xl px-3 py-1.5 text-[11px] opacity-50 blur-[0.6px]"
              : d.big
                ? "rounded-2xl px-3 py-1.5 text-[12px] md:rounded-[20px] md:px-5 md:py-3 md:text-[17px]"
                : "rounded-xl px-2.5 py-1 text-[11px] md:rounded-2xl md:px-4 md:py-2 md:text-[13px]"
          }`}
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            background: "linear-gradient(135deg, rgba(255,255,255,.2), rgba(255,255,255,.05))",
            boxShadow: "0 14px 30px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.3)",
          }}
        >
          {text}
        </div>
      );
    });

  const app = byKey(screenKey);

  return (
    <section id="apps" ref={sectionRef} className="relative overflow-hidden py-20 md:py-28">
      {/* per-app background glow (cross-fades) */}
      {ALL.map((a) => (
        <div
          key={a.key}
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-[1500ms]"
          style={{
            opacity: active === a.key ? 1 : 0,
            background: `radial-gradient(60% 55% at 38% 52%, ${a.colors[0]} 0%, ${a.colors[1]} 40%, ${a.colors[2]} 72%, var(--bg) 100%)`,
          }}
        />
      ))}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      <Bubbles />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <p className="eyebrow mb-3">
          <span className="text-white/80">Live demo</span> / App playground
        </p>
        <h2 className="font-wide text-[clamp(28px,4.2vw,60px)] leading-none">Apps in your hand.</h2>

        <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          {/* Stage: phone + floating chips */}
          <div className="relative h-[620px] md:h-[720px]">
            <div ref={bgRef} aria-hidden className="pointer-events-none absolute inset-0 z-[1]">
              {renderLayer(BG, FG.length, "bg")}
            </div>

            <div className="absolute inset-0 z-[2] grid place-items-center">
              <div className="pointer-events-none absolute h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgb(var(--accent-rgb)/0.22)_0%,transparent_65%)]" />
              <div ref={floatRef} className="animate-[bob_6s_ease-in-out_infinite] [perspective:1300px]">
                <div
                  ref={phoneRef}
                  className="relative h-[520px] w-[252px] md:h-[600px] md:w-[290px]"
                  style={{ transformStyle: "preserve-3d", transform: "rotateZ(-6deg)" }}
                >
                  {/* front */}
                  <div
                    className="absolute inset-0 rounded-[48px] bg-[#0b0d14] p-[11px] [backface-visibility:hidden]"
                    style={{ boxShadow: "0 40px 80px rgba(0,0,0,.55), inset 0 0 0 2px rgba(255,255,255,.12), inset 0 0 0 6px #1b1e27" }}
                  >
                    <div className="relative h-full overflow-hidden rounded-[38px] bg-gradient-to-b from-[#f7f8fc] to-[#e9ecf5] text-[12px] text-[#141726]">
                      <div className="absolute left-1/2 top-[9px] z-[5] h-[26px] w-[92px] -translate-x-1/2 rounded-[20px] bg-[#0b0d14]" />
                      {screenKey === "home" ? <HomeScreen onPick={switchTo} /> : <ShotsScreen app={app} onHome={() => switchTo("home")} />}
                    </div>
                  </div>
                  {/* back */}
                  <div
                    aria-hidden
                    className="absolute inset-0 grid place-items-center rounded-[48px] bg-gradient-to-br from-[#2b2f3b] to-[#12141b] [backface-visibility:hidden]"
                    style={{ transform: "rotateY(180deg)", boxShadow: "0 40px 80px rgba(0,0,0,.55), inset 0 0 0 2px rgba(255,255,255,.12)" }}
                  >
                    <div className="absolute left-[22px] top-[22px] grid h-[104px] w-[104px] grid-cols-2 gap-2 rounded-[30px] border border-white/10 bg-white/5 p-3">
                      {[0, 1, 2, 3].map((k) => (
                        <i key={k} className="rounded-full border-[3px] border-[#252836] bg-[radial-gradient(circle_at_35%_35%,#4a5068,#07080c_60%)]" />
                      ))}
                    </div>
                    <span className="font-script text-6xl text-accent">MH</span>
                  </div>
                </div>
              </div>
            </div>

            <div ref={fgRef} aria-hidden className="pointer-events-none absolute inset-0 z-[3]">
              {renderLayer(FG, 0, "fg")}
            </div>
          </div>

          {/* Picker + script */}
          <div className="flex flex-col gap-10 lg:items-end">
            <div>
              <p className="mb-3 text-[13px] text-white/60">Load a real app into the phone</p>
              <div className="no-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-2 lg:mx-0 lg:grid lg:grid-cols-[repeat(3,112px)] lg:overflow-visible lg:px-0">
                {ALL.map((a) => (
                  <button
                    key={a.key}
                    type="button"
                    onClick={() => switchTo(a.key)}
                    aria-pressed={active === a.key}
                    className={`flex w-[112px] shrink-0 flex-col items-start gap-1 rounded-2xl border p-3 text-left transition ${
                      active === a.key
                        ? "border-accent bg-accent/15 shadow-[0_0_30px_rgb(var(--accent-rgb)/0.35)]"
                        : "border-white/10 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.08]"
                    }`}
                  >
                    <span className="mb-1 grid h-8 w-8 place-items-center rounded-lg text-base" style={{ background: a.swatch }}>
                      {a.emoji}
                    </span>
                    <b className="text-[12px] font-semibold text-white">{a.label}</b>
                    <span className="text-[10px] text-white/45">{a.short}</span>
                  </button>
                ))}
              </div>
            </div>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-script hidden text-right text-[clamp(52px,6vw,96px)] leading-[1] text-white drop-shadow-[0_10px_40px_rgb(var(--accent-rgb)/0.45)] sm:block"
            >
              Flutter
              <br />
              <span className="text-accent-light">Developer</span>
            </motion.h3>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeScreen({ onPick }: { onPick: (k: string) => void }) {
  const items = [
    <div key="bar" className="flex items-center justify-between">
      <span className="text-[17px] font-extrabold tracking-tight">Hi, I&apos;m {site.shortName} 👋</span>
      <span className="rounded-full bg-[#141726] px-2.5 py-1 text-[10px] font-bold text-white">Flutter</span>
    </div>,
    <p key="sub" className="text-[11.5px] text-[#5b6075]">
      Tap an app to open real screenshots.
    </p>,
    <div key="grid" className="grid grid-cols-2 gap-[7px]">
      {phoneApps.map((a) => (
        <button
          key={a.key}
          type="button"
          onClick={() => onPick(a.key)}
          className="flex min-h-[64px] flex-col justify-between rounded-2xl p-2.5 text-left text-white shadow-[0_8px_18px_rgba(20,23,38,.18)] transition hover:scale-[1.04] md:min-h-[72px]"
          style={{ background: a.swatch }}
        >
          <span className="text-[17px]">{a.emoji}</span>
          <span>
            <b className="block text-[11.5px] leading-tight">{a.label}</b>
            <small className="text-[9.5px] opacity-80">{a.short}</small>
          </span>
        </button>
      ))}
    </div>,
    <div key="row" className="flex items-center justify-between rounded-[14px] bg-white px-3 py-2.5 text-[11px] font-semibold shadow-[0_4px_12px_rgba(20,23,38,.06)]">
      <span>Experience</span>
      <span className="font-extrabold text-[#0b8a78]">5+ years</span>
    </div>,
  ];
  return (
    <>
      <div className="absolute left-[26px] right-[26px] top-[13px] z-[4] flex justify-between text-[11px] font-bold">
        <span>9:41</span>
        <span>●●● 5G</span>
      </div>
      <div className="absolute inset-0 flex flex-col gap-2.5 overflow-hidden px-4 pb-4 pt-[46px]">
        {items.map((el, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {el}
          </motion.div>
        ))}
      </div>
    </>
  );
}

function ShotsScreen({ app, onHome }: { app: PhoneApp; onHome: () => void }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % app.gallery.length), 2400);
    return () => clearInterval(t);
  }, [app]);

  return (
    <div className="absolute inset-0 bg-[#0b0d14]">
      {app.gallery.map((g, k) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={g}
          src={asset(g)}
          alt={`${app.label} screenshot ${k + 1}`}
          loading={k ? "lazy" : "eager"}
          className="absolute inset-0 h-full w-full object-cover object-top"
          style={{
            opacity: k === i ? 1 : 0,
            transform: `scale(${k === i ? 1 : 1.04})`,
            transition: "opacity .7s ease, transform 2.6s ease",
          }}
        />
      ))}
      <button
        type="button"
        onClick={onHome}
        className="absolute bottom-9 left-1/2 z-[6] -translate-x-1/2 rounded-full bg-[#141726]/85 px-3 py-1 text-[10px] font-bold text-white backdrop-blur transition hover:bg-[#141726]"
      >
        ← All apps
      </button>
      <div className="absolute inset-x-0 bottom-3 z-[4] flex justify-center gap-[5px]">
        {app.gallery.map((_, k) => (
          <i
            key={k}
            className="h-1.5 rounded-full transition-all duration-400"
            style={{ width: k === i ? 18 : 6, background: k === i ? "#141726" : "rgba(20,23,38,.3)" }}
          />
        ))}
      </div>
    </div>
  );
}

function Bubbles() {
  // deterministic pseudo-random so server and client markup match
  const list = Array.from({ length: 16 }, (_, i) => {
    const r = (n: number) => ((Math.sin(i * 9301 + n * 49297) + 1) / 2) % 1;
    return { left: r(1) * 100, size: 4 + r(2) * 14, dur: 9 + r(3) * 10, delay: -r(4) * 18 };
  });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {list.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-[-30px] rounded-full border border-white/20 bg-white/5"
          style={{ left: `${b.left}%`, width: b.size, height: b.size, animation: `rise ${b.dur}s linear ${b.delay}s infinite` }}
        />
      ))}
    </div>
  );
}
