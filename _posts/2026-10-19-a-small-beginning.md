---
layout: page
title: ここから、まずは一ページ
description: プロジェクトや考え、日々のことが、少しずつ育っていく場所に。
translation_key: beginning
date: 2026-10-19 09:00:00 +0900
related_posts: false
---

<div class="personal-language-switch" role="group" aria-label="Language" data-treehouse-page="articles:beginning">
  <button type="button" lang="ja" data-set-language="ja" aria-pressed="true">日本語</button>
  <button type="button" lang="en" data-set-language="en" aria-pressed="false">English</button>
  <button type="button" lang="zh-CN" data-set-language="zh" aria-pressed="false">中文</button>
</div>
<script type="application/json" id="treehouse-translations">{{ site.data.treehouse | jsonify | replace: '<', '\u003c' }}</script>
<script src="{{ '/assets/js/language.js' | relative_url }}" defer></script>

{% for language in site.data.treehouse %}
{% assign locale = language[0] %}{% assign t = language[1] %}
<div data-language="{{ locale }}" lang="{{ t.html_lang }}" {% unless locale == 'ja' %}hidden{% endunless %}>
<p class="personal-writing-meta"><time datetime="{{ page.date | date_to_xmlschema }}">{{ page.date | date: '%Y.%m.%d' }}</time><span>#{{ t.articles[page.translation_key].tag }}</span></p>
<div class="personal-article-body">{{ t.articles[page.translation_key].body | markdownify }}</div>
<p><a href="{{ '/blog/' | relative_url }}">← {{ t.ui.blog }}</a></p>
</div>
{% endfor %}
