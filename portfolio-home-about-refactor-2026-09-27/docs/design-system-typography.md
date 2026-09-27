# Rodin Portfolio Typography & Spacing System

面向求职作品集的中英双语排版规范。目标是让招聘者先读懂定位与证据，再感知视觉风格；克制使用大字号与粗体，保持清晰、专业和可信。

## 1. 设计原则

1. 每个视区只保留一个最高层级标题，其他信息主动退后。
2. 标题负责定位，正文负责证据；长段落不使用粗体。
3. 使用 8px 基础节奏组织间距，优先用留白区分层级。
4. 中英文共享层级，不要求逐字占用相同行数，但标题最多两行。
5. 首页 Hero 的 `RODIN'S PORTFOLIO` 是品牌签名字样，可独立于内容标题系统。

## 2. 字体角色

| 角色 | 字体栈 | 使用场景 |
| --- | --- | --- |
| Editorial Sans | `-apple-system, BlinkMacSystemFont, "SF Pro Display", "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif` | 页面标题、章节标题、正文、卡片标题 |
| Mono Utility | 现有 `--font-mono-2` | 编号、日期、标签、状态、数据 |

原则：内容不混用多套展示字体；等宽字体只表达“系统信息”，不承担长文本阅读。

## 3. 字号层级

| Token | Desktop | Mobile | 字重 | 行高 | 用途 |
| --- | --- | --- | --- | --- | --- |
| `--type-display` | 64–84px | 44–56px | 600 | 1.02–1.04 | About 主标题 |
| `--type-section` | 40–56px | 36–48px | 600 | 1.08 | 工作方法、证据、Lab、Contact、项目索引 |
| `--type-subsection` | 28–36px | 28–36px | 600 | 1.16 | 卡片与步骤标题 |
| `--type-lead` | 17–20px | 17–20px | 400 | 1.70 | About 介绍 |
| `--type-body` | 15–17px | 15–17px | 400 | 1.70 | 说明与证据正文 |
| Utility | 12–14px | 12–14px | 500–600 | 1.40–1.50 | 标签、日期、状态 |

### 标题规则

- 中文与英文标题最多两行，优先使用 `text-wrap: balance`。
- 桌面端中文项目总述与方法论标题优先保持一行；移动端恢复自然换行，不裁切内容。
- 大标题最大宽度约 12–16 个汉字；英文以自然短语断行，不手工堆叠单字。
- 内容标题不使用 800/900 字重；600 已足够建立层级。
- 字距仅做轻微收紧：展示标题约 `-0.035em`，正文约 `-0.008em`。
- 不对中文内容强制全大写、描边或像素化。

### 正文规则

- Lead 最大宽度 42rem，正文单行保持舒适阅读长度。
- 正文统一 Regular，不用粗体覆盖整段；仅关键词或数字可局部强调。
- 中文行高不低于 1.65，中英文混排优先 1.70。

## 4. 间距系统

| Token | 值 | 建议用途 |
| --- | --- | --- |
| `--space-1` | 8px | 标签内部、微间距 |
| `--space-2` | 16px | 标题与辅助信息 |
| `--space-3` | 24px | 标题与正文 |
| `--space-4` | 32px | 正文与事实信息 |
| `--space-6` | 48px | 模块内部大间距 |
| `--space-8` | 64px | 相邻内容模块 |
| `--space-12` | 96px | 独立章节分隔，仅在空间充足时使用 |

不要为了“高级感”制造无意义的大空白。桌面 About 首屏中，介绍、求职信息和肖像应构成一个完整阅读单元；后续章节间距以 64px 左右为基准。

## 5. 页面映射

| 页面区域 | 层级 |
| --- | --- |
| Hero 海报字样 | Brand display exception |
| About「从信号到产品」 | Display |
| 工作方法 / 可信证据 / 项目索引 / Lab / Contact | Section |
| 方法步骤 / 证据卡 / Lab 卡片 | Subsection |
| About 自述 | Lead |
| 项目说明 / 卡片描述 / 经历说明 | Body |
| Kicker / 日期 / 状态 / 数字 | Utility mono |

## 6. 中英双语与响应式

- 中文标题优先语义完整；英文标题允许在短语边界换行。
- 英文通常比中文更长，容器应允许两行，不依赖 `nowrap + ellipsis`。
- 860px 以下改为单栏；560px 以下显示标题降至 44–56px、章节标题降至 36–48px。
- 肖像保持 4:5，不通过固定高度拉伸；事实信息在窄屏维持 2×2，避免过长纵向列表。
- 固定导航使用高不透明度暖白遮罩与轻微背景模糊，避免页面文字穿透 Tab 栏。

## 7. 参考依据

- [Apple Human Interface Guidelines — Typography](https://developer.apple.com/cn/design/human-interface-guidelines/typography)
- [Apple Human Interface Guidelines — Design principles](https://developer.apple.com/design/human-interface-guidelines/design-principles)
- [IBM Carbon Design System — Typography](https://carbondesignsystem.com/elements/typography/overview/)
- [IBM Carbon Design System — 2x Grid](https://carbondesignsystem.com/elements/2x-grid/overview/)

本规范提取两者的共性：清晰层级、有限字重、可读正文与一致空间节奏；视觉颜色、海报语言与品牌性仍保留 Rodin Portfolio 自身风格。
