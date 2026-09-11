---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 3
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 6
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 2
---

<div class="post journal">
  <header class="post-header">
    <p class="eyebrow">{{ site.blog_name }}</p>
    <h1 class="post-title">Blog</h1>
    <p class="post-description">{{ site.blog_description }}</p>
    <nav class="journal-links" aria-label="Browse writing">
      <a href="{{ '/blog/category/milestones/' | relative_url }}">PhD & career milestones</a>
      <a href="{{ '/books/' | relative_url }}">Book reviews</a>
      <a href="{{ '/feed.xml' | relative_url }}">RSS feed</a>
    </nav>
  </header>
  {% if page.pagination.enabled %}{% assign postlist = paginator.posts %}{% else %}{% assign postlist = site.posts %}{% endif %}
  <div class="journal-list">
  {% for post in postlist %}
    <article class="journal-entry{% if post.thumbnail %} with-thumbnail{% endif %}">
      {% if post.thumbnail %}<a href="{{ post.url | relative_url }}" tabindex="-1" aria-hidden="true"><img class="journal-thumbnail" src="{{ post.thumbnail | relative_url }}" alt="" loading="lazy" width="600" height="400"></a>{% endif %}
      <div>
        <p class="post-meta">{% include display-date.liquid item=post %}{% if post.categories.size > 0 %} · {{ post.categories | join: ' · ' }}{% endif %}</p>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p>{{ post.description }}</p>
        <a class="text-link" href="{{ post.url | relative_url }}">Read post<span class="sr-only">: {{ post.title }}</span></a>
      </div>
    </article>
  {% endfor %}
  </div>
  {% if page.pagination.enabled %}{% include pagination.liquid %}{% endif %}
</div>
