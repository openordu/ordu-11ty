---
layout: layouts/default.njk
icon: spinner
title: 'Fetching the Content'
contributors: [ "Christopher Godwin" ]

tags:
  - Introduction
  - Documentation





order: 98
---

## Checking out the repository

Depending on how you installed git, Open bash or git-bash, or powershell.

Run `pwd` to see where you are on the file system so you can find it in a file explorer.

Run `git clone https://github.com/openordu/pce.git pce`

Now your working folder will be located at `pce` inside of the current folder.

## Branching
In order to add content, you must do it in your own `branch` where your
 changes will not disrupt other contributors.

You should never make changes to `main` or `master` branches. You should
 create your own branches and request they be pulled into `main` later.

This is what we call a `pull request`.

In order to create your own branch you must run this command:

<CodeGroupItem title="branching" active>

```bash
git checkout -b feature/my-new-branch-name
```
</CodeGroupItem>

Results:

> Switched to a new branch 'feature/my-new-branch-name'

Please use a branch name that makes sense. If you are editing an article on the dagda,
 make your branch `feature/details-about-dagdas-harp`. We don't have branch conventions
 and we hope to not need them.

<CodeGroupItem title="branchexample1" active>

```bash
git checkout -b feature/details-about-dagdas-harp
```
</CodeGroupItem>

Results:

> Switched to a new branch 'feature/details-about-dagdas-harp'

### You're Ready to Edit
Now you can edit any of the files here. I can now open `D:\Users\Chris Godwin\Documents\cporg-articles` and use any text editor, markdown editor. Markdown files here support html but don't use it when markdown would work.