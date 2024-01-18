---
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - pages
    - notes
    - likes
layout: "layouts/tag.html"
permalink: "/tags/{{ tag | slugify }}/"
eleventyComputed:
  title: "#{{ tag }}"
---
