---
layout: layouts/default.njk
contributors: [ "Christopher Godwin" ]
tags: docs
time: 2021-01-01
copyright:
  minLength: 1
title: Tips & Warnings
icon: lightbulb


index: 95
---

## Tips, Notes, Warnings & Containers

::: tip Title Text

This is a tip.

:::

```md
::: tip Title Text
This is a tip.
:::
```

::: warning
This is a Note
:::

```md
::: warning
This is a note
:::
```

::: info
There are other kids of containers besides tips.
:::

```md
::: info
There are other kids of containers besides tips.
:::
```

::: danger
Careful how you use these boxes, each has a specific psychological impact.
:::

```md
::: danger
Careful how you use these boxes, each has a specific psychological impact.
:::
```

:::: info

This is an info container with a tip inside.
::: tip
Notice how the nested tip has three colons and that the info container has four.
 Colons are 3+_n_ where **_n_** is the nest level.
:::
::::

```md
:::: info

This is an info container with a tip inside.
::: tip
Notice how the nested tip has three colons and that the info container has four.
 The number of colons required are 3+n where n is the nest level.
:::
::::
```