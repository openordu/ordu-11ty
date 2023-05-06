---
layout: layouts/default.njk
contributors: [ "Christopher Godwin" ]
tags: docs
time: 2021-01-01
copyright:
  minLength: 1
title: Charts & Graphs
icon: diagram


index: 80
---

## Flowcharts & Pie Graphs

```flow
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
```

````md
```flow
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
```
````
Go [here](https://vuepress-theme-hope.github.io/md-enhance/guide/flowchart/) and also see the [flowchart.js](https://github.com/adrai/flowchart.js) reference to master
 this type of formatting.

# What is your favorite Smith God?
```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'pie1': '#FFFFFF', 'pie2': '#FFFF00', 'pie3': '#00FF00', 'pie4': '#0000FF', 'pie5': '#800080', 'pie6': '#ff0000', 'pie7': '#FFA500'}}}%%
pie
title What is your favorite smith god?
  "Luchta" : 2
  "Lughaid" : 3
  "Goibniu" : 45
```

````md
```mermaid
pie
title What is your favorite smith god?
  "Luchta" : 2
  "Lughaid" : 3
  "Goibniu" : 45
```
````