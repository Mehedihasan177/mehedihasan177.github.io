"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

export const AGENT_COLORS = [
  "#ff4d5e",
  "#ffb020",
  "#3ddc84",
  "#2f9bff",
  "#b06bff",
  "#ff6ad5",
  "#30e0d0",
  "#ffe14d",
  "#7cf29a",
  "#ff8a3d",
  "#7aa8ff",
  "#e0e0e0",
];

type BuildState = {
  total: number;
  built: number;
  register: () => () => void;
  markBuilt: () => void;
  agentsOn: boolean;
  setAgentsOn: (v: boolean) => void;
  /** Viewport point that agents should rush to (a section currently being built). */
  focus: React.MutableRefObject<{ x: number; y: number; t: number } | null>;
};

const Ctx = createContext<BuildState | null>(null);

// Base layer count so the counter reads like a real document (e.g. 128 / 200).
const BASE_LAYERS = 72;

export function BuildProvider({ children }: { children: React.ReactNode }) {
  const [total, setTotal] = useState(BASE_LAYERS);
  const [built, setBuilt] = useState(Math.round(BASE_LAYERS * 0.6));
  const [agentsOn, setAgentsOn] = useState(true);
  const focus = useRef<{ x: number; y: number; t: number } | null>(null);

  const register = useCallback(() => {
    setTotal((t) => t + 4);
    return () => setTotal((t) => t - 4);
  }, []);

  const markBuilt = useCallback(() => setBuilt((b) => b + 4), []);

  const value = useMemo(
    () => ({ total, built: Math.min(built, total), register, markBuilt, agentsOn, setAgentsOn, focus }),
    [total, built, register, markBuilt, agentsOn],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useBuild() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useBuild must be used inside <BuildProvider>");
  return v;
}
