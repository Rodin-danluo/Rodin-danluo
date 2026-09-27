import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(
  repoRoot,
  "portfolio-home-about-refactor-2026-09-27",
);

const outFlag = process.argv.indexOf("--out");
const outputDir = path.resolve(
  outFlag >= 0 && process.argv[outFlag + 1]
    ? process.argv[outFlag + 1]
    : path.join(repoRoot, "dist"),
);

if (
  outputDir === repoRoot ||
  outputDir === sourceDir ||
  outputDir === path.parse(outputDir).root
) {
  throw new Error(`Refusing unsafe output directory: ${outputDir}`);
}

if (!fs.existsSync(path.join(sourceDir, "index.html"))) {
  throw new Error(`Portfolio entry file is missing: ${sourceDir}/index.html`);
}

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });
fs.cpSync(sourceDir, outputDir, {
  recursive: true,
  filter(source) {
    const relative = path.relative(sourceDir, source);
    return relative !== "tests" && relative !== "docs";
  },
});

console.log(`GitHub Pages artifact created at ${outputDir}`);
