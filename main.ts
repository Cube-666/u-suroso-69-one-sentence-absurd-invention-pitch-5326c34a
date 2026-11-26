// One-Sentence Absurd Invention Pitch
// Writes a single sentence pitching a ridiculous invention that fixes a
// tiny everyday annoyance: the shower that turns scalding or freezing the
// moment someone flushes the toilet. The fix is absurd yet weirdly
// plausible: the showerhead negotiates a formal ceasefire with the toilet,
// so nobody flushes while you are mid-shampoo.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "A showerhead that negotiates a formal ceasefire with the toilet so nobody flushes while you are mid-shampoo.";

const MAX_CHARS = 220;

function main(): void {
  const text = PITCH.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`pitch must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (!text.trim()) {
    throw new Error("pitch must not be only white space");
  }
  // One sentence: exactly one sentence-ending mark, at the very end.
  const endings = (text.match(/[.!?]/g) ?? []).length;
  if (endings !== 1 || !text.endsWith(".")) {
    throw new Error("pitch must be exactly one sentence");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
}

main();
