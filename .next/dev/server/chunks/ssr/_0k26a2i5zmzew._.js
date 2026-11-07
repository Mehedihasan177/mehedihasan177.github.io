module.exports = [
"[project]/components/SmoothScroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function SmoothScroll() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            lerp: 0.09,
            anchors: {
                offset: -64
            }
        });
        let raf = 0;
        const loop = (t)=>{
            lenis.raf(t);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return ()=>{
            cancelAnimationFrame(raf);
            lenis.destroy();
        };
    }, []);
    return null;
}
}),
"[project]/components/build/AgentCursors.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgentCursors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$BuildContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/build/BuildContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const COUNT = 26;
function AgentCursors() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { agentsOn, focus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$BuildContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuild"])();
    const onRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(agentsOn);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onRef.current = agentsOn;
    }, [
        agentsOn
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let w = 0;
        let h = 0;
        let dpr = 1;
        let raf = 0;
        let alpha = 0;
        const mouse = {
            x: -9999,
            y: -9999,
            last: 0
        };
        const resize = ()=>{
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
        const rand = (a, b)=>a + Math.random() * (b - a);
        const count = w < 768 ? 10 : COUNT;
        const agents = Array.from({
            length: count
        }, (_, i)=>{
            const x = rand(0, w);
            const y = rand(0, h);
            return {
                x,
                y,
                vx: 0,
                vy: 0,
                tx: x,
                ty: y,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$BuildContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AGENT_COLORS"][i % __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$BuildContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AGENT_COLORS"].length],
                retarget: 0,
                phase: i / count * Math.PI * 2,
                size: rand(0.8, 1.15)
            };
        });
        const onMove = (e)=>{
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.last = performance.now();
        };
        const onLeave = ()=>{
            mouse.x = -9999;
            mouse.last = 0;
        };
        const drawCursor = (a)=>{
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
        const tick = (now)=>{
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
                agents.forEach((a, i)=>{
                    if (mouseActive && i % 3 !== 0) {
                        // Orbit the pointer
                        const ang = a.phase + now / 1400;
                        a.tx = mouse.x + Math.cos(ang) * ringR * (1 + i % 4 * 0.12);
                        a.ty = mouse.y + Math.sin(ang) * ringR * (1 + i % 4 * 0.12);
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
        window.addEventListener("pointermove", onMove, {
            passive: true
        });
        document.addEventListener("pointerleave", onLeave);
        return ()=>{
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onMove);
            document.removeEventListener("pointerleave", onLeave);
        };
    }, [
        focus
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        "aria-hidden": true,
        className: "pointer-events-none fixed inset-0 z-[60]"
    }, void 0, false, {
        fileName: "[project]/components/build/AgentCursors.tsx",
        lineNumber: 171,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/build/BuildContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AGENT_COLORS",
    ()=>AGENT_COLORS,
    "BuildProvider",
    ()=>BuildProvider,
    "useBuild",
    ()=>useBuild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const AGENT_COLORS = [
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
    "#e0e0e0"
];
const Ctx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
// Base layer count so the counter reads like a real document (e.g. 128 / 200).
const BASE_LAYERS = 72;
function BuildProvider({ children }) {
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(BASE_LAYERS);
    const [built, setBuilt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Math.round(BASE_LAYERS * 0.6));
    const [agentsOn, setAgentsOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const focus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setTotal((t)=>t + 4);
        return ()=>setTotal((t)=>t - 4);
    }, []);
    const markBuilt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setBuilt((b)=>b + 4), []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            total,
            built: Math.min(built, total),
            register,
            markBuilt,
            agentsOn,
            setAgentsOn,
            focus
        }), [
        total,
        built,
        register,
        markBuilt,
        agentsOn
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Ctx.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/build/BuildContext.tsx",
        lineNumber: 54,
        columnNumber: 10
    }, this);
}
function useBuild() {
    const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(Ctx);
    if (!v) throw new Error("useBuild must be used inside <BuildProvider>");
    return v;
}
}),
"[project]/components/build/BuildToolbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuildToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$BuildContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/build/BuildContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function BuildToolbar() {
    const { total, built: builtRaw, agentsOn, setAgentsOn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$BuildContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuild"])();
    // Reaching the end of the page ships the whole document (some layers,
    // like off-screen carousel cards, may never scroll into view).
    const [reachedEnd, setReachedEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollYProgress, "change", (v)=>{
        if (v > 0.985 && !reachedEnd) setReachedEnd(true);
    });
    const built = reachedEnd ? total : builtRaw;
    const live = built >= total;
    const pct = Math.round(built / total * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            y: 80,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            delay: 1.2,
            duration: 0.6,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: "fixed bottom-4 left-1/2 z-[70] -translate-x-1/2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 rounded-xl border border-white/10 bg-[#16161c]/90 px-3 py-2 text-[11px] text-white/80 shadow-2xl shadow-black/60 backdrop-blur-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex -space-x-1",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$BuildContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AGENT_COLORS"].slice(0, 5).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-3 w-3 rounded-full ring-2 ring-[#16161c]",
                            style: {
                                background: c
                            }
                        }, c, false, {
                            fileName: "[project]/components/build/BuildToolbar.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/build/BuildToolbar.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden sm:inline",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            className: "text-white",
                            children: "26"
                        }, void 0, false, {
                            fileName: "[project]/components/build/BuildToolbar.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        " agents"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/build/BuildToolbar.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-4 w-px bg-white/10"
                }, void 0, false, {
                    fileName: "[project]/components/build/BuildToolbar.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "whitespace-nowrap tabular-nums",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            className: "text-white",
                            children: built
                        }, void 0, false, {
                            fileName: "[project]/components/build/BuildToolbar.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        " / ",
                        total,
                        " layers"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/build/BuildToolbar.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden h-1 w-20 overflow-hidden rounded-full bg-white/10 sm:block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "h-full bg-blue",
                        animate: {
                            width: `${pct}%`
                        },
                        transition: {
                            duration: 0.6
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/build/BuildToolbar.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/build/BuildToolbar.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `flex items-center gap-1.5 rounded-md px-2 py-1 font-semibold ${live ? "bg-emerald-500/15 text-emerald-400" : "bg-blue/20 text-[#7fb0ff]"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-400" : "bg-[#7fb0ff] pulse-dot"}`
                        }, void 0, false, {
                            fileName: "[project]/components/build/BuildToolbar.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        live ? "Live" : "Building"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/build/BuildToolbar.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setAgentsOn(!agentsOn),
                    "aria-pressed": agentsOn,
                    title: agentsOn ? "Hide agents" : "Show agents",
                    className: "grid h-6 w-6 place-items-center rounded-md bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white",
                    children: agentsOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "10",
                        height: "10",
                        viewBox: "0 0 10 10",
                        fill: "currentColor",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "1",
                                y: "1",
                                width: "3",
                                height: "8",
                                rx: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/components/build/BuildToolbar.tsx",
                                lineNumber: 59,
                                columnNumber: 81
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "6",
                                y: "1",
                                width: "3",
                                height: "8",
                                rx: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/components/build/BuildToolbar.tsx",
                                lineNumber: 59,
                                columnNumber: 131
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/build/BuildToolbar.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "10",
                        height: "10",
                        viewBox: "0 0 10 10",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M2 1l7 4-7 4z"
                        }, void 0, false, {
                            fileName: "[project]/components/build/BuildToolbar.tsx",
                            lineNumber: 61,
                            columnNumber: 81
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/build/BuildToolbar.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/build/BuildToolbar.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/build/BuildToolbar.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/build/BuildToolbar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/build/Buildable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Buildable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$BuildContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/build/BuildContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Buildable({ children, label, className = "", skeleton = false, delay = 0 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "0px 0px -12% 0px"
    });
    const { register, markBuilt, focus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$BuildContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuild"])();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>register(), [
        register
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!inView) return;
        const timers = [];
        timers.push(window.setTimeout(()=>{
            setPhase("select");
            const r = ref.current?.getBoundingClientRect();
            if (r) focus.current = {
                x: r.left + r.width / 2,
                y: r.top + Math.min(r.height / 2, 260),
                t: performance.now()
            };
        }, delay * 1000));
        timers.push(window.setTimeout(()=>setPhase("render"), delay * 1000 + 380));
        timers.push(window.setTimeout(()=>{
            setPhase("done");
            markBuilt();
        }, delay * 1000 + 1300));
        return ()=>timers.forEach(clearTimeout);
    }, [
        inView,
        delay,
        markBuilt,
        focus
    ]);
    const showContent = phase === "render" || phase === "done";
    const showSelection = phase === "select" || phase === "render";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: false,
                animate: showContent ? {
                    opacity: 1,
                    clipPath: "inset(0% 0% 0% 0%)",
                    filter: "blur(0px)"
                } : {
                    opacity: 0,
                    clipPath: "inset(0% 0% 100% 0%)",
                    filter: "blur(6px)"
                },
                transition: {
                    duration: 0.8,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/components/build/Buildable.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            skeleton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 rounded-[inherit] bg-[#9aa0aa]/70",
                initial: false,
                animate: {
                    opacity: phase === "select" ? 1 : phase === "idle" ? 0.15 : 0
                },
                transition: {
                    duration: 0.35
                }
            }, void 0, false, {
                fileName: "[project]/components/build/Buildable.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none absolute -inset-1 z-20 border border-blue",
                initial: false,
                animate: {
                    opacity: showSelection ? 1 : 0,
                    scale: showSelection ? 1 : 0.985
                },
                transition: {
                    duration: 0.25
                },
                children: [
                    [
                        "-left-1 -top-1",
                        "-right-1 -top-1",
                        "-left-1 -bottom-1",
                        "-right-1 -bottom-1"
                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `absolute ${p} h-2 w-2 border border-blue bg-white`
                        }, p, false, {
                            fileName: "[project]/components/build/Buildable.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)),
                    label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-5 left-0 whitespace-nowrap rounded-sm bg-blue px-1.5 py-[1px] font-mono text-[10px] leading-4 text-white",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/build/Buildable.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/build/Buildable.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/build/Buildable.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/build/Buildable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals/Icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/Work.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-10 lg:grid-cols-[1.6fr_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                n: "02",
                                children: "Behind the craft"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Heading / H2",
                                className: "w-fit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-[clamp(48px,6.4vw,104px)]",
                                    children: [
                                        "More than code.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/sections/About.tsx",
                                            lineNumber: 18,
                                            columnNumber: 15
                                        }, this),
                                        "Crafting ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red",
                                            children: "experiences."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/About.tsx",
                                            lineNumber: 19,
                                            columnNumber: 24
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/About.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/About.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Text / intro",
                        delay: 0.2,
                        className: "self-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] leading-relaxed text-white/60",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["about"].intro
                        }, void 0, false, {
                            fileName: "[project]/components/sections/About.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/About.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/About.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-16 grid gap-12 lg:grid-cols-[1.15fr_1fr_0.8fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-wide text-[13px]",
                                children: "Expertise & skills"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-red",
                                children: "Profession & learning"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 divide-y divide-line",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["about"].learning.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: `Row / ${i + 1}`,
                                        delay: i * 0.12,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-4 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[13px] font-semibold",
                                                            children: l.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/About.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12px] text-white/50",
                                                            children: l.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/About.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/About.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "shrink-0 text-[10px] uppercase tracking-wider text-red",
                                                    children: l.year
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/About.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/About.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    }, l.title, false, {
                                        fileName: "[project]/components/sections/About.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-red",
                                children: "Creative & tech toolkit"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["about"].toolkit.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: {
                                            opacity: 0,
                                            y: 8
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: i * 0.05
                                        },
                                        className: "rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/75 transition hover:border-red hover:text-white",
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/components/sections/About.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex gap-4 text-white/60",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tools"].slice(0, 7).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrandIcon"], {
                                        name: t,
                                        className: "h-4 w-4"
                                    }, t, false, {
                                        fileName: "[project]/components/sections/About.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/About.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-wide text-[13px]",
                                children: "From concept to launch"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "mt-5 space-y-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["about"].process.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: `Step / ${p.title}`,
                                        delay: i * 0.12,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "group flex gap-4 rounded-lg p-2 transition hover:bg-white/[0.03]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-display text-[22px] text-red",
                                                    children: String(i + 1).padStart(2, "0")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/About.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-red transition group-hover:bg-red"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/About.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12px] font-bold uppercase tracking-wider",
                                                            children: p.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/About.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12px] leading-snug text-white/50",
                                                            children: p.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/About.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/About.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/About.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    }, p.title, false, {
                                        fileName: "[project]/components/sections/About.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/About.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/About.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Card / quote",
                        skeleton: true,
                        delay: 0.3,
                        className: "h-full rounded-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-xl bg-gradient-to-br from-[#ff1a2a] via-[#d80f1d] to-[#8d0610] p-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-display text-[56px] leading-none text-white/25",
                                    children: "“"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/About.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 text-[clamp(22px,2vw,30px)] font-medium leading-[1.15] tracking-tight text-white",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["about"].quote.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `block ${i >= 2 ? "text-white/70" : ""}`,
                                            children: l
                                        }, i, false, {
                                            fileName: "[project]/components/sections/About.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/About.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-script mt-6 text-4xl text-white",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].fullName.split(" ")[0]
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/About.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-auto pt-10 text-[10px] uppercase tracking-[0.18em] text-white/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "block text-white",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].fullName
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/About.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        "Founder, ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].brand
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/About.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/About.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/About.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/About.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/About.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/About.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/build/Buildable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Portrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals/Portrait.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals/Icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/Work.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/Header.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function Contact() {
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // No backend: the message opens the visitor's own mail app, pre-filled.
    const send = (e)=>{
        e.preventDefault();
        const body = encodeURIComponent(msg || "Hi! I'd like to talk about a project.");
        window.location.href = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactEmail"]}?subject=${encodeURIComponent("New project enquiry")}&body=${body}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "relative mx-auto max-w-[1440px] px-5 pt-24 md:px-10 md:pt-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-12 lg:grid-cols-[1fr_1.15fr_1.1fr] lg:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                n: "04",
                                children: "Your next project"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Contact.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Heading / H2",
                                className: "w-fit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-[clamp(56px,6vw,100px)]",
                                    children: [
                                        "Let's build",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/sections/Contact.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        "together",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red",
                                            children: "."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Contact.tsx",
                                            lineNumber: 32,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Contact.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Contact.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 max-w-[300px] text-[13px] leading-relaxed text-white/60",
                                children: "Got a website or app in mind? Let's make something people love to use."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Contact.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactEmail"]}`,
                                className: "group mt-7 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-red",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "grid h-9 w-9 place-items-center rounded-full border border-red transition group-hover:bg-red group-hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Contact.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Contact.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    "Start a conversation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Contact.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Contact.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "divide-y divide-line",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: `Link / ${c.label}`,
                                delay: i * 0.08,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: c.href,
                                        target: c.href.startsWith("http") ? "_blank" : undefined,
                                        rel: "noreferrer",
                                        className: "group flex items-center gap-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-red/10 text-red transition group-hover:bg-red group-hover:text-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContactGlyph"], {
                                                    icon: c.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Contact.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Contact.tsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[10px] uppercase tracking-[0.16em] text-white/40",
                                                        children: c.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Contact.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block truncate text-[13px] font-semibold",
                                                        children: c.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Contact.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Contact.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                                                className: "h-3.5 w-3.5 text-white/30 transition group-hover:translate-x-1 group-hover:text-red",
                                                dir: "right"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Contact.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Contact.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Contact.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            }, c.label, false, {
                                fileName: "[project]/components/sections/Contact.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Contact.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Video / reel.mp4",
                        skeleton: true,
                        delay: 0.2,
                        className: "rounded-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setPlaying(!playing),
                            className: "group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#16070a] to-[#0b0b10] text-left",
                            "aria-label": "Play showreel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute left-5 top-4 text-[10px] font-bold text-white/70",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].brand
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Contact.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute left-[28%] right-[22%] top-4 h-3 rounded-full bg-[#ff8a3d]/80"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Contact.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-[30%] h-[88%] w-[46%] opacity-80",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Portrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "h-full w-full",
                                        idSuffix: "vid"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Contact.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Contact.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        opacity: playing ? [
                                            0.6,
                                            1,
                                            0.6
                                        ] : 1
                                    },
                                    transition: {
                                        repeat: playing ? Infinity : 0,
                                        duration: 1.4
                                    },
                                    className: "absolute bottom-0 left-[62%] top-0 w-[3%] bg-red shadow-[0_0_30px_8px_rgba(255,26,42,0.6)]"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Contact.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display absolute left-5 top-[30%] text-[clamp(30px,3.4vw,52px)] text-white",
                                    children: [
                                        "Build",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/sections/Contact.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red",
                                            children: "smarter."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Contact.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Contact.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-wide absolute right-4 top-[30%] text-right text-[clamp(12px,1.3vw,20px)] leading-tight text-white/40",
                                    children: [
                                        "Build Better.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/sections/Contact.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        "Grow Smarter."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Contact.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-x-0 bottom-0 h-[12%] bg-[#d9d6cf]/80"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Contact.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute bottom-[16%] right-5 grid h-11 w-11 place-items-center rounded-full bg-red text-white shadow-lg transition group-hover:scale-110",
                                    children: playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "12",
                                        height: "12",
                                        viewBox: "0 0 10 10",
                                        fill: "currentColor",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "1.5",
                                                y: "1",
                                                width: "2.5",
                                                height: "8"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Contact.tsx",
                                                lineNumber: 100,
                                                columnNumber: 85
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "6",
                                                y: "1",
                                                width: "2.5",
                                                height: "8"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Contact.tsx",
                                                lineNumber: 100,
                                                columnNumber: 130
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Contact.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "12",
                                        height: "12",
                                        viewBox: "0 0 10 10",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M2 1l7 4-7 4z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Contact.tsx",
                                            lineNumber: 102,
                                            columnNumber: 85
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Contact.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Contact.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Contact.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Contact.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Contact.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: send,
                className: "mt-16 flex items-center gap-4 border-y border-line py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "msg",
                        className: "sr-only",
                        children: "Tell me about your project"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Contact.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "msg",
                        value: msg,
                        onChange: (e)=>setMsg(e.target.value),
                        placeholder: "Tell me about your project",
                        className: "flex-1 bg-transparent text-[15px] font-semibold text-white outline-none placeholder:text-white/70"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Contact.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        "aria-label": "Send",
                        className: "grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white transition hover:bg-red",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                            className: "h-4 w-4",
                            dir: "right"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Contact.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Contact.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Contact.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "flex flex-wrap items-center justify-between gap-4 py-8 pb-24 text-[11px] text-white/40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                        fileName: "[project]/components/sections/Contact.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].fullName,
                            ". Designed & built in-house."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Contact.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#top",
                        className: "flex items-center gap-2 uppercase tracking-[0.18em] hover:text-white",
                        children: [
                            "Back to top",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                                className: "h-3 w-3",
                                dir: "up-right"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Contact.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Contact.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Contact.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Contact.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo,
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Logo({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "#top",
        className: `font-display text-[22px] tracking-wide text-white ${className}`,
        "aria-label": "Home",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].firstName,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red",
                children: "."
            }, void 0, false, {
                fileName: "[project]/components/sections/Header.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Header.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function Header() {
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollY, "change", (v)=>setScrolled(v > 40));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
        initial: {
            y: -40,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.7,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: `fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "border-b border-line bg-bg/75 backdrop-blur-md" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {}, void 0, false, {
                        fileName: "[project]/components/sections/Header.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-9 md:flex",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].nav.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: n.href,
                                className: "group relative text-[13px] text-white/75 transition hover:text-white",
                                children: [
                                    n.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -bottom-1 left-0 h-px w-0 bg-red transition-all duration-300 group-hover:w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Header.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, n.href, true, {
                                fileName: "[project]/components/sections/Header.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Header.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-end gap-4",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden items-center gap-2 text-[11px] text-white/60 lg:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Header.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    "Available for work"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Header.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "hidden rounded-full border border-white/15 px-4 py-1.5 text-[12px] font-medium text-white transition hover:border-red hover:bg-red sm:inline-block",
                                children: "Let's talk"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Header.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "grid h-9 w-9 place-items-center md:hidden",
                                onClick: ()=>setOpen(!open),
                                "aria-label": "Menu",
                                "aria-expanded": open,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative block h-3 w-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute left-0 h-[2px] w-5 bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Header.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute left-0 h-[2px] w-5 bg-white transition ${open ? "top-1.5 -rotate-45" : "top-3"}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Header.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Header.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Header.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Header.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Header.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex flex-col gap-1 border-t border-line bg-bg/95 px-5 py-4 backdrop-blur md:hidden",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].nav.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: n.href,
                        onClick: ()=>setOpen(false),
                        className: "font-display py-2 text-3xl",
                        children: n.label
                    }, n.href, false, {
                        fileName: "[project]/components/sections/Header.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/Header.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Header.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Portrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals/Portrait.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/build/Buildable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals/Icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const ease = [
    0.22,
    1,
    0.36,
    1
];
function Hero() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start start",
            "end start"
        ]
    });
    const wordY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "35%"
    ]);
    const portraitY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "12%"
    ]);
    const textY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "-20%"
    ]);
    const fade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.8
    ], [
        1,
        0
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "top",
        ref: ref,
        className: "grain relative h-[100svh] min-h-[640px] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_60%_40%,rgba(255,26,42,0.18),transparent_70%)]"
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    y: wordY
                },
                className: "absolute inset-x-0 top-[14%] flex justify-center md:top-[11%]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    label: "Text / PORTFOLIO",
                    delay: 0.1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        "aria-hidden": true,
                        className: "portfolio-word font-display select-none whitespace-nowrap text-[25.5vw] leading-[0.8] md:text-[23.5vw]",
                        children: "PORTFOLIO"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    y: portraitY
                },
                className: "absolute bottom-0 left-1/2 h-[62%] w-[min(90vw,620px)] -translate-x-[38%] md:h-[82%] md:-translate-x-[42%]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Image / portrait.png",
                        skeleton: true,
                        delay: 0.5,
                        className: "h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 1.08
                            },
                            animate: {
                                scale: 1
                            },
                            transition: {
                                duration: 1.6,
                                ease
                            },
                            className: "h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Portrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "h-full w-full",
                                idSuffix: "hero"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    y: textY,
                    opacity: fade
                },
                className: "relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-5 pt-10 md:px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[440px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Text / greeting",
                            delay: 0.3,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-script -mb-2 -rotate-3 text-[clamp(28px,4.4vw,64px)] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,.6)]",
                                children: "Hello, I'm"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Heading / name",
                            delay: 0.45,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-[clamp(64px,10vw,150px)] text-white drop-shadow-[0_8px_40px_rgba(0,0,0,.6)]",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].firstName,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red",
                                        children: "."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Text / role",
                            delay: 0.6,
                            className: "mt-3 w-fit",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-wide text-[clamp(14px,1.5vw,20px)] leading-[1.05] text-red",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].role[0],
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].role[1]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Text / bio",
                            delay: 0.75,
                            className: "mt-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-[300px] text-[13px] leading-relaxed text-white/70",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].bio.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: line
                                    }, i, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Button / CTA",
                            delay: 0.9,
                            className: "mt-6 w-fit",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#work",
                                className: "group flex items-center gap-6 rounded-[4px] bg-red px-5 py-3 text-[13px] font-semibold text-white shadow-[0_10px_40px_-10px_rgba(255,26,42,0.8)] transition hover:bg-white hover:text-black",
                                children: [
                                    "See my work",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                                        className: "h-4 w-4 transition-transform group-hover:translate-x-1",
                                        dir: "right"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/45",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-1.5 w-1.5 rounded-full bg-red"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                "Based in ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].location
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    opacity: fade
                },
                className: "absolute right-5 top-1/2 z-10 hidden -translate-y-[10%] flex-col gap-6 md:right-10 md:flex",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-[11px] leading-tight text-white/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pulse-dot h-2 w-2 rounded-full bg-red"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            "Freelance",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            "available"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: `Stat / ${i + 1}`,
                            delay: 1 + i * 0.15,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display w-[90px] text-right text-[44px] text-red",
                                        children: s.value
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-pre-line text-[10px] uppercase leading-tight tracking-wider text-white/60",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        }, s.label, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-6 z-10 mx-auto flex max-w-[1440px] items-center justify-between px-5 text-[10px] uppercase tracking-[0.2em] text-white/50 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#showcase",
                        className: "group flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grid h-9 w-9 place-items-center rounded-full border border-red/60 text-red transition group-hover:bg-red group-hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "10",
                                    height: "10",
                                    viewBox: "0 0 10 10",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M2 1l7 4-7 4z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 131,
                                        columnNumber: 81
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        className: "block text-white/80",
                                        children: "Watch showreel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    "2 min"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        children: [
                            "Scroll to explore",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                animate: {
                                    y: [
                                        0,
                                        4,
                                        0
                                    ]
                                },
                                transition: {
                                    repeat: Infinity,
                                    duration: 1.6
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                                    className: "h-3 w-3",
                                    dir: "down"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:block",
                        children: "Est. 2019 — Now"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Hero.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Journey.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Journey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/build/Buildable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals/Icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/Work.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Journey() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "journey",
        className: "relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-end justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                n: "03",
                                children: "The journey"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Journey.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Heading / H2",
                                className: "w-fit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-wide text-[clamp(28px,4.2vw,60px)] leading-none",
                                    children: "Keep building. Keep shipping."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Journey.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Journey.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Journey.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "Since 2019 — still going"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Journey.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Journey.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-14 grid gap-14 lg:grid-cols-[1.7fr_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    scaleY: 0
                                },
                                whileInView: {
                                    scaleY: 1
                                },
                                viewport: {
                                    once: true,
                                    margin: "-20%"
                                },
                                transition: {
                                    duration: 1.4,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ]
                                },
                                className: "absolute bottom-2 left-[118px] top-2 hidden w-px origin-top bg-gradient-to-b from-red via-white/15 to-transparent sm:block"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Journey.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["journey"].map((j, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    label: `Row / ${j.role}`,
                                    delay: i * 0.15,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group grid gap-2 border-b border-line py-6 sm:grid-cols-[118px_1fr] sm:gap-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[11px] uppercase tracking-wider ${j.current ? "text-red" : "text-white/40"}`,
                                                children: j.years
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Journey.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative sm:pl-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `absolute -left-[5px] top-1.5 hidden h-[10px] w-[10px] rounded-full border-2 sm:block ${j.current ? "border-red bg-red shadow-[0_0_12px_rgba(255,26,42,.9)]" : "border-white/30 bg-bg group-hover:border-red"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Journey.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[15px] font-bold",
                                                        children: j.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Journey.tsx",
                                                        lineNumber: 41,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] uppercase tracking-wider text-white/40",
                                                        children: j.org
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Journey.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 max-w-[520px] text-[13px] leading-relaxed text-white/55",
                                                        children: j.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Journey.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Journey.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Journey.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                }, j.role, false, {
                                    fileName: "[project]/components/sections/Journey.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Journey.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Selected projects"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Journey.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Heading / H3",
                                className: "mt-3 w-fit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-[clamp(44px,4.4vw,72px)]",
                                    children: [
                                        "Shipped.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/sections/Journey.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red",
                                            children: "Live. Used."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Journey.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Journey.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Journey.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-8 divide-y divide-line border-y border-line",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shipped"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: `Link / ${s.name}`,
                                        delay: i * 0.1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#work",
                                                className: "group flex items-center justify-between py-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-[14px] font-semibold transition group-hover:text-red",
                                                                children: s.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Journey.tsx",
                                                                lineNumber: 65,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-white/45",
                                                                children: s.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Journey.tsx",
                                                                lineNumber: 66,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/Journey.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                                                        className: "h-4 w-4 text-white/40 transition group-hover:rotate-45 group-hover:text-red"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Journey.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Journey.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Journey.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this)
                                    }, s.name, false, {
                                        fileName: "[project]/components/sections/Journey.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Journey.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Journey.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Journey.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Journey.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Showcase.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Showcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/build/Buildable.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../visuals/SiteMock'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
function Showcase() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start end",
            "center center"
        ]
    });
    // Wireframe → live crossfade as the section scrolls into the centre
    const liveOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.45,
        0.9
    ], [
        0,
        1
    ]);
    const liveClip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.45,
        0.9
    ], [
        "inset(0 100% 0 0)",
        "inset(0 0% 0 0)"
    ]);
    const scanX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.45,
        0.9
    ], [
        "0%",
        "100%"
    ]);
    const rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        6,
        0
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "showcase",
        ref: ref,
        className: "relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid items-center gap-12 lg:grid-cols-[0.8fr_1.4fr]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow mb-4",
                            children: "Where ideas take shape"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Showcase.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Heading / H2",
                            className: "w-fit",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-[clamp(56px,7.5vw,120px)]",
                                children: [
                                    "From",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/sections/Showcase.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    "wireframe.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/sections/Showcase.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red",
                                        children: "To live."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Showcase.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Showcase.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Showcase.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Text / body",
                            delay: 0.2,
                            className: "mt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-[330px] text-[13px] leading-relaxed text-white/60",
                                children: "Every project starts as grey boxes and arrows. I turn them into branded, fast, live interfaces — and ship them."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Showcase.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Showcase.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex gap-10 text-[11px] uppercase tracking-[0.18em] text-white/45",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "font-display block text-3xl normal-case tracking-normal text-white",
                                            children: "2 wk"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Showcase.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        "avg. launch"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Showcase.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "font-display block text-3xl normal-case tracking-normal text-white",
                                            children: "98"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Showcase.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        "lighthouse"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Showcase.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Showcase.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Showcase.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        rotateX: rotate,
                        transformPerspective: 1400
                    },
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Frame / Desktop — 1440",
                            className: "rounded-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c10] shadow-[0_40px_120px_-30px_rgba(255,26,42,0.45)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5",
                                        children: [
                                            [
                                                "#ff5f57",
                                                "#febc2e",
                                                "#28c840"
                                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-2.5 w-2.5 rounded-full",
                                                    style: {
                                                        background: c
                                                    }
                                                }, c, false, {
                                                    fileName: "[project]/components/sections/Showcase.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-4 rounded-md bg-white/5 px-3 py-0.5 text-[10px] text-white/40",
                                                children: "yourstudio.com"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Showcase.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Showcase.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[16/10]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AgencyMock, {
                                                    wire: true,
                                                    id: "sw",
                                                    large: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Showcase.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Showcase.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                style: {
                                                    opacity: liveOpacity,
                                                    clipPath: liveClip
                                                },
                                                className: "absolute inset-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AgencyMock, {
                                                    id: "sl",
                                                    large: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Showcase.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Showcase.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                style: {
                                                    left: scanX,
                                                    opacity: liveOpacity
                                                },
                                                className: "pointer-events-none absolute inset-y-0 w-px bg-blue shadow-[0_0_20px_4px_rgba(47,123,255,0.7)]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Showcase.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Showcase.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Showcase.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Showcase.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 flex justify-between text-[10px] uppercase tracking-[0.18em] text-white/35",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Wire → UI → Code"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Showcase.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Scroll to render"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Showcase.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Showcase.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Showcase.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Showcase.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Showcase.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Work.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eyebrow",
    ()=>Eyebrow,
    "default",
    ()=>Work
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/build/Buildable.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../visuals/SiteMock'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals/Icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const FILTERS = [
    "All",
    "Websites",
    "E-commerce",
    "Apps"
];
function Eyebrow({ n, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "eyebrow mb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white/80",
                children: n
            }, void 0, false, {
                fileName: "[project]/components/sections/Work.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            " / ",
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Work.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function Work() {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const list = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].filter((p)=>filter === "All" || p.category === filter);
    const scrollBy = (dir)=>{
        const el = track.current;
        if (!el) return;
        el.scrollBy({
            left: dir * (el.clientWidth / 3 + 8),
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "work",
        className: "relative mx-auto max-w-[1440px] px-5 pb-16 pt-24 md:px-10 md:pt-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-end justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                                n: "01",
                                children: "Selected work"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Work.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Heading / H2",
                                className: "w-fit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-wide text-[clamp(30px,4.6vw,64px)] leading-none",
                                    children: "Work that speaks."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Work.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Work.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex gap-6 text-[12px]",
                                children: FILTERS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setFilter(f),
                                        className: `relative pb-2 transition ${filter === f ? "text-white" : "text-white/45 hover:text-white/80"}`,
                                        children: [
                                            f,
                                            filter === f && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                layoutId: "tab",
                                                className: "absolute inset-x-0 bottom-0 h-[2px] bg-red"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Work.tsx",
                                                lineNumber: 48,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, f, true, {
                                        fileName: "[project]/components/sections/Work.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Work.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Work.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-5 text-[11px] uppercase tracking-[0.18em] text-white/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:inline",
                                children: "Drag or use arrows"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Work.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    -1,
                                    1
                                ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>scrollBy(d),
                                        "aria-label": d < 0 ? "Previous" : "Next",
                                        className: "grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white transition hover:border-red hover:bg-red",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                                            className: "h-3.5 w-3.5",
                                            dir: d < 0 ? "left" : "right"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Work.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this)
                                    }, d, false, {
                                        fileName: "[project]/components/sections/Work.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Work.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Work.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Work.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: track,
                className: "no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:-mx-10 md:px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    children: list.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                            layout: true,
                            href: p.href,
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.95
                            },
                            transition: {
                                duration: 0.4
                            },
                            className: "group w-[82%] shrink-0 snap-start sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    label: `Frame / ${p.title}`,
                                    skeleton: true,
                                    delay: i * 0.18,
                                    className: "overflow-hidden rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-bg-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteMock, {
                                                theme: p.theme,
                                                id: `w${i}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Work.tsx",
                                                lineNumber: 90,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Work.tsx",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Work.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Work.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-display text-[28px] text-red",
                                                    children: String(i + 1).padStart(2, "0")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Work.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[13px] font-bold uppercase tracking-wide",
                                                            children: p.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/Work.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-white/45",
                                                            children: p.meta
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/Work.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/Work.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Work.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-1 grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/60 transition group-hover:rotate-45 group-hover:border-red group-hover:bg-red group-hover:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Work.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Work.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Work.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, p.title, true, {
                            fileName: "[project]/components/sections/Work.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/Work.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Work.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow leading-relaxed",
                                children: [
                                    "Built with",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/sections/Work.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/85",
                                        children: "The tools I trust"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Work.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Work.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tools"].length,
                                    " tools"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Work.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Work.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid grid-cols-3 gap-y-8 border-y border-line py-8 sm:grid-cols-5 lg:grid-cols-9",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tools"].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$build$2f$Buildable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: `Icon / ${t}`,
                                delay: i * 0.08,
                                className: "mx-auto w-fit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        y: -4,
                                        scale: 1.1
                                    },
                                    className: "text-white/80 transition-colors hover:text-red",
                                    title: t,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrandIcon"], {
                                        name: t,
                                        className: "h-8 w-8"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Work.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Work.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            }, t, false, {
                                fileName: "[project]/components/sections/Work.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Work.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Work.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Work.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/visuals/Icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow,
    "BrandIcon",
    ()=>BrandIcon,
    "ContactGlyph",
    ()=>ContactGlyph,
    "StoreIcon",
    ()=>StoreIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simple-icons/index.mjs [app-ssr] (ecmascript)");
;
;
const brand = {
    flutter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siFlutter"],
    dart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siDart"],
    firebase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siFirebase"],
    androidstudio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siAndroidstudio"],
    xcode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siXcode"],
    figma: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siFigma"],
    git: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siGit"],
    postman: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siPostman"],
    webrtc: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siWebrtc"],
    googlemaps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siGooglemaps"]
};
function BrandIcon({ name, className = "h-7 w-7" }) {
    const icon = brand[name];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: className,
        fill: "currentColor",
        role: "img",
        "aria-label": icon.title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: icon.path
        }, void 0, false, {
            fileName: "[project]/components/visuals/Icons.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/visuals/Icons.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function StoreIcon({ store, className = "h-4 w-4" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: className,
        fill: "currentColor",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: (store === "play" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siGoogleplay"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siAppstore"]).path
        }, void 0, false, {
            fileName: "[project]/components/visuals/Icons.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/visuals/Icons.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function ContactGlyph({ icon, className = "h-4 w-4" }) {
    const stroke = {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    switch(icon){
        case "leetcode":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simple$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siLeetcode"].path
                }, void 0, false, {
                    fileName: "[project]/components/visuals/Icons.tsx",
                    lineNumber: 54,
                    columnNumber: 81
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/visuals/Icons.tsx",
                lineNumber: 54,
                columnNumber: 14
            }, this);
        case "linkedin":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
                }, void 0, false, {
                    fileName: "[project]/components/visuals/Icons.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/visuals/Icons.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this);
        case "mail":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                ...stroke,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "3",
                        y: "5",
                        width: "18",
                        height: "14",
                        rx: "2"
                    }, void 0, false, {
                        fileName: "[project]/components/visuals/Icons.tsx",
                        lineNumber: 62,
                        columnNumber: 73
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m3 7 9 6 9-6"
                    }, void 0, false, {
                        fileName: "[project]/components/visuals/Icons.tsx",
                        lineNumber: 62,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/visuals/Icons.tsx",
                lineNumber: 62,
                columnNumber: 14
            }, this);
        case "phone":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                ...stroke,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"
                }, void 0, false, {
                    fileName: "[project]/components/visuals/Icons.tsx",
                    lineNumber: 64,
                    columnNumber: 73
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/visuals/Icons.tsx",
                lineNumber: 64,
                columnNumber: 14
            }, this);
        case "cv":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                ...stroke,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"
                    }, void 0, false, {
                        fileName: "[project]/components/visuals/Icons.tsx",
                        lineNumber: 66,
                        columnNumber: 73
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14 2v6h6M8 13h8M8 17h5"
                    }, void 0, false, {
                        fileName: "[project]/components/visuals/Icons.tsx",
                        lineNumber: 66,
                        columnNumber: 144
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/visuals/Icons.tsx",
                lineNumber: 66,
                columnNumber: 14
            }, this);
        case "form":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                ...stroke,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"
                }, void 0, false, {
                    fileName: "[project]/components/visuals/Icons.tsx",
                    lineNumber: 68,
                    columnNumber: 73
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/visuals/Icons.tsx",
                lineNumber: 68,
                columnNumber: 14
            }, this);
        case "pin":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                ...stroke,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                    }, void 0, false, {
                        fileName: "[project]/components/visuals/Icons.tsx",
                        lineNumber: 70,
                        columnNumber: 73
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "10",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/components/visuals/Icons.tsx",
                        lineNumber: 70,
                        columnNumber: 132
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/visuals/Icons.tsx",
                lineNumber: 70,
                columnNumber: 14
            }, this);
    }
}
function Arrow({ className = "h-4 w-4", dir = "up-right" }) {
    const rot = {
        "up-right": 0,
        right: 45,
        left: 225,
        down: 135
    }[dir];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: className,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        style: {
            transform: `rotate(${rot}deg)`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7 17 17 7M8 7h9v9"
        }, void 0, false, {
            fileName: "[project]/components/visuals/Icons.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/visuals/Icons.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/visuals/Portrait.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portrait
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
;
;
function Portrait({ className = "", idSuffix = "a" }) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].portrait) {
        return(// eslint-disable-next-line @next/next/no-img-element
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].portrait.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].portrait}` : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].portrait,
            alt: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].fullName,
            className: `${className} object-contain object-bottom drop-shadow-[0_0_60px_rgba(255,26,42,0.35)]`
        }, void 0, false, {
            fileName: "[project]/components/visuals/Portrait.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this));
    }
    const g = (n)=>`${n}-${idSuffix}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 400 500",
        className: className,
        role: "img",
        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].fullName,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: g("skin"),
                        x1: "0",
                        x2: "1",
                        y1: "0",
                        y2: "0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#7fd3ff"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.35",
                                stopColor: "#3d8bff"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.6",
                                stopColor: "#c0203a"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#ff1a2a"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/visuals/Portrait.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: g("shade"),
                        x1: "0",
                        x2: "0",
                        y1: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#000",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#000",
                                stopOpacity: "0.45"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/visuals/Portrait.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: g("neck"),
                        x1: "0",
                        x2: "1",
                        y1: "0",
                        y2: "0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#1b2f8f"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.45",
                                stopColor: "#1a1f5c"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.75",
                                stopColor: "#b3101e"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#ff1a2a"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/visuals/Portrait.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: g("hair"),
                        x1: "0",
                        x2: "1",
                        y1: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#1a1a2a"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#3a0a12"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/visuals/Portrait.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: g("rim"),
                        cx: "0.85",
                        cy: "0.4",
                        r: "0.6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#ff1a2a",
                                stopOpacity: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#ff1a2a",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/components/visuals/Portrait.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/visuals/Portrait.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/visuals/Portrait.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "260",
                cy: "260",
                rx: "200",
                ry: "240",
                fill: `url(#${g("rim")})`
            }, void 0, false, {
                fileName: "[project]/components/visuals/Portrait.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M178 292 C182 320 180 345 176 368 C120 384 62 420 36 500 L400 500 C394 430 356 380 296 352 C292 330 296 310 304 292 Z",
                fill: `url(#${g("neck")})`
            }, void 0, false, {
                fileName: "[project]/components/visuals/Portrait.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            [
                0,
                1,
                2,
                3,
                4,
                5
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M${184 + i * 2} ${300 + i * 11} C220 ${306 + i * 11} 262 ${306 + i * 11} ${300 - i} ${298 + i * 11}`,
                    stroke: "#000",
                    strokeOpacity: "0.25",
                    strokeWidth: "2",
                    fill: "none"
                }, i, false, {
                    fileName: "[project]/components/visuals/Portrait.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M300 300 C322 262 334 220 326 176 C316 112 266 72 206 74 C156 76 122 100 114 140 L110 164 C106 174 98 184 92 196 L82 214 C80 222 88 226 96 228 L98 238 C93 242 95 248 100 250 C96 256 100 264 106 268 C118 280 140 286 162 284 L178 296 Z",
                fill: `url(#${g("skin")})`
            }, void 0, false, {
                fileName: "[project]/components/visuals/Portrait.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M300 300 C322 262 334 220 326 176 C316 112 266 72 206 74 C156 76 122 100 114 140 L110 164 C106 174 98 184 92 196 L82 214 C80 222 88 226 96 228 L98 238 C93 242 95 248 100 250 C96 256 100 264 106 268 C118 280 140 286 162 284 L178 296 Z",
                fill: `url(#${g("shade")})`
            }, void 0, false, {
                fileName: "[project]/components/visuals/Portrait.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M262 176 C276 170 286 184 280 200 C276 214 266 220 258 214 Z",
                fill: "#9a1830",
                opacity: "0.8"
            }, void 0, false, {
                fileName: "[project]/components/visuals/Portrait.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M118 132 C120 92 156 58 210 56 C230 40 262 40 280 54 C300 50 324 66 330 92 C344 110 344 140 336 168 C330 190 322 196 316 184 C312 160 300 140 286 132 C270 146 254 130 240 122 C214 118 186 126 160 118 C146 114 130 122 118 132 Z",
                fill: `url(#${g("hair")})`
            }, void 0, false, {
                fileName: "[project]/components/visuals/Portrait.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M118 156 C126 152 134 151 142 152",
                stroke: "#0b0b18",
                strokeOpacity: "0.55",
                strokeWidth: "3",
                fill: "none",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/visuals/Portrait.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/visuals/Portrait.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  the site — no component changes needed.
//  Images/videos live in /public/web (paths below are relative to it).
// ─────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "about",
    ()=>about,
    "contact",
    ()=>contact,
    "contactEmail",
    ()=>contactEmail,
    "journey",
    ()=>journey,
    "projects",
    ()=>projects,
    "site",
    ()=>site,
    "tools",
    ()=>tools
]);
const site = {
    firstName: "MEHEDI",
    fullName: "Md. Mehedi Hasan",
    shortName: "Mehedi",
    role: [
        "Flutter",
        "Developer"
    ],
    title: "Software Engineer (Flutter)",
    company: "Nexdecade Technology",
    location: "Dhaka, Bangladesh",
    available: true,
    portrait: "web/profile.webp",
    cv: "web/cv/Md_Mehedi_Hasan.pdf",
    email: "mdmehedihasan4051@gmail.com",
    bio: [
        "Mobile app developer with 5+ years in Flutter.",
        "I design and build beautiful, high-performance cross-platform apps —",
        "from enterprise ERPs to consumer apps, on iOS and Android."
    ],
    stats: [
        {
            value: "5+",
            label: "Years building\nwith Flutter"
        },
        {
            value: "20+",
            label: "Apps built\n& shipped"
        },
        {
            value: "9",
            label: "Featured\nprojects"
        }
    ],
    nav: [
        {
            label: "Work",
            href: "#work"
        },
        {
            label: "About",
            href: "#about"
        },
        {
            label: "Journey",
            href: "#journey"
        },
        {
            label: "Contact",
            href: "#contact"
        }
    ]
};
const img = (k)=>`web/${k}.webp`;
const projects = [
    {
        key: "btv",
        title: "BTV E-Service",
        category: "BTV E-Service",
        group: "Enterprise",
        platform: "Android · Enterprise ERP",
        short: "Enterprise ERP for Bangladesh Television",
        description: "A comprehensive Enterprise Resource Planning (ERP) mobile application for Bangladesh Television (BTV), designed for three types of users: Admin, Artist and Visitor. The app streamlines artist management, budgeting, bill processing, gate pass management, FTP file transfer and reporting, with full bilingual (Bengali/English) support.",
        cover: img("cover-btv"),
        gallery: [
            "btv-1",
            "btv-2",
            "btv-3",
            "btv-4",
            "btv-5",
            "btv-6"
        ].map(img),
        video: "btv",
        tech: [
            "Flutter",
            "GetX",
            "Dio & REST API",
            "Firebase (FCM, Auth, Crashlytics)",
            "FTP (TUS Client)",
            "QR Scanner",
            "Syncfusion PDF/DOCX",
            "EN / BN",
            "Get Storage",
            "Fl Chart"
        ],
        features: [
            "Role-based access for Admin, Artist and Visitor",
            "Artist roster & grade management",
            "Pre/Post budget approval",
            "Bill creation and payment processing",
            "Gate pass management with QR scanning",
            "FTP file upload/download",
            "Comprehensive reporting"
        ],
        roles: [
            {
                name: "Internal User (Admin)",
                description: "Full administrative control of the ERP system: managing artists, budgets, bills and gate passes, with a dashboard overview of artists, programs, payments and real-time visitor check-ins.",
                features: [
                    "Artist roster & grade management",
                    "Pre-budget & post-budget approval",
                    "Bill creation, AGB bill & payment approval",
                    "Gate pass approval, QR scanning & check-in verification",
                    "FTP file/folder management with version history & comments",
                    "Reports: Program Bill, Artist Wise, AGB, Artist Payment"
                ]
            },
            {
                name: "Artist",
                description: "Artists manage roster enrollment, view program schedules, track payments, apply for gate passes, request grade enhancements and access their rate card and tax information.",
                features: [
                    "Artist registration & roster enlistment",
                    "Roster status & grade enhancement requests",
                    "Program schedules & payment history",
                    "Gate pass application with vehicle, hardware & guardian info",
                    "My rate card & complete tax list",
                    "Notifications & bilingual support"
                ]
            },
            {
                name: "Visitor",
                description: "Visitors register, apply for gate passes and track their visit status with QR code verification.",
                features: [
                    "Visitor registration & login",
                    "Gate pass application & tracking",
                    "Gate pass list with search & pagination",
                    "Edit passes in Waiting/Return status",
                    "Dashboard: On-site, Pending, Approved, Rejected",
                    "QR code pass & attachment viewing"
                ]
            }
        ],
        play: "https://play.google.com/store/apps/details?id=com.btv.btverp&pcampaignid=web_share"
    },
    {
        key: "bdjobs",
        title: "BDJobs Employer App",
        category: "Bdjobs",
        group: "Enterprise",
        platform: "Android · Recruitment",
        short: "Recruitment app for employers",
        description: "BDJobs Employer is built around the job recruitment process. Employers use it to sort and shortlist qualified job seekers, including watching candidates' video resumes.",
        cover: img("cover-bdjobs"),
        gallery: [
            "bdjobs-1",
            "bdjobs-2",
            "bdjobs-3",
            "bdjobs-4",
            "bdjobs-5",
            "bdjobs-6"
        ].map(img),
        tech: [
            "Flutter",
            "GetX",
            "Bloc",
            "Firebase",
            "Dio",
            "Freezed",
            "FCM"
        ],
        features: [
            "Sort and shortlist qualified job seekers",
            "Video resume showcasing",
            "Push notifications",
            "Smooth recruiter journeys"
        ],
        play: "https://play.google.com/store/apps/details?id=com.bdjobs.recruiter&pcampaignid=web_share"
    },
    {
        key: "m2m",
        title: "M2M Vehicle Tracking",
        category: "VTS",
        group: "Tracking & Live",
        platform: "Android · iOS · Fleet",
        short: "Live fleet tracking with route playback",
        description: "A real-time vehicle tracking system integrated with Google Maps, with live location updates, route playback and accurate movement visualization for efficient fleet monitoring.",
        cover: img("cover-m2m"),
        coverPosition: "center 30%",
        gallery: [
            "m2m-1",
            "m2m-2",
            "m2m-3",
            "m2m-4",
            "m2m-5",
            "m2m-6"
        ].map(img),
        video: "m2m",
        tech: [
            "Flutter",
            "Google Maps",
            "Riverpod",
            "Provider",
            "SQFLite",
            "Firebase",
            "AES Encryption"
        ],
        features: [
            "Vehicle list",
            "Vehicle live tracking",
            "Tracking history playback",
            "bKash and SSLCommerz payments",
            "Push notifications"
        ],
        play: "https://play.google.com/store/apps/details?id=com.m2mbd.vts&pcampaignid=web_share",
        ios: "https://apps.apple.com/gb/app/m2m-vehicle-tracking-system/id1472843586"
    },
    {
        key: "robi",
        title: "Robi Vehicle Tracking",
        category: "VTS",
        group: "Tracking & Live",
        platform: "Android · iOS · Fleet",
        short: "Real-time vehicle tracking for Robi",
        description: "Robi's VTS solution built with Google Maps, enabling real-time tracking, route visualization and location history for vehicles.",
        cover: img("cover-robi"),
        coverPosition: "center 20%",
        gallery: [
            "robi-1",
            "robi-2",
            "robi-3",
            "robi-4",
            "robi-5",
            "robi-6"
        ].map(img),
        tech: [
            "Flutter",
            "Google Maps",
            "Riverpod",
            "Provider",
            "SQFLite",
            "Firebase",
            "AES Encryption"
        ],
        features: [
            "Vehicle list",
            "Vehicle live tracking",
            "Tracking history",
            "bKash and SSLCommerz payments",
            "Push notifications"
        ],
        play: "https://play.google.com/store/apps/details?id=bd.com.robi.vts&pcampaignid=web_share",
        ios: "https://apps.apple.com/gb/app/robi-vehicle-tracking-service/id1231820564"
    },
    {
        key: "surveillance",
        title: "Surveillance Pro",
        category: "CCTV Surveillance",
        group: "Tracking & Live",
        platform: "Mobile · Desktop · NVR",
        short: "Live CCTV on mobile & desktop",
        description: "Surveillance Pro is a cross-platform security monitoring app built with Flutter, offering real-time camera streaming and intelligent surveillance management on mobile and desktop. Live camera feeds with full streaming are implemented, while multi-device management, event configuration and video playback are in active development.",
        cover: img("cover-surveillance"),
        gallery: [
            "surveillance-1",
            "surveillance-2",
            "surveillance-3",
            "surveillance-4"
        ].map(img),
        wideGallery: true,
        tech: [
            "Flutter",
            "WebRTC",
            "WebSocket",
            "Flutter Bloc",
            "Window Manager",
            "WebView"
        ],
        features: [
            "Multi-camera grid view (1x1, 2x2, 3x3)",
            "Desktop (Windows, Linux, macOS) and mobile (iOS, Android)",
            "Multi- and single-camera systems",
            "Drag and drop a camera into any grid tile"
        ]
    },
    {
        key: "exam",
        title: "DayExam",
        category: "Online Exam",
        group: "Consumer",
        platform: "Android · iOS · EdTech",
        short: "Exam prep for BCS, HSC, SSC & admission",
        description: "A mobile examination and learning platform for students preparing for BCS, HSC, SSC and university admission exams, on Android and iOS. Students take subject-wise exams, track progress and improve through detailed performance analytics.",
        cover: img("cover-exam"),
        gallery: [
            "exam-1",
            "exam-2",
            "exam-3",
            "exam-4"
        ].map(img),
        video: "dayexam",
        tech: [
            "Flutter",
            "GetX",
            "bKash",
            "SSLCommerz",
            "YouTube Player",
            "Flutter Math"
        ],
        features: [
            "Exams for BCS, HSC, SSC and admission tests",
            "Topic-wise and chapter-wise quizzes",
            "Free and paid exams; Gold, Diamond & Elite packages",
            "Daily and weekly progress tracking",
            "Ranking based on score and performance",
            "Secure payments with bKash and SSLCommerz"
        ],
        play: "https://play.google.com/store/apps/details?id=com.datahost.day_exam&pcampaignid=web_share"
    },
    {
        key: "face",
        title: "Face Attendance",
        category: "Attendance System",
        group: "Enterprise",
        platform: "Android · ML Kit",
        short: "Facial-recognition check-ins",
        description: "A secure facial recognition attendance system for quick check-ins. Employees mark attendance with one tap, which only works on authorized company WiFi. The app captures a face image and verifies it in real time against company ERP records — no biometric or personal data is stored in the app.",
        cover: img("cover-face"),
        gallery: [
            "face-1",
            "face-2",
            "face-3",
            "face-4",
            "face-5"
        ].map(img),
        tech: [
            "Flutter",
            "Flutter Face API",
            "Google ML Kit",
            "Camera",
            "Table Calendar",
            "GetX"
        ],
        features: [
            "Facial recognition attendance",
            "Works only on authorized company WiFi",
            "Real-time verification with the ERP",
            "One-tap check-in with instant feedback",
            "Retake option for failed attempts"
        ],
        play: "https://play.google.com/store/apps/details?id=com.neways.attendance&pcampaignid=web_share"
    },
    {
        key: "social",
        title: "BuzzNex",
        category: "Social",
        group: "Consumer",
        platform: "Desktop · Messaging",
        short: "Desktop chat, files & calls",
        description: "A modern desktop social networking platform for seamless communication. It supports real-time messaging, instant file sharing and high-quality voice/video calling, built to deliver a fast, secure and engaging experience for teams and communities.",
        cover: img("cover-social"),
        gallery: [
            "social-1",
            "social-2",
            "social-3"
        ].map(img),
        wideGallery: true,
        tech: [
            "Flutter Desktop",
            "WebSocket",
            "REST API",
            "Flutter Bloc",
            "AES Encryption"
        ],
        features: [
            "Real-time chat",
            "File sharing",
            "Voice and video calling",
            "User profiles"
        ]
    },
    {
        key: "reserveit",
        title: "Reserve-IT",
        category: "Restaurant Reservation",
        group: "Consumer",
        platform: "Android · iOS · Dining",
        short: "Restaurant discovery & booking",
        description: "ReserveIt is a restaurant discovery and reservation platform built with Flutter. A unique visual system — a pepper mill icon that scales with the value ratio between price and food quality — helps users find restaurants. With seamless sign-in, easy table booking and built-in reviews, users can book their ideal dining experience in a few taps.",
        cover: img("cover-reserveit"),
        coverPosition: "left center",
        gallery: [
            img("cover-reserveit")
        ],
        wideGallery: true,
        tech: [
            "Flutter",
            "Provider",
            "Firebase",
            "Google Maps",
            "HTTPS"
        ],
        features: [
            "Smart restaurant discovery",
            "Easy reservation system",
            "Google Maps",
            "bKash and SSLCommerz payments",
            "Push notifications"
        ]
    }
];
const tools = [
    "flutter",
    "dart",
    "firebase",
    "androidstudio",
    "xcode",
    "figma",
    "git",
    "postman",
    "webrtc",
    "googlemaps"
];
const about = {
    intro: "I'm a dedicated Flutter developer who transforms ideas into beautiful, functional mobile applications that users love. I write clean, maintainable code and care about UX, performance and scalable architecture — and when I'm not coding, I'm exploring new tech and sharing knowledge with the developer community.",
    learning: [
        {
            title: "B.Sc. in Engineering",
            desc: "BAUET, Natore · CGPA 3.20 / 4.00",
            year: "2016 — 2020",
            logo: "web/logo-bauet.webp"
        },
        {
            title: "Udemy Flutter Certification",
            desc: "Udemy · July 2021",
            year: "2021",
            logo: "web/logo-udemy.webp"
        },
        {
            title: "Mobile Game & App Skill Development",
            desc: "ICT Division, Bangladesh",
            year: "2018",
            logo: "web/logo-ict.webp"
        }
    ],
    toolkit: [
        "Flutter",
        "Dart",
        "GetX",
        "Bloc",
        "Riverpod",
        "Provider",
        "Firebase",
        "WebRTC",
        "WebSocket",
        "Clean Architecture",
        "MVVM",
        "Dio",
        "GetIt",
        "Google Maps",
        "bKash · SSLCommerz",
        "ML Kit"
    ],
    process: [
        {
            title: "Discover",
            desc: "Understanding the users, the business and what the app really needs to do."
        },
        {
            title: "Design",
            desc: "Turning Figma designs into pixel-perfect, responsive mobile interfaces."
        },
        {
            title: "Architect",
            desc: "Clean architecture, the right state management and solid API contracts."
        },
        {
            title: "Build",
            desc: "Fast, secure Flutter code — real-time features, payments, maps and more."
        },
        {
            title: "Release",
            desc: "Testing, Play Store & App Store releases, and maintenance after launch."
        }
    ],
    quote: [
        "Clean code,",
        "real products.",
        "iOS · Android",
        "· Desktop."
    ]
};
const journey = [
    {
        years: "Jun 2025 — Now",
        role: "Software Engineer (Flutter)",
        org: "Nexdecade Technology Pvt. Ltd.",
        location: "Panthapath, Dhaka",
        desc: "Lead mobile app developer: maintaining existing applications and building new features with Flutter.",
        points: [
            "Real-time vehicle tracking with Google Maps and live video streaming with WebRTC.",
            "Live chat, audio and video calling with WebSocket and WebRTC.",
            "State management with the BLoC pattern; encrypted, secure communication.",
            "Firebase push notifications and RESTful APIs for mobile and desktop apps."
        ],
        tags: [
            "Team Leadership",
            "Play Store & App Store",
            "Flutter Bloc",
            "GetX",
            "Riverpod",
            "Performance"
        ],
        current: true
    },
    {
        years: "Mar 2024 — Jun 2025",
        role: "Flutter Developer",
        org: "Neways International Company",
        location: "Shahbag, Dhaka",
        desc: "Built cross-platform apps with Flutter, integrated APIs and collaborated with the backend team.",
        points: [
            "Secure, scalable RESTful APIs with Laravel for seamless backend integration.",
            "ERP mobile apps for employees: attendance, tasks, leave and advance salary requests.",
            "Push notifications with Firebase and Pusher; GetX, BLoC, Provider and Riverpod."
        ],
        tags: [
            "API Integration",
            "Google ML Kit Face Detection",
            "Flutter Face API",
            "Store releases"
        ]
    },
    {
        years: "Oct 2022 — Jan 2024",
        role: "Jr. Mobile Application Developer",
        org: "BDJOBS.COM",
        location: "Kawran Bazar, Dhaka",
        desc: "Started as a junior developer, then led the mobile app team, delivering projects quickly and contributing to successful launches.",
        points: [
            "Led the employer recruitment app, with video resumes to improve hiring efficiency.",
            "Designed smooth user journeys to streamline recruitment workflows.",
            "GetX and BLoC state management, with hands-on Riverpod experience."
        ],
        tags: [
            "Team Leadership",
            "GetX",
            "Play Store releases",
            "Video Resume"
        ]
    },
    {
        years: "Mar 2022 — Sep 2022",
        role: "Flutter Application Developer",
        org: "Root Devs",
        location: "Dhaka",
        desc: "Built sports applications with live match streaming and essential third-party services.",
        points: [
            "Push notifications, in-app purchases, Google Sign-In and media players.",
            "Converted Figma designs into fully responsive interfaces."
        ],
        tags: [
            "Live streaming",
            "GetX",
            "Figma to app",
            "REST APIs"
        ]
    },
    {
        years: "Jun 2021 — Feb 2022",
        role: "Intern → Jr. Mobile App Developer",
        org: "Skoder Technologies",
        location: "Dhaka",
        desc: "Developed two medical apps — Mediaid Pro for patients and Mediaid for doctors — with real-time video calling between them.",
        points: [
            "Real-time doctor–patient video calling.",
            "RESTful API integration and responsive UI from Figma."
        ],
        tags: [
            "Figma",
            "Responsive UI",
            "REST APIs"
        ]
    }
];
const contact = [
    {
        icon: "mail",
        label: "Email",
        value: "mdmehedihasan4051@gmail.com",
        href: "mailto:mdmehedihasan4051@gmail.com"
    },
    {
        icon: "phone",
        label: "Phone / WhatsApp",
        value: "+880 1877-286284",
        href: "https://wa.me/8801877286284"
    },
    {
        icon: "linkedin",
        label: "LinkedIn",
        value: "in/mehedihasanmehedi",
        href: "https://www.linkedin.com/in/mehedihasanmehedi/"
    },
    {
        icon: "leetcode",
        label: "LeetCode",
        value: "u/mehedihasan177",
        href: "https://leetcode.com/u/mehedihasan177/"
    },
    {
        icon: "cv",
        label: "Curriculum Vitae",
        value: "Md_Mehedi_Hasan.pdf",
        href: "web/cv/Md_Mehedi_Hasan.pdf"
    },
    {
        icon: "form",
        label: "Message form",
        value: "Send me a message",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScu-m3kncsVSjpJJdhH5bWUoOx8f2V38Df6sEqMhu-MpiCuCQ/viewform?usp=publish-editor"
    },
    {
        icon: "pin",
        label: "Location",
        value: "Dhaka, Bangladesh",
        href: "https://maps.google.com/?q=Dhaka"
    }
];
const contactEmail = site.email;
}),
];

//# sourceMappingURL=_0k26a2i5zmzew._.js.map