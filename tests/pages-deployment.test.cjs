const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");

test("Pages build publishes the portfolio at the artifact root", () => {
  const outputDir = fs.mkdtempSync(path.join(os.tmpdir(), "rodin-pages-"));

  try {
    const result = spawnSync(
      "npm",
      ["run", "build", "--", "--out", outputDir],
      { cwd: repoRoot, encoding: "utf8" },
    );

    assert.equal(
      result.status,
      0,
      `build failed:\n${result.stdout}\n${result.stderr}`,
    );
    assert.equal(fs.existsSync(path.join(outputDir, "index.html")), true);
    assert.equal(fs.existsSync(path.join(outputDir, ".nojekyll")), true);
    assert.equal(
      fs.existsSync(path.join(outputDir, "assets/css/portfolio-refresh.css")),
      true,
    );
    assert.equal(
      fs.existsSync(path.join(outputDir, "assets/js/i18n.js")),
      true,
    );
    assert.equal(fs.existsSync(path.join(outputDir, "projects.json")), true);
    assert.equal(
      fs.existsSync(
        path.join(outputDir, "portfolio-home-about-refactor-2026-09-27"),
      ),
      false,
      "the source folder must not be nested inside the Pages artifact",
    );

    const homeHtml = fs.readFileSync(path.join(outputDir, "index.html"), "utf8");
    const robots = fs.readFileSync(path.join(outputDir, "robots.txt"), "utf8");
    const sitemap = fs.readFileSync(path.join(outputDir, "sitemap.xml"), "utf8");

    assert.match(
      homeHtml,
      /<link rel="canonical" href="https:\/\/rodin-danluo\.github\.io\/" \/>/,
    );
    assert.match(
      robots,
      /Sitemap: https:\/\/rodin-danluo\.github\.io\/sitemap\.xml/,
    );
    assert.doesNotMatch(homeHtml, /luodan-Rodin-portfolio/);
    assert.doesNotMatch(sitemap, /luodan-Rodin-portfolio/);
  } finally {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
});
