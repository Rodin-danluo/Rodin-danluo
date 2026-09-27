const { test, before, after } = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");

const baseUrl = process.env.PORTFOLIO_BASE_URL || "http://127.0.0.1:4173";
const localFileUrl = pathToFileURL(path.join(__dirname, "..", "index.html")).href;
let browser;

before(async () => {
  browser = await chromium.launch({ headless: true });
});

after(async () => {
  await browser?.close();
});

test("homepage presents the complete archive with switchable Orbit and grid views", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, locale: "zh-CN" });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForSelector("#workGrid .work-card:nth-child(8)", { state: "attached" });

  assert.equal(await page.locator("#workGrid .work-card").count(), 8);
  assert.equal(await page.locator("#lab .lab-card").count(), 4);
  assert.equal(await page.locator(".hero-status-chips").count(), 1);
  assert.equal(await page.locator(".work-view-toggle").count(), 1);
  assert.equal(await page.locator(".work-view-toggle [data-work-view]").count(), 2);
  assert.equal(await page.locator("#project-wheel-frame").count(), 0);
  assert.equal(await page.locator("#projectOrbit").count(), 1);
  assert.deepEqual(
    await page.locator("#workGrid .work-title").allTextContents(),
    [
      "研狐小秘书｜面向高校科研场景的 AI Agent 智能助手",
      "e家护｜面向异地家庭的数字照护服务设计",
      "XML发票查看器｜面向办公场景的智能票据处理工具",
      "StyleSwap｜基于生成式 AI 的视觉风格转换工具探索",
      "UPNOW｜运动健康管理体验设计",
      "小匠行｜城市微文旅智能探索 App",
      "今日去哪儿｜城市即时出行与社交体验设计",
      "临场应变｜即时互动体验实验",
    ],
  );
  await assert.doesNotReject(() => page.getByText("SELECTED CASE STUDIES / 深度案例", { exact: true }).waitFor({ timeout: 1000 }));

  assert.equal(await page.locator("#selected-work").getAttribute("data-work-view"), "orbit");
  assert.equal(await page.locator("#projectOrbit").isVisible(), true);
  assert.equal(await page.locator("#workGrid").isVisible(), false);
  await page.locator('[data-work-view="grid"]').click();
  assert.equal(await page.locator("#selected-work").getAttribute("data-work-view"), "grid");
  assert.equal(await page.locator("#projectOrbit").isVisible(), false);
  assert.equal(await page.locator("#workGrid").isVisible(), true);

  const desktopColumns = await page.locator("#workGrid").evaluate((element) =>
    getComputedStyle(element).gridTemplateColumns.split(" ").filter(Boolean).length,
  );
  assert.equal(desktopColumns, 12);
  const desktopCardRatio = await page.locator("#workGrid").evaluate((grid) =>
    grid.querySelector(".work-card").getBoundingClientRect().width / grid.getBoundingClientRect().width,
  );
  assert.ok(desktopCardRatio > 0.23 && desktopCardRatio < 0.25);

  await page.close();
});

test("featured cases collapse to one column on mobile", async () => {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForSelector("#workGrid .work-card:nth-child(8)");

  assert.equal(await page.locator("#selected-work").getAttribute("data-work-view"), "grid");
  assert.equal(await page.locator("#workGrid").isVisible(), true);
  assert.equal(await page.locator("#projectOrbit").isVisible(), false);

  const mobileColumns = await page.locator("#workGrid").evaluate((element) =>
    getComputedStyle(element).gridTemplateColumns.split(" ").filter(Boolean).length,
  );
  assert.equal(mobileColumns, 12);
  const mobileCardRatio = await page.locator("#workGrid").evaluate((grid) =>
    grid.querySelector(".work-card").getBoundingClientRect().width / grid.getBoundingClientRect().width,
  );
  assert.ok(mobileCardRatio > 0.99);

  await page.close();
});

