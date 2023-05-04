---
layout: layouts/default.njk
contributors: [ "Christopher Godwin" ]
tags: docs
time: 2021-01-01
copyright:
  minLength: 1
title: Slides
icon: slides


index: 93
---

## Slideshow

Setting `layout: Slide` at the top of a page will make it a fullscreen slideshow.


@slidestart

<!-- .slide: data-transition="slide" -->

### Slide Demo

<!-- .element: class="r-fit-text" -->

A simple slide demo and useful hints.

<!-- .element: class="r-fit-text" -->

> This is a slide. Please scroll mousewheel down to the next slide

---

<!-- .slide: data-transition="slide" data-auto-animate -->

### Marking Slides

<!-- .element: class="r-fit-text" -->

[👇](#/1/1)

--
@slideend

```md
@slidestart

<!-- .slide: data-transition="slide" -->

### Slide Demo

<!-- .element: class="r-fit-text" -->

A simple slide demo and useful hints.

<!-- .element: class="r-fit-text" -->

> This is a slide. Please scroll mousewheel down to the next slide

---

<!-- .slide: data-transition="slide" data-auto-animate -->

### Marking Slides

<!-- .element: class="r-fit-text" -->

[👇](#/1/1)

--
@slideend
```

[Slideshow Reference](https://vuepress-theme-hope.github.io/md-enhance/guide/presentation/)