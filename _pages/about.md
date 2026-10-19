---
layout: default
title: ホーム
description: 私のツリーハウスへようこそ。
permalink: /
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/personal.css' | relative_url }}">
<div class="personal-language-switch" role="group" aria-label="Language" data-treehouse-page="home">
  <button type="button" lang="ja" data-set-language="ja" aria-pressed="true">日本語</button>
  <button type="button" lang="en" data-set-language="en" aria-pressed="false">English</button>
  <button type="button" lang="zh-CN" data-set-language="zh" aria-pressed="false">中文</button>
</div>
<script type="application/json" id="treehouse-translations">{{ site.data.treehouse | jsonify | replace: '<', '\u003c' }}</script>
<script src="{{ '/assets/js/language.js' | relative_url }}" defer></script>

{% for language in site.data.treehouse %}
{% assign locale = language[0] %}{% assign t = language[1] %}
<div data-language="{{ locale }}" lang="{{ t.html_lang }}" {% unless locale == 'ja' %}hidden{% endunless %}>
<header class="post-header"><h1 class="personal-home-title">{{ t.home.greeting }}</h1><p class="post-description">{{ t.pages.home.description }}</p></header>
<section class="personal-hero" aria-label="{{ t.ui.home }}">
  <div>
    <p class="personal-eyebrow">{{ t.home.eyebrow }}</p>
    <p class="personal-lead">{{ t.home.lead }}</p>
    <p>{{ t.home.intro }}</p>
    <div class="personal-actions">
      <a class="personal-button" href="{{ '/profile/' | relative_url }}">{{ t.home.work_button }} <span aria-hidden="true">↗</span></a>
      <a class="personal-text-link" href="{{ '/photography/' | relative_url }}">{{ t.home.photo_button }} <span aria-hidden="true">↗</span></a>
    </div>
  </div>
  <figure class="personal-portrait">
    <img src="{{ '/assets/img/shinken.jpg' | relative_url }}" alt="{{ t.ui.portrait }}" width="420" height="480" fetchpriority="high">
    <figcaption>Jinqian Zhang / @harushinken</figcaption>
  </figure>
  <figure class="personal-quote">
    <blockquote><p>“{{ t.home.quote.text | escape }}”</p></blockquote>
    <figcaption><span class="personal-quote-book">—<cite>{{ t.home.quote.book }}</cite></span><small>{% if t.home.quote.source_url != '' %}<a href="{{ t.home.quote.source_url }}">{{ t.home.quote.credit | escape }}</a>{% else %}{{ t.home.quote.credit | escape }}{% endif %}</small></figcaption>
  </figure>
</section>
<section class="personal-section" aria-labelledby="explore-{{ locale }}">
  <p class="personal-eyebrow">A FEW PLACES TO START</p>
  <h2 id="explore-{{ locale }}">{{ t.home.explore }}</h2>
  <div class="personal-grid">
    <a class="personal-card" href="{{ '/blog/' | relative_url }}"><span class="personal-number">01 / ARTICLES</span><h3>{{ t.ui.blog }} ↗</h3><p>{{ t.home.articles_card }}</p></a>
    <a class="personal-card" href="{{ '/photography/' | relative_url }}"><span class="personal-number">02 / PHOTOGRAPHY</span><h3>{{ t.ui.photography }} ↗</h3><p>{{ t.home.photo_card }}</p></a>
    <a class="personal-card" href="{{ '/profile/' | relative_url }}"><span class="personal-number">03 / PROFILE</span><h3>Profile ↗</h3><p>{{ t.home.profile_card }}</p></a>
  </div>
</section>
<section class="personal-section" aria-labelledby="writing-{{ locale }}">
  <div class="personal-section-heading"><h2 id="writing-{{ locale }}">{{ t.home.recent }}</h2><a href="{{ '/blog/' | relative_url }}">{{ t.ui.all_posts }}</a></div>
  {% for post in site.posts limit:3 %}
  {% assign article = post.translations[locale] %}
  <a class="personal-entry" href="{{ post.url | relative_url }}"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y.%m.%d' }}</time><span>{{ article.title | default: post.title | escape }}</span><span aria-hidden="true">↗</span></a>
  {% else %}<p class="personal-muted">{{ t.ui.empty_posts }}</p>{% endfor %}
</section>
</div>
{% endfor %}
