# Fan Cover Flow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the selected-project cylindrical orbit with a continuous fan-shaped cover flow controlled by side-card and numbered-pagination clicks.

**Architecture:** Keep all eight project cards mounted in the existing orbit ring. JavaScript derives each card's nearest virtual offset from an unbounded cursor and writes presentation variables; CSS maps those variables into the fan arc, depth, scale, brightness, opacity, and transition. Existing metadata and responsive grid fallback remain intact.

**Tech Stack:** Static HTML, CSS custom properties and 3D transforms, vanilla JavaScript, Node test runner, Playwright.

**Spec:** User-confirmed design in this Codex task and `/var/folders/6d/n1dr6v7j7vl0n7rr7_wnmzmw0000gn/T/codex-clipboard-5e89f8d3-d2ba-4a76-98bd-c9933b5fbf5f.png`.

## Global Constraints

- Preserve the existing warm grid, project content, metadata card, and desktop/mobile view defaults.
- Do not add drag, wheel, arrow-key, autoplay, or arrow-button navigation.
- Center card is largest, brightest, front-facing; distance produces monotonic rotation, scale, brightness, and depth.
- Clicking a visible side card or a numbered pagination item selects that project.
- Visible cards move through adjacent slots continuously; cyclic repositioning occurs only at the dim far edge.
- Respect `prefers-reduced-motion` and preserve keyboard accessibility.

---

### Task 1: Cover-flow behavior contract

**Files:**
- Modify: `tests/portfolio.test.cjs`
- Modify: `index.html`

**Interfaces:**
- Consumes: existing `[data-orbit-item]`, project metadata, and view toggles.
- Produces: `data-flow-offset`, `data-orbit-page`, active-card state, clickable side cards, numbered pagination.

- [x] **Step 1: Write the failing browser test**

Assert that the center card has offset `0`, adjacent cards have offsets `-1` and `1`, arrow buttons are absent, numbered pagination contains eight buttons, side-card click selects that card, and drag/wheel do not change selection.

- [x] **Step 2: Run the focused test and verify RED**

Run `NODE_PATH=/Users/rodin_files/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules /Users/rodin_files/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test --test-name-pattern="fan cover flow" tests/portfolio.test.cjs` and expect failure because the old arrow controls and ring geometry remain.

- [x] **Step 3: Implement the minimal DOM and state changes**

Replace arrows with a pagination container. Maintain an unbounded `orbitCursor`, choose each card's nearest virtual copy, assign signed offsets and per-slot visual custom properties, and bind card/pagination clicks without gesture listeners.

- [x] **Step 4: Run the focused test and verify GREEN**

Run the same command and expect the fan-cover-flow test to pass.

### Task 2: Fan composition and responsive polish

**Files:**
- Modify: `assets/css/portfolio-refresh.css`
- Modify: `tests/portfolio.test.cjs`

**Interfaces:**
- Consumes: inline flow variables from Task 1.
- Produces: center-forward fan composition with readable pagination, focus states, and reduced-motion behavior.

- [x] **Step 1: Extend the failing browser test**

Assert the center card is larger and brighter than adjacent cards, adjacent transforms occupy opposite sides, pagination has an accessible current item, and mobile keeps the grid default with `touch-action: auto`.

- [x] **Step 2: Run the focused test and verify RED**

Run the focused command and expect the old cylindrical CSS to violate the fan hierarchy assertions.

- [x] **Step 3: Implement the fan visual system**

Convert the ring into a full-size flat 3D stage; transform cards from flow variables using translate/rotate/scale, apply progressive filter/opacity/shadow, update the horizon into an understated fan guide, style pagination, and tune tablet/mobile dimensions.

- [x] **Step 4: Run the focused test and full suite**

Run the focused command, then run `NODE_PATH=/Users/rodin_files/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules /Users/rodin_files/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/portfolio.test.cjs`; expect zero failures.

### Task 3: Visual verification

**Files:**
- Verify: `index.html`
- Verify: `assets/css/portfolio-refresh.css`

**Interfaces:**
- Consumes: completed cover-flow component.
- Produces: desktop and mobile evidence screenshots with no runtime errors or horizontal overflow.

- [x] **Step 1: Capture desktop and mobile screenshots**

Open the local page at 1440×1000 and 390×844, select Orbit on mobile when inspecting the component, and capture the project section.

- [x] **Step 2: Inspect screenshots and browser console**

Confirm fan centering, clear depth hierarchy, usable click targets, metadata/pagination balance, no clipping of the active card, and no runtime errors.

- [x] **Step 3: Run final verification**

Re-run the full portfolio test suite after any visual corrections and inspect `git diff --check` plus the scoped diff.
