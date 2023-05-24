---
layout: layouts/default.njk
contributors: [ "Christopher Godwin" ]
tags: docs
time: 2021-01-01
copyright:
  minLength: 1
title: Charts & Graphs
icon: chart-bar


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
Go [here](https://github.com/adrai/flowchart.js) reference to master this type of formatting.

# Who is your favorite Smith God?
```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'pie1': '#0000FF', 'pie2': '#800080', 'pie3': '#ff0000', 'pie4': '#FFA500'}}}%%
pie
title Who is your favorite smith god?
  "Luchta" : 2
  "Lughaid" : 3
  "Goibniu" : 45
```

````md
```mermaid
pie
title Who is your favorite smith god?
  "Luchta" : 2
  "Lughaid" : 3
  "Goibniu" : 45
```
````