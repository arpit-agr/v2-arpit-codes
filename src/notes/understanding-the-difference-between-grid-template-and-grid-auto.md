---
title: "Understanding the difference between grid-template and grid-auto"
date: 2024-02-12
tags:
  - "css"
  - "grid"
  - "explicit-grid"
  - "implicit-grid"
draft: true
---

> Within a grid container, there are grid cells. Any cell positioned and sized using the `grid-template-*` properties forms part of the explicit grid. Any grid cell that is not positioned/sized using this property forms part of the implicit grid instead.

> The `grid-template-*` properties are used to create an explicit grid, whereas the `grid-auto-*` properties are used to size an implicit grid (which is automatically created).

> We can define a fixed number of lines and tracks that form a grid by using the properties `grid-template-rows`, `grid-template-columns`, and `grid-template-areas`. This manually defined grid is called the explicit grid.

> The `grid-auto-rows` and `grid-auto-columns` properties give us control over the size of implicit tracks.
