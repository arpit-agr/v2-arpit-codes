---
title: "Understanding `text-underline-offset`"
date: 2024-01-19
tags:
  - "css"
  - "underline"
  - "offset"
description: "The `text-underline-offset` property is named so because it only applies to underlines and not other options such as `overline` or `line-through`."
---

The `text-underline-offset` CSS property sets how far you want the underline to be from its default position.

```css
a {
	text-underline-offset: 4px;
}
```

## The Issue

When using this property, I find myself looking it up quite frequently because all the other underline style properties are linked to the `text-decoration` property.

```css
a {
	text-decortion-thickness: 4px;
	text-decoration-style: solid;
	text-decortion-color: red;
	text-underline-offset: 4px;
}
```

## Today I Learnt

Thanks to [Kevin Powell](https://youtube.com/watch?v=x3MTfp3HDLc&t=506), today I learnt that the `text-underline-offset` property is named so because it **only applies to underlines**.

As per [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset):

> `text-underline-offset` is not part of the [`text-decoration`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) shorthand. While an element can have multiple `text-decoration` lines, `text-underline-offset` only impacts underlining, and not other possible line decoration options such as `overline` or `line-through`.

Now that I know the reason behind the naming, I hope I won't be as uncertain when using the `text-underline-offset` property.
