---
layout: page
title: この個人サイト
description: 学術向けのテンプレートから、自分らしい場所をつくる。
translation_key: treehouse
category: 個人のスペース
importance: 1
---

<div class="personal-language-switch" role="group" aria-label="Language" data-treehouse-page="project_entries:treehouse">
  <button type="button" lang="ja" data-set-language="ja" aria-pressed="true">日本語</button>
  <button type="button" lang="en" data-set-language="en" aria-pressed="false">English</button>
  <button type="button" lang="zh-CN" data-set-language="zh" aria-pressed="false">中文</button>
</div>
<script type="application/json" id="treehouse-translations">{{ site.data.treehouse | jsonify | replace: '<', '\u003c' }}</script>
<script src="{{ '/assets/js/language.js' | relative_url }}" defer></script>

{% for language in site.data.treehouse %}
{% assign locale = language[0] %}{% assign t = language[1] %}
<div data-language="{{ locale }}" lang="{{ t.html_lang }}" {% unless locale == 'ja' %}hidden{% endunless %}>
<div class="personal-article-body">{{ t.project_entries[page.translation_key].body | markdownify }}</div>
<p><a href="https://github.com/harushinken/harushinken.github.io">{{ t.ui.source }}</a></p>
<p><a href="{{ '/profile/' | relative_url }}">← Profile</a></p>
</div>
{% endfor %}
