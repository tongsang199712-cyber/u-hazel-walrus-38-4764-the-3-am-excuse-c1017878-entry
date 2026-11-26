// The 3 AM Excuse — make.fun entry
// A hardware wallet refuses to sign a transaction at 3 AM.
// Writes the one-liner to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I survived three bear markets and two exchange collapses — I'm not letting you ape into a frog coin at 3 AM. Sleep on it.";

// The gate allows 1 to 200 characters of UTF-8 text, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Line is ${LINE.length} characters; the gate needs 1-200.`);
}

// Why this line: the wallet has a personality (a grizzled survivor of three
// bear markets and two exchange collapses), a reason (it will not let a
// sleep-deprived human ape into a frog coin), and the hour does the work —
// 3 AM is exactly when the bad trade happens, so the refusal lands as
// protection, not laziness. "Sleep on it" is both the joke and the advice.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
