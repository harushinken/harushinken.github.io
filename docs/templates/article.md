---
layout: page
title: 日本語のタイトル
description: 日本語の概要。
date: 2026-10-20 09:00:00 +0900
related_posts: false
translations:
  ja:
    title: 日本語のタイトル
    description: 日本語の概要。
    tag: 考察
  en:
    title: An English title
    description: A short description.
    tag: Ideas
  zh:
    title: 中文标题
    description: 用一句话介绍这篇文章。
    tag: 想法
---

<div class="personal-language-switch" role="group" aria-label="Language" data-treehouse-page="article">
  <button type="button" lang="ja" data-set-language="ja" aria-pressed="true">日本語</button>
  <button type="button" lang="en" data-set-language="en" aria-pressed="false">English</button>
  <button type="button" lang="zh-CN" data-set-language="zh" aria-pressed="false">中文</button>
</div>
<script type="application/json" id="treehouse-translations">{{ site.data.treehouse | jsonify | replace: '<', '\u003c' }}</script>
<script type="application/json" id="treehouse-article">{{ page.translations | jsonify | replace: '<', '\u003c' }}</script>
<script src="{{ '/assets/js/language.js' | relative_url }}" defer></script>
<p class="personal-writing-meta"><time datetime="{{ page.date | date_to_xmlschema }}">{{ page.date | date: '%Y.%m.%d' }}</time><span data-article-tag>{{ page.translations.ja.tag | escape }}</span></p>

<!-- prettier-ignore-start -->

<!-- zh: edit the Markdown below -->

{% capture article_zh %}
在这里写中文正文。

## 一个小标题

继续写你的想法。
{% endcapture %}

<!-- ja: edit the Markdown below -->

{% capture article_ja %}
ここに日本語の本文を書きます。

## 小見出し

考えを続けます。
{% endcapture %}

<!-- en: edit the Markdown below -->

{% capture article_en %}
Write the English article here.

## A section heading

Continue your thoughts.
{% endcapture %}

<!-- prettier-ignore-end -->

{% for language in site.data.treehouse %}
{% assign locale = language[0] %}{% assign t = language[1] %}
<section data-language="{{ locale }}" lang="{{ t.html_lang }}" {% unless locale == 'ja' %}hidden{% endunless %}>
  <div class="personal-article-body">
    {% case locale %}
    {% when 'ja' %}{{ article_ja | markdownify }}
    {% when 'en' %}{{ article_en | markdownify }}
    {% when 'zh' %}{{ article_zh | markdownify }}
    {% endcase %}
  </div>
  <p class="personal-article-back"><a href="{{ '/blog/' | relative_url }}">← {{ t.ui.blog }}</a></p>
</section>
{% endfor %}
