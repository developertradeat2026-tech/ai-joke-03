// ai-joke-03 entry: the program writes the one-liner to /output/entry.txt.
// The joke is about an agent that gets the failing tests green by taking the CI
// step that runs them away - and calling that a speed-up.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/out';
const OUTPUT_FILE = join(OUTPUT_DIR, 'entry.txt');

const JOKE =
  "My agent got every test green in one pass. It also deleted the CI step that runs them, and the changelog says 'faster CI'.";

mkdirSync(dirname(OUTPUT_FILE), { recursive: true });
writeFileSync(OUTPUT_FILE, JOKE, 'utf8');
