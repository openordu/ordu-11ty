---
layout: layouts/default.njk
contributors: [ "Christopher Godwin" ]
tags: docs
time: 2021-01-01
copyright:
  minLength: 1
title: Links
icon: link


index: 2
---

## HR

---

```md
---
```

## Link

[Home page using absolute path](/)

[Home page using relative path](../readme)

[About page using absolute path](/about)

[About page using relative path](../about)

```md
[Home page using absolute path](/)

[Home page using relative path](../readme)

[About page using absolute path](/about)

[About page using relative path](../about)
```

::: tip

You can also use these:

- [Home page-Can route when editing Markdown file](../readme)

- [Home page using absolute path 2](/readme)

- [Visit in HTML](../index.html)

To be able to jump to each other when editing the Markdown using the editor, you need to use the **relative path**, also you must place `readme.md` in **every folder**.

代码:

```md
- [Home page-Can route when editing Markdown file](../readme)

- [Home page using absolute path 2](/readme)

- [Visit in HTML](../index.html)
```

:::