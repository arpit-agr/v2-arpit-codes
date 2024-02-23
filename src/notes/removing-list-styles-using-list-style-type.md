---
title: 'Can `list-style-type` fix the list semantics issues on Safari?'
date: 2024-02-23
tags:
  - 'a11y'
  - 'css'
  - 'list'
  - 'safari'
  - 'semantics'
---

I recently read an [article by Andy Bell](https://piccalil.li/blog/removing-list-styles-without-affecting-semantics/) wherein he discusses his [CSS reset](https://piccalil.li/blog/a-more-modern-css-reset/), prompted by Manuel Matuzović's article on ['Removing list styles without affecting semantics'](https://www.matuzo.at/blog/2023/removing-list-styles-without-affecting-semantics).

Manuel suggests using `list-style-type: ""` as a method to remove list styles while preserving semantics:

```css
ul {
	list-style-type: '';
}
```

Since I've been using Andy's reset for my projects, I was intrigued to know his perspective. Here's the CSS rule from Andy's reset under discussion:

```css
ul[role='list'],
ol[role='list'] {
	list-style: none;
}
```

Andy explains his rationale behind this rule and his approach to preserving list semantics in Safari:

> The reason I have it in the reset is because I’m making a presumption about my and/or my team’s CSS because if there’s a class being added to a list, it almost certainly isn’t going to look like one. It’s a useful hook!
>
> Because of Safari removing list semantics — as referenced in Manuel’s post — we have a policy of “if a list gets a class added, it gets a list role added too”.

As Scott O’Hara highlights in ["Fixing" Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) adding an explicit ARIA `role='list'` is not an ideal fix:

> It is unfortunate that the best solution to this issue will defy [the first rule of Using ARIA](https://www.w3.org/TR/using-aria/#rule1), which states:
>
> > If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so.
>
> Another [excerpt from Using ARIA](https://www.w3.org/TR/using-aria/#aria-does-nothing):
>
> > None of the elements defined in HTML4 need ARIA roles added to expose their default semantics. … In the majority of cases setting an ARIA role and/or aria-\* attribute that matches the default implicit ARIA semantics is unnecessary and not recommended as these properties are already set by the browser.

Considering Manuel's solution achieves the desired outcome without an explicit ARIA `role='list'`, Andy considers revising the rule.

## Testing

The updated rule Andy is contemplating:

```css
:is(ul, ol)[class] {
	list-style-type: '';
}
```

I implemented the revised CSS rule on my personal website to circumvent the need for an explicit ARIA `role='list'`, thus avoiding the barrage of warnings from the HTML validator.

```bash
HTML warning: The “list” role is unnecessary for element “ul”.
```

Upon updating the HTML and CSS, I tested the solution using VoiceOver with Safari 17.3.1 on macOS 14.3.1. Unfortunately, the results were mixed. While some lists were identified correctly as lists by Safari, others lost their semantics.

Forking Manuel's CodePen demo for further testing, I learned that Manuel's solution to use **`list-style-type: ''` only proves effective if the `<li>` element has a display value of `list-item`**.

According to the [CSS spec](https://drafts.csswg.org/css-lists/#propdef-list-style-type), the `list-style-type` property applies to list items i.e elements with `display: list-item`. Hence, if an element has a display value other than `list-item`, it is not a list item and the `list-style-type` property won't apply. As noted by Scott O’Hara, <q>[…] any CSS that would remove the bullet or number indicators of a list’s items will also remove the semantics.</q>

For those interested to try it out themselves, you can find my demo [here](https://codepen.io/arpit-codes/pen/vYPqYwy).

## Conclusion

I intend to stick with the explicit ARIA `role='list'` fix, as it seems to be the most viable solution for preserving list semantics in Safari.
