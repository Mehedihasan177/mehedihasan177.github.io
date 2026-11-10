/* ═══════════════════════════════════════════════════════════════
   App playground — interactive 3D phone in the hero
   (ported from the original portfolio)
   - Phone tilts with the mouse, bobs, and spins + blurs on app switch
   - Home screen of app tiles; each app plays its real screenshots
   - Glass tech chips + orbs float, dodge the cursor, get sucked into
     the phone on switch and burst back out with that app's tech
   - Glow behind the phone re-colours per app
   Data: window.PHONE_HOME / window.PHONE_APPS in js/data.js
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var HOME = window.PHONE_HOME;
  var APPS = window.PHONE_APPS || [];
  if (!HOME) return;
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

  /* ── Tween helper ─────────────────────────────────────────── */
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

  /* ── Glows (one per app, cross-faded) ─────────────────────── */
  $("#appsBg").innerHTML = ALL.map(function (a) {
    return '<div class="pg__bg' + (a.key === "home" ? " on" : "") + '" data-bg="' + a.key + '" style="background:radial-gradient(50% 46% at 50% 44%, ' +
      a.colors[0] + " 0%, " + a.colors[1] + " 45%, transparent 75%)\"></div>";
  }).join("");

  /* ── Rising bubbles ───────────────────────────────────────── */
  var bubbles = "";
  for (var b = 0; b < 12; b++) {
    var r = function (n) { return ((Math.sin(b * 9301 + n * 49297) + 1) / 2) % 1; };
    var size = 4 + r(2) * 12;
    bubbles += '<span style="left:' + (r(1) * 100).toFixed(1) + "%;width:" + size.toFixed(1) + "px;height:" + size.toFixed(1) +
      "px;animation-duration:" + (9 + r(3) * 10).toFixed(1) + "s;animation-delay:" + (-r(4) * 18).toFixed(1) + 's"></span>';
  }
  $("#bubbles").innerHTML = bubbles;

  /* ── Picker ───────────────────────────────────────────────── */
  picker.innerHTML = ALL.map(function (a) {
    return '<button type="button" class="pg__pick' + (a.key === "home" ? " active" : "") + '" data-app="' + a.key + '" aria-pressed="' + (a.key === "home") + '" title="' + esc(a.short) + '">' +
      '<span class="pg__sw" style="background:' + a.swatch + '">' + a.emoji + "</span>" +
      "<b>" + esc(a.label) + "</b></button>";
  }).join("");

  /* ── Floating chips & orbs (percent positions in the stage) ── */
  var FG = [
    { kind: "chip", top: 10, left: 4, big: true },
    { kind: "chip", top: 22, left: 76, big: true },
    { kind: "chip", top: 70, left: 6 },
    { kind: "chip", top: 60, left: 78, md: true },
    { kind: "chip", top: 88, left: 62 },
    { kind: "chip", top: 2, left: 60, md: true },
    { kind: "chip", top: 42, left: 0, md: true },
    { kind: "orb", top: 46, left: 86, size: 50 },
    { kind: "orb", top: 30, left: 18, size: 28, md: true, alt: true }
  ];
  var BG = [
    { kind: "chip", top: 4, left: 24 },
    { kind: "chip", top: 80, left: 74, md: true },
    { kind: "chip", top: 56, left: 2, md: true },
    { kind: "orb", top: 14, left: 70, size: 40 },
    { kind: "orb", top: 84, left: 22, size: 24, md: true, alt: true }
  ];
  var chips = [];
  var textEls = [];
  var DURS = [5, 7, 6, 8, 5.5, 6.5, 9, 11, 10, 7.5];

  function makeLayer(defs, layer) {
    defs.forEach(function (d) {
      var el = document.createElement("div");
      el.style.top = d.top + "%";
      el.style.left = d.left + "%";
      if (d.kind === "orb") {
        el.className = "pg__orb" + (d.alt ? " alt" : "") + (d.md ? " md-only" : "");
        el.style.width = el.style.height = d.size + "px";
      } else {
        el.className = "pg__chip" + (d.big ? " big" : "") + (d.md ? " md-only" : "");
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
    return '<div class="pg__status"><span>9:41</span><span>●●● 5G</span></div>' +
      '<div class="pg__app">' +
        '<div class="pg__appbar"><span class="pg__apptitle">Hi, I\'m Mehedi 👋</span><span class="pg__chips">Flutter</span></div>' +
        '<p class="pg__appsub">Tap an app to open real screenshots.</p>' +
        '<div class="pg__tiles">' + APPS.map(function (a) {
          return '<button type="button" class="pg__tile" data-app="' + a.key + '" style="background:' + a.swatch + '"><span class="pg__ico">' + a.emoji +
            "</span><span><b>" + esc(a.label) + "</b><small>" + esc(a.short) + "</small></span></button>";
        }).join("") + "</div>" +
        '<div class="pg__row"><span>Experience</span><span class="ok">5+ years</span></div>' +
      "</div>";
  }
  function shotsScreen(a) {
    return '<div class="pg__shots">' + a.gallery.map(function (g, i) {
      return '<img src="' + g + '" alt="' + esc(a.label) + " screenshot " + (i + 1) + '"' + (i ? ' loading="lazy"' : "") + (i === 0 ? ' class="on"' : "") + " />";
    }).join("") + "</div>" +
      '<button type="button" class="pg__homebtn" data-app="home">← All apps</button>' +
      '<div class="pg__dots">' + a.gallery.map(function (_, i) { return "<i" + (i === 0 ? ' class="on"' : "") + "></i>"; }).join("") + "</div>";
  }
  function renderScreen(key) {
    clearInterval(shotTimer);
    screen.innerHTML = '<div class="pg__notch"></div>' + (key === "home" ? homeScreen() : shotsScreen(byKey(key)));
    if (key !== "home" && !REDUCE) {
      var i = 0;
      shotTimer = setInterval(function () {
        var imgs = screen.querySelectorAll(".pg__shots img");
        var dots = screen.querySelectorAll(".pg__dots i");
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
    picker.querySelectorAll(".pg__pick").forEach(function (p) {
      var on = p.getAttribute("data-app") === key;
      p.classList.toggle("active", on);
      p.setAttribute("aria-pressed", on);
    });
    section.querySelectorAll(".pg__bg").forEach(function (bg) {
      bg.classList.toggle("on", bg.getAttribute("data-bg") === key);
    });

    if (REDUCE) {
      renderScreen(key);
      setChipTexts(data.chips);
      return;
    }
    switching = true;

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
          var e = { bx: (Math.random() - 0.5) * 120, by: (Math.random() - 0.5) * 120, tilt: (Math.random() - 0.5) * 16 };
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
  var visible = true;
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
    layerFg.style.transform = "translate(" + eased.x * 50 + "px," + eased.y * 50 + "px)";
    layerBg.style.transform = "translate(" + eased.x * -25 + "px," + eased.y * -25 + "px)";

    chips.forEach(function (c, i) {
      if (!switching) {
        var r = c.el.getBoundingClientRect();
        var dx = mouse.px - (r.left + r.width / 2);
        var dy = mouse.py - (r.top + r.height / 2);
        var dist = Math.hypot(dx, dy) || 1;
        var tx = 0, ty = 0, speed = 1;
        if (dist < 260) {
          var f = (260 - dist) / 260;
          tx = (dx / dist) * f * -70;
          ty = (dy / dist) * f * -70;
          speed = 1 + f * 5;
        }
        c.rx += (tx - c.rx) * 0.1;
        c.ry += (ty - c.ry) * 0.1;
        c.spin += 0.25 * speed;
      }
      var ph = (t + i * 0.7) * ((Math.PI * 2) / c.dur);
      var rot = c.isText ? c.tilt + Math.cos(ph) * 5 : c.spin;
      c.el.style.transform = "translate(" + (c.bx + c.rx) + "px," + (c.by + c.ry + Math.sin(ph) * 12) + "px) rotate(" + rot + "deg) scale(" + c.scale + ")";
      c.el.style.opacity = c.opacity;
    });
  }
  requestAnimationFrame(loop);
})();
