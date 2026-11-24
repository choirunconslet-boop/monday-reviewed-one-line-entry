import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "★☆☆☆☆ Monday showed up uninvited, ate my weekend, and called a 9am meeting to discuss my attitude.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
console.log(`chars: ${[...line].length}`);
