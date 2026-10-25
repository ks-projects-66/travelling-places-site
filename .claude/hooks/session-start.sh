#!/bin/bash
# Installs the QA toolchain in every Claude Code cloud session, so `pnpm build`, `pnpm test:qa` and
# `pnpm qa:lighthouse` run without setup. Idempotent: on a warm container it only checks.
#
# Browsers. The repo pins @playwright/test, which expects specific browser builds. Cloud containers
# come with one Chromium preinstalled under $PLAYWRIGHT_BROWSERS_PATH, possibly a different build,
# and the environment advises against reinstalling it. So Chromium (and its headless shell) are
# aliased to the preinstalled build when the pinned one is missing; Firefox and WebKit, which are
# not preinstalled, are downloaded once with their system libraries.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

echo "session-start: installing pnpm dependencies"
pnpm install --prefer-offline --reporter=silent

BROWSERS="${PLAYWRIGHT_BROWSERS_PATH:-/opt/pw-browsers}"
mkdir -p "$BROWSERS"

# Revisions the pinned Playwright expects, read from its own browsers.json. pnpm keeps
# playwright-core out of the top-level node_modules, so resolve it through the chain that owns it
# (@playwright/test -> playwright -> playwright-core). A blank revision would alias the wrong
# directory and Playwright's cleanup would then delete it, so fail loudly instead.
BROWSERS_JSON=$(node -e "
  const { dirname, join } = require('node:path');
  const dir = (id, base) => dirname(require.resolve(id + '/package.json', { paths: [base] }));
  const core = dir('playwright-core', dir('playwright', dir('@playwright/test', process.cwd())));
  process.stdout.write(join(core, 'browsers.json'));
")
revision() {
  local rev
  rev=$(node -e "
    const e = require(process.argv[1]).browsers.find((x) => x.name === process.argv[2]);
    process.stdout.write(e ? e.revision : '');
  " "$BROWSERS_JSON" "$1")
  if [ -z "$rev" ]; then
    echo "session-start: no revision for $1 in $BROWSERS_JSON" >&2
    exit 1
  fi
  echo "$rev"
}

# Alias a missing pinned Chromium build to the newest preinstalled one.
alias_chromium() {
  local dir_prefix="$1" rev="$2"
  local want="$BROWSERS/${dir_prefix}-${rev}"
  if [ -e "$want" ]; then return; fi
  local have
  have=$(ls -d "$BROWSERS/${dir_prefix}"-[0-9]* 2>/dev/null | sort -V | tail -n 1 || true)
  if [ -n "$have" ]; then
    echo "session-start: aliasing $want -> $have"
    ln -sfn "$have" "$want"
  else
    echo "session-start: no preinstalled ${dir_prefix}; downloading"
    PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD= pnpm exec playwright install chromium
  fi
}

# Assigned one per line so a failed lookup stops the script under set -e.
CHROMIUM_REV=$(revision chromium)
SHELL_REV=$(revision chromium-headless-shell)
FIREFOX_REV=$(revision firefox)
WEBKIT_REV=$(revision webkit)

alias_chromium chromium "$CHROMIUM_REV"
alias_chromium chromium_headless_shell "$SHELL_REV"

need=()
[ -d "$BROWSERS/firefox-$FIREFOX_REV" ] || need+=(firefox)
[ -d "$BROWSERS/webkit-$WEBKIT_REV" ] || need+=(webkit)
if [ ${#need[@]} -gt 0 ]; then
  echo "session-start: downloading ${need[*]}"
  PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD= pnpm exec playwright install "${need[@]}"
fi

# System libraries for Firefox and WebKit. A stamp file avoids re-running apt on warm containers.
STAMP="$BROWSERS/.travelling-places-deps-installed"
if [ ! -f "$STAMP" ]; then
  echo "session-start: installing browser system libraries"
  pnpm exec playwright install-deps firefox webkit
  touch "$STAMP"
fi

# Unlighthouse drives Chromium through Puppeteer; point it at the preinstalled build.
if [ -n "${CLAUDE_ENV_FILE:-}" ] && [ -e "$BROWSERS/chromium" ]; then
  echo "export CHROME_PATH=\"$BROWSERS/chromium\"" >> "$CLAUDE_ENV_FILE"
fi

echo "session-start: ready"
