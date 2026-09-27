# Rodin Portfolio 3D Reframe Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将现有静态个人作品集重构为“产品经理 × UX 设计师”的双方向个人网站，并加入一个性能可控、可降级的 Three.js Product Studio 招牌场景。

**Architecture:** 保持 GitHub Pages 静态架构。`index.html` 继续承载语义内容，新的外部 CSS 负责首页视觉覆盖，新的 ES Module 负责 Three.js 场景；`projects.json` 继续作为项目数据源，同时在 HTML 中提供无 JavaScript 的精选项目降级内容。轮盘仅作为 Lab 独立链接存在。

**Tech Stack:** HTML5、CSS、原生 JavaScript、Three.js ES Module、Node.js Test Runner、Playwright

**Spec:** `docs/superpowers/specs/2026-09-23-portfolio-3d-reframe-design.md`

## Global Constraints

- 只在 `/Users/rodin_files/rodin/rodin-html-20260923-codex` 中修改。
- 保留现有未提交的 `index.html`、`projects.json` 和 `tests/` 修改，不回退用户改动。
- 保持静态 GitHub Pages，不引入 React、Vue、打包器或运行时后端。
- 首页项目保持四项：研狐 AI Agent、小匠行、XML 发票助手、e家护。
- 首页不得重新嵌入 `project-wheel.html`；轮盘仅作为 Lab 独立入口。
- 3D Canvas 不承载唯一可读文字或唯一导航入口。
- 使用本地固定版本 Three.js，不依赖运行时 CDN。
- 尊重 `prefers-reduced-motion`，移动端降低场景复杂度。
- 本轮不创建 Git 提交；Git 提交必须由 `git_commit_luna` 处理，当前执行环境无可用并发槽位。

---

## File Structure

- `index.html`：页面语义结构、Hero 文案、四个项目降级内容、About、Lab、Contact 和脚本入口。
- `projects.json`：四个精选案例的数据源；保留现有内容，仅在验证发现字段问题时修正。
- `assets/css/portfolio-refresh.css`：新配色、Hero、3D 舞台、项目卡片、About、Lab、Contact 与响应式覆盖。
- `assets/js/rodin-studio.js`：Three.js 场景创建、生命周期、视差、滚动状态、降级和销毁。
- `assets/vendor/three.module.min.js`、`assets/vendor/three.core.min.js`：本地固定版本 Three.js ES Module 及其核心依赖。
- `tests/portfolio.test.cjs`：内容结构、响应式、无 JavaScript 降级、轮盘入口和 3D 状态的浏览器测试。

---

### Task 1: Lock the semantic homepage contract

**Files:**
- Modify: `tests/portfolio.test.cjs`
- Modify: `index.html`

**Interfaces:**
- Produces: `#rodinStudioStage`, `#rodinStudioCanvas`, `.hero-role`, `.hero-cta`, `.noscript-work-grid`, `[data-lab-project-wheel]`。
- Produces: `body[data-studio-state]`，初始值为 `loading`。
- Removes from homepage: `#fieldCanvas`、`.loader`、`.sticky-wall-container`、`#project-wheel-frame`。

- [ ] **Step 1: Write failing homepage structure tests**

在 `tests/portfolio.test.cjs` 中添加：

```js
test("homepage identifies Rodin as Product Manager and UX Designer", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  await assert.doesNotReject(() =>
    page.getByText("PRODUCT MANAGER × UX DESIGNER", { exact: true }).waitFor(),
  );
  assert.equal(await page.locator("#rodinStudioStage").count(), 1);
  assert.equal(await page.locator("#rodinStudioCanvas").count(), 1);
  assert.equal(await page.locator(".hero-cta").count(), 2);
  assert.equal(await page.locator("#fieldCanvas").count(), 0);
  assert.equal(await page.locator(".loader").count(), 0);
  assert.equal(await page.locator(".sticky-wall-container").count(), 0);
  assert.equal(await page.locator("[data-lab-project-wheel]").count(), 1);
  assert.equal(await page.locator("#project-wheel-frame").count(), 0);

  await page.close();
});
```

再添加无 JavaScript 测试：

