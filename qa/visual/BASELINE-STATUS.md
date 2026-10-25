# Visual baseline status

**Approved by the owner on 2026-10-25.**

The owner reviewed the before-and-after captures of every changed section at 1440px and 390px (the
callout-round review page, `docs/CALLOUTS-2026-10-25.md`) and instructed that the baselines be
approved. The agent then generated the references from commit c234ddd on Ubuntu 24.04 (the CI
image), checked that none is an error placeholder, re-ran `pnpm test:visual` against them (44 of 44
passed) and ran `approve.mjs --i-have-reviewed-the-diffs` on that instruction. The approval is the
owner's; the keystrokes were the agent's.

44 images, 9.2 MB: components at three viewports and each page above the fold at 390px.

Re-generating references with `pnpm test:visual:ref` resets this file to unapproved.
