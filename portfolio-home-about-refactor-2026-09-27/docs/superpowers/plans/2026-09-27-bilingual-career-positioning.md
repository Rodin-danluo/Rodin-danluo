# Bilingual Career Positioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete Chinese/English homepage switch and refocus the Hero, About, projects, Lab, Contact, metadata, and resume entry around an AI Product Manager internship narrative.

**Architecture:** Keep the existing static HTML/CSS/vanilla-JavaScript stack and one DOM. Add a zero-dependency `window.RodinI18n` controller backed by a trusted translation dictionary, then let existing renderers request localized project data and react to a `rodin:languagechange` event without losing UI state.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, localStorage, Node test runner, Playwright.

**Spec:** `docs/superpowers/specs/2026-09-27-bilingual-career-positioning-design.md`

## Global Constraints

- Work only in `/Users/rodin_files/Desktop/rodin-portfolio-bilingual-20260927` after the copy is created.
- Preserve the current warm poster visual system, 1672×941 Hero stage, cover flow, project links, sticky wall, and mobile defaults.
- Use `AI Product Manager` as the sole primary label; Growth Operations and UX are supporting strengths.
- Do not publish unverified XML usage counts, independent PRD ownership, or end-to-end ownership of the research-assistant product.
- Keep Chinese static HTML readable without JavaScript.
- No framework, package, or build-step migration.
- No Git commit was requested; checkpoints use tests, screenshots, and a scoped diff.

---

### Task 1: Language controller and persistence

**Files:**
- Create: `assets/js/i18n.js`
- Modify: `index.html`
- Modify: `tests/portfolio.test.cjs`

**Interfaces:**
- Produces: `window.RodinI18n.current`, `t(key)`, `setLanguage(language, options)`, `init()`, and `localizeProject(work)`.
- Emits: `window` event `rodin:languagechange` with `{ language }`.
- Persists: `localStorage["rodin-language"]` with `zh` or `en`.

- [x] **Step 1: Write failing browser tests**

Add tests that open fresh contexts with `locale: "zh-CN"` and `locale: "en-US"`, assert `<html lang>` defaults to `zh-CN` or `en`, click `[data-language="en"]` / `[data-language="zh"]`, reload, and assert the chosen language persists. Assert both buttons expose the correct `aria-pressed` state.

- [x] **Step 2: Verify RED**

Run:

```bash
NODE_PATH=/Users/rodin_files/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules /Users/rodin_files/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test --test-reporter=spec --test-name-pattern="language" tests/portfolio.test.cjs
```

Expected: failure because the language controls and `RodinI18n` API do not exist.

- [x] **Step 3: Implement the controller**

Create a guarded IIFE that:

```js
window.RodinI18n = (() => {
  const STORAGE_KEY = "rodin-language";
  const dictionaries = { zh: {}, en: {} };
  const normalize = (value) => value === "en" ? "en" : "zh";
  const detect = () => localStorage.getItem(STORAGE_KEY)
    || (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
  // t, applyDocument, setLanguage, init, localizeProject
  return { get current() {}, t, setLanguage, init, localizeProject };
})();
```

`applyDocument` updates `[data-i18n]`, `[data-i18n-html]`, `[data-i18n-aria-label]`, metadata, JSON-LD, `<html lang>`, and language-button state. Missing keys fall back to Chinese and never blank existing content.

Load `assets/js/i18n.js` synchronously immediately before the existing main inline script and call `RodinI18n.init()` after the relevant DOM exists.

- [x] **Step 4: Verify GREEN**

Run the focused language command and expect all language-controller tests to pass.

### Task 2: Hero and metadata career positioning

**Files:**
- Modify: `index.html`
- Modify: `assets/js/i18n.js`
- Modify: `assets/css/portfolio-refresh.css`
- Modify: `tests/portfolio.test.cjs`

**Interfaces:**
- Consumes: `data-i18n`, `data-i18n-html`, and language-button state from Task 1.
- Produces: localized navigation, Hero career message, availability status, document metadata, Open Graph data, and JSON-LD.

- [x] **Step 1: Write failing content tests**

Assert Chinese mode contains `AI 产品经理`, `2026.10.01`, and the Chinese positioning statement; English mode contains `AI PRODUCT MANAGER`, `Available Oct 1, 2026`, and the English positioning statement. Assert title, meta description, Open Graph title/description, and JSON-LD job title change with the selected language.

- [x] **Step 2: Verify RED**

Run the focused language tests and expect the old `Product Manager × UX Designer` copy to fail.

- [x] **Step 3: Implement Hero and navigation content**

Add the compact `中 / EN` control after Contact. Replace the Hero left statement, right career module, tags, footer metadata, navigation labels, and accessibility labels with the exact copy in spec sections 4 and 5. Keep the artwork and `RODIN'S PORTFOLIO` title unchanged.