test("grid view restores the original compact project archive", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.locator('[data-work-view="grid"]').click();
  await page.waitForSelector("#workGrid .work-card:first-child");

  const styles = await page.locator("#workGrid .work-card:first-child").evaluate((card) => {
    const group = card.querySelector(".group");
    const visual = card.querySelector(".work-visual");
    const tag = card.querySelector(".work-tag");
    return {
      cardPadding: getComputedStyle(card).paddingTop,
      cardBackground: getComputedStyle(card).backgroundColor,
      cardTransformStyle: getComputedStyle(card).transformStyle,
      cardTransitionDuration: getComputedStyle(card).transitionDuration,
      groupPadding: getComputedStyle(group).paddingTop,
      visualRadius: getComputedStyle(visual).borderRadius,
      visualRatio: visual.getBoundingClientRect().width / visual.getBoundingClientRect().height,
      tagRight: getComputedStyle(tag).right,
      tagWidth: tag.getBoundingClientRect().width,
      visualWidth: visual.getBoundingClientRect().width,
    };
  });

  assert.deepEqual({
    cardPadding: styles.cardPadding,
    cardBackground: styles.cardBackground,
    cardTransformStyle: styles.cardTransformStyle,
    cardTransitionDuration: styles.cardTransitionDuration,
    groupPadding: styles.groupPadding,
    visualRadius: styles.visualRadius,
    tagRight: styles.tagRight,
  }, {
    cardPadding: "0px",
    cardBackground: "rgba(0, 0, 0, 0)",
    cardTransformStyle: "preserve-3d",
    cardTransitionDuration: "0.4s, 0.25s",
    groupPadding: "0px",
    visualRadius: "6px",
    tagRight: "0px",
  });
  assert.ok(Math.abs(styles.visualRatio - 4 / 3) < 0.02);
  assert.ok(styles.tagWidth < styles.visualWidth / 2);
  assert.equal(await page.locator("#workGrid .work-card:first-child .work-summary").count(), 1);

  const firstCard = page.locator("#workGrid .work-card:first-child");
  const cardBox = await firstCard.boundingBox();
  assert.ok(cardBox);
  await page.mouse.move(cardBox.x + cardBox.width * 0.8, cardBox.y + cardBox.height * 0.2);
  assert.match(await firstCard.getAttribute("style"), /perspective\(1000px\).*rotateX\(.*deg\).*rotateY\(.*deg\).*scale3d\(1\.02/);
  await page.mouse.move(1, 1);
  assert.match(await firstCard.getAttribute("style"), /rotateX\(0deg\).*rotateY\(0deg\).*scale3d\(1, 1, 1\)/);
  await page.close();
});

test("grid view keeps the original asymmetric tablet spans", async () => {
  const page = await browser.newPage({ viewport: { width: 800, height: 900 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.locator('[data-work-view="grid"]').click();
  await page.waitForSelector("#workGrid .work-card:nth-child(8)");

  const widths = await page.locator("#workGrid").evaluate((grid) => ({
    grid: grid.getBoundingClientRect().width,
    first: grid.querySelector(".work-card:nth-child(1)").getBoundingClientRect().width,
    second: grid.querySelector(".work-card:nth-child(2)").getBoundingClientRect().width,
    sixth: grid.querySelector(".work-card:nth-child(6)").getBoundingClientRect().width,
  }));
  assert.ok(widths.first / widths.grid > 0.99);
  assert.ok(widths.second / widths.grid > 0.48 && widths.second / widths.grid < 0.5);
  assert.ok(widths.sixth / widths.grid > 0.99);
  await page.close();
});

test("homepage uses a coherent product and experience positioning with clear job-search actions", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, locale: "zh-CN" });
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  assert.equal(await page.locator("#heroTitle").textContent(), "RODIN'S PORTFOLIO");
  assert.equal(await page.locator("#top .identity").count(), 0);
  assert.match(await page.locator("[data-career-kicker]").textContent(), /PRODUCT \/ EXPERIENCE/);
  assert.match(await page.locator("#top .intro").textContent(), /产品.*UX.*AI 原型.*增长运营/s);
  assert.equal(await page.locator("[data-hero-cta]").count(), 2);
  assert.equal(await page.locator('[data-hero-cta="work"]').getAttribute("href"), "#selected-work");
  assert.match(await page.locator('[data-hero-cta="resume-en"]').getAttribute("href"), /Rodin-Resume-EN\.pdf$/);
  assert.equal(await page.getByText("AI PRODUCT DESIGNER", { exact: true }).count(), 0);
  assert.equal(await page.locator("#rodinStudioStage").count(), 1);
  assert.equal(await page.locator("#rodinStudioCanvas").count(), 1);
  assert.equal(await page.locator("#fieldCanvas").count(), 1);
  assert.equal(await page.locator(".loader").count(), 0);
  assert.equal(await page.locator(".sticky-wall-container").count(), 1);
  assert.equal(await page.locator("[data-lab-project-wheel]").count(), 1);
  assert.equal(await page.locator("#project-wheel-frame").count(), 0);
  assert.deepEqual(
    await page.locator("[data-studio-project]").evaluateAll((buttons) => buttons.map((button) => button.dataset.studioProject)),
    ["rscfox-ai", "xml-tool", "xiaojianggo", "ejiahu"],
  );
  assert.match(await page.title(), /产品与体验作品集/);
  assert.match(
    await page.locator('meta[name="description"]').getAttribute("content"),
    /需求分析.*AI 原型.*增长运营/,
  );

  await page.close();
});

