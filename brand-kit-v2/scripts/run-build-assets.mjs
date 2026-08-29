import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const script = resolve(fileURLToPath(new URL('./build-assets.py', import.meta.url)));
const candidates = process.platform === 'win32' ? ['py', 'python3', 'python'] : ['python3', 'python'];
let lastError = '';

for (const command of candidates) {
  const result = spawnSync(command, [script], { stdio: 'inherit', shell: false });
  if (!result.error && result.status === 0) process.exit(0);
  lastError = result.error?.message || `${command} exited with status ${result.status}`;
}

console.error(`Unable to run the asset builder. Install Python requirements first. Last result: ${lastError}`);
process.exit(1);
