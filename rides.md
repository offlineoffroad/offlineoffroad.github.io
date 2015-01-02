---
layout: page
title: Rides
map: rides
permalink: /rides/
---

Rides home

<ul class="">
{% for post in site.rides %}
  <li>
    <span class="">{{ post.date | date: "%b %-d, %Y" }}</span>

    <h2>
      <a class="" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h2>
  </li>
{% endfor %}
</ul>