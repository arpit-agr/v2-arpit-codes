---
title: "Full-Bleed Background Inside A Container"
date: 2023-02-09
url: "https://www.youtube.com/shorts/81pnuZFarRw"
tags:
  - "css"
draft: true
---

```css
.full-bleed {
	box-shadow: 0 0 0 100vmax;
	clip-path: inset(0 -100vmax);
}

/* OR */

div {
	border-image: conic-gradient(hotpink 0 0) fill 1 / /0 50vw;
}
```

Source: [Kevin Powell](https://www.youtube.com/shorts/81pnuZFarRw)
