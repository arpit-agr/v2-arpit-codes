---
title: "<code>grid-auto-rows</code> - CSS"
customTitle: "grid-auto-rows - CSS"
date: 2023-02-10
---

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)

{% codetitle "posts.11tydata.js" %}

```js
module.exports = {
	eleventyComputed: {
		eleventyExcludeFromCollections: (data) => data.draft,
	},
};

document.addEventListener("scroll", () => {
	document.documentElement.dataset.scroll = window.scrollY;
});
```

```html
<header>I'm the page header</header>
<p>Lot's of content here...</p>
<p>More beautiful content...</p>
<p>Content...</p>
```
