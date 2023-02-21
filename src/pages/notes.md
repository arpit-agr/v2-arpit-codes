---
title: "Notes"
subtitle: "About something I’ve learnt, about something I’m interested in"

pagination:
  data: collections.notes
  size: 4
  alias: notes
  reverse: true

layout: "layouts/notes.html"
permalink: "notes/{% if pagination.pageNumber === 0 %}/index.html{% else %}page-{{ pagination.pageNumber + 1 }}/index.html{% endif %}"

eleventyNavigation:
  key: "Notes"
  order: 2
---
