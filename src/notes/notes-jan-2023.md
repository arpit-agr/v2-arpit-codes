---
title: "Notes, January 2023"
date: 2023-01-31
tags: "notes"
---

## Article: [Improving “likes” on my site](https://andy-bell.co.uk/improving-likes-on-my-site/)

TIL how Andy styles the summary `::marker` pseudo-element for open and closed states:

{% codetitle "global.css" %}

```css
summary {
	display: flex;
	align-items: baseline;
	line-height: 1.2;
	gap: 0 1ch;
	cursor: pointer;
	list-style: none;
}

summary:hover,
summary:focus-visible {
	color: var(--color-primary-shade);
}

summary::before {
	content: "+";
	display: block;
	color: var(--color-primary);
	line-height: 0.5;
	margin-inline-start: -2ch;
	transform: scale(1.4);
	transform-origin: right bottom;
}

[open] summary::before {
	content: "—";
}

/* Hide default marker */
summary::-webkit-details-marker,
summary::marker {
	content: "";
	display: none;
}
```

> This renders either a + or — depending on the closed and open state. A fun trick is because I’m using a monospaced font, I can use ch units for gap and margin-inline-start, to get a nice negative indent, just like I do with headings on this site too.
>
> Also, this is why I’m using transform to scale the symbol, because then, the ch unit is still predictable. If I sized it with font-size, there’d be weird in-between sizes, so I’d have to do margin-inline-start: -1.6ch; or something.

This article is definitely worth a read. Andy has a few more tricks up his sleeve.