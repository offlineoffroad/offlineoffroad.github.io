---
layout: default
title: Nutrition
permalink: /nutrition/
---

<ul class="">
{% for post in site.nutrition %}
  <li>
    <a class="" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    <small class="">{{ post.date | date: "%b %-d, %Y" }}</small>
  </li>
{% endfor %}
</ul>