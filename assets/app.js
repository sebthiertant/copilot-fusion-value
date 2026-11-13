/* Copilot Fusion value story — vanilla JS + Chart.js */
(() => {
  "use strict";

  // Artificial Analysis Coding Agent Index v2.0 snapshot (retrieved 2026-11-13). Full data: data/aa-coding-agent-index-2026-11-13.json
  const AA = [{"label":"Claude Code - Claude Opus 5.5 (Max, Default Fallback)","index":61.7,"costUsd":11.42,"timeMin":61.0,"tokensM":14.52,"frontierCode":56.0,"sweAtlasQnA":65.9,"terminalBench":63.1},{"label":"Devin Fusion CLI - Claude Opus 5.5 Max + GPT-6 Luna High","index":61.5,"costUsd":8.0,"timeMin":51.1,"tokensM":10.46,"frontierCode":53.6,"sweAtlasQnA":68.3,"terminalBench":62.6},{"label":"GitHub Copilot - Copilot Fusion (max)","index":59.9,"costUsd":5.59,"timeMin":36.1,"tokensM":7.34,"frontierCode":51.4,"sweAtlasQnA":57.0,"terminalBench":71.2},{"label":"Antigravity CLI - Gemini 4 Carbon (High)","index":59.4,"costUsd":7.74,"timeMin":29.8,"tokensM":12.55,"frontierCode":50.9,"sweAtlasQnA":63.7,"terminalBench":63.6},{"label":"Claude Code - Claude Sonnet 5.5 (Max, Default Fallback)","index":59.3,"costUsd":13.3,"timeMin":79.7,"tokensM":24.13,"frontierCode":47.6,"sweAtlasQnA":64.2,"terminalBench":66.2},{"label":"Devin Fusion CLI - Claude Fable 5.1 XHigh + SWE-2 Medium","index":58.7,"costUsd":8.2,"timeMin":37.6,"tokensM":9.81,"frontierCode":51.6,"sweAtlasQnA":68.3,"terminalBench":56.1},{"label":"Claude Code - Claude Fable 5.1 (Max, Default Fallback)","index":57.6,"costUsd":11.53,"timeMin":35.3,"tokensM":5.99,"frontierCode":48.9,"sweAtlasQnA":66.4,"terminalBench":57.6},{"label":"Codex - GPT-6 Astra (Max)","index":54.7,"costUsd":7.04,"timeMin":24.8,"tokensM":3.23,"frontierCode":49.3,"sweAtlasQnA":59.1,"terminalBench":55.6},{"label":"Codex - GPT-6.1 Sol (Max)","index":54.1,"costUsd":1.5,"timeMin":23.7,"tokensM":3.94,"frontierCode":49.4,"sweAtlasQnA":59.9,"terminalBench":53.0},{"label":"Antigravity CLI - Gemini 4 Argon (High)","index":53.2,"costUsd":11.73,"timeMin":34.7,"tokensM":13.87,"frontierCode":48.6,"sweAtlasQnA":55.1,"terminalBench":56.1},{"label":"Devin Fusion CLI - GPT-6 Astra XHigh + SWE-2 Medium","index":53.1,"costUsd":4.34,"timeMin":21.2,"tokensM":3.63,"frontierCode":49.0,"sweAtlasQnA":60.2,"terminalBench":50.0},{"label":"Muse Code - Muse Wonder (Max)","index":52.0,"costUsd":8.05,"timeMin":24.5,"tokensM":14.48,"frontierCode":46.4,"sweAtlasQnA":61.6,"terminalBench":48.0},{"label":"Opencode - GLM-5.3 (Max)","index":48.9,"costUsd":5.23,"timeMin":56.2,"tokensM":15.91,"frontierCode":48.2,"sweAtlasQnA":58.6,"terminalBench":39.9},{"label":"Mistral Vibe - Mistral Large 4 (High)","index":48.3,"costUsd":1.26,"timeMin":48.4,"tokensM":8.45,"frontierCode":44.5,"sweAtlasQnA":58.9,"terminalBench":41.4},{"label":"Codex - GPT-6.1 Terra (Xhigh)","index":48.2,"costUsd":0.69,"timeMin":16.4,"tokensM":6.89,"frontierCode":44.9,"sweAtlasQnA":53.8,"terminalBench":46.0},{"label":"Codex - GPT-6.1 Terra (Max)","index":48.1,"costUsd":1.24,"timeMin":26.1,"tokensM":12.28,"frontierCode":41.8,"sweAtlasQnA":54.0,"terminalBench":48.5},{"label":"Codex - DeepSeek V4.1 Flash (Max)","index":47.3,"costUsd":0.39,"timeMin":38.1,"tokensM":27.24,"frontierCode":52.6,"sweAtlasQnA":61.0,"terminalBench":28.3},{"label":"Grok Build - Grok 4.7 (Xhigh)","index":46.6,"costUsd":9.48,"timeMin":35.8,"tokensM":15.91,"frontierCode":43.6,"sweAtlasQnA":62.9,"terminalBench":33.3},{"label":"DeepSeek Harness - DeepSeek V4.1 Flash 1017 (Max)","index":46.3,"costUsd":0.3,"timeMin":21.4,"tokensM":16.74,"frontierCode":46.5,"sweAtlasQnA":61.6,"terminalBench":30.8},{"label":"Codex - GPT-6.1 Terra (High)","index":46.3,"costUsd":0.54,"timeMin":12.7,"tokensM":5.6,"frontierCode":43.5,"sweAtlasQnA":53.0,"terminalBench":42.4},{"label":"Muse Code - Muse Spark 1.3 (Max)","index":45.7,"costUsd":3.91,"timeMin":23.3,"tokensM":17.82,"frontierCode":46.7,"sweAtlasQnA":58.6,"terminalBench":31.8},{"label":"Claude Code - Step 5 Preview","index":43.1,"costUsd":1.84,"timeMin":61.1,"tokensM":22.14,"frontierCode":40.5,"sweAtlasQnA":58.6,"terminalBench":30.3},{"label":"Codex - GPT-6.1 Terra (Medium)","index":42.0,"costUsd":0.39,"timeMin":10.2,"tokensM":4.08,"frontierCode":43.8,"sweAtlasQnA":47.0,"terminalBench":35.4},{"label":"Kimi Code CLI - Kimi K3 (Max)","index":41.4,"costUsd":5.17,"timeMin":62.9,"tokensM":9.01,"frontierCode":43.1,"sweAtlasQnA":59.9,"terminalBench":21.2},{"label":"Claude Code - Qwen3.8 Max","index":39.2,"costUsd":3.8,"timeMin":76.1,"tokensM":9.15,"frontierCode":44.8,"sweAtlasQnA":56.2,"terminalBench":16.7},{"label":"Codex - GPT-6.1 Terra (Non-reasoning)","index":39.2,"costUsd":0.45,"timeMin":9.5,"tokensM":5.78,"frontierCode":46.2,"sweAtlasQnA":46.2,"terminalBench":25.3},{"label":"Claude Code - Claude Haiku 5.5 (Max)","index":37.3,"costUsd":2.67,"timeMin":70.9,"tokensM":16.05,"frontierCode":47.4,"sweAtlasQnA":33.9,"terminalBench":30.8},{"label":"Mistral Vibe - Mistral Large 4 (Medium)","index":35.4,"costUsd":0.78,"timeMin":38.8,"tokensM":5.76,"frontierCode":35.3,"sweAtlasQnA":44.6,"terminalBench":26.3},{"label":"Codex - GPT-6.1 Terra (Low)","index":34.9,"costUsd":0.2,"timeMin":6.3,"tokensM":1.89,"frontierCode":40.6,"sweAtlasQnA":38.7,"terminalBench":25.3},{"label":"Antigravity SDK - Gemini 3.8 Flash (High)","index":33.3,"costUsd":2.51,"timeMin":13.1,"tokensM":14.25,"frontierCode":40.8,"sweAtlasQnA":44.4,"terminalBench":14.6},{"label":"Codex - GPT-6 Luna (Max)","index":31.2,"costUsd":0.16,"timeMin":20.8,"tokensM":8.69,"frontierCode":39.5,"sweAtlasQnA":38.4,"terminalBench":15.7},{"label":"Muse Code - Muse Spark Open (Xhigh)","index":26.3,"costUsd":3.54,"timeMin":26.0,"tokensM":13.34,"frontierCode":22.5,"sweAtlasQnA":50.8,"terminalBench":5.6},{"label":"Mirror - Beam 1.0","index":20.5,"costUsd":0.32,"timeMin":38.7,"tokensM":4.89,"frontierCode":20.3,"sweAtlasQnA":37.6,"terminalBench":3.5}];

  const KEY = {
    fusion: "GitHub Copilot - Copilot Fusion (max)",
    opus: "Claude Code - Claude Opus 5.5 (Max, Default Fallback)",
    astra: "Codex - GPT-6 Astra (Max)",
    sol: "Codex - GPT-6.1 Sol (Max)",
  };
  const META = {
    fusion: { name: "Copilot Fusion (Max)", short: "Fusion", harness: "GitHub Copilot", color: "#f778ba" },
    opus: { name: "Claude Opus 5.5 (Max)", short: "Opus 5.5", harness: "Claude Code", color: "#d97757" },
    astra: { name: "GPT-6 Astra (Max)", short: "Astra", harness: "Codex", color: "#10a37f" },
    sol: { name: "GPT-6.1 Sol (Max)", short: "Sol", harness: "Codex", color: "#58a6ff" },
  };
  const byLabel = Object.fromEntries(AA.map((a) => [a.label, a]));
  const H = Object.fromEntries(Object.entries(KEY).map(([k, l]) => [k, byLabel[l]]));
  const ORDER = ["fusion", "opus", "astra", "sol"];
  // Vertical label offsets used on narrow screens to avoid overlaps
  const SMALL_DY = { fusion: -14, opus: -12, astra: 18, sol: 18 };

  const fmt$ = (v, d = 0) => "$" + v.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  const fmtN = (v) => v.toLocaleString("en-US");

  /* ---------- KPI count-up ---------- */
  function countUp(el) {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || "";
    const t0 = performance.now();
    const dur = 1400;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * e) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  setTimeout(() => document.querySelectorAll("[data-count]").forEach(countUp), 350);

  /* ---------- Day lanes: fixed model switcher ---------- */
  document.querySelectorAll(".day .seg-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".day .seg-btn").forEach((b) => b.classList.toggle("active", b === btn));
      document.querySelectorAll(".fixed-model").forEach((el) => (el.textContent = btn.dataset.model));
    });
  });

  /* ---------- Execution pattern diagrams ---------- */
  const svg = document.getElementById("pat-svg");
  const desc = document.getElementById("pat-desc");
  const NS = "http://www.w3.org/2000/svg";
  const W = 132, NH = 56;

  const PATTERNS = {
    single: {
      desc: "<b>Single</b> — one right-sized model completes the task directly. Same speed and cost as calling that model yourself: no extra calls when they wouldn't help.",
      nodes: [
        { id: "p", x: 80, y: 150, t: "Prompt" },
        { id: "r", x: 250, y: 150, t: "Copilot Fusion", s: "analyses task", c: "router" },
        { id: "m", x: 470, y: 150, t: "Best-fit model", s: "e.g. GPT-6.1 Sol", c: "light", w: 160 },
        { id: "a", x: 760, y: 150, t: "Answer ✓", c: "out" },
      ],
      edges: [["p", "r"], ["r", "m"], ["m", "a"]],
    },
    cascade: {
      desc: "<b>Cascade</b> — an efficient model drafts first. A judge inspects the draft and accepts it, or escalates to a stronger model <i>only when needed</i>. Frontier spend only when it pays off.",
      nodes: [
        { id: "p", x: 70, y: 120, t: "Prompt" },
        { id: "r", x: 220, y: 120, t: "Copilot Fusion", c: "router" },
        { id: "d", x: 385, y: 120, t: "Efficient model", s: "drafts", c: "light" },
        { id: "j", x: 555, y: 120, t: "Judge", s: "quality gate", c: "judge" },
        { id: "a", x: 820, y: 120, t: "Answer ✓", c: "out", w: 110 },
        { id: "s", x: 690, y: 245, t: "Stronger model", s: "repairs / redoes", c: "strong" },
      ],
      edges: [["p", "r"], ["r", "d"], ["d", "j"], ["j", "a", "accept"], ["j", "s", "escalate if needed", true], ["s", "a", "", true]],
    },
    critique: {
      desc: "<b>Critique</b> — one model drafts while several models from <i>different families</i> review it in parallel, read-only. Feedback is aggregated and the drafter revises once: a built-in second opinion.",
      nodes: [
        { id: "p", x: 65, y: 150, t: "Prompt", w: 100 },
        { id: "r", x: 200, y: 150, t: "Copilot Fusion", c: "router", w: 128 },
        { id: "d", x: 360, y: 150, t: "Drafting model", s: "e.g. Opus 5.5", c: "strong" },
        { id: "c1", x: 540, y: 55, t: "Critic", s: "other family", c: "critic", w: 120 },
        { id: "c2", x: 540, y: 150, t: "Critic", s: "other family", c: "critic", w: 120 },
        { id: "c3", x: 540, y: 245, t: "Critic", s: "other family", c: "critic", w: 120 },
        { id: "v", x: 705, y: 150, t: "Revise", s: "drafter, once", c: "strong", w: 120 },
        { id: "a", x: 840, y: 150, t: "Answer ✓", c: "out", w: 100 },
      ],
      edges: [["p", "r"], ["r", "d"], ["d", "c1"], ["d", "c2"], ["d", "c3"], ["c1", "v"], ["c2", "v"], ["c3", "v"], ["v", "a"]],
    },
  };

  function el(tag, attrs = {}, parent) {
    const e = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    if (parent) parent.appendChild(e);
    return e;
  }

  function drawPattern(name) {
    const P = PATTERNS[name];
    svg.innerHTML = "";
    const defs = el("defs", {}, svg);
    const g = el("linearGradient", { id: "fgrad", gradientUnits: "userSpaceOnUse", x1: 0, y1: 0, x2: 900, y2: 0 }, defs);
    el("stop", { offset: "0%", "stop-color": "#a371f7" }, g);
    el("stop", { offset: "55%", "stop-color": "#f778ba" }, g);
    el("stop", { offset: "100%", "stop-color": "#58a6ff" }, g);

    const N = Object.fromEntries(P.nodes.map((n) => [n.id, { ...n, w: n.w || W }]));
    const edgeLayer = el("g", {}, svg);
    P.edges.forEach(([a, b, label, dim], i) => {
      const A = N[a], B = N[b];
      let x1 = A.x + A.w / 2, y1 = A.y, x2 = B.x - B.w / 2, y2 = B.y;
      if (Math.abs(A.y - B.y) > 60 && Math.abs(A.x - B.x) < 200 && B.y > A.y) {
        x1 = A.x; y1 = A.y + NH / 2; x2 = B.x - B.w / 2; y2 = B.y;
      }
      const mx = (x1 + x2) / 2;
      const d = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
      el("path", { d, class: "edge " + (dim ? "dim flow" : "flow"), style: `animation-delay:${i * -0.15}s` }, edgeLayer);
      if (label) {
        const t = el("text", { x: mx, y: (y1 + y2) / 2 - 10, class: "edge-label" }, edgeLayer);
        t.textContent = label;
      }
    });

    P.nodes.forEach((n, i) => {
      const w = N[n.id].w;
      const grp = el("g", { class: "node " + (n.c || ""), style: `animation-delay:${i * 90}ms` }, svg);
      el("rect", { x: n.x - w / 2, y: n.y - NH / 2, width: w, height: NH, rx: 12 }, grp);
      const t = el("text", { x: n.x, y: n.s ? n.y - 8 : n.y }, grp);
      t.textContent = n.t;
      if (n.s) {
        const s = el("text", { x: n.x, y: n.y + 12, class: "sub-t" }, grp);
        s.textContent = n.s;
      }
    });

    // Travelling pulse along the main path
    const mainPath = P.edges.filter((e) => !e[3]).map(([a, b]) => [N[a], N[b]]);
    if (mainPath.length) {
      const pts = [mainPath[0][0]].concat(mainPath.map((e) => e[1]));
      const pd = "M" + pts.map((p) => `${p.x},${p.y}`).join(" L");
      const c = el("circle", { r: 6, class: "pulse" }, svg);
      el("animateMotion", { dur: `${1.2 + pts.length * 0.45}s`, repeatCount: "indefinite", path: pd }, c);
    }
    desc.innerHTML = P.desc;
  }

  let patTimer;
  const patNames = Object.keys(PATTERNS);
  const tabs = document.querySelectorAll(".pat-tab");
  function selectPattern(name) {
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.pat === name));
    drawPattern(name);
  }
  tabs.forEach((t) =>
    t.addEventListener("click", () => {
      clearInterval(patTimer);
      selectPattern(t.dataset.pat);
    })
  );
  selectPattern("single");
  let pi = 0;
  patTimer = setInterval(() => {
    pi = (pi + 1) % patNames.length;
    selectPattern(patNames[pi]);
  }, 7000);

  /* ---------- Head-to-head cards ---------- */
  const h2h = document.getElementById("h2h");
  ["opus", "astra", "sol"].forEach((k) => {
    const f = H.fusion, o = H[k];
    const pct = (a, b) => Math.round(((a - b) / b) * 100);
    const rows = [
      ["Index score", `${(f.index - o.index > 0 ? "+" : "") + (f.index - o.index).toFixed(1)} pts`, f.index >= o.index ? "good" : Math.abs(f.index - o.index) < 2.5 ? "neutral" : "bad"],
      ["Cost / task", `${pct(f.costUsd, o.costUsd) > 0 ? "+" : ""}${pct(f.costUsd, o.costUsd)}%`, f.costUsd <= o.costUsd ? "good" : "bad"],
      ["Time / task", `${pct(f.timeMin, o.timeMin) > 0 ? "+" : ""}${pct(f.timeMin, o.timeMin)}%`, f.timeMin <= o.timeMin ? "good" : "bad"],
      ["Tokens / task", `${pct(f.tokensM, o.tokensM) > 0 ? "+" : ""}${pct(f.tokensM, o.tokensM)}%`, f.tokensM <= o.tokensM ? "good" : "bad"],
    ];
    const card = document.createElement("article");
    card.className = "h2h reveal";
    card.innerHTML =
      `<h4><b>Fusion</b> vs <b>${META[k].name}</b> <small>(${META[k].harness})</small></h4>` +
      rows.map(([l, v, c]) => `<div class="h2h-row"><span>${l}</span><span class="delta ${c}">${v}</span></div>`).join("");
    h2h.appendChild(card);
  });

  /* ---------- Charts ---------- */
  if (window.Chart) {
    Chart.defaults.color = "#8b949e";
    Chart.defaults.font.family = '"Mona Sans", -apple-system, sans-serif';
    Chart.defaults.borderColor = "#21262d";
    Chart.defaults.plugins.tooltip.backgroundColor = "#161b22";
    Chart.defaults.plugins.tooltip.borderColor = "#30363d";
    Chart.defaults.plugins.tooltip.borderWidth = 1;
    Chart.defaults.plugins.tooltip.padding = 10;

    const X = {
      costUsd: { title: "Average cost per task (USD) — lower is better", fmt: (v) => "$" + v.toFixed(2) },
      timeMin: { title: "Average agent time per task (minutes) — lower is better", fmt: (v) => v.toFixed(0) + " min" },
      tokensM: { title: "Average tokens per task (millions) — lower is better", fmt: (v) => v.toFixed(1) + "M" },
    };
    let xKey = "costUsd";
    let showAll = true;
    const keyOf = (label) => Object.keys(KEY).find((k) => KEY[k] === label);

    const labelPlugin = {
      id: "pointLabels",
      afterDatasetsDraw(chart) {
        const { ctx } = chart;
        chart.data.datasets.forEach((ds, di) => {
          if (!ds._labels) return;
          const meta = chart.getDatasetMeta(di);
          const small = chart.width < 620;
          meta.data.forEach((pt, i) => {
            const k = ds._keys[i];
            ctx.save();
            ctx.font = `700 ${small ? 11 : k === "fusion" ? 15 : 13}px "Mona Sans", sans-serif`;
            ctx.fillStyle = META[k].color;
            const txt = (small ? META[k].short : META[k].name) + (k === "fusion" ? " ★" : "");
            const off = k === "fusion" ? 14 : 11;
            const w = ctx.measureText(txt).width;
            const flip = pt.x + off + w > chart.chartArea.right + (small ? 4 : 150);
            ctx.textAlign = flip ? "right" : "left";
            const lx = flip ? pt.x - off : pt.x + off;
            const ly = small && SMALL_DY[k] != null ? pt.y + SMALL_DY[k] : pt.y - off + 4;
            ctx.fillText(txt, lx, ly);
            if (!small) {
              ctx.font = `500 11px "Mona Sans", sans-serif`;
              ctx.fillStyle = "#8b949e";
              ctx.fillText(META[k].harness, lx, pt.y - off + 18);
            }
            ctx.restore();
          });
        });
      },
    };

    function pareto(points) {
      const s = [...points].sort((a, b) => a.x - b.x);
      const out = [];
      let best = -Infinity;
      s.forEach((p) => {
        if (p.y > best) {
          out.push(p);
          best = p.y;
        }
      });
      return out;
    }

    function scatterData() {
      const others = AA.filter((a) => !keyOf(a.label) && a[xKey] != null);
      const hi = ORDER.map((k) => H[k]);
      const allPts = (showAll ? others : []).concat(hi).map((a) => ({ x: a[xKey], y: a.index, label: a.label }));
      return [
        {
          label: "Pareto frontier",
          type: "line",
          data: pareto(allPts),
          borderColor: "rgba(163,113,247,.45)",
          borderDash: [6, 6],
          borderWidth: 2,
          pointRadius: 0,
          fill: false,
          tension: 0,
          order: 3,
        },
        {
          label: "Other coding agents",
          data: showAll ? others.map((a) => ({ x: a[xKey], y: a.index, label: a.label })) : [],
          backgroundColor: "rgba(139,148,158,.35)",
          borderColor: "rgba(139,148,158,.6)",
          pointRadius: 5,
          pointHoverRadius: 7,
          order: 2,
        },
        {
          label: "Highlighted",
          data: hi.map((a) => ({ x: a[xKey], y: a.index, label: a.label })),
          _labels: true,
          _keys: ORDER,
          backgroundColor: ORDER.map((k) => META[k].color),
          borderColor: ORDER.map((k) => (k === "fusion" ? "#fff" : META[k].color)),
          borderWidth: ORDER.map((k) => (k === "fusion" ? 3 : 1)),
          pointRadius: ORDER.map((k) => (k === "fusion" ? 13 : 9)),
          pointHoverRadius: ORDER.map((k) => (k === "fusion" ? 15 : 11)),
          pointStyle: ORDER.map((k) => (k === "fusion" ? "star" : "circle")),
          order: 1,
        },
      ];
    }

    const scatter = new Chart(document.getElementById("scatter"), {
      type: "scatter",
      data: { datasets: scatterData() },
      options: {
        maintainAspectRatio: false,
        onResize: (c, size) => (c.options.layout.padding.right = size.width < 620 ? 8 : 150),
        layout: { padding: { right: window.innerWidth < 700 ? 8 : 150, top: 10 } },
        animation: { duration: 900, easing: "easeOutQuart" },
        scales: {
          x: { title: { display: true, text: X[xKey].title, color: "#c9d1d9", font: { weight: 600 } }, beginAtZero: true, grid: { color: "#21262d" } },
          y: { title: { display: true, text: "Coding Agent Index v2.0 — higher is better", color: "#c9d1d9", font: { weight: 600 } }, suggestedMin: 15, suggestedMax: 66, grid: { color: "#21262d" } },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (c) => `${c.raw.label || "Pareto frontier"} — score ${c.raw.y}, ${X[xKey].fmt(c.raw.x)}`,
            },
          },
        },
      },
      plugins: [labelPlugin],
    });

    function refreshScatter() {
      scatter.data.datasets = scatterData();
      scatter.options.scales.x.title.text = X[xKey].title;
      scatter.update();
    }
    document.querySelectorAll("[data-x]").forEach((b) =>
      b.addEventListener("click", () => {
        document.querySelectorAll("[data-x]").forEach((o) => o.classList.toggle("active", o === b));
        xKey = b.dataset.x;
        refreshScatter();
      })
    );
    document.getElementById("show-all").addEventListener("change", (e) => {
      showAll = e.target.checked;
      refreshScatter();
    });

    // Per-benchmark grouped bars
    new Chart(document.getElementById("bench"), {
      type: "bar",
      data: {
        labels: ["Terminal-Bench 4.0", "FrontierCode v1.1", "SWE-Atlas QnA"],
        datasets: ORDER.map((k) => ({
          label: META[k].name,
          data: [H[k].terminalBench, H[k].frontierCode, H[k].sweAtlasQnA],
          backgroundColor: META[k].color + (k === "fusion" ? "" : "cc"),
          borderRadius: 6,
          borderSkipped: false,
        })),
      },
      options: {
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true, max: 80, grid: { color: "#21262d" } }, x: { grid: { display: false } } },
        plugins: { legend: { position: "bottom", labels: { usePointStyle: true, boxWidth: 8 } } },
      },
    });

    // Price vs performance combo
    new Chart(document.getElementById("value"), {
      data: {
        labels: ORDER.map((k) => META[k].name),
        datasets: [
          {
            type: "line",
            label: "Index score",
            data: ORDER.map((k) => H[k].index),
            yAxisID: "y1",
            borderColor: "#e6edf3",
            backgroundColor: "#e6edf3",
            pointRadius: 6,
            pointHoverRadius: 8,
            borderWidth: 2,
            tension: 0.25,
          },
          {
            type: "bar",
            label: "Cost per task (USD)",
            data: ORDER.map((k) => H[k].costUsd),
            yAxisID: "y",
            backgroundColor: ORDER.map((k) => META[k].color + (k === "fusion" ? "" : "aa")),
            borderRadius: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: { position: "left", beginAtZero: true, title: { display: true, text: "USD / task" }, grid: { color: "#21262d" } },
          y1: { position: "right", min: 40, max: 65, title: { display: true, text: "Index score" }, grid: { display: false } },
          x: { grid: { display: false } },
        },
        plugins: { legend: { position: "bottom", labels: { usePointStyle: true, boxWidth: 8 } } },
      },
    });
  }

  /* ---------- Calculator ---------- */
  const CALC = [
    { k: "fusion", promo: true },
    { k: "opus" },
    { k: "astra" },
    { k: "sol" },
  ];
  const bars = document.getElementById("calc-bars");
  CALC.forEach(({ k }) => {
    const row = document.createElement("div");
    row.className = "cbar";
    row.innerHTML = `<div class="cbar-name" style="color:${META[k].color}">${META[k].name}<small>${META[k].harness} · score ${H[k].index}</small></div>
      <div class="cbar-track"><div class="cbar-fill" id="fill-${k}" style="background:linear-gradient(90deg, ${META[k].color}, ${META[k].color}66)"></div><div class="cbar-val" id="val-${k}"></div></div>`;
    bars.appendChild(row);
  });
  const devs = document.getElementById("devs");
  const tasks = document.getElementById("tasks");
  const promo = document.getElementById("promo");
  function calc() {
    const d = +devs.value, t = +tasks.value, n = d * t;
    document.getElementById("devs-out").textContent = fmtN(d);
    document.getElementById("tasks-out").textContent = fmtN(t);
    document.getElementById("tot-tasks").textContent = fmtN(n);
    const cost = {};
    CALC.forEach(({ k, promo: p }) => (cost[k] = n * H[k].costUsd * (p && promo.checked ? 0.7 : 1)));
    const max = Math.max(...Object.values(cost));
    CALC.forEach(({ k }) => {
      document.getElementById("fill-" + k).style.width = Math.max(2, (cost[k] / max) * 100) + "%";
      document.getElementById("val-" + k).innerHTML = `${fmt$(cost[k])}<small>/ month · ${fmtN(Math.round(cost[k] * 100))} AI credits</small>`;
    });
    const sv = (k) => {
      const s = cost[k] - cost.fusion;
      return `${fmt$(s)} / mo (−${Math.round((s / cost[k]) * 100)}%)`;
    };
    document.getElementById("save-opus").textContent = sv("opus");
    document.getElementById("save-astra").textContent = sv("astra");
  }
  [devs, tasks, promo].forEach((i) => i.addEventListener("input", calc));
  calc();

  /* ---------- Output price bars ---------- */
  const PRICES = [
    { n: "GPT-6 Astra", v: 50, c: "#10a37f" },
    { n: "Claude Opus 5.5", v: 20, c: "#d97757" },
    { n: "GPT-6.1 Sol", v: 10, c: "#58a6ff" },
    { n: "GPT-6 Luna", v: 0.5, c: "#3fb950" },
  ];
  const pb = document.getElementById("price-bars");
  PRICES.forEach((p) => {
    const r = document.createElement("div");
    r.className = "pbar";
    r.innerHTML = `<span>${p.n}</span><div class="pbar-track"><div class="pbar-fill" data-w="${(p.v / 50) * 100}" style="background:${p.c}"></div></div><span class="pbar-v">$${p.v.toFixed(2)}</span>`;
    pb.appendChild(r);
  });

  /* ---------- Reveal on scroll + animated bars ---------- */
  document.querySelectorAll(".section-head, .opt, .day, .matrix-wrap, .patterns, .eff, .pool, .chart-card, .callout, .hy, .calc, .pricing, .timeline li, .quote, .cta").forEach((e) => e.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        en.target.querySelectorAll("[data-bar]").forEach((b) => (b.style.width = b.dataset.bar + "%"));
        en.target.querySelectorAll(".pbar-fill").forEach((b) => (b.style.width = Math.max(1, +b.dataset.w) + "%"));
        io.unobserve(en.target);
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((e) => io.observe(e));
})();
