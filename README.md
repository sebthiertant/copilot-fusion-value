# Copilot Fusion: a two-minute model choice briefing

A short, print-style page for customer conversations. It compares three ways to choose a model in GitHub Copilot:

- **One fixed model**: Claude Opus 5.5, GPT-6.1 Sol or GPT-6 Astra
- **Auto** (the previous default): one model picked per prompt
- **Copilot Fusion** (generally available since 28 Oct 2026): picks models per prompt *and* decides how they work together (Single, Cascade, Critique)

**Live page:** https://sebthiertant.github.io/copilot-fusion-value/

## What's on the page

1. **The headline**: Fusion Max as a share of Claude Opus 5.5 Max, the top-ranked agent: 97% of the score, 49% of the cost, 59% of the time.
2. **Fig. 1**: score against cost, time or tokens per task for all 33 agents in the Artificial Analysis Coding Agent Index v2.0, with the efficient frontier.
3. **Four key facts**, then three short sections:
   - **01** One fixed model vs. Auto vs. Fusion, side by side
   - **02** How Fusion decides: the three orchestration patterns and the Standard, High and Max effort levels
   - **03** Head to head with the three fixed models, with a monthly cost calculator for your task volume

Use **Save as PDF** in the page header to get a three-page A4 handout.

## Sources and caveats

Every figure comes from public sources linked at the bottom of the page: the GitHub Changelog, GitHub Docs, the GitHub Blog and Artificial Analysis. The benchmark snapshot (retrieved 13 Nov 2026) is in [`data/`](data/).

- Fixed-model results come from each vendor's own agent (Claude Code, Codex), not from Copilot.
- Auto has no public benchmark result, so it is compared on features only.
- Monthly figures multiply the benchmark cost per task by your volume at list API rates. They leave out the Fusion launch discount, plan allowances and your own task mix.
- Prices, discounts and model pools change. Check the linked docs before quoting.

## Built with

Plain HTML, CSS and JavaScript. The chart is hand-drawn SVG, with no libraries and no build step. Fonts: Mona Sans and Newsreader, from Google Fonts.
