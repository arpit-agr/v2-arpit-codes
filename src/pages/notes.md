---
title: 'Notes'
pagination:
  data: collections.notes
  size: 8
  alias: notes
  reverse: true
layout: 'layouts/notes.html'
permalink: 'notes/{% if pagination.pageNumber === 0 %}/index.html{% else %}page-{{ pagination.pageNumber + 1 }}/index.html{% endif %}'
eleventyNavigation:
  key: 'Notes'
  order: 2

subtitle: "Notes on everything I'm learning and excited about"
---