test("contact ending restores the interactive sticky-note wall", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  const wall = page.locator("#stickyWall");
  const notes = wall.locator(".sticky-note");
  await wall.scrollIntoViewIfNeeded();
  assert.equal(await notes.count(), 3);
  assert.equal(await page.locator("#addNoteBtn").count(), 1);

  page.once("dialog", (dialog) => dialog.accept("新的留言"));
  await page.locator("#addNoteBtn").click();
  assert.equal(await notes.count(), 4);
  assert.match(await notes.last().textContent(), /新的留言/);

  const firstNote = notes.first();
  const before = await firstNote.evaluate((note) => ({ left: note.style.left, top: note.style.top }));
  const box = await firstNote.boundingBox();
  assert.ok(box);
  await page.mouse.move(box.x + 30, box.y + 30);
  await page.mouse.down();
  await page.mouse.move(box.x + 110, box.y + 80, { steps: 5 });
  await page.mouse.up();
  const afterDrag = await firstNote.evaluate((note) => ({ left: note.style.left, top: note.style.top }));
  assert.notDeepEqual(afterDrag, before);

  await page.close();
});

test("core portfolio content remains readable without JavaScript", async () => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });

  await assert.doesNotReject(() => page.locator("h1").waitFor({ timeout: 1000 }));
  assert.equal(await page.locator(".noscript-work-grid article").count(), 8);
  await assert.doesNotReject(() => page.getByText("rodin260599@163.com", { exact: false }).waitFor({ timeout: 1000 }));

  await context.close();
});

test("homepage language follows browser locale and exposes an accessible switch", async () => {
  const zhContext = await browser.newContext({ locale: "zh-CN", viewport: { width: 1440, height: 1000 } });
  const zhPage = await zhContext.newPage();
  await zhPage.goto(baseUrl, { waitUntil: "networkidle" });

  assert.equal(await zhPage.locator("[data-language]").count(), 2);
  assert.equal(await zhPage.locator("html").getAttribute("lang"), "zh-CN");
  assert.equal(await zhPage.locator('[data-language="zh"]').getAttribute("aria-pressed"), "true");
  assert.equal(await zhPage.locator('[data-language="en"]').getAttribute("aria-pressed"), "false");
  await zhContext.close();

  const enContext = await browser.newContext({ locale: "en-US", viewport: { width: 1440, height: 1000 } });
  const enPage = await enContext.newPage();
  await enPage.goto(baseUrl, { waitUntil: "networkidle" });

  assert.equal(await enPage.locator("html").getAttribute("lang"), "en");
  assert.equal(await enPage.locator('[data-language="en"]').getAttribute("aria-pressed"), "true");
  assert.equal(await enPage.locator('[data-language="zh"]').getAttribute("aria-pressed"), "false");
  await enContext.close();
});

