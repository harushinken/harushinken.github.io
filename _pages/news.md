---
layout: page
title: 近況
description: 最近のことを、少しずつ。
permalink: /news/
nav: true
nav_order: 4
---

<div class="personal-language-switch" role="group" aria-label="Language" data-treehouse-page="news">
  <button type="button" lang="ja" data-set-language="ja" aria-pressed="true">日本語</button>
  <button type="button" lang="en" data-set-language="en" aria-pressed="false">English</button>
  <button type="button" lang="zh-CN" data-set-language="zh" aria-pressed="false">中文</button>
</div>
<script type="application/json" id="treehouse-translations">{{ site.data.treehouse | jsonify | replace: '<', '\u003c' }}</script>
<script src="{{ '/assets/js/language.js' | relative_url }}" defer></script>
{% for language in site.data.treehouse %}
{% assign locale = language[0] %}{% assign t = language[1] %}
<div data-language="{{ locale }}" lang="{{ t.html_lang }}" {% unless locale == 'ja' %}hidden{% endunless %}>
<p class="personal-lead">{{ t.news.intro }}</p>
<div class="personal-news-list">
{% assign updates = site.data.news.items | sort: 'date' | reverse %}
{% for item in updates %}
  <article class="personal-news-item" id="update-{{ locale }}-{{ forloop.index }}">
<time datetime="{{ item.date }}">{{ item.date | date: '%Y.%m.%d' }}</time>
<div><h2>{{ item.title[locale] | escape }}</h2><p>{{ item.body[locale] | escape }}</p>{% if item.url %}<a href="{{ item.url | relative_url }}">{{ t.news.more }}</a>{% endif %}</div>
  </article>
{% else %}<p class="personal-note">{{ t.news.empty }}</p>{% endfor %}
</div>
</div>
{% endfor %}
