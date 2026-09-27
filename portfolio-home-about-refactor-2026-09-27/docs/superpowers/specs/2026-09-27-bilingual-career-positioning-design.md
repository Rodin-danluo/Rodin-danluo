# Bilingual Career Positioning Design

**Date:** 2026-09-27  
**Status:** Approved for direct implementation by Rodin  
**Scope:** Homepage language system, Hero job-seeking message, About, homepage project summaries, Lab, Contact, metadata, and resume entry. Individual project detail pages are out of scope.

## 1. Goal

Turn the portfolio from a broad “Product Manager × UX Designer” showcase into a focused recruiting asset for long-term AI Product Manager internships, with Growth Operations and UX presented as supporting strengths rather than competing identities.

The homepage must answer within the first screen:

1. Who is Rodin? — An aspiring AI Product Manager.
2. What is distinctive? — Real-user signal discovery, UX thinking, and growth/operations follow-through.
3. What role is sought? — AI Product Manager internship; product-led operations are secondary.
4. When and where is Rodin available? — From 2026-10-01; Beijing, Shanghai, Guangzhou, or Shenzhen; 6 days/week; 3–6 months.
5. Where is the evidence? — XML invoice tool, QuickWis product operations, and research-product user testing.

## 2. Audience and Success Measure

### Primary audience

- Recruiters and hiring managers for AI Product Manager internships.
- Product leaders hiring junior candidates who can bridge research, prototyping, delivery support, and feedback loops.

### Secondary audience

- Product Operations / Growth Operations teams working closely with AI or software products.
- Product Design roles where research and product reasoning matter more than high-end visual craft alone.

### Success measure

- A recruiter can identify the target role, availability, and strongest evidence without scrolling past About.
- The website and resume tell the same career story.
- Chinese and English visitors receive complete, equivalent information rather than a partially translated interface.
- No public claim depends on unverified analytics or ownership.

## 3. Positioning

### Primary label

**AI Product Manager**

### Supporting line

**Growth Operations × UX**

### Chinese positioning statement

> 从真实用户问题出发，推动 AI 产品从需求洞察、原型验证到落地迭代。

### English positioning statement

> Turning real user friction into AI product decisions — from discovery and prototyping to shipped iterations.

### Do not use as equal primary labels

- UX Designer
- Product Operations
- Public Relations
- General Product Manager

These may appear only as experience or supporting capabilities.

## 4. Language Architecture

### Selected approach

Use a single DOM and a zero-dependency translation layer. Do not duplicate the page or introduce a framework.

### Runtime behavior

1. Read `localStorage.rodin-language`.
2. If no saved value exists, use Chinese when `navigator.language` starts with `zh`; otherwise use English.
3. Fall back to Chinese if detection fails.
4. Switching language updates content without a page reload.
5. Persist the selection.
6. Update `<html lang>`, document title, meta description, Open Graph title/description, JSON-LD job title and knowledge areas, visible copy, ARIA labels, project summaries, and resume CTA.
7. Dispatch `rodin:languagechange` so the existing project renderer can refresh while preserving the selected view and active project.

### Technical boundary

- Create `assets/js/i18n.js` containing the dictionary and language controller.
- Mark static text with `data-i18n` or `data-i18n-aria-label`.
- Add English fields to project data only where project names, summaries, tags, type, technology, or impact require translation.
- Keep meaningful product names such as `StyleSwap`, `UPNOW`, and `XML` unchanged.
- Keep Chinese static HTML as the no-JavaScript fallback.

### Language control

- Place `中 / EN` in the top navigation after Contact.
- Use two compact buttons inside an accessible group.
- Expose current state with `aria-pressed`.
- Use the existing orange accent only for the active language.
- On narrow screens, keep the control visible; reduce navigation gaps rather than hiding language choice.

## 5. Homepage Hero

The poster composition, artwork, and `RODIN'S PORTFOLIO` title stay unchanged. Only career-facing copy and labels change.

### Left statement

Chinese:

> 找到真实的用户阻力。  
> 把它转化为可验证的产品决策。

Supporting copy:

> 从需求洞察、原型验证到上线反馈，让复杂问题成为可执行的下一步。

