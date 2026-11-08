/* ═══════════════════════════════════════════════════════════════
   Portfolio — main script (plain JavaScript, no libraries)
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  };

  /* ── SVG helpers ─────────────────────────────────────────── */
  function brandSvg(name, cls) {
    var p = window.ICONS && window.ICONS[name];
    if (!p) return "";
    return '<svg class="' + (cls || "icon") + '" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="' + p + '"/></svg>';
  }
  var ARROW_UR = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  var ARROW_R = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  window.brandSvg = brandSvg;

  // fill <svg data-icon="name"> placeholders
  $$("svg[data-icon]").forEach(function (el) {
    var p = window.ICONS[el.getAttribute("data-icon")];
    if (p) el.innerHTML = '<path d="' + p + '"/>';
  });

  /* ── Header ──────────────────────────────────────────────── */
  var header = $("#header");
  var menuBtn = $(".menu-btn");
  menuBtn.addEventListener("click", function () {
    var open = header.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  $$(".mobile-nav a").forEach(function (a) {
    a.addEventListener("click", function () { header.classList.remove("open"); });
  });

  /* ── Agent focus point (cursors rush to whatever is being built) ── */
  var agentFocus = null;

  /* ═══ "Live build" effect ═══════════════════════════════════ */
  var buildIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      buildIO.unobserve(en.target);
      runBuild(en.target);
    });
  }, { rootMargin: "0px 0px -12% 0px" });

  function runBuild(el) {
    var delay = parseFloat(el.getAttribute("data-delay") || "0") * 1000;
    if (REDUCE) { el.classList.add("render"); return; }
    setTimeout(function () {
      el.classList.add("select");
      var r = el.getBoundingClientRect();
      agentFocus = { x: r.left + r.width / 2, y: r.top + Math.min(r.height / 2, 260), t: performance.now() };
    }, delay);
    setTimeout(function () { el.classList.add("render"); }, delay + 380);
    setTimeout(function () { el.classList.remove("select"); }, delay + 1300);
  }

  function initBuild(root) {
    $$(".build", root).forEach(function (el) {
      if (el._built) return;
      el._built = true;
      var sel = document.createElement("div");
      sel.className = "sel";
      sel.setAttribute("aria-hidden", "true");
      var label = el.getAttribute("data-label");
      sel.innerHTML = "<i></i><i></i><i></i><i></i>" + (label ? "<span>" + esc(label) + "</span>" : "");
      el.appendChild(sel);
      buildIO.observe(el);
    });
  }
  window.initBuild = initBuild;

  /* Simple fade-up reveal for .reveal (staggered per parent) */
  var revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      revealIO.unobserve(en.target);
      var sibs = $$(".reveal", en.target.parentNode);
      var i = sibs.indexOf(en.target);
      setTimeout(function () { en.target.classList.add("in"); }, Math.max(0, i) * 40);
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach(function (el) { revealIO.observe(el); });

  /* ═══ Hero: decoding + rotating word ════════════════════════ */
  var WORDS = window.HERO_WORDS && window.HERO_WORDS.length ? window.HERO_WORDS : ["FLUTTER"];
  var wordEls = $$("[data-scramble]");
  (function sizeWords() {
    var longest = Math.max.apply(null, WORDS.map(function (w) { return w.length; }));
    var vw = Math.min((24 * 9) / longest, 30).toFixed(2);
    wordEls.forEach(function (el) {
      el.style.fontSize = "min(" + vw + "vw, 64vh)";
      el.textContent = WORDS[0];
    });
    $(".hero .build[data-label^='Text / ']").setAttribute("data-label", "Text / " + WORDS[0]);
  })();

  if (!REDUCE) {
    var GLYPHS = "{}<>/#=+*;:ABCDEFGHIJKLMNOPQRSTUVWXYZ01";
    var idx = 0;
    var setWord = function (t) { wordEls.forEach(function (el) { el.textContent = t; }); };
    var decode = function (target, done) {
      var lockAt = target.split("").map(function (_, i) { return 6 + i * 3 + Math.floor(Math.random() * 4); });
      var total = Math.max.apply(null, lockAt) + 1;
      var f = 0;
      (function step() {
        var out = "";
        for (var i = 0; i < target.length; i++) {
          out += f >= lockAt[i] ? target[i] : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        setWord(out);
        f++;
        if (f <= total) setTimeout(step, 38);
        else done();
      })();
    };
    var next = function () {
      decode(WORDS[idx % WORDS.length], function () {
        if (WORDS.length < 2) return;
        idx++;
        setTimeout(next, 3800);
      });
    };
    setTimeout(next, 700);
  }

  /* ═══ Scroll-linked effects (hero parallax + showcase wipe) ═══ */
  var hero = $("#top");
  var parWord = $$('[data-parallax="word"]');
  var parPortrait = $('[data-parallax="portrait"]');
  var parText = $('[data-parallax="text"]');
  var parFade = $('[data-parallax="fade"]');
  var showcase = $("#showcase");
  var live = $("#live");
  var scan = $("#scan");
  var browserWrap = $("#browserWrap");
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var range = function (p, a, b) { return clamp((p - a) / (b - a), 0, 1); };

  function onScroll() {
    var vh = window.innerHeight;
    // hero: progress 0 → 1 while the hero scrolls out of view
    var hr = hero.getBoundingClientRect();
    var hp = clamp(-hr.top / hr.height, 0, 1);
    if (!REDUCE) {
      parWord.forEach(function (el) { el.style.transform = "translateY(" + hp * 35 + "%)"; });
      parPortrait.style.transform = "translateY(" + hp * 12 + "%)";
      parText.style.transform = "translateY(" + -hp * 20 + "%)";
    }
    var fade = 1 - range(hp, 0, 0.8);
    parText.style.opacity = fade;
    parFade.style.opacity = fade;

    // header background
    header.classList.toggle("scrolled", window.scrollY > 40);

    // showcase: 0 when its top hits the bottom of the screen → 1 when centred
    var sr = showcase.getBoundingClientRect();
    var sp = clamp((vh - sr.top) / (vh / 2 + sr.height / 2), 0, 1);
    var w = range(sp, 0.45, 0.9);
    live.style.clipPath = "inset(0 " + (100 - w * 100) + "% 0 0)";
    scan.style.left = w * 100 + "%";
    scan.style.opacity = sp < 0.44 || sp > 0.92 ? 0 : 1;
    browserWrap.style.transform = REDUCE ? "" : "perspective(1400px) rotateX(" + (1 - sp) * 6 + "deg)";
  }
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; onScroll(); });
  }, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* ═══ Work: cards, filters, carousel, popup ═════════════════ */
  var PROJECTS = window.PROJECTS || [];
  var track = $("#track");
  var filter = "All";

  function renderCards() {
    var list = PROJECTS.filter(function (p) { return filter === "All" || p.group === filter; });
    $("#workCount").textContent = list.length + " projects · click to open";
    track.innerHTML = list.map(function (p, i) {
      var n = String(PROJECTS.indexOf(p) + 1).padStart(2, "0");
      return (
        '<button type="button" class="card" data-key="' + p.key + '" style="animation-delay:' + i * 0.05 + 's">' +
          '<div class="build skel" data-label="Frame / ' + p.key + '.webp" data-delay="' + (i * 0.18).toFixed(2) + '">' +
            '<div class="card-media">' +
              '<img src="' + p.cover + '" alt="' + esc(p.title) + '" loading="lazy" style="object-position:' + (p.coverPosition || "center") + '" />' +
              '<span class="badge">' + esc(p.category) + "</span>" +
              '<span class="view-pill">View case study</span>' +
            "</div>" +
          "</div>" +
          '<div class="card-foot">' +
            '<div class="card-title"><span class="card-num font-display">' + n + "</span>" +
              "<p>" + esc(p.title) + "<small>" + esc(p.platform) + "</small></p></div>" +
            '<div class="card-icons">' +
              (p.play ? brandSvg("googleplay") : "") + (p.ios ? brandSvg("appstore") : "") +
              '<span class="card-arrow">' + ARROW_UR + "</span>" +
            "</div>" +
          "</div>" +
        "</button>"
      );
    }).join("");
    track.scrollLeft = 0;
    initBuild(track);
  }
  renderCards();

  $$(".tabs button").forEach(function (b) {
    b.addEventListener("click", function () {
      filter = b.getAttribute("data-filter");
      $$(".tabs button").forEach(function (x) { x.classList.toggle("active", x === b); });
      renderCards();
    });
  });
  $$("[data-scroll]").forEach(function (b) {
    b.addEventListener("click", function () {
      var dir = parseInt(b.getAttribute("data-scroll"), 10);
      track.scrollBy({ left: dir * (track.clientWidth / 3 + 8), behavior: "smooth" });
    });
  });
  track.addEventListener("click", function (e) {
    var card = e.target.closest(".card");
    if (card) openProject(card.getAttribute("data-key"));
  });

  // tools row + mini icons
  [["#toolsRow", true], ["#miniIcons", false]].forEach(function (cfg) {
    var el = $(cfg[0]);
    if (!el) return;
    el.innerHTML = el.getAttribute("data-tools").split(",").map(function (t, i) {
      var svg = brandSvg(t, "");
      return cfg[1]
        ? '<div class="build" data-label="Icon / ' + t + '" data-delay="' + (i * 0.08).toFixed(2) + '"><div class="tool" title="' + t + '">' + svg + "</div></div>"
        : svg;
    }).join("");
  });

  // popup
  var modal = $("#modal");
  var lightbox = $("#lightbox");
  var lastFocus = null;

  function storeBtns(p) {
    return (p.play ? '<a class="store-btn light" href="' + p.play + '" target="_blank" rel="noreferrer">' + brandSvg("googleplay") + " Google Play</a>" : "") +
      (p.ios ? '<a class="store-btn dark" href="' + p.ios + '" target="_blank" rel="noreferrer">' + brandSvg("appstore") + " App Store</a>" : "");
  }

  function openProject(key) {
    var p = PROJECTS.find(function (x) { return x.key === key; });
    if (!p) return;
    lastFocus = document.activeElement;
    var html =
      '<div class="modal-box">' +
        '<div class="modal-head">' +
          '<div><p class="eyebrow">' + esc(p.platform) + '</p><h3 class="font-wide">' + esc(p.title) + "</h3></div>" +
          '<div class="modal-actions">' + storeBtns(p) + '<button type="button" class="close-btn" aria-label="Close">×</button></div>' +
        "</div>" +
        '<div class="modal-body">' +
          (p.video ? '<video src="web/video/' + p.video + '.mp4" poster="web/video/' + p.video + '-poster.webp" controls playsinline preload="metadata"></video>' : "") +
          '<div><p class="eyebrow mb-4">Screens</p><div class="gallery' + (p.wideGallery ? " wide" : "") + '">' +
            p.gallery.map(function (g, i) {
              return '<button type="button" data-zoom="' + g + '" style="animation-delay:' + (0.15 + i * 0.06) + 's"><img src="' + g + '" alt="' + esc(p.title) + " screen " + (i + 1) + '" loading="lazy" /></button>';
            }).join("") +
          "</div></div>" +
          '<div class="modal-cols">' +
            '<div><p class="eyebrow mb-3">Overview</p><p class="desc">' + esc(p.description) + "</p>" +
              '<p class="eyebrow mb-3 mt-8">Key features</p><ul class="features">' +
              p.features.map(function (f) { return '<li><i class="dot"></i>' + esc(f) + "</li>"; }).join("") +
            "</ul></div>" +
            '<div><p class="eyebrow mb-3">Built with</p><div class="chips-wrap">' +
              p.tech.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") +
            "</div>" + (p.play || p.ios ? '<div class="modal-stores-sm">' + storeBtns(p) + "</div>" : "") + "</div>" +
          "</div>" +
          (p.roles ? '<div><p class="eyebrow mb-4">User roles</p><div class="roles">' +
            p.roles.map(function (r) {
              return '<div class="role"><h4>' + esc(r.name) + "</h4><p>" + esc(r.description) + '</p><ul class="arrow-list">' +
                r.features.map(function (f) { return "<li>" + ARROW_R + esc(f) + "</li>"; }).join("") + "</ul></div>";
            }).join("") + "</div></div>" : "") +
        "</div>" +
      "</div>";
    modal.innerHTML = html;
    modal.scrollTop = 0;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-label", p.title);
    document.documentElement.classList.add("locked");
    $(".close-btn", modal).focus();
  }

  function closeProject() {
    if (!modal.classList.contains("open")) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("locked");
    var v = $("video", modal);
    if (v) v.pause();
    if (lastFocus) lastFocus.focus();
  }

  modal.addEventListener("click", function (e) {
    var z = e.target.closest("[data-zoom]");
    if (z) {
      $("img", lightbox).src = z.getAttribute("data-zoom");
      lightbox.classList.add("open");
      return;
    }
    if (e.target.closest(".close-btn") || !e.target.closest(".modal-box")) closeProject();
  });
  lightbox.addEventListener("click", function () { lightbox.classList.remove("open"); });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (lightbox.classList.contains("open")) lightbox.classList.remove("open");
    else closeProject();
  });

  /* ═══ Showcase films ════════════════════════════════════════ */
  var film = $("#film");
  $$("#filmTabs button").forEach(function (b) {
    b.addEventListener("click", function () {
      var k = b.getAttribute("data-film");
      $$("#filmTabs button").forEach(function (x) { x.classList.toggle("active", x === b); });
      film.src = "web/video/" + k + ".mp4";
      film.poster = "web/video/" + k + "-poster.webp";
      $("#filmName").textContent = k + "_app_film.mp4";
      film.play().catch(function () {});
    });
  });

  /* ═══ Journey: accordion, timeline line, shipped list ═══════ */
  $$(".job-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var job = btn.closest(".job");
      var willOpen = !job.classList.contains("open");
      $$(".job").forEach(function (j) {
        j.classList.remove("open");
        $(".job-toggle", j).setAttribute("aria-expanded", "false");
      });
      if (willOpen) {
        job.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
  var tl = $("#timeline");
  new IntersectionObserver(function (en, io) {
    if (en[0].isIntersecting) { tl.classList.add("in"); io.disconnect(); }
  }, { rootMargin: "-20% 0px" }).observe(tl);

  // "Shipped" list: name/arrow open the project popup; each store icon opens its own store
  var shipped = $("#shipped");
  shipped.innerHTML = PROJECTS.filter(function (p) { return p.play || p.ios; }).map(function (p, i) {
    return '<div class="build" data-label="Link / ' + p.key + '" data-delay="' + (i * 0.08).toFixed(2) + '">' +
      '<div class="ship-row">' +
        '<button type="button" class="ship-info" data-key="' + p.key + '"><b>' + esc(p.title) + "</b><small>" + esc(p.short) + "</small></button>" +
        '<span class="ic">' +
          (p.play ? '<a class="store-ic" href="' + p.play + '" target="_blank" rel="noreferrer" title="Get it on Google Play" aria-label="' + esc(p.title) + ' on Google Play">' + brandSvg("googleplay") + "</a>" : "") +
          (p.ios ? '<a class="store-ic" href="' + p.ios + '" target="_blank" rel="noreferrer" title="Download on the App Store" aria-label="' + esc(p.title) + ' on the App Store">' + brandSvg("appstore") + "</a>" : "") +
          '<button type="button" class="store-ic arr-btn" data-key="' + p.key + '" title="View project" aria-label="View ' + esc(p.title) + ' details">' +
            '<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17 17 7M8 7h9v9"/></svg></button>' +
        "</span>" +
      "</div></div>";
  }).join("");
  shipped.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-key]");
    if (b) openProject(b.getAttribute("data-key"));
  });

  /* ═══ Contact ══════════════════════════════════════════════ */
  var vc = $("#videoCard");
  var vcVideo = $("video", vc);
  var vcBtn = $(".vc-play", vc);
  var PLAY = '<svg width="12" height="12" viewBox="0 0 10 10" fill="currentColor"><path d="M2 1l7 4-7 4z"/></svg>';
  var PAUSE = '<svg width="12" height="12" viewBox="0 0 10 10" fill="currentColor"><rect x="1.5" y="1" width="2.5" height="8"/><rect x="6" y="1" width="2.5" height="8"/></svg>';
  vcBtn.addEventListener("click", function () {
    if (vcVideo.paused) {
      vcVideo.play();
      vc.classList.add("playing");
      vcBtn.innerHTML = PAUSE;
      vcBtn.setAttribute("aria-label", "Pause film");
    } else {
      vcVideo.pause();
      vc.classList.remove("playing");
      vcBtn.innerHTML = PLAY;
      vcBtn.setAttribute("aria-label", "Play film");
    }
  });
  vcVideo.addEventListener("ended", function () {
    vc.classList.remove("playing");
    vcBtn.innerHTML = PLAY;
  });

  var form = $("#msgForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var body = encodeURIComponent($("#msg").value || "Hi Mehedi! I'd like to talk about an app.");
    window.location.href = "mailto:" + form.getAttribute("data-email") + "?subject=" + encodeURIComponent("New project enquiry") + "&body=" + body;
  });
  $("#year").textContent = new Date().getFullYear();

  // start the build effect for everything on the page (after dynamic content exists)
  initBuild(document);

  /* ═══ Agent cursors ═════════════════════════════════════════ */
  (function agents() {
    var canvas = $("#agents");
    var ctx = canvas.getContext("2d");
    var COLORS = ["#ff4d5e", "#ffb020", "#3ddc84", "#2f9bff", "#b06bff", "#ff6ad5", "#30e0d0", "#ffe14d", "#7cf29a", "#ff8a3d", "#7aa8ff", "#e0e0e0"];
    var w = 0, h = 0, dpr = 1, alpha = 0;
    var mouse = { x: -9999, y: -9999, last: 0 };
    var rand = function (a, b) { return a + Math.random() * (b - a); };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    var count = w < 768 ? 10 : 26;
    var list = [];
    for (var i = 0; i < count; i++) {
      var x = rand(0, w), y = rand(0, h);
      list.push({ x: x, y: y, vx: 0, vy: 0, tx: x, ty: y, color: COLORS[i % COLORS.length], retarget: 0, phase: (i / count) * Math.PI * 2, size: rand(0.8, 1.15) });
    }
    window.addEventListener("pointermove", function (e) {
      mouse.x = e.clientX; mouse.y = e.clientY; mouse.last = performance.now();
    }, { passive: true });
    document.addEventListener("pointerleave", function () { mouse.x = -9999; mouse.last = 0; });

    function draw(a) {
      ctx.save();
      ctx.translate(a.x, a.y);
      ctx.rotate(Math.max(-0.45, Math.min(0.45, a.vx * 0.05)) - 0.1);
      ctx.scale(a.size, a.size);
      ctx.beginPath();
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
    }

    var t0 = performance.now();
    function tick(now) {
      var dt = Math.min((now - t0) / 16.67, 3);
      t0 = now;
      alpha += (1 - alpha) * 0.08;
      ctx.clearRect(0, 0, w, h);
      var mouseActive = now - mouse.last < 2600 && mouse.x > -100;
      var f = agentFocus;
      var focusActive = f && now - f.t < 1600;
      var ringR = 70 + Math.sin(now / 900) * 10;
      list.forEach(function (a, i) {
        if (mouseActive && i % 3 !== 0) {
          var ang = a.phase + now / 1400;
          var k = 1 + (i % 4) * 0.12;
          a.tx = mouse.x + Math.cos(ang) * ringR * k;
          a.ty = mouse.y + Math.sin(ang) * ringR * k;
        } else if (focusActive && i % 2 === 0) {
          a.tx = f.x + Math.cos(a.phase * 3) * 160;
          a.ty = f.y + Math.sin(a.phase * 3) * 70;
        } else if (now > a.retarget) {
          a.tx = rand(w * 0.05, w * 0.95);
          a.ty = rand(h * 0.12, h * 0.9);
          a.retarget = now + rand(1800, 5200);
        }
        a.vx = (a.vx + (a.tx - a.x) * 0.0035 * dt) * 0.92 + Math.sin(now / 300 + a.phase * 7) * 0.02;
        a.vy = (a.vy + (a.ty - a.y) * 0.0035 * dt) * 0.92 + Math.cos(now / 340 + a.phase * 5) * 0.02;
        a.x += a.vx * dt;
        a.y += a.vy * dt;
      });
      ctx.globalAlpha = alpha;
      list.forEach(draw);
      ctx.globalAlpha = 1;
      requestAnimationFrame(tick);
    }
    if (!REDUCE) requestAnimationFrame(tick);
  })();
})();
