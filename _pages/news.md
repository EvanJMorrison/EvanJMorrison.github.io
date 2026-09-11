---
layout: default
title: News
permalink: /news/
nav: true
nav_order: 3
---

<div class="post journal">
  <header class="post-header">
    <p class="eyebrow">From the lab and beyond</p>
    <h1 class="post-title">News</h1>
    <p class="post-description">Fellowships, research updates, and milestones from my scientific life.</p>
  </header>
  <div class="journal-list">
    {% assign announcements = site.news | sort: 'date' | reverse %}
    {% for item in announcements %}
      <article class="journal-entry{% if item.thumbnail %} with-thumbnail{% endif %}">
        {% if item.thumbnail %}<a href="{{ item.url | relative_url }}" tabindex="-1" aria-hidden="true"><img class="journal-thumbnail" src="{{ item.thumbnail | relative_url }}" alt="" loading="lazy" width="600" height="400"></a>{% endif %}
        <div>
          <p class="post-meta">{% include display-date.liquid item=item %}</p>
          <h2><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
          <p>{{ item.description }}</p>
          <a class="text-link" href="{{ item.url | relative_url }}">Read announcement<span class="sr-only">: {{ item.title }}</span></a>
        </div>
      </article>
    {% endfor %}
  </div>
</div>