English:

> Find the real user friction.  
> Turn it into a testable product decision.

Supporting copy:

> From discovery and prototyping to launch feedback, I turn complex problems into executable next steps.

### Right career module

Kicker:

> AI PRODUCT MANAGER

Chinese body:

> 工业设计背景，正在走向 AI 产品管理。我的经历覆盖用户支持、产品运营、用户测试与交互原型；我关注用户在哪一步受阻，再通过需求梳理、原型和运营反馈推动迭代。

English body:

> An Industrial Design undergraduate moving into AI product management. My experience spans user support, product operations, user testing, and interaction prototyping. I identify where users get stuck, then use requirement framing, prototypes, and operational feedback to move the product forward.

Tags:

- `AI Product / Growth / UX`
- Chinese: `2026.10.01 起可入职`
- English: `Available Oct 1, 2026`

### Hero footer metadata

- Left: `GMT+8 CN · 2026`
- Center: `AI PRODUCT / GROWTH / UX`
- Right Chinese: `2027届本科生 · 求职中`
- Right English: `B.Des Candidate · 2027`

## 6. About Information Architecture

### 6.1 Opening profile

Kicker:

> ABOUT / AI PRODUCT MANAGER

Title:

> From signal to product.

Chinese biography:

> 我是罗丹，一名工业设计本科生，正在走向 AI 产品管理。我的经历横跨用户支持、产品运营、用户测试与交互原型：我关注真实用户在哪一步受阻，再用需求梳理、原型和运营反馈推动下一次迭代。当前寻找 AI 产品经理长期实习，也愿意承担与产品紧密相关的增长运营工作。

English biography:

> I’m Rodin, an Industrial Design undergraduate moving into AI product management. My experience spans user support, product operations, user testing, and interaction prototyping. I look for where real users get stuck, then use requirement framing, prototypes, and operational feedback to drive the next iteration. I am seeking a long-term AI Product Manager internship and am also open to product-led growth operations.

### 6.2 Recruiter facts

Replace the current honors/status strip and generic impact bar with four verified recruiting facts:

1. `2027` — B.Des Candidate / 工业设计本科
2. `OCT 01` — Available / 可入职
3. `6 DAYS` — Weekly availability / 每周可实习
4. `3–6 MO` — Internship duration / 可持续实习

Location appears below the facts:

> Beijing · Shanghai · Guangzhou · Shenzhen

### 6.3 Working model

Use three steps instead of generic equal capability cards:

1. **Discover / 发现问题**  
   Gather user feedback, reproduce issues, conduct user tests, and identify where the workflow breaks.

2. **Define / 定义方案**  
   Structure requirements, map flows, build testable prototypes, and use AI to accelerate research and documentation.

3. **Deliver & Learn / 推进与复盘**  
   Support release, content distribution, and feedback collection; use observed behavior to shape the next iteration.

### 6.4 Evidence stories

#### XML invoice tool — primary evidence

Chinese:

> 小红书推广后，有用户私信询问如何把发票链接变成 XML 文件。由此发现：用户在使用查看器之前，先卡在“从链接获得文件”这一步。团队据此补充 XML 下载器，让获取文件与后续查看形成完整链路。产品于 2025 年上线，至今仍有用户使用。

English:

> After promoting the tool on Xiaohongshu, users asked how to turn invoice links into XML files. This revealed a missing step before the viewer: users first needed a way to obtain the file. The team added an XML downloader to connect file acquisition with viewing. The product launched in 2025 and remains in use.

Public role label:

> User feedback synthesis · Workflow definition · Product operations

Do not publish usage counts until Baidu Analytics and user screenshots are provided and verified.

#### QuickWis Technology — professional evidence

Chinese:

> 处理报销、发票与 Excel 导出场景中的用户支持和问题复现；整理反馈与需求；支持内容运营、达人沟通、渠道获客及 iOS 上架与 ASO。

English:

> Handled user support and issue reproduction across reimbursement, invoice, and Excel-export workflows; synthesized feedback and requirements; supported content operations, creator outreach, acquisition channels, and iOS launch/ASO.