```js
test("core portfolio content remains readable without JavaScript", async () => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });

  await assert.doesNotReject(() => page.locator("h1").waitFor());
  assert.equal(await page.locator(".noscript-work-grid article").count(), 4);
  await assert.doesNotReject(() => page.getByText("rodin260599@qq.com", { exact: false }).waitFor());

  await context.close();
});
```

- [ ] **Step 2: Run the focused tests and confirm failure**

Run:

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:4173 node --test tests/portfolio.test.cjs
```

Expected: FAIL because the new hero role, 3D stage, CTA, Lab archive link and no-JavaScript case list do not exist yet.

- [ ] **Step 3: Replace the homepage shell with semantic content**

在 `index.html` 中：

- 删除假加载器、旧 `fieldCanvas` 和全局粒子初始化。
- 将 Hero 改为左侧 HTML 文案、右侧 `#rodinStudioStage`。
- 使用 `PRODUCT MANAGER × UX DESIGNER` 作为身份标签。
- 主标题使用 `I FIND THE SIGNAL. I SHAPE THE EXPERIENCE.`，中文说明负责解释产品与 UX 的统一方法。
- 添加 `查看精选项目` 与 `下载简历` 两个 `.hero-cta`。
- 在 `#workGrid` 后添加 `<noscript>` 四项目降级列表。
- 将 Lab 第四项改为链接 `./project-wheel.html` 的 `3D Project Archive`。
- 删除虚假访客留言墙，Contact 只保留真实联系信息和合作邀请。
- 给 `<body>` 添加 `data-studio-state="loading"`。

- [ ] **Step 4: Run the focused tests and confirm the semantic contract passes**

Run the same Node test command.

Expected: 新增结构测试与原有四项目测试通过；3D 状态测试尚未加入。

- [ ] **Step 5: Checkpoint without committing**

Run `git diff --check` and record the changed files. Do not commit; preserve the user-owned dirty worktree and defer Git work to `git_commit_luna`.

---

### Task 2: Build the visual system and responsive layout

**Files:**
- Create: `assets/css/portfolio-refresh.css`
- Modify: `index.html`
- Modify: `tests/portfolio.test.cjs`

**Interfaces:**
- Consumes: `#rodinStudioStage`, `.hero-copy`, `.hero-cta`, `.work-grid`, `.lab-panel-grid` from Task 1.
- Produces CSS variables: `--studio-paper`, `--blueprint`, `--model-clay`, `--signal-mint`, `--graphite`.
- Produces responsive Hero layouts: two-column at widths above `900px`, one-column below `900px`.

- [ ] **Step 1: Write failing computed-style tests**

Add a Playwright test that checks:

```js
test("refresh palette and responsive hero are applied", async () => {
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await desktop.goto(baseUrl, { waitUntil: "networkidle" });

  const palette = await desktop.locator("body").evaluate((element) => ({
    paper: getComputedStyle(element).getPropertyValue("--studio-paper").trim(),
    blueprint: getComputedStyle(element).getPropertyValue("--blueprint").trim(),
  }));
  assert.deepEqual(palette, { paper: "#f2f0ea", blueprint: "#2f5bff" });

  const desktopColumns = await desktop.locator("#top").evaluate((element) =>
    getComputedStyle(element).gridTemplateColumns.split(" ").filter(Boolean).length,
  );
  assert.equal(desktopColumns, 2);
  await desktop.close();

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto(baseUrl, { waitUntil: "networkidle" });
  const mobileColumns = await mobile.locator("#top").evaluate((element) =>
    getComputedStyle(element).gridTemplateColumns.split(" ").filter(Boolean).length,
  );
  assert.equal(mobileColumns, 1);
  await mobile.close();
});
```

- [ ] **Step 2: Run the style test and confirm failure**

Expected: FAIL because the new variables and external stylesheet are absent.

- [ ] **Step 3: Create the focused override stylesheet**

Create `assets/css/portfolio-refresh.css` with:

- the five exact palette tokens from the spec;
- a fixed but transparent site navigation that becomes a compact paper bar after Hero;
- a two-column Hero with stable `min-height: 100svh` and a right-side scene stage;
- readable typography using existing local fonts;
- two-column case grid and single-column mobile grid;
- quieter About, Lab and Contact sections using borders and spacing instead of glass cards;
- visible `:focus-visible` styles;
- `@media (prefers-reduced-motion: reduce)` rules that remove CSS loops and transitions;
- mobile rules that place the 3D scene below the primary copy and keep both CTA buttons visible.

Link it after the existing inline `<style>` so its scoped selectors intentionally override legacy visual rules without unrelated stylesheet refactoring.

- [ ] **Step 4: Run tests and capture visual baselines**

Run the suite, then capture:

```text
/tmp/rodin-portfolio-desktop.png at 1440×1000
/tmp/rodin-portfolio-mobile.png at 390×844
```

Expected: style tests pass; no horizontal overflow; Hero copy and CTA remain unobscured.

- [ ] **Step 5: Checkpoint without committing**

Run `git diff --check`. Do not commit.

---

### Task 3: Add the local Three.js Product Studio

**Files:**
- Create: `assets/vendor/three.module.min.js`
- Create: `assets/vendor/three.core.min.js`
- Create: `assets/js/rodin-studio.js`
- Modify: `index.html`
- Modify: `tests/portfolio.test.cjs`

**Interfaces:**
- Consumes: `#rodinStudioCanvas`, `#rodinStudioStage`, `body[data-studio-state]`.
- Produces: body state values `loading`, `ready`, `fallback`, `paused`.
- Produces: `window.__rodinStudio.destroy()` for lifecycle cleanup in tests.
- Emits: `rodin-studio-ready` on `window` after the first successful render.

- [ ] **Step 1: Write failing 3D lifecycle tests**

Add:

```js
test("Three.js studio reaches a usable state without remote runtime dependencies", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const remoteScripts = [];
  page.on("request", (request) => {
    if (request.resourceType() === "script" && !request.url().startsWith(baseUrl)) {
      remoteScripts.push(request.url());
    }
  });

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForFunction(() => ["ready", "fallback"].includes(document.body.dataset.studioState));

  assert.deepEqual(remoteScripts, []);
  assert.equal(await page.locator("#rodinStudioCanvas").getAttribute("aria-hidden"), "true");
  assert.equal(await page.evaluate(() => typeof window.__rodinStudio?.destroy), "function");
  await page.close();
});
```

Add a reduced-motion test that emulates reduced motion and asserts a stable `ready` or `fallback` state without requiring continuous animation.

- [ ] **Step 2: Run the 3D tests and confirm failure**

Expected: FAIL because the module, lifecycle object and local Three.js file do not exist.

- [ ] **Step 3: Vendor a pinned Three.js module**

Use the official `three@0.181.2` npm package and copy `build/three.module.min.js` and its imported sibling `build/three.core.min.js` into `assets/vendor/`. Preserve the package license notice in `assets/vendor/THREE-LICENSE.txt`.

- [ ] **Step 4: Implement `rodin-studio.js`**

The module must:

```js
import * as THREE from "../vendor/three.module.min.js";

const canvas = document.querySelector("#rodinStudioCanvas");
const stage = document.querySelector("#rodinStudioStage");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
```

Then implement these focused functions:

```js
function supportsWebGL(canvas) // returns boolean
function createMaterials() // returns paper, blueprint, clay, mint, graphite materials
function createWorkbench() // returns THREE.Group with desk, phone, cards and project glyphs
function resizeRenderer() // caps pixel ratio at 1.75 desktop and 1.25 mobile
function updateScene(time) // subtle float, pointer parallax and scroll organization
function setStudioState(state) // writes body.dataset.studioState
function destroy() // cancels RAF, removes listeners and disposes geometry/materials
```

Scene contents:

- a matte paper work surface;
- a cobalt phone prototype;
- clay magnifying lens with signal dots;
- four cards for AI Agent, XML, map/location and care connection;
- one transparent acrylic flow line connecting research to prototype;
- no text required to understand the page and no clickable objects inside Canvas.

Use `IntersectionObserver` and `document.visibilitychange` to pause rendering. Reduced-motion mode renders one stable frame and only re-renders after resize.

