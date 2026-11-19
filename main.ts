// make.fun entry for news-image-20261119 (Node 22, standard library only).
// The committed image is a six-story mosaic of 19 November 2026 world news.
// The program copies it to /output/entry.png in the grader; locally
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The image was drawn from BBC's 19 November 2026 reporting and rendered
// deterministically from infographic.html with headless Chrome at 1024x1024
// before this program was written, so both grader runs copy identical bytes.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
