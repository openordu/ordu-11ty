---
layout: layouts/default.njk
icon: note
title: 'The Change Process'
contributors: [ "Christopher Godwin" ]
time: 2022-12-28
tags:
  - Introduction
  - Documentation





order: 97
---
## The Change Process

```flow
st=>start: Website Exists
e=>end: Change Has Been Made
op1=>operation: Someone Wants to Make a Change|past
op2=>operation: Make the Change in Your Branch|current
sub1=>subroutine: Branch Repo|invalid
sub2=>subroutine: Request a Merge|invalid
cond=>condition: Approved?
io=>inputoutput: Merge Changes|future
op3=>subroutine: Have a Discussion
op4=>operation: Improve the Change

st->op1(right)
op1->sub1(right)
sub1->op2(right)
op2->sub2(right)
sub2->cond
cond(yes)->io(right)
cond(no, right)->op3(right)
op3->op4(down)
op4(right)->sub2(right)
io->e
```