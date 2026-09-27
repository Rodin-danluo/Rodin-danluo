(function () {
  "use strict";

  const STORAGE_KEY = "rodin-language";
  const projectTranslations = {
    "rscfox-ai": {
      title: "ResearchFox Assistant | AI Agent for Academic Workflows",
      impact: "AI workflow validation for academic research",
      summary: "An AI assistant for university researchers, exploring how intelligent retrieval, reference management, and guided workflows can support academic work.",
    },
    "xiaojianggo": {
      title: "Xiaojiangxing | Smart Urban Culture Exploration App",
      impact: "Family-oriented cultural discovery system",
      summary: "A city exploration service connecting families, urban spaces, and local heritage through location-aware guidance and intelligent recommendations.",
    },
    "xml-tool": {
      title: "XML Invoice Tool | Document Workflow Utility",
      impact: "Shipped product informed by real user friction",
      summary: "A practical XML invoice utility shaped by user questions, covering file access, invoice parsing, information extraction, and office workflow efficiency.",
    },
    ejiahu: {
      title: "E-Care | Digital Support for Remote Families",
      impact: "End-to-end digital care service concept",
      summary: "An iOS care experience connecting older adults, family members, communities, and smart devices to support remote assistance.",
    },
    styleswap: {
      title: "StyleSwap | Generative AI Visual Transformation Tool",
      impact: "Rapid 0-to-1 prototype delivery",
      summary: "A generative AI experiment using prompt strategy and interaction design to make visual style exploration more accessible.",
    },
    upnow: {
      title: "UPNOW | Health and Activity Management Experience",
      impact: "Micro-health support for sedentary routines",
      summary: "A mobile health experience combining data feedback, goal management, and habit loops for young users.",
    },
    jinriqunaer: {
      title: "Where Today | Spontaneous City Trips and Social Discovery",
      impact: "Decision support for spontaneous outings",
      summary: "A mobile product concept for micro-travel, route generation, and lightweight social discovery in urban contexts.",
    },
    impromptu: {
      title: "Impromptu | Real-time Interaction Experiment",
      impact: "Testing interaction rhythm and dynamic feedback",
      summary: "A web-tool experiment exploring real-time interaction and the feedback relationship between people and systems.",
    },
  };
  const dictionaries = {
    zh: {
      "a11y.siteNav": "站点导航",
      "a11y.mainNav": "主导航",
      "a11y.language": "语言选择",
      "nav.work": "项目",
      "nav.about": "关于",
      "nav.lab": "实验",
      "nav.contact": "联系",
      "hero.positioning": "找到真实的用户阻力。<br />把它转化为可验证的产品决策。",
      "hero.supporting": "从需求洞察、原型验证到上线反馈，让复杂问题成为可执行的下一步。",
      "hero.careerKicker": "PRODUCT / EXPERIENCE",
      "hero.careerBody": "工业设计背景，实践覆盖产品、UX、AI 原型与增长运营。我从用户反馈与行为信号出发，通过需求分析、体验设计、快速原型和数据反馈，把问题推进到可测试、可落地的下一步。",
      "hero.disciplines": "B.Des Candidate · 2027",
      "hero.availability": "● OPEN TO OPPORTUNITIES",
      "hero.signal": "+ PRODUCT × EXPERIENCE × AI",
      "hero.ctaAria": "项目与英文简历入口",
      "hero.viewWork": "查看项目 ↓",
      "hero.resumeEn": "Résumé EN ↗",
      "hero.metaCenter": "PRODUCT / EXPERIENCE / AI",
      "hero.metaRight": "2027届本科生 · 求职中",
      "about.aria": "关于罗丹与求职信息",
      "about.kicker": "ABOUT / PRODUCT × EXPERIENCE × AI",
      "about.title": "从信号到产品。",
      "about.bio": "我是罗丹，一名工业设计背景的产品与体验实践者。我的实践横跨用户问题诊断、产品运营、用户研究与交互原型，也参与过 iOS 产品上线、SEO / ASO、内容分发与数据分析。我习惯从真实反馈与行为信号出发，把模糊需求推进成可以验证、可以落地的下一步。",
      "about.portraitAria": "罗丹个人形象照",
      "about.fact.2027.label": "工业设计本科",
      "about.fact.2027.detail": "B.Des Candidate",
      "about.fact.rank.label": "专业排名",
      "about.fact.rank.detail": "Academic Rank",
      "about.fact.research.label": "真实教师用户",
      "about.fact.research.detail": "研狐研究样本",
      "about.fact.traffic.label": "日均访问",
      "about.fact.traffic.detail": "个人内容渠道",
      "about.method.kicker": "WORKING MODEL / 工作方法",
      "about.method.title": "把模糊反馈推进成可验证的下一步。",
      "about.method.discover.title": "SIGNAL / 发现信号",
      "about.method.discover.body": "用户反馈 · 行为数据 · 真实场景",
      "about.method.define.title": "FRAME / 定义问题",
      "about.method.define.body": "需求拆解 · 用户流程 · 优先级判断",
      "about.method.deliver.title": "VALIDATE / 推进验证",
      "about.method.deliver.body": "快速原型 · 用户测试 · 反馈复盘",
      "about.evidence.kicker": "EVIDENCE / 可信证据",
      "about.evidence.title": "我如何参与真实问题。",
      "about.evidence.xml.tag": "PRODUCT DISCOVERY × DELIVERY",
      "about.evidence.xml.title": "XML 发票下载器",
      "about.evidence.xml.body": "2025 年，小红书用户询问如何处理收到的发票链接。我们发现部分用户不会在浏览器中打开链接并保存文件，我参与澄清“链接转为文件”的缺失流程，团队随后加入 XML 下载器。产品上线后至今仍有用户使用；具体数据待百度统计补充。",
      "about.evidence.quickwis.tag": "PRODUCT OPS × SUPPORT",
      "about.evidence.quickwis.title": "快智科技产品实践",
      "about.evidence.quickwis.body": "从用户支持与问题诊断中整理反馈，参与工具类产品的内容运营、创作者与渠道协作，并接触 iOS 上架、ASO 与版本推进，让一线问题更快回到产品迭代。",
      "about.evidence.research.tag": "USER TESTING × VALIDATION",
      "about.evidence.research.title": "研狐科研助手",
      "about.evidence.research.body": "跟随产品经理参与项目过程，主要承担用户测试与反馈验证，观察科研场景中的可用性问题，并协助团队校验交互与功能假设。",
      "about.timeline.kicker": "EXPERIENCE / 经历",
      "about.timeline.quickwis.time": "2025.07–2025.09 · 2026.08–至今",
      "about.timeline.quickwis.role": "快智科技 · 产品经理助理",
      "about.timeline.quickwis.body": "用户支持、产品反馈、内容与渠道运营、iOS/ASO 协作。",
      "about.timeline.idl.role": "IDL 创新设计实验室 · UX 设计师",
      "about.timeline.idl.body": "参与 B 端项目的流程需求梳理、用户体验与交互方案。",
      "about.timeline.gewu.role": "格物创新设计实验室 · 双创统筹负责人",
      "about.timeline.gewu.body": "负责 65 人团队的协作与项目推进。",
      "about.timeline.scholarship.title": "国家奖学金",
      "about.timeline.scholarship.body": "National Scholarship · 国家级荣誉",
      "work.kicker": "PROJECT ORBIT / 交互项目索引",
      "work.aria": "精选深度案例",
      "work.label": "SELECTED CASE STUDIES / 深度案例",
      "work.intro": "聚焦于端到端产品定义、复杂交互工作流与真实落地交付。",
      "work.count": "08 个项目 / 04 个重点案例",
      "work.viewAria": "项目浏览方式",
      "work.viewOrbit": "3D 封面流",
      "work.viewGrid": "网格浏览",
      "work.title": "覆盖 AI 产品定义、复杂流程体验与工具型产品从 0 到 1 的落地。",
      "work.help": "点击两侧封面或底部项目序号，在 8 个项目间连续切换浏览。",
      "lab.kicker": "LAB / 最近实验",
      "lab.title": "让小想法动起来。",
      "lab.subtitle": "除了正式项目，我也在持续做一些小实验：AI 辅助原型、产品细节观察、工具型 App 上架与个人视觉实验。",
      "lab.styleswap.title": "StyleSwap 风格转换",
      "lab.styleswap.body": "基于 AI 独立打造的轻量视觉风格转换工具，从需求定义、Prompt 设计、界面到 Demo 完成 0–1 验证。",
      "lab.demo": "体验在线 Demo ↗",
      "lab.impromptu.title": "临场应变",
      "lab.impromptu.body": "探索特定场景下的即兴应对与交互节奏，将高频应变需求翻译成轻量网页工具。",
      "lab.visit": "访问 Demo ↗",
      "lab.notes.title": "产品观察",
      "lab.notes.body": "记录工具类 App、AI 产品、内容分发和上架细节，关注产品从界面到发布的真实链路。",
      "lab.archive.body": "保留早期轮盘实验作为独立项目档案，不再让它干扰首页的快速浏览路径。",
      "lab.archive.link": "进入 3D 实验 ↗",
      "contact.kicker": "CONTACT / 联系",
      "contact.title": "一起做出下一件事。",
      "contact.status": "OPEN TO OPPORTUNITIES",
      "contact.roles": "产品与体验 · AI 产品 · 产品驱动的增长运营",
      "contact.availability": "2026.10.01 起 · 每周 6 天 · 可持续 3–6 个月",
      "contact.location": "北上广深 / 可搬迁",
      "contact.resumeEn": "Résumé — EN ↗",
      "contact.resumeZh": "简历 — 中文 ↗",
      "contact.resumeEnAria": "下载罗丹英文 PDF 简历",
      "contact.resumeZhAria": "下载罗丹中文 PDF 简历",
      "contact.stickyTitle": "// 留一张便利贴",
      "contact.addNote": "+ 贴一张便利贴",
      "meta.title": "罗丹 Rodin | 产品与体验作品集",
      "meta.description": "罗丹 (Rodin) 的产品与体验作品集：从真实用户问题出发，通过需求分析、UX、AI 原型与增长运营，把问题推进到可测试、可落地的下一步。",
      "meta.ogTitle": "罗丹 Rodin | 产品与体验作品集",
      "meta.ogDescription": "从真实用户反馈与行为信号出发，连接产品、体验、AI 原型与增长运营。",
      "meta.jobTitle": "Product & Experience Practitioner",
      "meta.knowsAbout": ["AI Product Management", "Product Operations", "User Research", "UX Prototyping", "Growth Operations"],
    },
    en: {
      "a11y.siteNav": "Site navigation",
      "a11y.mainNav": "Main navigation",
      "a11y.language": "Language selection",
      "nav.work": "Work",
      "nav.about": "About",
      "nav.lab": "Lab",
      "nav.contact": "Contact",
      "hero.positioning": "Find the real user friction.<br />Turn it into a testable product decision.",
      "hero.supporting": "From discovery and prototyping to launch feedback, I turn complex problems into executable next steps.",
      "hero.careerKicker": "PRODUCT / EXPERIENCE",
      "hero.careerBody": "With an Industrial Design background, my practice spans product, UX, AI prototyping, and growth operations. I use user feedback and behavioral signals to frame problems, prototype quickly, and move ambiguous needs toward testable, practical next steps.",
      "hero.disciplines": "B.Des Candidate · 2027",
      "hero.availability": "● OPEN TO OPPORTUNITIES",
      "hero.signal": "+ PRODUCT × EXPERIENCE × AI",
      "hero.ctaAria": "Work and English resume",
      "hero.viewWork": "View Work ↓",
      "hero.resumeEn": "Résumé EN ↗",
      "hero.metaCenter": "PRODUCT / EXPERIENCE / AI",
      "hero.metaRight": "B.Des Candidate · 2027",
      "about.aria": "About Rodin and career information",
      "about.kicker": "ABOUT / PRODUCT × EXPERIENCE × AI",
      "about.title": "From signal to product.",
      "about.bio": "I’m Rodin, a product and experience practitioner with an Industrial Design background. My work spans user-issue diagnosis, product operations, user research, and interaction prototyping, with hands-on exposure to iOS launches, SEO / ASO, content distribution, and data analysis. I turn real feedback and behavioral signals into testable, practical next steps.",
      "about.portraitAria": "Portrait of Rodin",
      "about.fact.2027.label": "B.Des Candidate",
      "about.fact.2027.detail": "Industrial Design",
      "about.fact.rank.label": "Academic Rank",
      "about.fact.rank.detail": "Ranked 1st of 67",
      "about.fact.research.label": "Real Educator Users",
      "about.fact.research.detail": "Research Fox sample",
      "about.fact.traffic.label": "Average Daily Visits",
      "about.fact.traffic.detail": "Personal content channel",
      "about.method.kicker": "WORKING MODEL",
      "about.method.title": "Turn ambiguous feedback into a testable next step.",
      "about.method.discover.title": "SIGNAL / Discover",
      "about.method.discover.body": "User feedback · Behavioral data · Real contexts",
      "about.method.define.title": "FRAME / Define",
      "about.method.define.body": "Requirements · User flows · Priorities",
      "about.method.deliver.title": "VALIDATE / Test",
      "about.method.deliver.body": "Rapid prototypes · User testing · Feedback review",
      "about.evidence.kicker": "EVIDENCE",
      "about.evidence.title": "How I contribute to real product problems.",
      "about.evidence.xml.tag": "PRODUCT DISCOVERY × DELIVERY",
      "about.evidence.xml.title": "XML Invoice Downloader",
      "about.evidence.xml.body": "In 2025, Xiaohongshu users asked how to handle invoice links they had received. We found that some users did not know how to open a link in the browser and save the file. I helped clarify this missing link-to-file workflow, and the team added an XML downloader. The product remains in use; verified Baidu Analytics data will be added later.",
      "about.evidence.quickwis.tag": "PRODUCT OPS × SUPPORT",
      "about.evidence.quickwis.title": "QuickWis Product Practice",
      "about.evidence.quickwis.body": "Synthesized feedback from user support and issue diagnosis, contributed to content operations and creator/channel coordination, and supported iOS launch, ASO, and release progress so frontline issues could feed product iteration.",
      "about.evidence.research.tag": "USER TESTING × VALIDATION",
      "about.evidence.research.title": "Research Assistant",
      "about.evidence.research.body": "Worked alongside the Product Manager through the project process, focusing on user testing and feedback validation. I observed usability issues in academic workflows and helped the team check interaction and feature assumptions.",
      "about.timeline.kicker": "EXPERIENCE",
      "about.timeline.quickwis.time": "Jul–Sep 2025 · Aug 2026–Present",
      "about.timeline.quickwis.role": "QuickWis · Product Manager Assistant",
      "about.timeline.quickwis.body": "User support, product feedback, content and channel operations, plus iOS/ASO coordination.",
      "about.timeline.idl.role": "IDL Innovation Design Lab · UX Designer",
      "about.timeline.idl.body": "Contributed to B2B workflow discovery, user experience, and interaction design.",
      "about.timeline.gewu.role": "Gewu Innovation Design Lab · Program Coordinator",
      "about.timeline.gewu.body": "Coordinated collaboration and project progress across a 65-person student team.",
      "about.timeline.scholarship.title": "National Scholarship",
      "about.timeline.scholarship.body": "National-level academic honor · Sep 2026",
      "work.kicker": "PROJECT ORBIT / INTERACTIVE INDEX",
      "work.aria": "Selected case studies",
      "work.label": "SELECTED CASE STUDIES",
      "work.intro": "Focused on end-to-end product definition, complex interaction workflows, and practical delivery.",
      "work.count": "08 PROJECTS / 04 FEATURED",
      "work.viewAria": "Project view",
      "work.viewOrbit": "3D ORBIT",
      "work.viewGrid": "GRID VIEW",
      "work.title": "AI product definition, complex workflows, and 0-to-1 delivery for practical tools.",
      "work.help": "Select a side cover or project number to move continuously through all eight projects.",
      "lab.kicker": "LAB / RECENT EXPERIMENTS",
      "lab.title": "Making small things move.",
      "lab.subtitle": "Alongside case studies, I keep running small experiments with AI-assisted prototypes, product details, utility-app releases, and visual ideas.",
      "lab.styleswap.title": "StyleSwap",
      "lab.styleswap.body": "An independently built lightweight AI visual tool, taking the idea from requirement framing and prompt design to interface and working demo.",
      "lab.demo": "Open live demo ↗",
      "lab.impromptu.title": "Impromptu",
      "lab.impromptu.body": "A lightweight web tool exploring real-time response patterns and interaction rhythm in high-pressure situations.",
      "lab.visit": "Visit demo ↗",
      "lab.notes.title": "Product Notes",
      "lab.notes.body": "Observations on utility apps, AI products, content distribution, and the real path from interface to release.",
      "lab.archive.body": "An archived 3D project wheel kept as a standalone experiment without interrupting fast portfolio browsing.",
      "lab.archive.link": "Enter 3D experiment ↗",
      "contact.kicker": "CONTACT / REACH OUT",
      "contact.title": "Let's build the next thing.",
      "contact.status": "OPEN TO OPPORTUNITIES",
      "contact.roles": "Product & Experience · AI Product · Product-led Growth Operations",
      "contact.availability": "Available Oct 1, 2026 · 6 days/week · 3–6 months",
      "contact.location": "Beijing / Shanghai / Guangzhou / Shenzhen · Open to relocate",
      "contact.resumeEn": "Résumé — EN ↗",
      "contact.resumeZh": "Résumé — 中文 ↗",
      "contact.resumeEnAria": "Download Rodin's English PDF resume",
      "contact.resumeZhAria": "Download Rodin's Chinese PDF resume",
      "contact.stickyTitle": "// LEAVE A STICKY NOTE",
      "contact.addNote": "+ Add a note",
      "meta.title": "Rodin | Product & Experience Portfolio",
      "meta.description": "Rodin's product and experience portfolio: turning real user friction into testable decisions through UX, AI prototyping, and growth operations.",
      "meta.ogTitle": "Rodin | Product & Experience Portfolio",
      "meta.ogDescription": "Connecting product, experience, AI prototyping, and growth operations through real user signals.",
      "meta.jobTitle": "Product & Experience Practitioner",
      "meta.knowsAbout": ["AI Product Management", "Product Operations", "User Research", "UX Prototyping", "Growth Operations"],
    },
  };
  let currentLanguage = "zh";
  let controlsBound = false;

  function normalizeLanguage(value) {
    return value === "en" ? "en" : "zh";
  }

  function detectLanguage() {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (savedLanguage === "zh" || savedLanguage === "en") return savedLanguage;
    return window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
  }

  function t(key, language = currentLanguage) {
    return dictionaries[normalizeLanguage(language)][key]
      ?? dictionaries.zh[key]
      ?? null;
  }

  function applyText(root = document) {
    root.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = t(element.dataset.i18n);
      if (value !== null) element.textContent = value;
    });
    root.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = t(element.dataset.i18nHtml);
      if (value !== null) element.innerHTML = value;
    });
    root.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = t(element.dataset.i18nAriaLabel);
      if (value !== null) element.setAttribute("aria-label", value);
    });
  }

  function applyDocument() {
    document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
    });
    applyText(document);
    document.title = t("meta.title") || document.title;
    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (description) description.content = t("meta.description") || description.content;
    if (ogTitle) ogTitle.content = t("meta.ogTitle") || ogTitle.content;
    if (ogDescription) ogDescription.content = t("meta.ogDescription") || ogDescription.content;

    document.querySelectorAll("[data-resume-download]").forEach((link) => {
      const isEnglish = currentLanguage === "en";
      link.href = isEnglish ? "./assets/Rodin-Resume-EN.pdf" : "./assets/rodin-resume.pdf";
      link.download = isEnglish ? "Rodin-Resume-EN.pdf" : "Rodin-Resume-ZH.pdf";
    });

    const structuredData = document.querySelector('script[type="application/ld+json"]');
    if (structuredData) {
      try {
        const schema = JSON.parse(structuredData.textContent);
        schema.jobTitle = t("meta.jobTitle") || schema.jobTitle;
        schema.knowsAbout = t("meta.knowsAbout") || schema.knowsAbout;
        structuredData.textContent = JSON.stringify(schema);
      } catch (error) {
        console.warn("Unable to localize structured data", error);
      }
    }
  }

  function setLanguage(language, options = {}) {
    const nextLanguage = normalizeLanguage(language);
    const changed = nextLanguage !== currentLanguage;
    currentLanguage = nextLanguage;
    if (options.persist !== false) window.localStorage.setItem(STORAGE_KEY, currentLanguage);
    applyDocument();
    if (changed || options.forceEvent) {
      window.dispatchEvent(new CustomEvent("rodin:languagechange", {
        detail: { language: currentLanguage },
      }));
    }
    return currentLanguage;
  }

  function bindControls() {
    if (controlsBound) return;
    controlsBound = true;
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.language));
    });
  }

  function init() {
    bindControls();
    setLanguage(detectLanguage(), { persist: false, forceEvent: true });
    return currentLanguage;
  }

  function localizeProject(work) {
    if (currentLanguage !== "en") return { ...work };
    return { ...work, ...(projectTranslations[work.id] || {}) };
  }

  window.RodinI18n = {
    dictionaries,
    get current() {
      return currentLanguage;
    },
    t,
    setLanguage,
    init,
    localizeProject,
  };
})();
