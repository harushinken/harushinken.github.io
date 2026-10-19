# 维护我的三语树屋

网站导航顺序为：首页、Profile、博客、摄影作品、新鲜事。
Profile 包含个人经历、研究、论文和技能兴趣。原 `/cv/`、`/projects/` 链接会跳转到 `/profile/`。
默认显示日语；每页都有 **日本語 / English / 中文** 按钮。
切换语言后仍停留在当前页面或文章，浏览器会记住选择。浏览器禁止存储时，当页切换仍然可用。
同一篇文章只对应一个网址，不会在文章列表出现三份重复内容。

## 内容放在哪里

所有三语文案集中在 `_data/treehouse.yml`，顶层依次是 `ja`、`en`、`zh`。
三个语言节点的结构相同：

- `ui`：导航、按钮、页脚等共用文字。
- `pages`：页面标题和摘要。
- `home`：首页介绍、卡片和“欢迎来到我的树屋”。
- `profile`：个人介绍、当前研究和技能兴趣的三语说明。
- `news` / `photos`：新鲜事、摄影作品页面的三语界面文字。
- `articles`：博客文章，含标题、摘要、标签和正文。
- `project_entries`：项目，含标题、摘要、类别和正文。

先修改中文 `zh` 下的内容，再补齐同名日英字段即可。三语应表达同一份内容。
正文 `body` 支持 Markdown；修改段落时建议使用 YAML 的 `|` 多行格式。
教育经历、研究领域和论文引用保存在 `_data/profile.yml`，在三个语言版本中使用同一份英文资料。
个人介绍、当前研究说明和兴趣介绍在三语中对应呈现。
论文状态明确区分 Published、Submitted 和 In preparation；年份及引用按本人提供的资料保留。
首页“打个招呼”区块已删除；以后可以再添加真实联系方式。
博士身份说明只显示在 Profile。首页照片下方放置《悉达多》引文，译本出处见 [引文来源说明](QUOTE-SOURCES.md)。

## 写一篇博客

最方便的方式：把中文稿交给助手，补齐日语、英语并添加到网站。
自己编辑时，按下面两步操作。

### 1. 添加三语正文

在 `_data/treehouse.yml` 的 `ja.articles`、`en.articles`、`zh.articles` 下分别新增同一个键，例如 `a-new-note`。
中文版本可以这样写，日英版本使用相同结构和对应译文：

```yaml
articles:
  a-new-note:
    title: 今天想记下的一件事
    description: 用一句话介绍这篇文章。
    tag: 随记
    body: |
      这里开始写正文。

      ## 一个小标题

      继续写你的想法。
```

注意：在原有 `articles` 节点下追加文章，不要重复创建顶层 `articles` 键。

### 2. 注册文章

复制 `_posts/2026-10-19-a-small-beginning.md`，修改文件名为实际日期和英文短名。
保留语言按钮、翻译数据和渲染循环，只修改文件顶部：

```yaml
---
layout: page
title: 記事の日本語タイトル
description: 記事の日本語の概要。
translation_key: a-new-note
date: 2026-10-20 09:00:00 +0900
related_posts: false
---
```

`translation_key` 必须和三语正文的键一致。
顶部日文标题与摘要用于初次加载、无 JavaScript 浏览和 RSS 元数据，需与 `ja` 下的译文一致。
日期请使用实际发布日期。未来日期的文章默认暂不显示，定时发布还需要届时触发一次部署。

## 添加图片

把图片上传到 `assets/img/blog/`，在三语正文中使用同一图片路径，各自翻译图片说明：

```markdown
![用一句话描述图片](/assets/img/blog/my-photo.jpg)
```

此站点发布在域名根路径，所以直接使用 `/assets/` 开头的路径。
正文数据不会再次执行 Liquid，因此不要在 `body` 中放 `{{ ... }}` 或 `{% ... %}`。
不准备公开的草稿先保存在网站仓库以外；仅隐藏语言区块不会隐藏源代码里的内容。

## 增加项目

在三语的 `project_entries` 下添加同一个键，包含 `title`、`description`、`category` 和 `body`。
复制 `_projects/personal-home.md`，修改顶部日文标题、摘要和 `translation_key`。
`importance` 越小，显示越靠前。

## 上传摄影作品

完整步骤见 [摄影作品上传说明](PHOTOGRAPHY.md)：将图片上传到 `assets/img/photography/`，再在 `_data/photography.yml` 添加一条记录。
不需要三语各上传一次照片。图片原始比例保留，点击后在新标签页查看上传的完整图片。

## 更新新鲜事

在 `_data/news.yml` 的 `items` 下追加一条记录，包含 `date`、三语 `title`、三语 `body`，以及可选的 `url`。
例如：

```yaml
items:
  - date: "2026-10-19"
    title:
      ja: 新しいお知らせ
      en: A new update
      zh: 一条新鲜事
    body:
      ja: お知らせの内容。
      en: A short update.
      zh: 在这里填写简短的近况。
    url: /profile/
```

在已有的 `items` 列表下追加，不要重复创建 `items` 键。最新日期会排在前面，首页显示最近三条。
这里只记录短消息，较长的内容仍放在博客。

## 更新 Profile 和 CV

在 `_data/profile.yml` 更新英文教育经历、研究领域、论文及其状态。
在 `_data/treehouse.yml` 三语的 `profile` 节点中更新个人介绍、研究近况、运动、乐器和兴趣。
已使用的研究室名称对应 [JAIST 官方实验室介绍](https://www.jaist.ac.jp/laboratory/aiw/okada.html)。
上传真实 PDF 到 `assets/pdf/` 后，将 `_config.yml` 末尾改为：

```yaml
personal_cv_pdf: "/assets/pdf/jinqian-zhang-cv.pdf"
```

三个语言的 Profile 页面会使用同一份 PDF；下载按钮文字会随语言切换。
未上传 PDF 时，不显示下载区块。
当前使用普通页面，示例 RenderCV 流程保存在 `docs/template-examples/workflows/render-cv.yml`，没有运行。

## 外观与语言按钮

- `assets/css/personal.css`：配色、卡片、照片、语言按钮和移动端样式。
- `assets/js/language.js`：切换内容、导航和页脚，更新文档语言和页面标题，记住语言选择。
- `_pages/`：页面结构；`_posts/` 和 `_projects/`：文章与项目的注册文件。

所有语言内容会在构建时写入 HTML，没有在线翻译服务或额外运行依赖。
没有 JavaScript 时显示日语。不要把隐藏的语言区块当作保密措施。
没有复制或覆盖主题 gem 的布局文件，也没有添加 CSS 构建流程。

## 发布与检查

在 `main` 分支修改，提交后通过 **Actions → Deploy site** 查看状态。
不要直接修改自动生成的 `gh-pages` 分支。
本站 `baseurl` 保持空字符串，时区为 `Asia/Tokyo`。

发布前确认三语内容对应、切换后停留在当前文章、手机页面没有横向溢出、PDF 和图片链接有效。
首次部署设置仍参考 `docs/INSTALL.md`。
原模板示例保存在 `docs/template-examples/`，不会进入网站、搜索或站点地图。
