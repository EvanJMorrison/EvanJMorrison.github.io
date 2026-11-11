---
layout: page
title: Philosophy
permalink: /philosophy/
description: Teaching, mentoring, and learning.
nav: true
nav_order: 4
dropdown: true
children:
  - title: Teaching
    permalink: /philosophy/#teaching
  - title: Mentoring
    permalink: /philosophy/#mentoring
---

My teaching and mentoring experience spans classroom instruction, laboratory research, and community outreach.

<nav class="journal-links" aria-label="Philosophy sections">
  <a href="#teaching">Teaching</a>
  <a href="#mentoring">Mentoring</a>
</nav>

## Teaching

<!-- Add your teaching philosophy here when ready. -->

### Teaching experience

<ul>
  {% for entry in site.data.cv.cv.sections.Teaching %}
    <li><strong>{{ entry.label | escape }}</strong><br>{{ entry.details | escape }}</li>
  {% endfor %}
</ul>

## Mentoring

<!-- Add your mentoring philosophy here when ready. -->

### Research mentoring

<ul>
  {% for entry in site.data.cv.cv.sections.Mentoring %}
    <li><strong>{{ entry.label | escape }}</strong><br>{{ entry.details | escape }}</li>
  {% endfor %}
</ul>

### Community mentoring

My community mentoring experience includes Aurora Youth Options (2012–2014), Bryant Webster STEM Scholar Mentor (2020–2023), and CC2STEM Mentor (2023).