test("language choice persists across reloads", async () => {
  const context = await browser.newContext({ locale: "zh-CN", viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  await page.locator('[data-language="en"]').click();
  assert.equal(await page.locator("html").getAttribute("lang"), "en");
  assert.equal(await page.evaluate(() => localStorage.getItem("rodin-language")), "en");

  await page.reload({ waitUntil: "networkidle" });
  assert.equal(await page.locator("html").getAttribute("lang"), "en");
  assert.equal(await page.locator('[data-language="en"]').getAttribute("aria-pressed"), "true");

  await context.close();
});

test("language switch translates the capability positioning and page metadata", async () => {
  const context = await browser.newContext({ locale: "zh-CN", viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  assert.equal(await page.locator("[data-career-kicker]").count(), 1);
  assert.match(await page.locator("[data-career-kicker]").textContent(), /PRODUCT \/ EXPERIENCE/);
  assert.match(await page.locator("[data-career-availability]").textContent(), /OPEN TO OPPORTUNITIES/);
  assert.match(await page.locator("[data-hero-positioning]").textContent(), /真实的用户阻力/);
  assert.match(await page.title(), /产品与体验/);
  assert.match(await page.locator('meta[name="description"]').getAttribute("content"), /产品与体验.*AI 原型/);

  await page.locator('[data-language="en"]').click();

  assert.equal(await page.locator("html").getAttribute("lang"), "en");
  assert.match(await page.locator("[data-career-kicker]").textContent(), /PRODUCT \/ EXPERIENCE/);
  assert.match(await page.locator("[data-career-availability]").textContent(), /OPEN TO OPPORTUNITIES/);
  assert.match(await page.locator("[data-hero-positioning]").textContent(), /real user friction/i);
  assert.match(await page.title(), /Product & Experience/);
  assert.match(await page.locator('meta[property="og:title"]').getAttribute("content"), /Product & Experience/);
  assert.match(await page.locator('meta[property="og:description"]').getAttribute("content"), /user signals/i);

  const structuredData = await page.locator('script[type="application/ld+json"]').textContent();
  assert.equal(JSON.parse(structuredData).jobTitle, "Product & Experience Practitioner");

  await context.close();
});

test("About stays concise with proof metrics, working model, and calibrated experience", async () => {
  const context = await browser.newContext({ locale: "zh-CN", viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto(`${baseUrl}#about`, { waitUntil: "networkidle" });

  assert.equal(await page.locator("[data-recruiter-fact]").count(), 4);
  assert.equal(await page.locator("[data-work-model-step]").count(), 3);
  assert.equal(await page.locator("[data-evidence-story]").count(), 0);
  assert.deepEqual(
    await page.locator("[data-recruiter-fact] strong").allTextContents(),
    ["2027", "1 / 67", "80+", "50+"],
  );
  assert.deepEqual(
    await page.locator("[data-work-model-step] h4").allTextContents(),
    ["SIGNAL / 发现信号", "FRAME / 定义问题", "VALIDATE / 推进验证"],
  );
  assert.match(await page.locator('[data-career-milestone="quickwis"]').innerText(), /2025\.07.*2025\.09.*2026\.08.*至今/s);
  assert.match(await page.locator('[data-career-milestone="scholarship"]').innerText(), /2026\.09.*国家奖学金/s);
  assert.match(await page.locator('[data-career-milestone="team"]').innerText(), /65 人团队/);

  await page.locator('[data-language="en"]').click();
  assert.match(await page.locator("#about").innerText(), /product.*experience/is);
  assert.match(await page.locator('[data-career-milestone="quickwis"]').innerText(), /Jul.*Sep 2025.*Aug 2026.*Present/s);
  assert.match(await page.locator('[data-career-milestone="scholarship"]').innerText(), /National Scholarship/i);

  await context.close();
});

test("About portrait uses a decoded web-optimized asset", async () => {
  const context = await browser.newContext({ locale: "zh-CN", viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto(`${baseUrl}#about`, { waitUntil: "networkidle" });

  const portrait = page.locator("#about .about-portrait-card img");
  const source = await portrait.getAttribute("src");
  assert.match(source, /about-portrait\.webp$/);

  const response = await page.request.get(new URL(source, baseUrl).href);
  assert.equal(response.ok(), true);
  assert.ok((await response.body()).byteLength < 1_500_000, "portrait asset should stay below 1.5 MB");

  const decoded = await portrait.evaluate(async (image) => {
    await image.decode();
    return { complete: image.complete, width: image.naturalWidth, height: image.naturalHeight };
  });
  assert.equal(decoded.complete, true);
  assert.ok(decoded.width >= 1000);
  assert.ok(decoded.height >= 1300);

  await context.close();
});

test("About uses a restrained typography scale and keeps recruiter facts close to the introduction", async () => {
  const context = await browser.newContext({ locale: "zh-CN", viewport: { width: 2048, height: 1152 } });
  const page = await context.newPage();
  await page.goto(`${baseUrl}#about`, { waitUntil: "networkidle" });

  const metrics = await page.locator("#about").evaluate((section) => {
    const title = section.querySelector(".about-single-title");
    const body = section.querySelector(".about-single-copy");
    const facts = section.querySelector(".recruiter-facts");
    const portrait = section.querySelector(".about-portrait-card");
    const titleStyle = getComputedStyle(title);
    const bodyStyle = getComputedStyle(body);
    const titleRect = title.getBoundingClientRect();
    const bodyRect = body.getBoundingClientRect();
    const factsRect = facts.getBoundingClientRect();
    const portraitRect = portrait.getBoundingClientRect();
    const titleSize = parseFloat(titleStyle.fontSize);
    const titleLineHeight = parseFloat(titleStyle.lineHeight);
    return {
      titleSize,
      titleWeight: Number(titleStyle.fontWeight),
      titleLineRatio: titleLineHeight / titleSize,
      titleLines: Math.round(titleRect.height / titleLineHeight),
      bodySize: parseFloat(bodyStyle.fontSize),
      bodyWeight: Number(bodyStyle.fontWeight),
      factsInsideIntro: section.querySelectorAll(".about-intro-col > .recruiter-facts").length,
      copyToFactsGap: factsRect.top - bodyRect.bottom,
      portraitRatio: portraitRect.width / portraitRect.height,
    };
  });

  assert.ok(metrics.titleSize >= 64 && metrics.titleSize <= 84);
  assert.ok(metrics.titleWeight <= 650);
  assert.ok(metrics.titleLineRatio >= 0.96 && metrics.titleLineRatio <= 1.08);
  assert.ok(metrics.titleLines <= 2);
  assert.ok(metrics.bodySize <= 20);
  assert.ok(metrics.bodyWeight <= 500);
  assert.equal(metrics.factsInsideIntro, 1);
  assert.ok(metrics.copyToFactsGap >= 24 && metrics.copyToFactsGap <= 64);
  assert.ok(metrics.portraitRatio >= 0.78 && metrics.portraitRatio <= 0.86);

  await context.close();
});

test("Chinese project and method summaries stay on one line on desktop", async () => {
  const context = await browser.newContext({ locale: "zh-CN", viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  for (const selector of ["#projectOrbitTitle", "#about-method-title"]) {
    const metrics = await page.locator(selector).evaluate((title) => {
      const style = getComputedStyle(title);
      const lineHeight = parseFloat(style.lineHeight);
      return {
        lines: title.getBoundingClientRect().height / lineHeight,
        clipped: title.scrollWidth > title.clientWidth + 1,
      };
    });
    assert.ok(metrics.lines <= 1.1, `${selector} should remain on one line`);
    assert.equal(metrics.clipped, false, `${selector} should not be clipped`);
  }

  await context.close();
});

test("navigation masks page content behind the tab bar", async () => {
  const context = await browser.newContext({ locale: "zh-CN", viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.locator('[data-scroll-target="about"]').click();
  await page.waitForTimeout(500);

  const chrome = await page.locator(".site-chrome").evaluate((element) => {
    const style = getComputedStyle(element);
    const alphaMatch = style.backgroundColor.match(/rgba?\([^,]+,[^,]+,[^,]+(?:,\s*([\d.]+))?\)/);
    return {
      alpha: alphaMatch?.[1] ? Number(alphaMatch[1]) : 1,
      backdropFilter: style.backdropFilter,
    };
  });

  assert.ok(chrome.alpha >= 0.9, "tab bar background should mask content behind it");
  assert.notEqual(chrome.backdropFilter, "none");

  await context.close();
});

test("English mode localizes projects, supporting sections, and resume while preserving state", async () => {
  const context = await browser.newContext({ locale: "zh-CN", viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  await page.locator('[data-orbit-page="2"]').click();
  await page.locator('[data-work-view="grid"]').click();
  const activeIndexBefore = await page.locator("[data-orbit-active-index]").textContent();

  await page.locator('[data-language="en"]').click();

  assert.equal(await page.locator("#selected-work").getAttribute("data-work-view"), "grid");
  assert.equal(await page.locator("[data-orbit-active-index]").textContent(), activeIndexBefore);
  assert.match(await page.locator('[data-orbit-active-title]').textContent(), /XML Invoice/i);
  assert.match(await page.locator(".work-title").first().textContent(), /Research/i);
  assert.doesNotMatch((await page.locator(".work-title").allTextContents()).join(" "), /[\u4e00-\u9fff]/);
  assert.match(await page.locator("[data-lab-subtitle]").textContent(), /experiments/i);
  assert.match(await page.locator("[data-contact-status]").textContent(), /OPEN TO OPPORTUNITIES/i);
  assert.match(await page.locator('[data-resume-link="en"]').getAttribute("href"), /Rodin-Resume-EN\.pdf$/);
  assert.match(await page.locator('[data-resume-link="zh"]').getAttribute("href"), /rodin-resume\.pdf$/);
  assert.equal(await page.locator('a[href="mailto:rodin260599@163.com"]').count(), 1);

  await context.close();
});

test("Project Orbit fan cover flow changes through cards and numbered pagination only", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForSelector("#projectOrbit [data-orbit-item]:nth-child(8)");

  const initialTitle = await page.locator("[data-orbit-active-title]").textContent();
  const dragArea = page.locator("[data-orbit-drag-area]");
  const box = await dragArea.boundingBox();
  assert.ok(box);
  await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.5);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.25, box.y + box.height * 0.5, { steps: 8 });
  await page.mouse.up();
  await dragArea.press("ArrowRight");

  assert.equal(
    await dragArea.evaluate((element) => element.dispatchEvent(new WheelEvent("wheel", { deltaY: 240, cancelable: true }))),
    true,
  );

  await dragArea.hover();
  const beforeScroll = await page.locator("#scrollShell").evaluate((element) => element.scrollTop);
  await page.mouse.wheel(0, 420);
  await page.waitForFunction((before) => document.getElementById("scrollShell").scrollTop > before, beforeScroll);
  assert.equal(await page.locator("[data-orbit-active-title]").textContent(), initialTitle);

  assert.equal(await page.locator("[data-orbit-prev], [data-orbit-next]").count(), 0);
  assert.equal(await page.locator("[data-orbit-page]").count(), 8);
  assert.equal(await page.locator('[data-orbit-item][data-flow-offset="0"]').count(), 1);
  assert.equal(await page.locator('[data-orbit-item][data-flow-offset="1"]').count(), 1);
  assert.equal(await page.locator('[data-orbit-item][data-flow-offset="-1"]').count(), 1);

  await page.locator('[data-orbit-item][data-flow-offset="1"]').click();
  await page.waitForFunction((title) => document.querySelector("[data-orbit-active-title]")?.textContent !== title, initialTitle);
  assert.equal(await page.locator('[data-orbit-page][aria-current="true"]').textContent(), "02");

  await page.locator('[data-orbit-page="7"]').click();
  await page.waitForFunction(() => document.querySelector('[data-orbit-page="7"]')?.getAttribute("aria-current") === "true");
  assert.equal(await page.locator('[data-orbit-item][data-flow-offset="0"]').getAttribute("data-orbit-index"), "7");

  await page.close();
});

test("Project Orbit fan cover flow gives the center card the strongest visual hierarchy", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-orbit-item][data-flow-offset="0"]');

  const hierarchy = await page.locator("[data-orbit-ring]").evaluate((ring) => {
    const center = ring.querySelector('[data-flow-offset="0"]');
    const left = ring.querySelector('[data-flow-offset="-1"]');
    const right = ring.querySelector('[data-flow-offset="1"]');
    const centerBox = center.getBoundingClientRect();
    const leftBox = left.getBoundingClientRect();
    const rightBox = right.getBoundingClientRect();
    return {
      centerWidth: centerBox.width,
      leftWidth: leftBox.width,
      rightWidth: rightBox.width,
      centerX: centerBox.x + centerBox.width / 2,
      leftX: leftBox.x + leftBox.width / 2,
      rightX: rightBox.x + rightBox.width / 2,
      centerFilter: getComputedStyle(center).filter,
      leftFilter: getComputedStyle(left).filter,
      centerOpacity: Number(getComputedStyle(center).opacity),
      leftOpacity: Number(getComputedStyle(left).opacity),
    };
  });

  assert.ok(hierarchy.centerWidth > hierarchy.leftWidth * 1.12);
  assert.ok(hierarchy.centerWidth > hierarchy.rightWidth * 1.12);
  assert.ok(hierarchy.leftX < hierarchy.centerX);
  assert.ok(hierarchy.rightX > hierarchy.centerX);
  assert.equal(hierarchy.centerFilter, "none");
  assert.notEqual(hierarchy.leftFilter, "none");
  assert.ok(hierarchy.centerOpacity > hierarchy.leftOpacity);

  await page.close();
});

test("Project Orbit does not install gesture handling on mobile", async () => {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForSelector("[data-orbit-drag-area]", { state: "attached" });

  assert.equal(
    await page.locator("[data-orbit-drag-area]").evaluate((element) => getComputedStyle(element).touchAction),
    "auto",
  );
  await page.close();
});

test("hero project shortcuts open Orbit at the matching project", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.locator('[data-studio-project="xml-tool"]').click();

  await page.waitForFunction(() => document.querySelector("[data-orbit-active-title]")?.textContent.includes("XML"));
  assert.equal(await page.locator("#selected-work").getAttribute("data-work-view"), "orbit");
  await page.close();
});

test("homepage restores the original warm grid and micro widgets", async () => {
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await desktop.goto(baseUrl, { waitUntil: "networkidle" });

  const visual = await desktop.locator("body").evaluate((element) => ({
    bodyBackground: getComputedStyle(element).backgroundImage,
    heroDisplay: getComputedStyle(document.getElementById("top")).display,
    studioPosition: getComputedStyle(document.getElementById("rodinStudioStage")).position,
    studioRadius: getComputedStyle(document.getElementById("rodinStudioStage")).borderRadius,
    chipPosition: getComputedStyle(document.querySelector("#top .chip-ai")).position,
    aiChipRadius: getComputedStyle(document.querySelector("#top .chip-ai")).borderRadius,
    detailChipRadius: getComputedStyle(document.querySelector("#top .chip-cr")).borderRadius,
  }));
  assert.match(visual.bodyBackground, /rgb\(255, 245, 220\)/);
  assert.match(visual.bodyBackground, /rgb\(255, 209, 143\)/);
  assert.equal(visual.heroDisplay, "grid");
  assert.equal(visual.studioPosition, "absolute");
  assert.equal(visual.studioRadius, "0px");
  assert.equal(visual.chipPosition, "absolute");
  assert.equal(visual.aiChipRadius, "999px");
  assert.ok(parseFloat(visual.detailChipRadius) >= 4);
  assert.equal(await desktop.locator("#top .cross").count(), 7);
  assert.equal(await desktop.locator("#top .hero-status-chips").count(), 1);
  assert.equal(await desktop.locator("#top .hero-meta-bar").count(), 1);
  await desktop.close();

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto(baseUrl, { waitUntil: "networkidle" });
  assert.equal(await mobile.locator("body").evaluate((element) => element.scrollWidth), 390);
  assert.ok(await mobile.locator("#top .chip-status").evaluate((element) => element.getBoundingClientRect().height >= 28));
  await mobile.close();
});

test("Three.js studio reaches a usable state without remote runtime dependencies", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const remoteScripts = [];
  page.on("request", (request) => {
    if (request.resourceType() === "script" && !request.url().startsWith(baseUrl)) {
      remoteScripts.push(request.url());
    }
  });

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForFunction(
    () => ["ready", "fallback"].includes(document.body.dataset.studioState),
    null,
    { timeout: 5000 },
  );

  assert.deepEqual(remoteScripts, []);
  assert.equal(await page.locator("#rodinStudioCanvas").getAttribute("aria-hidden"), "true");
  assert.equal(await page.evaluate(() => typeof window.__rodinStudio?.destroy), "function");
  await page.close();
});

test("Three.js studio renders a stable frame when reduced motion is requested", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForFunction(
    () => ["ready", "fallback"].includes(document.body.dataset.studioState),
    null,
    { timeout: 5000 },
  );

  assert.equal(await page.locator("#rodinStudioCanvas").getAttribute("data-motion"), "static");
  await page.close();
});

test("primary actions and project links lead to real content", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForSelector("#workGrid .work-card:nth-child(8)", { state: "attached" });

  await page.locator('[data-scroll-target="selected-work"]').click();
  await page.waitForFunction(() => {
    const rect = document.querySelector("#selected-work")?.getBoundingClientRect();
    return rect && rect.top < window.innerHeight * 0.2;
  });

  const projectHrefs = await page.locator("#workGrid .work-card a.group").evaluateAll((links) =>
    links.map((link) => link.getAttribute("href")),
  );
  assert.equal(projectHrefs.length, 8);
  assert.equal(projectHrefs.every(Boolean), true);

  const wheelHref = await page.locator("[data-lab-project-wheel]").getAttribute("href");
  assert.equal(new URL(wheelHref, baseUrl).pathname, "/project-wheel.html");
  await page.close();
});

test("project load failure gives the visitor a recovery instruction", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.route("**/projects.json", (route) =>
    route.fulfill({ status: 500, contentType: "application/json", body: "{}" }),
  );
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  const error = page.locator(".work-load-error");
  await page.locator('[data-work-view="grid"]').click();
  await error.waitFor({ timeout: 5000 });
  assert.match(await error.textContent(), /刷新页面重试/);
  await page.close();
});

test("local file preview keeps the complete eight-project archive", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(localFileUrl, { waitUntil: "load" });
  await page.waitForSelector("#workGrid .work-card:nth-child(8)", { state: "attached", timeout: 1500 });

  assert.equal(await page.locator("#workGrid .work-card").count(), 8);
  assert.equal(await page.locator(".work-load-error").count(), 0);
  await page.close();
});

test("local file preview renders the same Three.js studio as the served site", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto(localFileUrl, { waitUntil: "load" });
  await page.waitForFunction(() => document.body.dataset.studioState === "ready", null, { timeout: 5000 });

  assert.equal(await page.locator(".studio-fallback").evaluate((element) => getComputedStyle(element).opacity), "0");
  assert.equal(await page.locator("#rodinStudioCanvas").getAttribute("data-motion"), "animated");
  assert.equal(await page.evaluate(() => typeof window.__rodinStudio?.destroy), "function");
  assert.deepEqual(errors, []);
  await page.close();
});

test("WebGL failure falls back without hiding core content", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.addInitScript(() => {
    const originalGetContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function getContext(type, options) {
      if (type === "webgl" || type === "webgl2" || type === "experimental-webgl") return null;
      return originalGetContext.call(this, type, options);
    };
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForFunction(() => document.body.dataset.studioState === "fallback", null, { timeout: 1500 });

  assert.equal(await page.locator("h1").isVisible(), true);
  assert.equal(await page.locator(".studio-fallback").isVisible(), true);
  await page.close();
});

test("navigation reflects the visible section", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "About" }).click();
  await page.waitForFunction(() =>
    document.querySelector('.nav-actions button[data-scroll-target="about"]')?.classList.contains("is-active"),
    null,
    { timeout: 5000 },
  );
  await page.locator(".chrome-row-bottom").waitFor({ state: "hidden", timeout: 5000 });
  assert.equal(await page.locator(".chrome-row-bottom").isVisible(), false);
  await page.close();
});

