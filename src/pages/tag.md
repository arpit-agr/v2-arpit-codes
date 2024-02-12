---
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - pages
    - notes
    - links
layout: 'layouts/tag.html'
permalink: '/tags/{{ tag | slugify }}/'
eleventyComputed:
  title: '#{{ tag }}'
---
