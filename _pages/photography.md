---
layout: page
title: 写真
description: 歩いた先で出会った景色を、写真に。
permalink: /photography/
nav: true
nav_order: 3
---

<div class="personal-language-switch" role="group" aria-label="Language" data-treehouse-page="photography">
  <button type="button" lang="ja" data-set-language="ja" aria-pressed="true">日本語</button>
  <button type="button" lang="en" data-set-language="en" aria-pressed="false">English</button>
  <button type="button" lang="zh-CN" data-set-language="zh" aria-pressed="false">中文</button>
</div>
<script type="application/json" id="treehouse-translations">{{ site.data.treehouse | jsonify | replace: '<', '\u003c' }}</script>
<script src="{{ '/assets/js/language.js' | relative_url }}" defer></script>
{% for language in site.data.treehouse %}
{% assign locale = language[0] %}{% assign t = language[1] %}
<div data-language="{{ locale }}" lang="{{ t.html_lang }}" {% unless locale == 'ja' %}hidden{% endunless %}>
<p class="personal-lead">{{ t.photos.intro }}</p>
{% if site.data.photography.photos.size > 0 %}
<div class="personal-photo-grid">
{% for photo in site.data.photography.photos %}
  {% assign photo_title = photo.title[locale] | default: photo.title.en | default: photo.title.zh %}
  {% assign photo_alt = photo.alt[locale] | default: photo_title %}
  <figure class="personal-photo">
<a href="{{ photo.image | relative_url }}" target="_blank" rel="noopener"><img src="{{ photo.image | relative_url }}" alt="{{ photo_alt | escape }}" loading="lazy" decoding="async"></a>
<figcaption><h2>{{ photo_title | escape }}</h2>{% if photo.location %}<p class="personal-muted">{{ photo.location | escape }}{% if photo.date %} · {{ photo.date | date: '%Y.%m.%d' }}{% endif %}</p>{% elsif photo.date %}<p class="personal-muted">{{ photo.date | date: '%Y.%m.%d' }}</p>{% endif %}{% if photo.caption[locale] %}<p>{{ photo.caption[locale] | escape }}</p>{% endif %}<a class="personal-text-link" href="{{ photo.image | relative_url }}" target="_blank" rel="noopener">{{ t.photos.view_full }}</a></figcaption>
  </figure>
{% endfor %}
</div>
{% else %}
<section class="personal-photo-empty"><svg width="64" height="52" viewBox="0 0 64 52" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="4" y="12" width="56" height="36" rx="7"/><path d="M20 12l5-8h14l5 8"/><circle cx="32" cy="30" r="11"/><path d="M49 20h4"/></svg><h2>{{ t.photos.empty_title }}</h2><p>{{ t.photos.empty_body }}</p></section>
{% endif %}
</div>
{% endfor %}
