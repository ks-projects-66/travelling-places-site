# Visual baseline status

**Approved by the owner on 2026-10-31.**

The references were captured on the GitHub runner (ubuntu-24.04) by the "Refresh visual baselines
(manual)" job in run 41172122328, from commit 78269b7. The owner reviewed all 44 on a side-by-side
page against the previous set, with a pixel diff for each, and replied "Approve the baselines". The
agent then committed the run's `visual-references-for-review` artifact unchanged (every file
checked by sha256). The approval is the owner's; the keystrokes were the agent's.

44 images, 9.7 MB: components at three viewports and each page above the fold at 390px.

## Why these replaced the 25 October set

- **Captured on the runner itself.** The 25 October set was made in a cloud session that also ran
  Ubuntu 24.04, but its text rendering differs from the GitHub runner's. CI draws IBM Plex Sans
  heavier and about 5% tighter, so the comparison failed 41 of 44 on text alone once CI could reach
  the site. Two separate CI runs (41169257093 and 41172122328) produced byte-identical images, so the
  runner is a stable reference.
- **The CI step had never compared anything.** Until 31 October it ran Backstop with no preview
  server, and every scenario failed on a refused connection. `qa/visual/run.mjs` now starts one.
- **Three were placeholders.** `component-journal-feature` used a selector renamed in b24558c, so
  its three references were Backstop's "Element not found" image. They are now the journal lead
  story (`.journal-lead`).

Re-generating references with `pnpm test:visual:ref` resets this file to unapproved.
