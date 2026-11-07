"use client";

import { useEffect, useRef } from "react";
import { AGENT_COLORS, useBuild } from "./BuildContext";

type Agent = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number;
  ty: number;
  color: string;
  retarget: number;
  phase: number;
  size: number;
};

const COUNT = 26;

/**
 * Colourful multiplayer-style cursors that wander the page like build agents.
 * - Idle: they wander and occasionally "work" on random spots.
 * - A section gets built: a squad rushes over to it.
 * - Mouse hovers still: they orbit the pointer in a ring.
 */
export default function AgentCursors() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { agentsOn, focus } = useBuild();
  const onRef = useRef(agentsOn);
  useEffect(() => {
    onRef.current = agentsOn;
  }, [agentsOn]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let alpha = 0;
    const mouse = { x: -9999, y: -9999, last: 0 };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const count = w < 768 ? 10 : COUNT;
    const agents: Agent[] = Array.from({ length: count }, (_, i) => {
      const x = rand(0, w);
      const y = rand(0, h);
      return {
        x,
        y,
        vx: 0,
        vy: 0,
        tx: x,
        ty: y,
        color: AGENT_COLORS[i % AGENT_COLORS.length],
        retarget: 0,
        phase: (i / count) * Math.PI * 2,
        size: rand(0.8, 1.15),
      };
    });

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.last = performance.now();
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.last = 0;
    };

    const drawCursor = (a: Agent) => {
      ctx.save();
      ctx.translate(a.x, a.y);
      ctx.rotate(Math.max(-0.45, Math.min(0.45, a.vx * 0.05)) - 0.1);
      ctx.scale(a.size, a.size);
      ctx.beginPath();
      // Classic pointer arrow, tip at (0,0)
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 13);
      ctx.lineTo(3.4, 9.8);
      ctx.lineTo(6.2, 15.2);
      ctx.lineTo(8.2, 14.2);
      ctx.lineTo(5.6, 9);
      ctx.lineTo(10, 9);
      ctx.closePath();
      ctx.fillStyle = a.color;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(0,0,0,0.6)";
      ctx.stroke();
      ctx.restore();
    };

    let t0 = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - t0) / 16.67, 3);
      t0 = now;
      const target = onRef.current ? 1 : 0;
      alpha += (target - alpha) * 0.08;
      ctx.clearRect(0, 0, w, h);

      if (alpha > 0.01) {
        const mouseActive = now - mouse.last < 2600 && mouse.x > -100;
        const f = focus.current;
        const focusActive = f && now - f.t < 1600;
        const ringR = 70 + Math.sin(now / 900) * 10;

        agents.forEach((a, i) => {
          if (mouseActive && i % 3 !== 0) {
            // Orbit the pointer
            const ang = a.phase + now / 1400;
            a.tx = mouse.x + Math.cos(ang) * ringR * (1 + (i % 4) * 0.12);
            a.ty = mouse.y + Math.sin(ang) * ringR * (1 + (i % 4) * 0.12);
          } else if (focusActive && i % 2 === 0) {
            a.tx = f.x + Math.cos(a.phase * 3) * 160;
            a.ty = f.y + Math.sin(a.phase * 3) * 70;
          } else if (now > a.retarget) {
            a.tx = rand(w * 0.05, w * 0.95);
            a.ty = rand(h * 0.12, h * 0.9);
            a.retarget = now + rand(1800, 5200);
          }

          const ax = (a.tx - a.x) * 0.0035;
          const ay = (a.ty - a.y) * 0.0035;
          a.vx = (a.vx + ax * dt) * 0.92;
          a.vy = (a.vy + ay * dt) * 0.92;
          // tiny jitter so they feel alive
          a.vx += Math.sin(now / 300 + a.phase * 7) * 0.02;
          a.vy += Math.cos(now / 340 + a.phase * 5) * 0.02;
          if (!reduce) {
            a.x += a.vx * dt;
            a.y += a.vy * dt;
          }
        });

        ctx.globalAlpha = alpha;
        agents.forEach(drawCursor);
        ctx.globalAlpha = 1;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [focus]);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-[60]" />;
}