- [ ] **Step 5: Load the module and run 3D tests**

Add `<script type="module" src="./assets/js/rodin-studio.js"></script>` near the end of `index.html`.

Run the test suite. Expected: 3D state reaches `ready` in WebGL-capable Playwright or `fallback` if WebGL is unavailable; no remote script requests.

- [ ] **Step 6: Visual QA of the live scene**

Capture desktop, mobile and reduced-motion screenshots. Confirm the scene does not cover the H1 or CTA, does not shift layout after loading, and remains recognizable at mobile width.

- [ ] **Step 7: Checkpoint without committing**

Run `git diff --check`. Do not commit.

---

### Task 4: Polish interactions, fallback behavior and content integrity

**Files:**
- Modify: `index.html`
- Modify: `assets/css/portfolio-refresh.css`
- Modify: `assets/js/rodin-studio.js`
- Modify: `tests/portfolio.test.cjs`

**Interfaces:**
- Consumes: all Task 1–3 selectors and state values.
- Produces: active navigation via `.is-active`; project load error via `.work-load-error`; visible static scene fallback via `.studio-fallback`.

- [ ] **Step 1: Write failing interaction and fallback tests**

Add tests for:

- clicking `查看精选项目` scrolls `#selected-work` into the viewport;
- the Lab archive link resolves to `/project-wheel.html`;
- all four project links have non-empty `href` values;
- intercepting `projects.json` with HTTP 500 displays `.work-load-error` with a refresh instruction;
- forcing WebGL context failure leaves `.studio-fallback` visible and core content usable;
- no console errors on desktop or mobile.

- [ ] **Step 2: Run tests and confirm the new assertions fail**

Expected: at least the explicit error class, fallback state and active navigation tests fail.

- [ ] **Step 3: Implement minimal interaction fixes**

- Replace generic project failure text with `<p class="work-load-error">项目暂时无法加载，请刷新页面重试。</p>`.
- Add an `IntersectionObserver` for Work, About, Lab and Contact that toggles `.is-active` on navigation controls.
- Ensure the 3D module catches initialization errors and calls `setStudioState("fallback")`.
- Ensure `.studio-fallback` remains visible until `ready` and is restored for `fallback`.
- Remove obsolete sticky-note and old 2D particle functions from `index.html`.
- Remove duplicate animation-frame scheduling in the scramble effect.

- [ ] **Step 4: Run all tests**

Run:

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:4173 node --test tests/portfolio.test.cjs
```

Expected: PASS with no retries.

- [ ] **Step 5: Checkpoint without committing**

Run `git diff --check`. Do not commit.

---

### Task 5: Final browser verification and handoff

**Files:**
- Verify: all modified and created files
- Update only if verification exposes a defect: `index.html`, `assets/css/portfolio-refresh.css`, `assets/js/rodin-studio.js`, `tests/portfolio.test.cjs`

**Interfaces:**
- Consumes: completed homepage and test suite.
- Produces: verified desktop, mobile, reduced-motion and no-JavaScript behavior.

- [ ] **Step 1: Start the static server**

Run from the repository root:

```bash
python3 -m http.server 4173
```

- [ ] **Step 2: Run automated verification**

Run the full Node/Playwright suite and `git diff --check`.

- [ ] **Step 3: Inspect desktop and mobile screenshots**

Verify at 1440×1000 and 390×844:

- H1 and CTA are visible without scrolling.
- 3D scene has no clipping or text overlap.
- work cards render 2 columns desktop and 1 column mobile.
- About and Contact text remains readable.
- Lab contains a clear but secondary 3D Archive entry.
- no horizontal overflow.

- [ ] **Step 4: Inspect accessibility and degradation**

- keyboard-tab through navigation, CTA, project cards, Lab links and contact links;
- emulate reduced motion;
- load with JavaScript disabled;
- verify missing WebGL falls back without hiding content.

- [ ] **Step 5: Report scope and remaining risks**

Report exact files changed, test command and result, screenshots inspected, whether the resume file exists, and any remaining content/data inconsistency. Do not claim deployment or Git commit.
