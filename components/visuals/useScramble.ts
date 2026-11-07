"use client";

import { useEffect, useState } from "react";

const GLYPHS = "{}<>/#=+*;:ABCDEFGHIJKLMNOPQRSTUVWXYZ01";

/**
 * Cycles through `words`, "decoding" into each one: characters flicker
 * through code-like glyphs and lock in left to right.
 * Starts with words[0] (so the static HTML is correct) and runs an intro decode.
 */
export function useScramble(words: string[], { hold = 3800, startDelay = 700 } = {}) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let index = 0;
    let timer = 0;
    let frame = 0;
    let cancelled = false;

    const decode = (target: string, done: () => void) => {
      const lockAt = Array.from(target, (_, i) => 6 + i * 3 + Math.floor(Math.random() * 4));
      const total = Math.max(...lockAt) + 1;
      let f = 0;
      const step = () => {
        if (cancelled) return;
        let out = "";
        for (let i = 0; i < target.length; i++) {
          out += f >= lockAt[i] ? target[i] : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        setText(out);
        f++;
        if (f <= total) frame = window.setTimeout(step, 38);
        else done();
      };
      step();
    };

    const next = () => {
      const target = words[index % words.length];
      decode(target, () => {
        if (words.length < 2) return;
        index++;
        timer = window.setTimeout(next, hold);
      });
    };

    timer = window.setTimeout(next, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      clearTimeout(frame);
    };
  }, [words, hold, startDelay]);

  return text;
}
