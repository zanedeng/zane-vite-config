import { createHash } from "node:crypto";

export function generatorContentHash(content: string, hashLSize?: number): string {
    const hash = createHash('md5').update(content, 'utf8').digest('hex');
    return hashLSize ? hash.slice(0, hashLSize) : hash;
}