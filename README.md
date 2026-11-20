# Copilot Fusion: a two-minute model choice briefing

A short, tile-based briefing for customer conversations. It compares three ways to choose a model in GitHub Copilot:

- **One fixed model**: Claude Opus 5.5, GPT-6.1 Sol or GPT-6 Astra
- **Auto** (the previous default): one model picked per prompt
- **Copilot Fusion** (generally available since 28 Oct 2026, and since 17 Nov also on GitHub.com, Visual Studio and GitHub Mobile): picks models per prompt *and* decides how they work together (Single, Cascade, Critique)

**Live page:** https://sebthiertant.github.io/copilot-fusion-value/

## What's on the page

1. **The headline**: Fusion Max ranks #1 on Terminal-Bench 4.1. Against Claude Opus 5.5 Max on two independent benchmarks:
   - Terminal-Bench 4.1: 108% of the score at 42% of the cost per trial
   - Artificial Analysis Coding Agent Index: 97% of the score at 49% of the cost per task
2. **Fig. 1**: score against cost, time or tokens per task for all 33 agents in the Artificial Analysis Coding Agent Index v2.0, with the efficient frontier.
3. **Four key facts**, then three short sections:
   - **01** One fixed model vs. Auto vs. Fusion, side by side, with both benchmark scores
   - **02** How Fusion decides: the three orchestration patterns and the Standard, High and Max effort levels
   - **03** Head to head with the three fixed models, with a monthly cost calculator for your task volume

Use **Save as PDF** in the page header to get a three-page A4 handout.

## Sources and caveats

Every figure comes from public sources linked at the bottom of the page: the GitHub Changelog, GitHub Docs, the GitHub Blog, Artificial Analysis and Terminal-Bench. Raw benchmark snapshots are in [`data/`](data/):

- `aa-coding-agent-index-2026-11-13.json`: Artificial Analysis Coding Agent Index v2.0, retrieved 13 Nov 2026 (Fig. 1, head to head, calculator)
- `terminal-bench-4.1-2026-11-18.json`: Terminal-Bench 4.1 leaderboard from tbench.ai, retrieved 18 Nov 2026

- Fixed-model results come from each vendor's own agent (Claude Code, Codex), not from Copilot.
- Auto has no public benchmark result, so it is compared on features only.
- Fusion's Terminal-Bench 4.1 lead is narrow: 95% intervals are about ±3 points and overlap with the runners-up. Quote it alongside the #3 rank on the broader Artificial Analysis index.
- Monthly figures multiply the benchmark cost per task by your volume at list API rates. They leave out the Fusion launch discount, plan allowances and your own task mix.
- Prices, discounts and model pools change. Check the linked docs before quoting.

## Built with

Plain HTML, CSS and JavaScript. The chart is hand-drawn SVG, with no libraries and no build step. Fonts: Outfit and JetBrains Mono, from Google Fonts.
