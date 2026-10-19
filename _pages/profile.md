---
layout: page
title: Profile
description: これまでの歩み、研究、つくったもの、そして好きなこと。
permalink: /profile/
nav: true
nav_order: 1
---

<div class="personal-language-switch" role="group" aria-label="Language" data-treehouse-page="profile">
  <button type="button" lang="ja" data-set-language="ja" aria-pressed="true">日本語</button>
  <button type="button" lang="en" data-set-language="en" aria-pressed="false">English</button>
  <button type="button" lang="zh-CN" data-set-language="zh" aria-pressed="false">中文</button>
</div>
<script type="application/json" id="treehouse-translations">{{ site.data.treehouse | jsonify | replace: '<', '\u003c' }}</script>
<script src="{{ '/assets/js/language.js' | relative_url }}" defer></script>
{% for language in site.data.treehouse %}
{% assign locale = language[0] %}{% assign t = language[1] %}
<div data-language="{{ locale }}" lang="{{ t.html_lang }}" {% unless locale == 'ja' %}hidden{% endunless %}>
<section class="personal-profile-intro" aria-label="{{ t.profile.about }}">
  <p class="personal-eyebrow">Jinqian Zhang</p>
  <p class="personal-role" lang="en">{{ site.data.profile.status }}</p>
  <p class="personal-lead">{{ t.profile.bio }}</p>
</section>
<section class="personal-section">
  <h2>{{ t.profile.education }}</h2>
  <ol class="personal-timeline" lang="en">
  {% for education in site.data.profile.education %}
<li><p class="personal-timeline-date">{{ education.period }}</p><div>
<h3>{{ education.institution | escape }}</h3>
<p class="personal-degree">{{ education.degree | escape }}</p>
      {% if education.school %}<p>{{ education.school | escape }}{% if education.program %}<br>{{ education.program | escape }}{% endif %}</p>{% endif %}
      {% if education.lab %}<p><a href="{{ education.lab_url }}">{{ education.lab | escape }}</a></p>{% endif %}
<p class="personal-muted">{{ education.location | escape }}</p>
</div></li>
  {% endfor %}
  </ol>
</section>
<section class="personal-section">
  <h2>{{ t.profile.research }}</h2>
  <ul class="personal-tags" lang="en">{% for interest in site.data.profile.research_interests %}<li>{{ interest | escape }}</li>{% endfor %}</ul>
</section>
<section class="personal-section">
  <h2>{{ t.profile.publications }}</h2>
  <ol class="personal-publications" lang="en">
  {% for paper in site.data.profile.publications %}
<li><p class="personal-publication-meta"><span class="personal-status">{{ paper.status }}</span><span>{{ paper.venue }}</span></p>
<p class="personal-citation">{{ paper.citation | escape }}</p>
      {% if paper.doi %}<a href="{{ paper.doi }}">{{ paper.doi }} ↗</a>{% endif %}
</li>
  {% endfor %}
  </ol>
</section>
<section class="personal-section">
  <h2>{{ t.profile.current_work }}</h2>
  <p><span class="personal-status" lang="en">In preparation</span></p>
  <p class="personal-lead">{{ t.profile.work_body }}</p>
</section>
<section class="personal-section">
  <h2>{{ t.profile.skills }}</h2>
  <div class="personal-interest-grid">
<article><h3>{{ t.profile.sports }}</h3><ul>{% for sport in t.profile.sports_items %}<li>{{ sport }}</li>{% endfor %}</ul></article>
<article><h3>{{ t.profile.music }}</h3><p class="personal-instrument"><strong lang="en">Clarinet</strong><span>：{{ t.profile.clarinet }}</span></p><p class="personal-instrument"><strong lang="en">Aerophone</strong></p></article>
<article><h3>{{ t.profile.interests }}</h3><ul>{% for interest in t.profile.interest_items %}<li>{{ interest }}</li>{% endfor %}</ul></article>
  </div>
</section>
{% if site.personal_cv_pdf and site.personal_cv_pdf != '' %}
<section class="personal-section"><h2>CV</h2><a class="personal-button" href="{{ site.personal_cv_pdf | relative_url }}">{{ t.ui.download }}</a></section>
{% endif %}
</div>
{% endfor %}
