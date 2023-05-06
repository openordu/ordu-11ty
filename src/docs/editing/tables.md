---
layout: layouts/default.njk
contributors: [ "Christopher Godwin" ]
tags: docs
time: 2021-01-01
copyright:
  minLength: 1
title: Tables
icon: table


index: 4
---

## Tables

Example 1: Simple table with header and two rows


| Fruit  | Price |
| ------ | ----- |
| Apple  | $1.00 |
| Banana | $0.50 |


```md
| Fruit  | Price |
| ------ | ----- |
| Apple  | $1.00 |
| Banana | $0.50 |
```


Example 2: Table with alignment and three rows

|     Product | Unit Price | Quantity |
| ----------- | ---------: | -------: |
| Apples      |      $1.00 |       10 |
| Bananas     |      $0.50 |       20 |
| Grapes      |      $2.00 |        5 |


```md
|     Product | Unit Price | Quantity |
| ----------- | ---------: | -------: |
| Apples      |      $1.00 |       10 |
| Bananas     |      $0.50 |       20 |
| Grapes      |      $2.00 |        5 |
```

Example 3: Complex table with alignment, multiline header, and multiple rows

|        Product | Unit Price | Quantity | Total Price |
| -------------- | ---------: | -------: | ----------: |
| Apples         |      $1.00 |       10 |      $10.00 |
| Bananas        |      $0.50 |       20 |      $10.00 |
| Grapes         |      $2.00 |        5 |      $10.00 |
| Oranges        |      $0.80 |       12 |       $9.60 |
| Strawberries   |      $0.50 |       20 |      $10.00 |

```md
|        Product | Unit Price | Quantity | Total Price |
| -------------- | ---------: | -------: | ----------: |
| Apples         |      $1.00 |       10 |      $10.00 |
| Bananas        |      $0.50 |       20 |      $10.00 |
| Grapes         |      $2.00 |        5 |      $10.00 |
| Oranges        |      $0.80 |       12 |       $9.60 |
| Strawberries   |      $0.50 |       20 |      $10.00 |
```