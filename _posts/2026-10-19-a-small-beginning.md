---
layout: page
title: ここから、まずは一ページ
description: プロジェクトや考え、日々のことが、少しずつ育っていく場所に。
date: 2026-10-19 09:00:00 +0900
related_posts: false
translations:
  ja:
    title: ここから、まずは一ページ
    description: プロジェクトや考え、日々のことが、少しずつ育っていく場所に。
    tag: 日々のメモ
  en:
    title: Starting here, with a single page
    description: A place for projects, thoughts, and everyday moments to grow, little by little.
    tag: Notes
  zh:
    title: 这里，从一页开始
    description: 给项目、想法和日常，留一个可以慢慢生长的地方。
    tag: 随记
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
欢迎来到这里。

这个小站想做的事情很简单：记录做过的事，也给还没成形的想法留一点空间。

有些内容会是项目和作品，有些可能是读完一本书后的几句话，也可能只是日常里一个值得记下的瞬间。

先从这一页开始，之后慢慢写。
{% endcapture %}

<!-- ja: edit the Markdown below -->

{% capture article_ja %}
ようこそ。

この小さなサイトでやりたいことは、シンプルです。つくったものを記録し、まだ形になっていない考えにも、少しだけ居場所をつくること。

プロジェクトや作品の話もあれば、本を読んだあとの短い感想や、日常のなかで書き留めておきたくなった瞬間のこともあると思います。

まずはこの一ページから。あとは、少しずつ書いていきます。
{% endcapture %}

<!-- en: edit the Markdown below -->

{% capture article_en %}
Welcome.

The idea behind this little site is simple: keep a record of things I’ve made, and leave some room for thoughts that haven’t quite taken shape yet.

Some posts will be about projects and creations. Others might be a few words after finishing a book, or a moment from everyday life that felt worth writing down.

For now, I’m starting with this one page. More words will follow, little by little.
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
