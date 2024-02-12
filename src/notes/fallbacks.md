---
title: 'CSS Variable Fallbacks'
date: 2023-02-07
tags:
  - 'css'
draft: true
---

Fallbacks can be dynamic, via `var()` references.

The `var()` fallback is applied when there is no value, or when it resolves to initial. If the resulting value is invalid at computed value time (IACVT), then the browser ends up setting the property to `unset`.

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |
