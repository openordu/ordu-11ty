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
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
```

````md
```flow
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
```
````
Go [here](https://github.com/adrai/flowchart.js) reference to master this type of formatting.

## Who is your favorite Smith God?
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