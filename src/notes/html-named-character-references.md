---
title: "HTML Named Character References"
date: 2023-02-08
---

[Named character references](https://html.spec.whatwg.org/multipage/named-characters.html)

```css
/* Make sure the header is always at least 3em high */
header {
	min-height: 3em;
	width: 100%;
	background-color: #fff;
}

/* Reserve the same height at the top of the page as the header min-height */
html:not([data-scroll="0"]) body {
	padding-top: 3em;
}

/* Switch to fixed positioning, and stick the header to the top of the page */
html:not([data-scroll="0"]) header {
	position: fixed;
	top: 0;
	z-index: 1;

	/* This box-shadow will help sell the floating effect */
	box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
}
```
