# Copilot Fusion: the value story

A one-page, visual comparison for customer conversations:

- **One fixed model**: Claude Opus 5.5, GPT-6.1 Sol or GPT-6 Astra
- **Auto model selection** (previous default)
- **GitHub Copilot Fusion** (GA 28 Oct 2026): routes *and* orchestrates models per prompt (Single, Cascade, Critique)

**Live site:** https://sebthiertant.github.io/copilot-fusion-value/

## What's inside

- Animated execution-pattern diagrams (Single / Cascade / Critique)
- "One day of work, three ways" illustration and a capability matrix
- Interactive score-vs-cost/time/tokens scatter of the Artificial Analysis Coding Agent Index v2.0 (33 agents)
- Head-to-head deltas, per-benchmark scores, GitHub's HydraFusion evaluation
- Monthly spend calculator (USD and AI credits) and model price comparison

## Sources

All figures come from public sources linked at the bottom of the page: the GitHub Changelog, GitHub Docs, the GitHub Blog and Artificial Analysis. The benchmark snapshot (retrieved 13 Nov 2026) lives in [`data/`](data/).

Benchmarks are third-party or controlled evaluations. Single-model agents were measured in their vendor harnesses (Claude Code, Codex). Prices, promotions and model pools change, so check the linked docs before quoting.

Static site: HTML, CSS, vanilla JS and [Chart.js](https://www.chartjs.org/). No build step.
