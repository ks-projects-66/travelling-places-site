import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const kitRoot = resolve(scriptDir, '..');
const repoRoot = resolve(kitRoot, '..');
const argumentsList = process.argv.slice(2);
const reportOnly = argumentsList.includes('--report-only');
const requestedTargets = argumentsList.filter((argument) => !argument.startsWith('--'));
const targets = requestedTargets.length ? requestedTargets : ['brand-kit'];
// .astro added when the site moved off plain HTML. Without it this check cannot see
// a single page in the repository and reports a clean run over CSS alone.
const allowedExtensions = new Set(['.html', '.css', '.js', '.astro']);
const excludedDirectories = new Set(['.git', 'dist', 'node_modules', 'source']);
const findings = [];

const rules = [
  { name: 'long dash character', pattern: /[\u2013\u2014]/g },
  { name: 'diagonal arrow character', pattern: /[\u2197\u2198]/g },
  { name: 'italic element', pattern: /<em\b/gi },
  { name: 'italic CSS', pattern: /font-style\s*:\s*italic/gi },
  { name: 'prohibited heading class', pattern: /class=["'][^"']*\b(?:eyebrow|kicker|section-number)\b[^"']*["']/gi },
  { name: 'decorative zero-padded number', pattern: />\s*0\d\s*(?:[/.|]|<)/g },
  { name: 'underlined action', pattern: /text-decoration\s*:\s*underline/gi },
];

function collectFiles(target) {
  const absolute = resolve(repoRoot, target);
  if (!statSync(absolute).isDirectory()) return [absolute];
  const files = [];
  for (const entry of readdirSync(absolute)) {
    if (excludedDirectories.has(entry)) continue;
    const child = join(absolute, entry);
    if (statSync(child).isDirectory()) files.push(...collectFiles(relative(repoRoot, child)));
    else if (allowedExtensions.has(extname(child))) files.push(child);
  }
  return files;
}

function lineNumber(content, index) {
  return content.slice(0, index).split('\n').length;
}

for (const target of targets) {
  for (const file of collectFiles(target)) {
    if (file.endsWith('brand-check.mjs')) continue;
    const content = readFileSync(file, 'utf8');
    for (const rule of rules) {
      rule.pattern.lastIndex = 0;
      for (const match of content.matchAll(rule.pattern)) {
        findings.push({
          file: relative(repoRoot, file),
          line: lineNumber(content, match.index),
          rule: rule.name,
          sample: match[0].replace(/\s+/g, ' ').slice(0, 72),
        });
      }
    }

    const sizePattern = /font-size\s*:\s*([0-9.]+)(px|rem)/gi;
    for (const match of content.matchAll(sizePattern)) {
      const pixels = match[2].toLowerCase() === 'rem' ? Number(match[1]) * 16 : Number(match[1]);
      if (pixels > 56) {
        findings.push({
          file: relative(repoRoot, file),
          line: lineNumber(content, match.index),
          rule: 'display type above 56px',
          sample: match[0],
        });
      }
    }
  }
}

const tokens = JSON.parse(readFileSync(join(kitRoot, 'brand.tokens.json'), 'utf8'));
const colours = Object.fromEntries(Object.entries(tokens.color).map(([name, token]) => [name, token.value]));

function luminance(hex) {
  const channels = hex.slice(1).match(/.{2}/g).map((channel) => Number.parseInt(channel, 16) / 255);
  const linear = channels.map((channel) => channel <= 0.04045
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4);
  return (0.2126 * linear[0]) + (0.7152 * linear[1]) + (0.0722 * linear[2]);
}

function contrast(foreground, background) {
  const first = luminance(foreground);
  const second = luminance(background);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

const requiredPairs = [
  ['white', 'blue'],
  ['white', 'navy'],
  ['navy', 'white'],
  ['ink', 'white'],
  ['muted', 'white'],
  ['red', 'white'],
];

for (const [foreground, background] of requiredPairs) {
  const ratio = contrast(colours[foreground], colours[background]);
  if (ratio < 4.5) {
    findings.push({
      file: 'brand-kit/brand.tokens.json',
      line: 1,
      rule: 'approved contrast below 4.5 to 1',
      sample: `${foreground} on ${background}: ${ratio.toFixed(2)} to 1`,
    });
  }
}

if (findings.length) {
  console.log(`Brand check found ${findings.length} issue${findings.length === 1 ? '' : 's'}.`);
  for (const finding of findings) {
    console.log(`${finding.file}:${finding.line} | ${finding.rule} | ${finding.sample}`);
  }
  if (!reportOnly) process.exitCode = 1;
} else {
  console.log('Brand check passed. No prohibited patterns or contrast failures found.');
}
