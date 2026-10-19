---
layout: page
title: ブログ
description: 考えたこと、試したこと、日々のこと。
permalink: /blog/
nav: true
nav_order: 2
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 8
  sort_field: date
  sort_reverse: true
---

<div class="personal-language-switch" role="group" aria-label="Language" data-treehouse-page="blog">
  <button type="button" lang="ja" data-set-language="ja" aria-pressed="true">日本語</button>
  <button type="button" lang="en" data-set-language="en" aria-pressed="false">English</button>
  <button type="button" lang="zh-CN" data-set-language="zh" aria-pressed="false">中文</button>
</div>
<script type="application/json" id="treehouse-translations">{{ site.data.treehouse | jsonify | replace: '<', '\u003c' }}</script>
<script src="{{ '/assets/js/language.js' | relative_url }}" defer></script>

{% for language in site.data.treehouse %}
{% assign locale = language[0] %}{% assign t = language[1] %}
<div data-language="{{ locale }}" lang="{{ t.html_lang }}" {% unless locale == 'ja' %}hidden{% endunless %}>
<p class="personal-lead">{{ t.blog.lead }}</p>
{% if paginator %}{% assign entries = paginator.posts %}{% else %}{% assign entries = site.posts %}{% endif %}
<div class="personal-writing-list">
  {% for post in entries %}
  {% assign article = t.articles[post.translation_key] %}
  <article class="personal-writing">
    <div class="personal-writing-meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y.%m.%d' }}</time>{% if article.tag %}<span>#{{ article.tag | escape }}</span>{% endif %}</div>
    <h2><a href="{{ post.url | relative_url }}">{{ article.title | default: post.title | escape }}</a></h2>
    <p>{{ article.description | default: post.description | escape }}</p>
    <a class="personal-text-link" href="{{ post.url | relative_url }}">{{ t.ui.read_more }}</a>
  </article>
  {% else %}<p class="personal-note">{{ t.ui.empty_posts }}</p>{% endfor %}
</div>
{% if paginator.total_pages > 1 %}
<nav class="personal-pagination" aria-label="{{ t.ui.pagination }}">
{% if paginator.previous_page %}<a href="{{ paginator.previous_page_path | relative_url }}">{{ t.ui.previous }}</a>{% endif %}
<span>{{ paginator.page }} / {{ paginator.total_pages }}</span>
{% if paginator.next_page %}<a href="{{ paginator.next_page_path | relative_url }}">{{ t.ui.next }}</a>{% endif %}
</nav>
{% endif %}
</div>
{% endfor %}