Add only the CSS required for the language group, active state, focus state, and narrow-screen spacing. Use existing tokens and orange accent.

- [x] **Step 4: Verify GREEN**

Run the focused tests and confirm both languages expose the correct career positioning and metadata.

### Task 3: About narrative and evidence hierarchy

**Files:**
- Modify: `index.html`
- Modify: `assets/js/i18n.js`
- Modify: `assets/css/portfolio-refresh.css`
- Modify: `tests/portfolio.test.cjs`

**Interfaces:**
- Consumes: language controller and approved evidence boundaries.
- Produces: localized biography, recruiter facts, three-step working model, three evidence stories, concise experience/education timeline.

- [x] **Step 1: Write failing About tests**

Assert About renders exactly four recruiter facts (`2027`, `OCT 01`, `6 DAYS`, `3–6 MO`), three working-model steps, and evidence entries for XML, QuickWis, and the research assistant. Assert XML contains the link-to-file workflow finding and `2025`, while the research assistant contains user testing but not `product owner` or `端到端负责人`.

- [x] **Step 2: Verify RED**

Run the focused About tests and expect failure against the existing honors strip, generic metrics, and capability cards.

- [x] **Step 3: Replace the About structure**

Reuse the existing portrait and section frame. Replace inline-styled honors content, metric cards, generic capability cards, and timeline copy with semantic classes:

```html
<div class="career-facts">...</div>
<section class="work-model">...</section>
<section class="evidence-stories">...</section>
<section class="experience-section">...</section>
```

Use the exact Chinese and English copy from spec section 6. Keep XML claims qualitative until analytics arrive. Style the section as a recruiter-oriented editorial flow rather than equal floating cards.

- [x] **Step 4: Verify GREEN**

Run focused About and language tests; expect zero failures.

### Task 4: Projects, Lab, Contact, and language-specific resume

**Files:**
- Modify: `index.html`
- Modify: `assets/js/i18n.js`
- Copy: `/Users/rodin_files/Desktop/罗丹Rodin-Codex.pdf` to `assets/Rodin-Resume-EN.pdf`
- Modify: `tests/portfolio.test.cjs`

**Interfaces:**
- Consumes: `RodinI18n.localizeProject(work)` and current language.
- Produces: localized project renderer, section controls, Lab copy, Contact copy, and per-language resume URL.

- [x] **Step 1: Write failing integration tests**

Select Orbit, activate a non-zero project, switch to English, and assert the view and active project remain unchanged while title/summary/controls translate. Assert Contact status changes and the resume URL is `./assets/Rodin-Resume-EN.pdf` in English and `./assets/rodin-resume.pdf` in Chinese.

- [x] **Step 2: Verify RED**

Run the focused tests and expect project summaries and resume URL to remain Chinese.

- [x] **Step 3: Localize dynamic content and resume**

Add approved English fields for all eight projects to the trusted dictionary. Make `renderWorks`, `setOrbitActive`, and Lab/Contact content use the current locale. Listen for `rodin:languagechange`, store the active project ID and view, rerender, then restore both.

Copy the provided English resume as a deployable project asset and switch `download` filename and ARIA label with language.

- [x] **Step 4: Verify GREEN**

Run focused integration tests and confirm the UI state survives language switching.

### Task 5: Responsive visual verification and regression

**Files:**
- Modify if required: `assets/css/portfolio-refresh.css`
- Modify if required: `tests/portfolio.test.cjs`

**Interfaces:**
- Consumes: completed bilingual homepage.
- Produces: verified desktop/mobile layouts with no overflow and no runtime errors.

- [x] **Step 1: Run scoped automated regression**

Run language, About, Project Orbit, hero shortcut, mobile grid, and no-JavaScript tests together. Fix only failures introduced by this feature.

- [x] **Step 2: Capture four screenshots**

Capture the Hero and About at 1440×1000 and 390×844 in Chinese and English. Inspect line wrapping, language-control visibility, portrait balance, recruiter-fact rhythm, and Contact/resume readability.

- [x] **Step 3: Verify runtime and source quality**

Check browser `pageerror` events, horizontal overflow, missing raw translation keys, `git diff --check`, and scoped changes. Re-run the feature regression after any correction.

- [x] **Step 4: Record deferred evidence**

Confirm the XML copy contains no invented traffic totals and the spec still lists Baidu Analytics and user-feedback screenshots as deferred evidence.

## Verification Record

- Full regression passed: 28 tests, 28 passed, 0 failed.
- Desktop and mobile visual QA found no horizontal overflow or runtime errors.
- Both Chinese and English resume assets return HTTP 200; no unresolved translation keys remain.
- XML evidence stays qualitative. Baidu Analytics totals and user-feedback screenshots remain deferred until supplied by Rodin.
