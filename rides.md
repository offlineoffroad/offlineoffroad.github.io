---
layout: default
title: Rides
permalink: /rides/
---

<ol class="">
{% for post in site.posts %}
  <li>
    <a class="" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    <small class="">{{ post.date | date: "%b %-d, %Y" }}</small>
  </li>
{% endfor %}
</ol>