The existing resume-supported `50+ daily users` acquisition result may be shown only when the wording is directly aligned with the resume.

#### Research assistant product — supporting evidence

Chinese:

> 参与 AI 科研助手研发流程，主要承担用户测试、反馈整理与体验验证。

English:

> Participated in the development process of an AI research assistant, focusing on user testing, feedback synthesis, and experience validation.

Do not describe Rodin as product owner or end-to-end product lead for this project.

### 6.5 Experience and education

Keep a concise timeline, ordered by relevance:

1. QuickWis Technology — Product Management Assistant / Product Operations Intern
2. Research assistant product — User Testing & Experience Validation
3. IDL / Innovation Lab — Coordination and UX practice
4. Hunan University of Technology — Industrial Design, B.Des Candidate 2027

## 7. Project, Lab, and Contact Copy

### Selected Work

- Translate section headings, descriptions, controls, tags, summaries, and ARIA labels.
- Preserve project names where they function as brand names.
- Place XML first in the grid and cover flow because it has the strongest real-world evidence.
- Place the AI research assistant second, clearly labeled as user testing / AI workflow exploration rather than product ownership.

### Lab

- Retain experiments but describe them as evidence of rapid prototyping and AI-assisted building.
- Avoid claiming production impact when an item is only a demo.

### Contact

Chinese status:

> 寻找 AI 产品经理长期实习 · 2026.10.01 起可入职

English status:

> Seeking a long-term AI Product Manager internship · Available Oct 1, 2026

Resume behavior:

- Chinese mode downloads the existing Chinese resume.
- English mode downloads the provided English resume as `Rodin-Resume-EN.pdf`.
- Keep email and relocation information consistent with the current website until Rodin provides a preferred unified email.

## 8. Visual Direction

Preserve the existing warm poster world and its orange signal language. This is a content and hierarchy redesign, not a visual rebrand.

- Keep the 1672×941 Hero stage and current 3D composition.
- Add no new decorative visual elements.
- Replace generic metric cards with recruiter facts and evidence rows.
- Keep paragraphs near 60–70 characters per line.
- Use the existing display, body, and mono fonts.
- Use orange only for active language, availability, and evidence signals.
- Maintain existing mobile grid and cover-flow behavior.

## 9. Accessibility and Failure Behavior

- Language buttons remain keyboard reachable and expose `aria-pressed`.
- Language changes update the document language immediately.
- Missing translation keys fall back to Chinese and log a development warning; they never render blank text.
- With JavaScript disabled, Chinese content remains readable and the resume link remains usable.
- `prefers-reduced-motion` continues to disable decorative transitions.

## 10. Testing

Automated browser tests must verify:

1. Chinese browser defaults to Chinese without a stored choice.
2. Non-Chinese browser defaults to English without a stored choice.
3. Language selection persists across reloads.
4. Toggle updates `<html lang>`, visible Hero/About copy, metadata, ARIA labels, project summaries, Contact status, and resume URL.
5. Switching language preserves the active project and Orbit/Grid state.
6. No translation key renders as empty or as a raw key.
7. Chinese no-JavaScript fallback remains readable.
8. Desktop and mobile layouts have no horizontal overflow.

Manual visual checks must cover 1440×1000 and 390×844 in both languages.

## 11. Deferred Evidence

The following are deliberately excluded until Rodin supplies supporting evidence:

- XML usage totals and conversion data from Baidu Analytics.
- Screenshots of user questions and feedback.
- Any claim of independently owning a complete PRD.
- Any claim of owning the full research-assistant product lifecycle.

When evidence arrives, add it to the XML case study and About evidence row without changing the positioning architecture.

## 12. References

- [Example Product Manager Portfolio](https://github.com/lisafeets/product_portfolio): home orientation and case-study structure around problem, role, decisions, challenges, outcomes, and screenshots.
- [Bilingual Static Portfolio](https://github.com/QifanYang17/personal-site): zero-dependency `data-i18n` architecture for real-time bilingual switching.
- [Creative Bloq Portfolio Review](https://www.creativebloq.com/portfolios/examples-712368): immediate identity clarity, restrained presentation, and explicit project-role transparency.
