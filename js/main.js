/* ═══════════════════════════════════════════════════════════════
   Md. Mehedi Hasan — Portfolio · main.js  ("Midnight Glass")
   Renders content from data.js and drives all motion.
   Libraries (local): GSAP + ScrollTrigger + Lenis in js/vendor.
   ═══════════════════════════════════════════════════════════════ */
(() => {
  "use strict";

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const root = document.documentElement;
  const hasGSAP = !!(window.gsap && window.ScrollTrigger);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motion = hasGSAP && !reduce;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const pad = (n) => String(n).padStart(2, "0");

  const PROJECTS = window.PROJECTS || [];
  const JOBS = window.JOBS || [];

  if (!motion) {
    root.classList.add("no-anim");
    $(".loader")?.remove();
  }
  if (hasGSAP) gsap.registerPlugin(ScrollTrigger);

  /* ═════════════ 1. Render from data ═════════════ */

  // Projects grid (bento rhythm: wide cards at 0, 3, 7)
  const WIDE = new Set([0, 3, 7]);
  const grid = $(".projects");
  grid.innerHTML = PROJECTS.map(
    (p, i) => `
    <button class="proj${WIDE.has(i) ? " is-wide" : ""}" type="button" data-i="${i}" data-group="${esc(p.group)}" aria-label="Open ${esc(p.title)}">
      <div class="proj__media">
        <img src="${esc(p.cover)}" alt="" loading="lazy" style="object-position:${esc(p.coverPosition || "center")}" />
        <span class="proj__tag">${esc(p.platform)}</span>
        ${p.play || p.ios ? `<span class="proj__live">Live</span>` : ""}
      </div>
      <div class="proj__body">
        <div class="proj__top"><h3 class="proj__title">${esc(p.title)}</h3><span class="proj__arrow">↗</span></div>
        <p class="proj__desc">${esc(p.short)}</p>
        <div class="proj__stack">${p.tech.slice(0, 4).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </div>
    </button>`
  ).join("");

  // Process
  $(".process__list").innerHTML = (window.PROCESS || [])
    .map(
      (s, i) => `
      <li class="pstep" data-reveal>
        <span class="pstep__dot">${pad(i + 1)}</span>
        <div class="pstep__card glass"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>
      </li>`
    )
    .join("");

  // Timeline
  const tlWrap = $(".timeline");
  JOBS.forEach((j) => {
    const el = document.createElement("article");
    el.className = "tl";
    el.innerHTML = `
      <span class="tl__node"></span>
      <div class="tl__card glass" data-reveal>
        <div class="tl__meta"><span><span class="tl__period">${esc(j.period)}</span>${j.current ? `<span class="tl__now">current</span>` : ""}</span><span>${esc(j.place)}</span></div>
        <h3>${esc(j.role)}</h3>
        <div class="tl__co">${esc(j.company)}</div>
        <p class="tl__sum">${esc(j.summary)}</p>
        <div class="tl__more">
          <ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          <div class="tl__tags">${j.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        </div>
        <button class="tl__btn" type="button" aria-expanded="false"><span>Show highlights</span> <i>⌄</i></button>
      </div>`;
    tlWrap.appendChild(el);
  });

  // Education
  $(".edu__grid").innerHTML = (window.EDUCATION || [])
    .map(
      (e) => `
      <div class="educ glass" data-reveal>
        <span class="educ__logo"><img src="${esc(e.logo)}" alt="" loading="lazy" /></span>
        <div><span>${esc(e.year)}</span><h4>${esc(e.title)}</h4><p>${esc(e.org)}</p></div>
      </div>`
    )
    .join("");

  /* ═════════════ 2. Smooth scroll ═════════════ */

  let lenis = null;
  if (motion && window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  const scrollToEl = (target) => {
    if (lenis) lenis.scrollTo(target, { offset: target === 0 ? 0 : -20, duration: 1.4 });
    else if (target === 0) scrollTo({ top: 0, behavior: "smooth" });
    else target.scrollIntoView({ behavior: "smooth" });
  };
  $$('a[href^="#"]').forEach((a) =>
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const t = id === "#top" ? 0 : $(id);
      if (t === null) return;
      e.preventDefault();
      setSheet(false);
      scrollToEl(t);
    })
  );

  /* ═════════════ 3. Nav ═════════════ */

  const nav = $(".nav");
  const onScroll = (y) => nav.classList.toggle("is-scrolled", y > 30);
  if (lenis) lenis.on("scroll", ({ scroll }) => onScroll(scroll));
  else addEventListener("scroll", () => onScroll(scrollY), { passive: true });
  onScroll(scrollY);

  // sliding pill under the active / hovered link
  const links = $$(".nav__links a");
  const pill = $(".nav__pill");
  let active = null;
  const movePill = (a) => {
    if (!a) return (pill.style.opacity = 0);
    pill.style.opacity = 1;
    pill.style.width = a.offsetWidth + "px";
    pill.style.transform = `translateX(${a.offsetLeft}px)`;
  };
  links.forEach((a) => {
    a.addEventListener("mouseenter", () => movePill(a));
    const sec = $(a.getAttribute("href"));
    if (!sec) return;
    new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.toggle("is-active", l === a));
          active = a;
          movePill(a);
        } else if (active === a) {
          a.classList.remove("is-active");
          active = null;
          movePill(null);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    ).observe(sec);
  });
  $(".nav__links").addEventListener("mouseleave", () => movePill(active));

  // mobile sheet
  const burger = $(".nav__burger");
  function setSheet(open) {
    document.body.classList.toggle("sheet-open", open);
    burger.setAttribute("aria-expanded", open);
    $(".sheet").setAttribute("aria-hidden", !open);
  }
  burger.addEventListener("click", () => setSheet(!document.body.classList.contains("sheet-open")));

  // Dhaka clock
  const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Dhaka" });
  const tick = () => $$(".clock").forEach((c) => (c.textContent = fmt.format(new Date())));
  tick();
  setInterval(tick, 15000);

  /* ═════════════ 4. Background: particle network ═════════════ */

  const cvs = $(".particles");
  if (cvs && !reduce) {
    const ctx = cvs.getContext("2d");
    let W, H, dpr, pts = [];
    const mouse = { x: -9999, y: -9999 };
    const resize = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = innerWidth;
      H = innerHeight;
      cvs.width = W * dpr;
      cvs.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(70, (W * H) / 20000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.4,
      }));
    };
    resize();
    addEventListener("resize", resize);
    addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    let scrollShift = 0, lastS = scrollY;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const s = scrollY;
      scrollShift = (s - lastS) * 0.15;
      lastS = s;
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy - scrollShift;
        if (p.x < 0) p.x += W; if (p.x > W) p.x -= W;
        if (p.y < 0) p.y += H; if (p.y > H) p.y -= H;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 140) { p.x += (dx / d) * 0.9; p.y += (dy / d) * 0.9; }
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(19,185,253,${(1 - d / 130) * 0.16})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < 200) {
          ctx.strokeStyle = `rgba(94,234,212,${(1 - md / 200) * 0.35})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = "rgba(180,230,255,0.55)";
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }

  // Soft cursor spotlight
  const spot = $(".spot");
  if (fine && spot) {
    let sx = 0, sy = 0, tx = 0, ty = 0;
    addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; spot.classList.add("is-on"); });
    document.addEventListener("mouseleave", () => spot.classList.remove("is-on"));
    const loop = () => {
      sx += (tx - sx) * 0.12;
      sy += (ty - sy) * 0.12;
      spot.style.transform = `translate3d(${sx}px,${sy}px,0)`;
      requestAnimationFrame(loop);
    };
    loop();
  }

  /* ═════════════ 5. Hero pieces ═════════════ */

  // Swap word: native. → fast. → beautiful. → secure. …
  const swapWords = ["native.", "fast.", "beautiful.", "secure.", "alive."];
  const swap = $(".hero__swap span");
  let si = 0;
  setInterval(() => {
    si = (si + 1) % swapWords.length;
    if (!motion) return void (swap.textContent = swapWords[si]);
    gsap.timeline()
      .to(swap, { yPercent: -100, opacity: 0, filter: "blur(6px)", duration: 0.45, ease: "power3.in" })
      .add(() => (swap.textContent = swapWords[si]))
      .fromTo(swap, { yPercent: 100, opacity: 0, filter: "blur(6px)" }, { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 0.7, ease: "expo.out" });
  }, 2600);

  /* ═════════════ 6. Interactions ═════════════ */

  // Spotlight + tilt on cards
  const spotlight = (el, tilt) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      el.style.setProperty("--mx", x + "px");
      el.style.setProperty("--my", y + "px");
      if (tilt && motion) gsap.to(el, { rotationY: (x / r.width - 0.5) * 8, rotationX: -(y / r.height - 0.5) * 8, transformPerspective: 900, duration: 0.6, ease: "power3.out" });
    });
    if (tilt && motion) el.addEventListener("pointerleave", () => gsap.to(el, { rotationY: 0, rotationX: 0, duration: 0.9, ease: "elastic.out(1, 0.5)" }));
  };
  if (fine) {
    $$(".proj").forEach((el) => spotlight(el, true));
    $$(".tile").forEach((el) => spotlight(el, el.hasAttribute("data-tilt")));
  }

  // Magnetic buttons
  if (fine && motion) {
    $$("[data-magnetic]").forEach((el) => {
      const x = gsap.quickTo(el, "x", { duration: 0.7, ease: "elastic.out(1, 0.4)" });
      const y = gsap.quickTo(el, "y", { duration: 0.7, ease: "elastic.out(1, 0.4)" });
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        x((e.clientX - r.left - r.width / 2) * 0.3);
        y((e.clientY - r.top - r.height / 2) * 0.4);
      });
      el.addEventListener("mouseleave", () => { x(0); y(0); });
    });
  }

  // Filters with sliding indicator + animated re-layout
  const fBtns = $$(".filters button");
  const ind = $(".filters__ind");
  const placeInd = (b) => {
    ind.style.width = b.offsetWidth + "px";
    ind.style.transform = `translateX(${b.offsetLeft}px)`;
  };
  const cards = $$(".proj");
  fBtns.forEach((b) =>
    b.addEventListener("click", () => {
      fBtns.forEach((x) => { x.classList.toggle("is-on", x === b); x.setAttribute("aria-selected", x === b); });
      placeInd(b);
      const f = b.dataset.filter;
      const apply = () => {
        cards.forEach((c, i) => {
          c.classList.toggle("is-hidden", f !== "all" && c.dataset.group !== f);
          c.classList.toggle("is-wide", f === "all" && WIDE.has(i));
        });
        if (motion) {
          gsap.fromTo(cards.filter((c) => !c.classList.contains("is-hidden")), { opacity: 0, y: 30, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.06, ease: "expo.out", clearProps: "opacity,transform" });
          ScrollTrigger.refresh();
        }
      };
      if (motion) gsap.to(cards, { opacity: 0, y: -10, duration: 0.2, ease: "power2.in", onComplete: apply });
      else apply();
    })
  );
  const placeFirst = () => placeInd($(".filters button.is-on"));
  addEventListener("resize", placeFirst);
  document.fonts?.ready.then(placeFirst);
  placeFirst();

  // Timeline expanders
  $$(".tl").forEach((tl) => {
    const btn = $(".tl__btn", tl);
    const more = $(".tl__more", tl);
    btn.addEventListener("click", () => {
      const open = !tl.classList.contains("is-open");
      tl.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open);
      $("span", btn).textContent = open ? "Hide highlights" : "Show highlights";
      if (hasGSAP) gsap.to(more, { height: open ? "auto" : 0, duration: 0.6, ease: "expo.inOut", onComplete: () => ScrollTrigger.refresh() });
      else more.style.height = open ? "auto" : "0";
    });
  });

  // Films player — landscape walkthrough videos with an app list
  const FILMS = PROJECTS.map((p, i) => ({ p, i })).filter((x) => x.p.video);
  const player = $(".player");
  const video = $(".player__video");
  const list = $(".player__list");
  const fmtT = (t) => (isFinite(t) ? `${Math.floor(t / 60)}:${pad(Math.floor(t % 60))}` : "0:00");
  list.innerHTML = FILMS.map(({ p }, k) => `
    <button class="film${k ? "" : " is-on"}" type="button" role="tab" aria-selected="${!k}" data-film="${k}">
      <span class="film__thumb"><img src="assets/video/${esc(p.video)}-poster.webp" alt="" loading="lazy" /></span>
      <span class="film__meta"><small>Film ${pad(k + 1)} · ${esc(p.platform.split("·")[0].trim())}</small><b>${esc(p.title)}</b><span>${esc(p.short)}</span></span>
      <span class="film__prog"><i></i></span>
    </button>`).join("");
  const filmBtns = $$(".film", list);
  let fi = 0, wantPlay = false;
  const loadFilm = (k, play) => {
    fi = k;
    const { p } = FILMS[k];
    filmBtns.forEach((b, j) => { b.classList.toggle("is-on", j === k); b.setAttribute("aria-selected", j === k); $(".film__prog i", b).style.width = "0"; });
    video.poster = `assets/video/${p.video}-poster.webp`;
    video.src = `assets/video/${p.video}.mp4`;
    $(".player__title").textContent = `${p.title} — app walkthrough`;
    if (play) video.play().catch(() => {});
  };
  const syncPP = () => {
    const paused = video.paused;
    player.classList.toggle("is-paused", paused);
    $(".player__pp").textContent = paused ? "▶" : "❚❚";
    $(".player__pp").setAttribute("aria-label", paused ? "Play" : "Pause");
  };
  video.addEventListener("play", syncPP);
  video.addEventListener("pause", syncPP);
  video.addEventListener("timeupdate", () => {
    const r = video.duration ? video.currentTime / video.duration : 0;
    $(".player__seek i").style.width = r * 100 + "%";
    $(".film__prog i", filmBtns[fi]).style.width = r * 100 + "%";
    $(".player__time").textContent = `${fmtT(video.currentTime)} / ${fmtT(video.duration)}`;
  });
  video.addEventListener("loadedmetadata", () => ($(".player__time").textContent = `0:00 / ${fmtT(video.duration)}`));
  video.addEventListener("ended", () => loadFilm((fi + 1) % FILMS.length, true));
  filmBtns.forEach((b, k) => b.addEventListener("click", () => {
    if (k === fi) return video.paused ? video.play().catch(() => {}) : video.pause();
    wantPlay = true;
    loadFilm(k, true);
  }));
  const toggle = () => (video.paused ? video.play().catch(() => {}) : video.pause());
  $(".player__pp").addEventListener("click", toggle);
  $(".player__big").addEventListener("click", toggle);
  video.addEventListener("click", toggle);
  $(".player__mute").addEventListener("click", () => {
    video.muted = !video.muted;
    $(".player__mute").textContent = video.muted ? "🔇" : "🔊";
    $(".player__mute").setAttribute("aria-label", video.muted ? "Unmute" : "Mute");
  });
  const seek = $(".player__seek");
  seek.addEventListener("click", (e) => {
    const r = seek.getBoundingClientRect();
    if (video.duration) video.currentTime = ((e.clientX - r.left) / r.width) * video.duration;
  });
  seek.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") video.currentTime += 5;
    if (e.key === "ArrowLeft") video.currentTime -= 5;
  });
  $(".player__case").addEventListener("click", () => openModal(FILMS[fi].i));
  loadFilm(0, false);
  syncPP();
  // autoplay (muted) while the player is on screen, pause when it leaves
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) {
      if (video.paused && (wantPlay || !player.dataset.seen)) { player.dataset.seen = 1; video.play().catch(() => {}); }
    } else if (!video.paused) { wantPlay = true; video.pause(); }
  }, { threshold: 0.4 }).observe($(".player__screen"));

  // Copy email + toast
  const toast = $(".toast");
  let tt;
  const showToast = (m) => {
    toast.textContent = m;
    toast.classList.add("is-on");
    clearTimeout(tt);
    tt = setTimeout(() => toast.classList.remove("is-on"), 2200);
  };
  $$("[data-copy]").forEach((b) =>
    b.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(b.dataset.copy); showToast("✓ Email copied to clipboard"); }
      catch { showToast(b.dataset.copy); }
    })
  );

  /* ═════════════ 7. Scroll motion ═════════════ */

  if (motion) {
    // Loader
    const arc = $(".loader__arc");
    const pct = $(".loader__pct span");
    const o = { v: 0 };
    gsap.set(".hero [data-reveal]", { opacity: 0, y: 30, filter: "blur(10px)" });
    gsap.set(".hero__visual", { opacity: 0, scale: 0.92 });
    gsap.set(".nav", { opacity: 0, y: -20 });
    lenis?.stop();
    const lt = gsap.timeline({ onComplete: intro });
    lt.to(o, { v: 100, duration: 1.5, ease: "power2.inOut", onUpdate: () => { arc.style.strokeDashoffset = 327 - (327 * o.v) / 100; pct.textContent = Math.round(o.v); } })
      .to(".loader__ring, .loader__mark, .loader__pct", { scale: 1.15, opacity: 0, duration: 0.5, ease: "power3.in" })
      .to(".loader", { opacity: 0, duration: 0.5 }, "-=0.15")
      .set(".loader", { display: "none" });
    setTimeout(() => lt.progress() < 1 && lt.progress(1), 5000);

    function intro() {
      lenis?.start();
      gsap.timeline({ defaults: { ease: "expo.out" } })
        .to(".nav", { opacity: 1, y: 0, duration: 1, clearProps: "transform" }, 0)
        .to(".hero [data-reveal]", { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.09 }, 0.05)
        .to(".hero__visual", { opacity: 1, scale: 1, duration: 1.6, clearProps: "transform" }, 0.2);
    }

    // Hero parallax out
    // explicit from-values so scrolling back up always restores full visibility
    gsap.fromTo(".pg__stage", { yPercent: 0, opacity: 1 }, { yPercent: 12, opacity: 0.35, ease: "none", immediateRender: false, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.fromTo(".hero__copy", { yPercent: 0, opacity: 1 }, { yPercent: 8, opacity: 0.3, ease: "none", immediateRender: false, scrollTrigger: { trigger: ".hero", start: "40% top", end: "bottom top", scrub: true } });

    // Generic blur-up reveal (everything outside the hero)
    $$("[data-reveal]").filter((el) => !el.closest(".hero")).forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
        duration: 1.1,
        ease: "expo.out",
        clearProps: "filter",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onComplete: () => el.classList.add("is-in"),
      });
    });
    // tiles: trigger bars & sparkline when visible
    const tio = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); tio.unobserve(e.target); }
    }), { threshold: 0.3 });
    $$(".tile").forEach((t) => tio.observe(t));

    // Project cards: staggered 3D rise as each row enters
    gsap.set(".proj", { opacity: 0, y: 60 });
    let queue = [], qT;
    const pio = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { queue.push(e.target); pio.unobserve(e.target); } });
      clearTimeout(qT);
      qT = setTimeout(() => {
        gsap.fromTo(queue, { opacity: 0, y: 60, rotationX: -12, transformPerspective: 900 }, { opacity: 1, y: 0, rotationX: 0, duration: 1.1, stagger: 0.1, ease: "expo.out", clearProps: "transform" });
        queue = [];
      }, 60);
    }, { rootMargin: "0px 0px -8% 0px" });
    cards.forEach((c) => pio.observe(c));

    // Counters
    $$("[data-count]").forEach((el) => {
      const c = { v: 0 };
      gsap.to(c, { v: +el.dataset.count, duration: 2, ease: "power3.out", onUpdate: () => (el.textContent = Math.round(c.v)), scrollTrigger: { trigger: el, start: "top 90%", once: true } });
    });

    // Process wire + lit steps
    gsap.to(".process__flow", { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".process", start: "top 75%", end: "bottom 60%", scrub: true } });
    $$(".pstep").forEach((s) => ScrollTrigger.create({ trigger: s, start: "top 70%", onEnter: () => s.classList.add("is-lit"), onLeaveBack: () => s.classList.remove("is-lit") }));

    // Timeline rail + nodes
    gsap.to(".timeline__rail i", { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".timeline", start: "top 65%", end: "bottom 65%", scrub: true } });
    $$(".tl").forEach((t) => ScrollTrigger.create({ trigger: t, start: "top 65%", onEnter: () => t.classList.add("is-lit"), onLeaveBack: () => t.classList.remove("is-lit") }));

    // Footer word rises
    gsap.from(".footer__big", { yPercent: 60, opacity: 0, ease: "none", scrollTrigger: { trigger: ".footer", start: "top bottom", end: "bottom bottom", scrub: true } });

    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    addEventListener("load", () => ScrollTrigger.refresh());
  } else {
    $$(".tile").forEach((t) => t.classList.add("is-in"));
  }

  /* ═════════════ 8. Project modal ═════════════ */

  const modal = $(".modal");
  const box = $(".modal__box");
  const body = $(".modal__body");
  let cur = -1, lastFocus = null;

  function render(i) {
    const p = PROJECTS[i];
    const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(i + 1) % PROJECTS.length];
    body.innerHTML = `
      <div class="m">
        <div class="m__hero"><img src="${esc(p.cover)}" alt="" style="object-position:${esc(p.coverPosition || "center")}" /></div>
        <div class="m__head">
          <div class="m__kicker"><span>${pad(i + 1)} / ${pad(PROJECTS.length)}</span><span>${esc(p.group)}</span><span>${esc(p.platform)}</span></div>
          <h2 class="m__title" id="mTitle">${esc(p.title)}</h2>
        </div>
        <div class="m__grid">
          <div><span class="m__lbl">// overview</span><p class="m__desc">${esc(p.description)}</p></div>
          <aside class="m__side">
            <div><span class="m__lbl">// built with</span><div class="m__tech">${p.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div></div>
            ${p.play || p.ios ? `<div><span class="m__lbl">// get the app</span><div class="m__stores">
              ${p.play ? `<a class="store" href="${esc(p.play)}" target="_blank" rel="noopener"><img src="assets/tech/googleplay.svg" alt="" />Google Play</a>` : ""}
              ${p.ios ? `<a class="store" href="${esc(p.ios)}" target="_blank" rel="noopener"><img src="assets/tech/apple.svg" alt="" />App Store</a>` : ""}
            </div></div>` : ""}
          </aside>
        </div>
        <div class="m__sec"><span class="m__lbl">// key features</span><ul class="m__feat">${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul></div>
        ${p.roles ? `<div class="m__sec"><span class="m__lbl">// three roles, one app</span><div class="m__roles">${p.roles.map((r) => `<div class="m__role"><h6>${esc(r.name)}</h6><p>${esc(r.description)}</p><ul>${r.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul></div>`).join("")}</div></div>` : ""}
        ${p.video ? `<div class="m__sec m__film">
          <video class="m__video" src="assets/video/${esc(p.video)}.mp4" poster="assets/video/${esc(p.video)}-poster.webp" muted loop playsinline autoplay controls></video>
          <p>A real walkthrough of <span class="grad">${esc(p.title)}</span>, recorded on device.</p>
        </div>` : ""}
        <div class="m__sec"><span class="m__lbl">// screens — tap to enlarge</span>
          <div class="m__gal${p.wideGallery ? " is-wide" : ""}">${p.gallery.map((g, k) => `<button type="button" data-shot="${k}" aria-label="Screenshot ${k + 1}"><img src="${esc(g)}" alt="" loading="lazy" /></button>`).join("")}</div>
        </div>
        <div class="m__nav">
          <button type="button" data-go="${(i - 1 + PROJECTS.length) % PROJECTS.length}"><small>← Previous</small><b>${esc(prev.title)}</b></button>
          <button type="button" data-go="${(i + 1) % PROJECTS.length}"><small>Next →</small><b>${esc(next.title)}</b></button>
        </div>
      </div>`;
    $$("[data-shot]", body).forEach((b) => b.addEventListener("click", () => openLB(p.gallery, +b.dataset.shot)));
    $$("[data-go]", body).forEach((b) => b.addEventListener("click", () => go(+b.dataset.go)));
  }

  function openModal(i) {
    cur = i;
    lastFocus = document.activeElement;
    render(i);
    modal.hidden = false;
    box.scrollTop = 0;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    if (motion) {
      gsap.fromTo(".modal__bg", { opacity: 0 }, { opacity: 1, duration: 0.4 });
      gsap.fromTo(box, { opacity: 0, y: 60, scale: 0.96, rotationX: 8, transformPerspective: 1200 }, { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 0.8, ease: "expo.out" });
      gsap.from($$(".m__head, .m__grid, .m__sec", body), { opacity: 0, y: 30, duration: 0.8, stagger: 0.06, delay: 0.15, ease: "expo.out" });
    }
    $(".modal__x").focus({ preventScroll: true });
  }
  function go(i) {
    if (!motion) { cur = i; render(i); box.scrollTop = 0; return; }
    gsap.to(body, { opacity: 0, x: -30, duration: 0.25, ease: "power2.in", onComplete: () => {
      cur = i; render(i); box.scrollTop = 0;
      gsap.fromTo(body, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.6, ease: "expo.out" });
    } });
  }
  function closeModal() {
    if (modal.hidden) return;
    const done = () => {
      modal.hidden = true;
      body.innerHTML = "";
      document.body.style.overflow = "";
      lenis?.start();
      lastFocus?.focus?.({ preventScroll: true });
    };
    if (motion) {
      gsap.to(".modal__bg", { opacity: 0, duration: 0.35 });
      gsap.to(box, { opacity: 0, y: 40, scale: 0.97, duration: 0.4, ease: "power3.in", onComplete: done });
    } else done();
  }
  grid.addEventListener("click", (e) => {
    const c = e.target.closest(".proj");
    if (c) openModal(+c.dataset.i);
  });
  $$("[data-close]", modal).forEach((b) => b.addEventListener("click", closeModal));

  /* ═════════════ 8b. CV viewer (opens in-page instead of a new tab) ═════════════ */

  const cv = $(".cv");
  const cvBox = $(".cv__box", cv);
  const cvScroll = $(".cv__scroll", cv);
  let cvFocus = null;
  function openCV() {
    cvFocus = document.activeElement;
    setSheet(false);
    cv.hidden = false;
    cv.classList.remove("is-zoom");
    $(".cv__zoom", cv).classList.remove("is-on");
    $(".cv__zoom", cv).textContent = "+";
    cvScroll.scrollTop = 0;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    if (motion) {
      gsap.fromTo(".cv__bg", { opacity: 0 }, { opacity: 1, duration: 0.35 });
      gsap.fromTo(cvBox, { opacity: 0, y: 50, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "expo.out" });
      gsap.fromTo(".cv__paper", { opacity: 0, y: 40, rotationX: 10, transformPerspective: 1200 }, { opacity: 1, y: 0, rotationX: 0, duration: 0.9, delay: 0.12, ease: "expo.out" });
    }
    $(".cv__x", cv).focus({ preventScroll: true });
  }
  function closeCV() {
    if (cv.hidden) return;
    const done = () => {
      cv.hidden = true;
      document.body.style.overflow = "";
      if (modal.hidden) lenis?.start();
      cvFocus?.focus?.({ preventScroll: true });
    };
    if (motion) {
      gsap.to(".cv__bg", { opacity: 0, duration: 0.3 });
      gsap.to(cvBox, { opacity: 0, y: 30, scale: 0.97, duration: 0.35, ease: "power3.in", onComplete: done });
    } else done();
  }
  const toggleZoom = () => {
    const on = !cv.classList.contains("is-zoom");
    cv.classList.toggle("is-zoom", on);
    $(".cv__zoom", cv).classList.toggle("is-on", on);
    $(".cv__zoom", cv).setAttribute("aria-label", on ? "Zoom out" : "Zoom in");
    $(".cv__zoom", cv).textContent = on ? "−" : "+";
  };
  $$("[data-cv]").forEach((a) =>
    a.addEventListener("click", (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return; // let modifier-clicks open the PDF normally
      e.preventDefault();
      openCV();
    })
  );
  $$("[data-cv-close]", cv).forEach((b) => b.addEventListener("click", closeCV));
  $(".cv__zoom", cv).addEventListener("click", toggleZoom);
  $(".cv__paper", cv).addEventListener("click", toggleZoom);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !cv.hidden) { e.stopImmediatePropagation(); closeCV(); }
  }, true);

  /* ═════════════ 9. Lightbox ═════════════ */

  const lb = $(".lightbox");
  const lbImg = $("img", lb);
  let lbList = [], lbI = 0;
  const lbShow = (i) => {
    lbI = (i + lbList.length) % lbList.length;
    lbImg.src = lbList[lbI];
    if (motion) gsap.fromTo(lbImg, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.45, ease: "expo.out" });
  };
  function openLB(list, i) { lbList = list; lb.hidden = false; lbShow(i); }
  const closeLB = () => (lb.hidden = true);
  $(".lb__prev").addEventListener("click", () => lbShow(lbI - 1));
  $(".lb__next").addEventListener("click", () => lbShow(lbI + 1));
  $(".lb__x").addEventListener("click", closeLB);
  lb.addEventListener("click", (e) => e.target === lb && closeLB());

  document.addEventListener("keydown", (e) => {
    if (!lb.hidden) {
      if (e.key === "Escape") closeLB();
      if (e.key === "ArrowRight") lbShow(lbI + 1);
      if (e.key === "ArrowLeft") lbShow(lbI - 1);
      return;
    }
    if (e.key === "Escape") {
      if (!modal.hidden) closeModal();
      else setSheet(false);
    }
  });
})();
