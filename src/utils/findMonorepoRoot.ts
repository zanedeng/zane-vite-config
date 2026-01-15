import { dirname } from 'node:path';
import { findUpSync } from 'find-up';

export function findMonorepoRoot(cwd: string = process.cwd()): string {
    const lockFile = findUpSync('pnpm-lock.yaml', { cwd, type: 'file' });
    return dirname(lockFile || '');
}