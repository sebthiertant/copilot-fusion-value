/* Copilot Fusion briefing: dependency-free SVG chart, tooltips and monthly cost calculator. */
(() => {
  "use strict";

  /* Monthly cost at the reader's own volume */
  const tasks = document.getElementById("tasks");
  const tasksPrint = document.getElementById("tasks-print");
  const costCells = document.querySelectorAll("[data-cost]");
  const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
  const updateCosts = () => {
    const n = Number(tasks.value);
    const valid = tasks.value.trim() !== "" && Number.isFinite(n) && n >= 0;
    costCells.forEach((td) => {
      td.textContent = valid ? usd.format(n * Number(td.dataset.cost)) : "–";
    });
    if (tasksPrint) tasksPrint.textContent = valid ? n.toLocaleString("en-US") : "–";
  };
  if (tasks) {
    tasks.addEventListener("input", updateCosts);
    updateCosts();
  }

  document.querySelectorAll("[data-print]").forEach((b) => b.addEventListener("click", () => window.print()));

  /* Artificial Analysis Coding Agent Index v2.0, retrieved 13 Nov 2026.
     Generated from data/aa-coding-agent-index-2026-11-13.json.
     [harness, model, index score, USD per task, minutes per task, tokens per task (millions), highlight] */
  const AGENTS = [
    ["Claude Code", "Claude Opus 5.5 (Max)", 61.7, 11.42, 61.0, 14.52, "opus"],
    ["Devin Fusion CLI", "Claude Opus 5.5 Max + GPT-6 Luna High", 61.5, 8.0, 51.1, 10.46, null],
    ["GitHub Copilot", "Copilot Fusion (max)", 59.9, 5.59, 36.1, 7.34, "fusion"],
    ["Antigravity CLI", "Gemini 4 Carbon (High)", 59.4, 7.74, 29.8, 12.55, null],
    ["Claude Code", "Claude Sonnet 5.5 (Max)", 59.3, 13.3, 79.7, 24.13, null],
    ["Devin Fusion CLI", "Claude Fable 5.1 XHigh + SWE-2 Medium", 58.7, 8.2, 37.6, 9.81, null],
    ["Claude Code", "Claude Fable 5.1 (Max)", 57.6, 11.53, 35.3, 5.99, null],
    ["Codex", "GPT-6 Astra (Max)", 54.7, 7.04, 24.8, 3.23, "astra"],
    ["Codex", "GPT-6.1 Sol (Max)", 54.1, 1.5, 23.7, 3.94, "sol"],
    ["Antigravity CLI", "Gemini 4 Argon (High)", 53.2, 11.73, 34.7, 13.87, null],
    ["Devin Fusion CLI", "GPT-6 Astra XHigh + SWE-2 Medium", 53.1, 4.34, 21.2, 3.63, null],
    ["Muse Code", "Muse Wonder (Max)", 52.0, 8.05, 24.5, 14.48, null],
    ["Opencode", "GLM-5.3 (Max)", 48.9, 5.23, 56.2, 15.91, null],
    ["Mistral Vibe", "Mistral Large 4 (High)", 48.3, 1.26, 48.4, 8.45, null],
    ["Codex", "GPT-6.1 Terra (Xhigh)", 48.2, 0.69, 16.4, 6.89, null],
    ["Codex", "GPT-6.1 Terra (Max)", 48.1, 1.24, 26.1, 12.28, null],
    ["Codex", "DeepSeek V4.1 Flash (Max)", 47.3, 0.39, 38.1, 27.24, null],
    ["Grok Build", "Grok 4.7 (Xhigh)", 46.6, 9.48, 35.8, 15.91, null],
    ["DeepSeek Harness", "DeepSeek V4.1 Flash 1017 (Max)", 46.3, 0.3, 21.4, 16.74, null],
    ["Codex", "GPT-6.1 Terra (High)", 46.3, 0.54, 12.7, 5.6, null],
    ["Muse Code", "Muse Spark 1.3 (Max)", 45.7, 3.91, 23.3, 17.82, null],
    ["Claude Code", "Step 5 Preview", 43.1, 1.84, 61.1, 22.14, null],
    ["Codex", "GPT-6.1 Terra (Medium)", 42.0, 0.39, 10.2, 4.08, null],
    ["Kimi Code CLI", "Kimi K3 (Max)", 41.4, 5.17, 62.9, 9.01, null],
    ["Claude Code", "Qwen3.8 Max", 39.2, 3.8, 76.1, 9.15, null],
    ["Codex", "GPT-6.1 Terra (Non-reasoning)", 39.2, 0.45, 9.5, 5.78, null],
    ["Claude Code", "Claude Haiku 5.5 (Max)", 37.3, 2.67, 70.9, 16.05, null],
    ["Mistral Vibe", "Mistral Large 4 (Medium)", 35.4, 0.78, 38.8, 5.76, null],
    ["Codex", "GPT-6.1 Terra (Low)", 34.9, 0.2, 6.3, 1.89, null],
    ["Antigravity SDK", "Gemini 3.8 Flash (High)", 33.3, 2.51, 13.1, 14.25, null],
    ["Codex", "GPT-6 Luna (Max)", 31.2, 0.16, 20.8, 8.69, null],
    ["Muse Code", "Muse Spark Open (Xhigh)", 26.3, 3.54, 26.0, 13.34, null],
    ["Mirror", "Beam 1.0", 20.5, 0.32, 38.7, 4.89, null]
  ];

  const svg = document.getElementById("scatter");
  if (!svg) return;
  const plot = svg.parentNode;
  const tip = plot.querySelector(".tip");
  const buttons = Array.from(document.querySelectorAll("[data-view]"));
  const NS = "http://www.w3.org/2000/svg";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const PRINT_WIDTH = 491; // 130mm at 96dpi, the plot width in the print stylesheet

  const VIEWS = {
    cost: {
      col: 3, log: true, min: 0.12, max: 16, ticks: [0.25, 0.5, 1, 2, 5, 10],
      tick: (v) => (v < 1 ? "$" + v.toFixed(2) : "$" + v),
      title: "Cost per task, USD (log scale)",
      word: "cost", better: "is cheaper", note: "at half the cost per task"
    },
    time: {
      col: 4, log: false, min: 0, max: 85, ticks: [0, 20, 40, 60, 80],
      tick: String,
      title: "Minutes per task",
      word: "time", better: "is faster", note: "in 41% less time per task"
    },
    tokens: {
      col: 5, log: true, min: 1.5, max: 32, ticks: [2, 5, 10, 20],
      tick: (v) => v + "M",
      title: "Tokens per task, millions (log scale)",
      word: "tokens", better: "uses fewer tokens", note: "with about half the tokens"
    }
  };
  const SHORT = { fusion: "Copilot Fusion", opus: "Claude Opus 5.5 · #1", astra: "GPT-6 Astra", sol: "GPT-6.1 Sol" };
  const FULL = { fusion: "Copilot Fusion Max", opus: "Claude Opus 5.5 Max", astra: "GPT-6 Astra Max", sol: "GPT-6.1 Sol Max" };
  const SIZE = { fusion: 6.5, opus: 5, astra: 5, sol: 5 };
  const DRAW_ORDER = ["sol", "astra", "opus", "fusion"];
  const M = { top: 8, right: 16, bottom: 42, left: 46 };
  const Y = { min: 15, max: 70, ticks: [20, 30, 40, 50, 60] };
  const FI = AGENTS.findIndex((a) => a[6] === "fusion");

  const rnd = (v) => Math.round(v * 10) / 10;
  const pt = (p) => rnd(p[0]) + "," + rnd(p[1]);
  const radius = (i) => SIZE[AGENTS[i][6]] || 4;
  const make = (name, attrs, parent) => {
    const n = document.createElementNS(NS, name);
    Object.keys(attrs || {}).forEach((k) => n.setAttribute(k, attrs[k]));
    if (parent) parent.appendChild(n);
    return n;
  };
  const write = (parent, str, attrs) => {
    const t = make("text", attrs, parent);
    t.textContent = str;
    return t;
  };
  const clear = (n) => {
    while (n.firstChild) n.removeChild(n.firstChild);
  };
  const overlap = (a, b) =>
    Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)) *
    Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  const hits = (box, q, r) => {
    const dx = q[0] - Math.max(box.x, Math.min(q[0], box.x + box.w));
    const dy = q[1] - Math.max(box.y, Math.min(q[1], box.y + box.h));
    return dx * dx + dy * dy < r * r;
  };
  const gap = (box, q) =>
    Math.hypot(q[0] - Math.max(box.x, Math.min(q[0], box.x + box.w)), q[1] - Math.max(box.y, Math.min(q[1], box.y + box.h)));
  const crosses = (b, [a, z]) => {
    for (let s = 0; s <= 16; s++) {
      const x = a[0] + ((z[0] - a[0]) * s) / 16;
      const y = a[1] + ((z[1] - a[1]) * s) / 16;
      if (x > b.x && x < b.x + b.w && y > b.y && y < b.y + b.h) return true;
    }
    return false;
  };
  const near = ([a, z], q, r) => {
    const vx = z[0] - a[0];
    const vy = z[1] - a[1];
    const u = Math.max(0, Math.min(1, ((q[0] - a[0]) * vx + (q[1] - a[1]) * vy) / (vx * vx + vy * vy || 1)));
    return Math.hypot(a[0] + u * vx - q[0], a[1] + u * vy - q[1]) < r;
  };
  const ccw = (a, b, c) => (c[1] - a[1]) * (b[0] - a[0]) > (b[1] - a[1]) * (c[0] - a[0]);
  const cut = ([a, b], [c, d]) => ccw(a, c, d) !== ccw(b, c, d) && ccw(a, b, c) !== ccw(a, b, d);

  let view = "cost";
  let W = 0;
  let H = 0;
  let pos = [];
  let switchTimer = 0;
  let loopPath = null;
  let printing = false;

  svg.setAttribute("role", "group");
  const layer = (cls, hidden) => make("g", hidden ? { class: cls, "aria-hidden": "true" } : { class: cls }, svg);
  const L = {
    grid: layer("grid", true),
    front: layer("fade", true),
    axis: layer("axis", true),
    pts: layer("pts", false),
    loop: layer("loop-g", true),
    labs: layer("fade", true),
    note: layer("note fade", true)
  };

  /* Dots: grey agents first so the four named configurations sit on top. */
  const rank = (i) => DRAW_ORDER.indexOf(AGENTS[i][6]);
  const nodes = AGENTS.map((a, i) => i)
    .sort((i, j) => rank(i) - rank(j))
    .map((i) => {
      const [harness, , score, cost, time, , key] = AGENTS[i];
      const g = make("g", { class: "pt" }, L.pts);
      make("circle", { class: "hit", r: 10 }, g);
      make("circle", { class: "dot" + (key ? " hl" : "") + (key === "fusion" ? " fusion" : ""), r: radius(i) }, g);
      if (key) {
        g.setAttribute("tabindex", "0");
        g.setAttribute("role", "img");
        g.setAttribute("aria-label", `${FULL[key]} in ${harness}: score ${score}, $${cost.toFixed(2)} and ${Math.round(time)} minutes per task`);
        g.addEventListener("focus", () => showTip(i));
        g.addEventListener("blur", hideTip);
      } else {
        g.setAttribute("aria-hidden", "true");
      }
      g.addEventListener("pointerenter", () => showTip(i));
      g.addEventListener("pointerleave", (e) => {
        if (e.pointerType !== "touch") hideTip();
      });
      g.addEventListener("pointerdown", (e) => {
        e.stopPropagation();
        showTip(i);
      });
      return { g, i };
    });
  document.addEventListener("pointerdown", hideTip);

  function showTip(i) {
    const [harness, model, score, cost, time, tokens, key] = AGENTS[i];
    clear(tip);
    const line = (tag, text) => {
      const n = document.createElement(tag);
      n.textContent = text;
      tip.appendChild(n);
    };
    line("b", key ? FULL[key] : model);
    line("span", harness);
    line("span", `Score ${score.toFixed(1)} · $${cost.toFixed(2)} · ${Math.round(time)} min · ${tokens.toFixed(1)}M tokens`);
    tip.hidden = false;
    const k = svg.getBoundingClientRect().width / W || 1;
    const x = pos[i][0] * k;
    const y = pos[i][1] * k;
    const half = tip.offsetWidth / 2;
    tip.style.left = Math.max(half, Math.min(plot.clientWidth - half, x)) + "px";
    tip.style.top = y + "px";
    tip.classList.toggle("below", y - tip.offsetHeight - 14 < 0);
  }
  function hideTip() {
    tip.hidden = true;
  }

  function xScale() {
    const c = VIEWS[view];
    const f = c.log ? Math.log : (v) => v;
    const a = f(c.min);
    const b = f(c.max);
    return (v) => M.left + ((f(v) - a) / (b - a)) * (W - M.right - M.left);
  }
  function yScale() {
    const base = H - M.bottom;
    return (v) => base - ((v - Y.min) / (Y.max - Y.min)) * (base - M.top);
  }

  function drawAxes() {
    const c = VIEWS[view];
    const x = xScale();
    const y = yScale();
    const base = H - M.bottom;
    const top = rnd(y(Y.ticks[Y.ticks.length - 1]));
    clear(L.grid);
    clear(L.axis);
    Y.ticks.forEach((t) => {
      make("line", { x1: M.left, x2: W - M.right, y1: rnd(y(t)), y2: rnd(y(t)) }, L.grid);
      write(L.grid, String(t), { x: M.left - 8, y: rnd(y(t)), dy: "0.32em", "text-anchor": "end" });
    });
    write(L.grid, "Index score", { class: "title", "text-anchor": "middle", transform: `translate(11,${rnd((top + base) / 2)}) rotate(-90)` });
    c.ticks.forEach((t) => {
      const tx = rnd(x(t));
      make("line", { class: "vx", x1: tx, x2: tx, y1: top, y2: base }, L.grid);
      make("line", { x1: tx, x2: tx, y1: base, y2: base + 4 }, L.axis);
      write(L.axis, c.tick(t), { x: tx, y: base + 17, "text-anchor": "middle" });
    });
    make("line", { x1: M.left, x2: W - M.right, y1: base, y2: base }, L.axis);
    write(L.axis, c.title, { class: "title", x: rnd(M.left + (W - M.left - M.right) / 2), y: H - 6, "text-anchor": "middle" });
  }

  function placePoints() {
    const x = xScale();
    const y = yScale();
    const col = VIEWS[view].col;
    pos = AGENTS.map((a) => [x(a[col]), y(a[2])]);
    nodes.forEach(({ g, i }) => {
      g.style.transform = `translate(${rnd(pos[i][0])}px,${rnd(pos[i][1])}px)`;
    });
    L.loop.style.transform = `translate(${rnd(pos[FI][0])}px,${rnd(pos[FI][1])}px)`;
  }

  /* A loose, slightly overshooting pen loop around Copilot Fusion. */
  function loopShape() {
    const p = [];
    const n = 12;
    const rot = (-10 * Math.PI) / 180;
    for (let k = 0; k <= n; k++) {
      const t = k / n;
      const a = ((-40 + 385 * t) * Math.PI) / 180;
      const wobble = 1 + 0.05 * Math.sin(3 * a + 0.6);
      const ex = (13 + 2.2 * t) * wobble * Math.cos(a);
      const ey = (11 + 1.6 * t) * wobble * Math.sin(a);
      p.push([ex * Math.cos(rot) - ey * Math.sin(rot), ex * Math.sin(rot) + ey * Math.cos(rot)]);
    }
    let d = "M" + pt(p[0]);
    for (let k = 0; k < n; k++) {
      const p0 = p[Math.max(0, k - 1)];
      const p1 = p[k];
      const p2 = p[k + 1];
      const p3 = p[Math.min(n, k + 2)];
      d += "C" + pt([p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]) + " " +
        pt([p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]) + " " + pt(p2);
    }
    return d;
  }

  function drawIn(path, delay, ms) {
    const len = path.getTotalLength();
    path.style.transition = "none";
    path.style.strokeDasharray = `${len} ${len}`;
    path.style.strokeDashoffset = String(len);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      path.style.transition = `stroke-dashoffset ${ms}ms cubic-bezier(.3,.7,.2,1) ${delay}ms`;
      path.style.strokeDashoffset = "0";
    }));
  }
  function fadeIn(el, delay) {
    el.style.opacity = "0";
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.transition = `opacity 180ms ease ${delay}ms`;
      el.style.opacity = "1";
    }));
  }

  function drawOverlay(animate, intro) {
    const c = VIEWS[view];
    const fp = pos[FI];
    [L.front, L.labs, L.note].forEach(clear);

    // Efficient frontier: every point on it scores higher than all agents to its left.
    const frontier = [];
    let best = -Infinity;
    AGENTS.map((a, i) => i)
      .sort((i, j) => AGENTS[i][c.col] - AGENTS[j][c.col] || AGENTS[j][2] - AGENTS[i][2])
      .forEach((i) => {
        if (AGENTS[i][2] > best) {
          best = AGENTS[i][2];
          frontier.push(pos[i]);
        }
      });
    make("polyline", { class: "frontier", points: frontier.map(pt).join(" ") }, L.front);

    if (!loopPath) loopPath = make("path", { class: "loop", d: loopShape() }, L.loop);
    if (animate && intro) drawIn(loopPath, 0, 520);

    const avoid = [[{ x: fp[0] - 18, y: fp[1] - 16, w: 36, h: 32 }, 1e5]];
    const hasNote = W - M.left - M.right >= 400 && drawNote(c, fp, avoid, animate ? (intro ? 380 : 40) : -1);
    placeLabels(hasNote ? ["opus", "astra", "sol"] : ["fusion", "opus", "astra", "sol"], avoid, frontier);
  }

  function drawNote(c, fp, avoid, delay) {
    const t = make("text", {}, L.note);
    ["Copilot Fusion Max", "1.8 pts below the index leader,", c.note].forEach((s, k) => {
      make("tspan", { x: 0, dy: k ? 16 : 0, class: "n" + (k + 1) }, t).textContent = s;
    });
    const bb = t.getBBox();
    const ny = M.top + 2;
    const gap = 40;
    const fits = (nx) => {
      const box = { x: nx, y: ny, w: bb.width, h: bb.height };
      if (nx < M.left + 4 || nx + bb.width > W - 4) return false;
      if (overlap(box, avoid[0][0])) return false;
      return pos.every((q, j) => !hits(box, q, radius(j) + 3));
    };
    let side = -1;
    let nx = fp[0] - gap - bb.width;
    if (!fits(nx)) {
      side = 1;
      nx = fp[0] + gap;
    }
    if (!fits(nx)) {
      clear(L.note);
      return false;
    }
    t.setAttribute("transform", `translate(${rnd(nx - bb.x)},${rnd(ny - bb.y)})`);
    avoid.push([{ x: nx - 4, y: ny - 2, w: bb.width + 8, h: bb.height + 4 }, 1e5]);

    // Hand-drawn leader from the note to the loop, ending in an open arrowhead.
    const S = [side < 0 ? nx + bb.width + 6 : nx - 6, ny + bb.height * 0.45];
    const ang = Math.atan2(S[1] - fp[1], S[0] - fp[0]);
    const u = [Math.cos(ang), Math.sin(ang)];
    const E = [fp[0] + u[0] * 17.5, fp[1] + u[1] * 15.5];
    const C1 = [S[0] - side * Math.min(40, Math.abs(E[0] - S[0]) * 0.8), S[1]];
    const C2 = [E[0] + u[0] * 24, E[1] + u[1] * 24];
    const leader = make("path", { class: "leader", d: `M${pt(S)}C${pt(C1)} ${pt(C2)} ${pt(E)}` }, L.note);
    const arm = (s) => [E[0] + Math.cos(ang + s * 0.5) * 8, E[1] + Math.sin(ang + s * 0.5) * 8];
    const head = make("path", { class: "leader", d: `M${pt(arm(1))}L${pt(E)}L${pt(arm(-1))}` }, L.note);
    const lb = leader.getBBox();
    avoid.push([{ x: lb.x - 3, y: lb.y - 3, w: lb.width + 6, h: lb.height + 6 }, 2e4]);
    if (delay >= 0 && !reduceMotion) {
      drawIn(leader, delay, 560);
      fadeIn(head, delay + 480);
    }
    return true;
  }

  /* Score every candidate spot for one label. Boxes hug the letters (cap height, plus
     descenders when the text has any) rather than the padded text box, so labels can sit
     close to their dot without hiding neighbours. Where every close spot would cover a dot
     (small screens), a label may step further out and gets a fine tick back to its dot. */
  function labelSpots(key, avoid, frontier) {
    const i = AGENTS.findIndex((a) => a[6] === key);
    const fusion = key === "fusion";
    const g = make("g", { class: "lab" + (fusion ? " fusion" : "") }, L.labs);
    const t = write(g, SHORT[key], { x: 0, y: 0 });
    const bb = t.getBBox();
    const fs = parseFloat(getComputedStyle(t).fontSize) || 13;
    const w = bb.width;
    const top = -0.74 * fs;
    const h = (/[gjpqy]/.test(SHORT[key]) ? 0.96 : 0.78) * fs;
    const p = pos[i];
    const r = radius(i);
    const dx = fusion ? 20 : r + 5;
    const dy = fusion ? 18 : r + 4;
    const e = 0.72;
    const ring = (x, y) => [
      [x, -h / 2], [-x - w, -h / 2], [-w / 2, -y - h], [-w / 2, y],
      [x * e, -y * e - h], [-x * e - w, -y * e - h], [x * e, y * e], [-x * e - w, y * e]
    ];
    const flush = (y) => [[-6, -y - h], [6 - w, -y - h], [-6, y], [6 - w, y]];
    const spots = ring(dx, dy).concat([[dx, -h * 1.05], [-dx - w, -h * 1.05], [dx, h * 0.05], [-dx - w, h * 0.05]], flush(dy));
    const close = spots.length;
    [12, 24].forEach((ext) => spots.push(...ring(dx + ext, dy + ext), ...flush(dy + ext)));
    const xMin = M.left + 2;
    const xMax = W - 2;
    const yMax = H - M.bottom - 2;
    const segs = frontier.slice(1).map((q, k) => [frontier[k], q]);
    const tickFor = (b) => {
      const q = [Math.max(b.x, Math.min(p[0], b.x + b.w)), Math.max(b.y, Math.min(p[1], b.y + b.h))];
      const len = Math.hypot(q[0] - p[0], q[1] - p[1]);
      const r0 = fusion ? 17 : r + 2.5;
      if (len - r0 - 3 < 5) return null;
      const u = [(q[0] - p[0]) / len, (q[1] - p[1]) / len];
      return [[p[0] + u[0] * r0, p[1] + u[1] * r0], [q[0] - u[0] * 3, q[1] - u[1] * 3]];
    };
    return spots.map(([sx, sy], k) => {
      const b = { x: p[0] + sx, y: p[1] + sy, w, h };
      let s = k < close ? k * 3 : 160 + (k - close) * 3;
      if (b.x < xMin) {
        s += 30 + (xMin - b.x) * 3;
        b.x = xMin;
      }
      if (b.x + w > xMax) {
        s += 30 + (b.x + w - xMax) * 3;
        b.x = xMax - w;
      }
      if (b.y < 0 || b.y + h > yMax) s += 1e6;
      if (hits(b, p, r + 2)) s += 1e5;
      const tick = k < close ? null : tickFor(b);
      avoid.forEach(([o, weight]) => {
        if (overlap(b, o) || (tick && crosses(o, tick))) s += weight;
      });
      pos.forEach((q, j) => {
        if (j === i) return;
        const named = !!AGENTS[j][6];
        const room = gap(b, q) - radius(j);
        if (room < 1) s += named ? 2e3 : 400;
        else if (room < 2.5) s += named ? 200 : 40;
        if (tick && near(tick, q, radius(j) + 1.5)) s += named ? 2e3 : 150;
      });
      segs.forEach((sg) => {
        if (crosses(b, sg)) s += 60;
      });
      return { b, s, t, tick, x: bb.x, top };
    });
  }

  /* Place all named labels together: the cheapest combination of spots wins, so one label
     can step aside to give another a clean position. */
  function placeLabels(keys, avoid, frontier) {
    const sets = keys.map((key) => {
      const all = labelSpots(key, avoid, frontier).sort((a, b) => a.s - b.s);
      const fine = all.filter((c) => c.s < 1e5);
      return fine.length ? fine : all.slice(0, 4);
    });
    const rest = sets.map((_, n) => sets.slice(n).reduce((sum, set) => sum + set[0].s, 0)).concat(0);
    const grow = (b) => ({ x: b.x - 3, y: b.y - 2, w: b.w + 6, h: b.h + 4 });
    const clash = (c, d) => {
      const a = overlap(grow(c.b), d.b);
      let s = a ? 5e3 + a * 10 : 0;
      if (c.tick && crosses(grow(d.b), c.tick)) s += 3e3;
      if (d.tick && crosses(grow(c.b), d.tick)) s += 3e3;
      if (c.tick && d.tick && cut(c.tick, d.tick)) s += 3e3;
      return s;
    };
    const pick = [];
    let best = null;
    let bestScore = Infinity;
    const walk = (n, score) => {
      if (n === sets.length) {
        bestScore = score;
        best = pick.slice();
        return;
      }
      sets[n].forEach((c) => {
        let s = score + c.s;
        for (let m = 0; m < n; m++) s += clash(c, pick[m]);
        if (s + rest[n + 1] >= bestScore) return;
        pick[n] = c;
        walk(n + 1, s);
      });
    };
    walk(0, 0);
    best.forEach((c) => {
      c.t.setAttribute("transform", `translate(${rnd(c.b.x - c.x)},${rnd(c.b.y - c.top)})`);
      if (!c.tick) return;
      const [a, z] = c.tick;
      c.t.parentNode.insertBefore(make("line", { class: "tick", x1: rnd(a[0]), y1: rnd(a[1]), x2: rnd(z[0]), y2: rnd(z[1]) }), c.t);
    });
  }

  function render(opts) {
    const width = opts.width || Math.round(plot.getBoundingClientRect().width);
    if (!width) return;
    clearTimeout(switchTimer);
    svg.classList.add("static");
    svg.classList.remove("switching");
    W = width;
    H = Math.round(Math.max(300, Math.min(500, W * (W < 480 ? 0.96 : 0.74))));
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.setAttribute("width", W);
    svg.setAttribute("height", H);
    drawAxes();
    placePoints();
    if (opts.overlay !== false) drawOverlay(!!opts.animate, !!opts.intro);
    svg.getBoundingClientRect();
    svg.classList.remove("static");
  }

  function describe() {
    const c = VIEWS[view];
    document.querySelectorAll("[data-view-word]").forEach((n) => {
      n.textContent = c.word;
    });
    document.querySelectorAll("[data-view-better]").forEach((n) => {
      n.textContent = c.better;
    });
    svg.setAttribute("aria-label", `Index score against ${c.word} per task for 33 coding agents. Copilot Fusion Max scores 59.9, 1.8 points below the index leader, ${c.note}.`);
  }

  function setView(next) {
    if (next === view || !VIEWS[next]) return;
    view = next;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.view === next)));
    describe();
    hideTip();
    if (reduceMotion || !W) {
      render({});
      return;
    }
    clearTimeout(switchTimer);
    svg.classList.add("switching");
    drawAxes();
    placePoints();
    switchTimer = setTimeout(() => {
      drawOverlay(true, false);
      svg.classList.remove("switching");
    }, 720);
  }
  buttons.forEach((b) => b.addEventListener("click", () => setView(b.dataset.view)));

  let resizeTimer = 0;
  if ("ResizeObserver" in window) {
    new ResizeObserver(() => {
      if (printing || Math.round(plot.getBoundingClientRect().width) === W) return;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => render({}), 120);
    }).observe(plot);
  }
  window.addEventListener("beforeprint", () => {
    printing = true;
    hideTip();
    render({ width: PRINT_WIDTH });
  });
  window.addEventListener("afterprint", () => {
    printing = false;
    render({});
  });

  describe();
  render({ overlay: false });
  let started = false;
  const start = () => {
    if (started) return;
    started = true;
    render({ animate: !reduceMotion, intro: true });
  };
  setTimeout(start, 1200);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => (started ? render({}) : start()));
  else start();
})();
