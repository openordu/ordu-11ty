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
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```

````md
```flow
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```
````
Go [here](https://vuepress-theme-hope.github.io/md-enhance/guide/flowchart/) and also see the [flowchart.js](https://github.com/adrai/flowchart.js) reference to master
 this type of formatting.

```
pie
title What is your favorite smith god?
  "Luchta" : 2
  "Lughaid" : 3
  "Goibniu" : 45
```

````md
```pie
title What is your favorite smith god?
  "Luchta" : 2
  "Lughaid" : 3
  "Goibniu" : 45
```
````