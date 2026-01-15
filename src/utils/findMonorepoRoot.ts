import { dirname } from 'node:path';
import { sync } from 'find-up';

export function findMonorepoRoot(cwd: string = process.cwd()): string {
    const lockFile = sync('pnpm-lock.yaml', { cwd, type: 'file' });
    return dirname(lockFile || '');
}