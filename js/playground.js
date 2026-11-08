/* ═══════════════════════════════════════════════════════════════
   App playground — interactive 3D phone (plain JavaScript)
   - Phone tilts with the mouse, bobs, and spins + blurs on app switch
   - Home screen of app tiles; each app plays its real screenshots
   - Glass tech chips + orbs float, dodge the cursor, get sucked into
     the phone on switch and burst back out with that app's tech
   - Section glow re-colours per app
   Data comes from js/data.js (PHONE_HOME, PHONE_APPS).
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var HOME = window.PHONE_HOME;
  var APPS = window.PHONE_APPS || [];
  var ALL = [HOME].concat(APPS);
  var byKey = function (k) { return ALL.find(function (a) { return a.key === k; }) || HOME; };
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  };

  var section = $("#apps");
  var phone = $("#phone");
  var floatEl = $("#phoneFloat");
  var screen = $("#screen");
  var layerFg = $("#layerFg");
  var layerBg = $("#layerBg");
  var picker = $("#picker");
  if (!section || !phone) return;

  /* ── Tween helper (requestAnimationFrame) ─────────────────── */
  var easeIn = function (t) { return t * t * t; };
  var backOut = function (s) {
    return function (t) { var u = t - 1; return 1 + (s + 1) * u * u * u + s * u * u; };
  };
  function tween(opts) {
    var start = null;
    var delay = (opts.delay || 0) * 1000;
    var dur = opts.duration * 1000;
    function frame(now) {
      if (start === null) start = now + delay;
      var t = Math.max(0, Math.min(1, (now - start) / dur));
      if (now >= start) opts.update(opts.ease ? opts.ease(t) : t);
      if (t < 1) requestAnimationFrame(frame);
      else if (opts.done) opts.done();
    }
    requestAnimationFrame(frame);
  }

  /* ── Background glows (one per app, cross-faded) ──────────── */
  $("#appsBg").innerHTML = ALL.map(function (a) {
    return '<div class="apps-bg' + (a.key === "home" ? " on" : "") + '" data-bg="' + a.key + '" style="background:radial-gradient(60% 55% at 38% 52%, ' +
      a.colors[0] + " 0%, " + a.colors[1] + " 40%, " + a.colors[2] + ' 72%, var(--bg) 100%)"></div>';
  }).join("");

  /* ── Rising bubbles (deterministic positions) ─────────────── */
  var bubbles = "";
  for (var b = 0; b < 16; b++) {
    var r = function (n) { return ((Math.sin(b * 9301 + n * 49297) + 1) / 2) % 1; };
    var size = 4 + r(2) * 14;
    bubbles += '<span style="left:' + (r(1) * 100).toFixed(1) + "%;width:" + size.toFixed(1) + "px;height:" + size.toFixed(1) +
      "px;animation-duration:" + (9 + r(3) * 10).toFixed(1) + "s;animation-delay:" + (-r(4) * 18).toFixed(1) + 's"></span>';
  }
  $("#bubbles").innerHTML = bubbles;

  /* ── Picker ───────────────────────────────────────────────── */
  picker.innerHTML = ALL.map(function (a) {
    return '<button type="button" class="pick' + (a.key === "home" ? " active" : "") + '" data-app="' + a.key + '" aria-pressed="' + (a.key === "home") + '">' +
      '<span class="sw" style="background:' + a.swatch + '">' + a.emoji + "</span>" +
      "<b>" + esc(a.label) + "</b><span>" + esc(a.short) + "</span></button>";
  }).join("");

  /* ── Floating chips & orbs (percent positions in the stage) ── */
  var FG = [
    { kind: "chip", top: 12, left: 12, big: true },
    { kind: "chip", top: 26, left: 74, big: true },
    { kind: "chip", top: 72, left: 14 },
    { kind: "chip", top: 62, left: 76, md: true },
    { kind: "chip", top: 88, left: 44 },
    { kind: "chip", top: 4, left: 56, md: true },
    { kind: "chip", top: 44, left: 4, md: true },
    { kind: "orb", top: 50, left: 84, size: 56 },
    { kind: "orb", top: 34, left: 22, size: 32, md: true, alt: true }
  ];
  var BG = [
    { kind: "chip", top: 6, left: 28 },
    { kind: "chip", top: 80, left: 66, md: true },
    { kind: "chip", top: 58, left: 6, md: true },
    { kind: "orb", top: 16, left: 70, size: 46 },
    { kind: "orb", top: 86, left: 26, size: 28, md: true, alt: true }
  ];
  var chips = [];   // { el, isText, bx, by, rx, ry, tilt, scale, opacity, dur, spin }
  var textEls = [];
  var DURS = [5, 7, 6, 8, 5.5, 6.5, 9, 11, 10, 7.5];

  function makeLayer(defs, layer) {
    defs.forEach(function (d) {
      var el = document.createElement("div");
      el.style.top = d.top + "%";
      el.style.left = d.left + "%";
      if (d.kind === "orb") {
        el.className = "orb" + (d.alt ? " alt" : "") + (d.md ? " md-only" : "");
        el.style.width = el.style.height = d.size + "px";
      } else {
        el.className = "float-chip" + (d.big ? " big" : "") + (d.md ? " md-only" : "");
        textEls.push(el);
      }
      layer.appendChild(el);
      var i = chips.length;
      chips.push({
        el: el, isText: d.kind === "chip", bx: 0, by: 0, rx: 0, ry: 0,
        tilt: (Math.random() - 0.5) * 16, scale: 1, opacity: 1,
        dur: DURS[i % DURS.length], spin: Math.random() * 360
      });
    });
  }
  makeLayer(FG, layerFg);
  makeLayer(BG, layerBg);
  function setChipTexts(list) {
    textEls.forEach(function (el, i) { el.textContent = list[i % list.length]; });
  }
  setChipTexts(HOME.chips);

  /* ── Phone screens ────────────────────────────────────────── */
  var shotTimer = null;
  function homeScreen() {
    return '<div class="status"><span>9:41</span><span>●●● 5G</span></div>' +
      '<div class="app">' +
        '<div class="app-bar"><span class="app-title">Hi, I\'m Mehedi 👋</span><span class="chip-s">Flutter</span></div>' +
        '<p class="app-sub">Tap an app to open real screenshots.</p>' +
        '<div class="tile-grid">' + APPS.map(function (a) {
          return '<button type="button" class="tile" data-app="' + a.key + '" style="background:' + a.swatch + '"><span class="t-ico">' + a.emoji +
            "</span><span><b>" + esc(a.label) + "</b><small>" + esc(a.short) + "</small></span></button>";
        }).join("") + "</div>" +
        '<div class="row-s"><span>Experience</span><span class="ok">5+ years</span></div>' +
      "</div>";
  }
  function shotsScreen(a) {
    return '<div class="shots">' + a.gallery.map(function (g, i) {
      return '<img src="' + g + '" alt="' + esc(a.label) + " screenshot " + (i + 1) + '"' + (i ? ' loading="lazy"' : "") + (i === 0 ? ' class="on"' : "") + " />";
    }).join("") + "</div>" +
      '<button type="button" class="home-btn" data-app="home">← All apps</button>' +
      '<div class="shot-dots">' + a.gallery.map(function (_, i) { return "<i" + (i === 0 ? ' class="on"' : "") + "></i>"; }).join("") + "</div>";
  }
  function renderScreen(key) {
    clearInterval(shotTimer);
    screen.innerHTML = '<div class="notch"></div>' + (key === "home" ? homeScreen() : shotsScreen(byKey(key)));
    if (key !== "home" && !REDUCE) {
      var i = 0;
      shotTimer = setInterval(function () {
        var imgs = screen.querySelectorAll(".shots img");
        var dots = screen.querySelectorAll(".shot-dots i");
        if (!imgs.length) return;
        imgs[i].classList.remove("on");
        dots[i].classList.remove("on");
        i = (i + 1) % imgs.length;
        imgs[i].classList.add("on");
        dots[i].classList.add("on");
      }, 2400);
    }
  }
  renderScreen("home");

  /* ── Switching apps ───────────────────────────────────────── */
  var current = "home";
  var switching = false;
  var spin = 0;

  function setBlur(v) { floatEl.style.filter = v > 0.05 ? "blur(" + v + "px)" : "none"; }

  function switchTo(key) {
    if (switching || key === current) return;
    var data = byKey(key);
    current = key;
    picker.querySelectorAll(".pick").forEach(function (p) {
      var on = p.getAttribute("data-app") === key;
      p.classList.toggle("active", on);
      p.setAttribute("aria-pressed", on);
    });
    section.querySelectorAll(".apps-bg").forEach(function (bg) {
      bg.classList.toggle("on", bg.getAttribute("data-bg") === key);
    });

    if (REDUCE) {
      renderScreen(key);
      setChipTexts(data.chips);
      return;
    }
    switching = true;

    // phone: spin out with blur → swap screen → spin back in with overshoot
    tween({
      duration: 0.6, ease: easeIn,
      update: function (p) { spin = p * 360; setBlur(p * 12); },
      done: function () {
        renderScreen(key);
        tween({
          duration: 1.5, ease: backOut(0.7),
          update: function (p) { spin = 360 + p * 360; setBlur((1 - Math.min(p, 1)) * 12); },
          done: function () { spin = 0; setBlur(0); }
        });
      }
    });

    // chips: sucked into the phone, change text, burst back out
    var pr = phone.getBoundingClientRect();
    var pcx = pr.left + pr.width / 2;
    var pcy = pr.top + pr.height / 2;
    var done = 0;
    setTimeout(function () { setChipTexts(data.chips); }, 560);
    chips.forEach(function (c, i) {
      var rr = c.el.getBoundingClientRect();
      var ox = rr.left + rr.width / 2 - (c.bx + c.rx);
      var oy = rr.top + rr.height / 2 - (c.by + c.ry);
      c.rx = 0;
      c.ry = 0;
      var from = { bx: c.bx, by: c.by, tilt: c.tilt };
      var to = { bx: pcx - ox, by: pcy - oy, tilt: c.tilt + 60 };
      tween({
        duration: 0.5, delay: i * 0.015, ease: easeIn,
        update: function (p) {
          c.bx = from.bx + (to.bx - from.bx) * p;
          c.by = from.by + (to.by - from.by) * p;
          c.tilt = from.tilt + (to.tilt - from.tilt) * p;
          c.scale = 1 - 0.9 * p;
          c.opacity = 1 - p;
        },
        done: function () {
          var s = { bx: c.bx, by: c.by, tilt: c.tilt };
          var e = { bx: (Math.random() - 0.5) * 220, by: (Math.random() - 0.5) * 220, tilt: (Math.random() - 0.5) * 16 };
          tween({
            duration: 0.9, delay: 0.3, ease: backOut(1.5),
            update: function (p) {
              c.bx = s.bx + (e.bx - s.bx) * p;
              c.by = s.by + (e.by - s.by) * p;
              c.tilt = s.tilt + (e.tilt - s.tilt) * p;
              c.scale = 0.1 + 0.9 * p;
              c.opacity = Math.min(1, p * 1.4);
            },
            done: function () { if (++done >= chips.length) switching = false; }
          });
        }
      });
    });
  }

  picker.addEventListener("click", function (e) {
    var b = e.target.closest("[data-app]");
    if (b) switchTo(b.getAttribute("data-app"));
  });
  screen.addEventListener("click", function (e) {
    var b = e.target.closest("[data-app]");
    if (b) switchTo(b.getAttribute("data-app"));
  });

  /* ── Main loop: tilt, parallax, floating, cursor repel ────── */
  if (REDUCE) return;
  var mouse = { x: 0, y: 0, px: -9999, py: -9999 };
  var eased = { x: 0, y: 0 };
  var visible = false;
  window.addEventListener("pointermove", function (e) {
    mouse.x = e.clientX / window.innerWidth - 0.5;
    mouse.y = e.clientY / window.innerHeight - 0.5;
    mouse.px = e.clientX;
    mouse.py = e.clientY;
  }, { passive: true });
  document.addEventListener("pointerleave", function () { mouse.px = -9999; mouse.py = -9999; });
  new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(section);

  function loop() {
    requestAnimationFrame(loop);
    if (!visible) return;
    var t = performance.now() / 1000;
    eased.x += (mouse.x - eased.x) * 0.06;
    eased.y += (mouse.y - eased.y) * 0.06;
    phone.style.transform = "rotateZ(-6deg) rotateY(" + (eased.x * 36 + spin) + "deg) rotateX(" + (-eased.y * 22) + "deg)";
    layerFg.style.transform = "translate(" + eased.x * 60 + "px," + eased.y * 60 + "px)";
    layerBg.style.transform = "translate(" + eased.x * -30 + "px," + eased.y * -30 + "px)";

    chips.forEach(function (c, i) {
      if (!switching) {
        var r = c.el.getBoundingClientRect();
        var dx = mouse.px - (r.left + r.width / 2);
        var dy = mouse.py - (r.top + r.height / 2);
        var dist = Math.hypot(dx, dy) || 1;
        var tx = 0, ty = 0, speed = 1;
        if (dist < 320) {
          var f = (320 - dist) / 320;
          tx = (dx / dist) * f * -90;
          ty = (dy / dist) * f * -90;
          speed = 1 + f * 5;
        }
        c.rx += (tx - c.rx) * 0.1;
        c.ry += (ty - c.ry) * 0.1;
        c.spin += 0.25 * speed;
      }
      var ph = (t + i * 0.7) * ((Math.PI * 2) / c.dur);
      var rot = c.isText ? c.tilt + Math.cos(ph) * 5 : c.spin;
      c.el.style.transform = "translate(" + (c.bx + c.rx) + "px," + (c.by + c.ry + Math.sin(ph) * 14) + "px) rotate(" + rot + "deg) scale(" + c.scale + ")";
      c.el.style.opacity = c.opacity;
    });
  }
  requestAnimationFrame(loop);
})();
