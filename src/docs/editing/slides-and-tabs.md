---
layout: layouts/default.njk
contributors: [ "Christopher Godwin" ]
tags: docs
time: 2021-01-01
copyright:
  minLength: 1
title: Slides and Tabs
icon: file-powerpoint
---
#### Presentation

:::: carousel
::: slide Slide text 1
stuff
:::
::: slide Slide text 2
stuff2
:::
::: slide Slide text 3
stuff3
:::
::::


:::: carousel

::: slide Caption|3
## Slide 1

A paragraph with some text and a [link](https://mrhope.site)

:::
::: slide Caption 2|3
## Slide 2

- Item 1
- Item 2

:::
::: slide Caption 3|3

## Slide 3.1

```js
const a = 1;
```

:::
::: slide Caption 4|3

## Slide 3.2

$$
J(\theta_0,\theta_1) = \sum_{i=0}
$$

:::
::::

- [View Detail](https://theme-hope.vuejs.press/guide/markdown/presentation.html)

[md-enhance]: https://theme-hope.vuejs.press/md-enhance/

#### Tabs

``` tab [group1:Home]
...content for Home tab...
::: tip
This is a tip in a tab
:::
```
``` tab [group1:Profile]
...content for Profile tab...
```
``` tab [group1:Contact]
...content for Contact tab...
```
``` tab [group1:Disabled]
...content for Disabled tab...
```


- [View Detail](https://theme-hope.vuejs.press/guide/markdown/tabs.html)

#### Command Tabs
```bash [install:pnpm]
`pnpm add -D vuepress-theme-hope`
```
```bash [install:yarn]
`yarn add -D vuepress-theme-hope`
```
```bash [install:npm]
`npm i -D vuepress-theme-hope`
```

#### Code Tabs
```tab [code:pnpm]
~~~pnpm
pnpm add -D vuepress-theme-hope
~~~
```
```tab [code:yarn]
~~~yarn
yarn add -D vuepress-theme-hope
~~~
```
```tab [code:npm]
~~~bash
npm i -D vuepress-theme-hope
~~~
```

- [View Detail](https://theme-hope.vuejs.press/guide/markdown/code-tabs.html)