test("homepage loads without console errors on desktop and mobile", async () => {
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
    const page = await browser.newPage({ viewport });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    await page.waitForFunction(() => ["ready", "fallback"].includes(document.body.dataset.studioState));
    assert.deepEqual(errors, []);
    await page.close();
  }
});

test("desktop hero scales as one 1672 by 941 poster stage", async () => {
  async function measure(viewport) {
    const page = await browser.newPage({ viewport });
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    await page.waitForFunction(() => ["ready", "fallback"].includes(document.body.dataset.studioState));
    assert.equal(await page.locator("#top .hero-poster").count(), 1);

    const layout = await page.locator("#top .hero-poster").evaluate((poster) => {
      const posterRect = poster.getBoundingClientRect();
      const normalize = (element) => {
        const rect = element.getBoundingClientRect();
        return {
          left: (rect.left - posterRect.left) / posterRect.width,
          top: (rect.top - posterRect.top) / posterRect.height,
          right: (rect.right - posterRect.left) / posterRect.width,
          bottom: (rect.bottom - posterRect.top) / posterRect.height,
          width: rect.width / posterRect.width,
          height: rect.height / posterRect.height,
        };
      };
      const tags = [...poster.querySelectorAll(".about-tags .tech-chip")].map((element) => element.getBoundingClientRect());
      return {
        viewport: { width: window.innerWidth, height: window.innerHeight },
        poster: {
          left: posterRect.left,
          top: posterRect.top,
          width: posterRect.width,
          height: posterRect.height,
        },
        claim: normalize(poster.querySelector(".note")),
        about: normalize(poster.querySelector(".intro-col")),
        art: normalize(poster.querySelector(".hero-art")),
        headline: normalize(poster.querySelector(".headline")),
        cta: normalize(poster.querySelector(".hero-cta-group")),
        footer: normalize(poster.querySelector(".hero-meta-bar")),
        tagGap: tags[1].left - tags[0].right,
      };
    });

    const chrome = await page.locator(".site-chrome").evaluate((header) => {
      const headerRect = header.getBoundingClientRect();
      const brandRect = header.querySelector(".brand").getBoundingClientRect();
      const navRect = header.querySelector(".nav-actions").getBoundingClientRect();
      return {
        brandLeft: (brandRect.left - headerRect.left) / headerRect.width,
        navRight: (navRect.right - headerRect.left) / headerRect.width,
      };
    });
    await page.close();
    return { ...layout, chrome };
  }

  const reference = await measure({ width: 1672, height: 941 });
  const compact = await measure({ width: 1440, height: 900 });

  for (const layout of [reference, compact]) {
    assert.ok(Math.abs(layout.poster.width / layout.poster.height - 1672 / 941) < 0.002);
    assert.ok(Math.abs(layout.poster.left - (layout.viewport.width - layout.poster.width) / 2) < 1);
    assert.ok(Math.abs(layout.poster.top - (layout.viewport.height - layout.poster.height) / 2) < 1);
    assert.ok(layout.claim.left > 0.045 && layout.claim.left < 0.065);
    assert.ok(layout.about.right > 0.91 && layout.about.right < 0.955);
    assert.ok(layout.art.left > 0.23 && layout.art.left < 0.29);
    assert.ok(layout.art.width > 0.62 && layout.art.width < 0.7);
    assert.ok(layout.headline.left > 0.045 && layout.headline.left < 0.065);
    assert.ok(layout.cta.right > 0.93 && layout.cta.right < 0.955);
    assert.ok(layout.footer.left > 0.045 && layout.footer.left < 0.065);
    assert.ok(layout.footer.right > 0.93 && layout.footer.right < 0.955);
    assert.ok(layout.chrome.brandLeft > 0.045 && layout.chrome.brandLeft < 0.065);
    assert.ok(layout.chrome.navRight > 0.93 && layout.chrome.navRight < 0.955);
  }

  assert.ok(reference.tagGap >= 12 && reference.tagGap <= 16);
  for (const key of ["claim", "about", "art", "headline", "cta", "footer"]) {
    for (const edge of ["left", "top", "right", "bottom"]) {
      assert.ok(Math.abs(reference[key][edge] - compact[key][edge]) < 0.012, `${key}.${edge} drifted`);
    }
  }
});

test("mobile hero remains a readable flow without horizontal overflow", async () => {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  const layout = await page.locator("#top").evaluate((hero) => {
    const headline = hero.querySelector(".headline").getBoundingClientRect();
    const metadata = hero.querySelector(".hero-meta-bar").getBoundingClientRect();
    return {
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      heroHeight: hero.getBoundingClientRect().height,
      headlineBottom: headline.bottom,
      metadataBottom: metadata.bottom,
    };
  });
  assert.equal(layout.documentWidth, layout.viewportWidth);
  assert.ok(layout.heroHeight >= 980);
  assert.ok(layout.headlineBottom < layout.metadataBottom);
  await page.close();
});
