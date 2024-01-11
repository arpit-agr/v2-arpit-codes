---
title: "About the Gap After the List Marker"
date: 2023-03-04
excerpt: "I was reading “Creative List Styling” on Google’s web.dev blog and noticed something odd in one of the code examples in the ::marker section of the article."
tags:
  - "css"
---

> 1. Browsers apply a default padding-inline-start of 40px to `<ul>` and `<ol>` elements.
> 1. There is a minimum gap after built-in list markers (disc, decimal, etc.). There is no minimum gap after custom markers (string or URL).
> 1. The length of the gap can be increased by adding a padding-left to `<ul>`, but only if the marker is positioned outside the list item (the default mode).
> 1. Custom string markers have a smaller default size than built-in markers. Changing the font-family on `::marker` can increase their size.

Source: [CSS-Tricks](https://css-tricks.com/everything-you-need-to-know-about-the-gap-after-the-list-marker/)
