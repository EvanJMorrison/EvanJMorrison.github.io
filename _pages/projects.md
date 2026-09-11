---
layout: page
title: Research
permalink: /projects/
description: How cells control protein fate, from ribosomes to degradation signals.
nav: true
nav_order: 1
---

<div class="research-list">
{% assign research_projects = site.projects | sort: 'importance' %}
{% for project in research_projects %}
  <article class="research-entry">
    <p class="eyebrow">{{ project.stage }}</p>
    <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
    <p>{{ project.description }}</p>
    <a class="text-link" href="{{ project.url | relative_url }}">Read about this research<span class="sr-only">: {{ project.title }}</span></a>
  </article>
{% endfor %}
</div>
