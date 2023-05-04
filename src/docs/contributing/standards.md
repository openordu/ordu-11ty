---
layout: layouts/default.njk

icon: read
title: 'Standards'
tags:
  - Contributing
  - Documentation

order: 100
---
# Article Standards

1. Lines must be wrapped at 80 characters for files ending in .md, yaml at 80 or
   120 except for links.
1. The frontmatter section `--- <stuff> ---` must exist and begin and end with
   three dashes on separate lines.
1. The first heading must be h1 and match the value of the frontmatter variable `title:`
   if title is supplied. If the frontmatter title isn't supplied, this h1 is the
   page title.
1. Topic items in the [public-celtic-encyclopedia](https://github.com/openordu/pce)(PCE) repository must have `index:
   false` in the frontmatter to avoid build problems.
1. PCE entries must have a prev and next frontmatter tag.
1. If you are contributing multiple articles outside of the PCE that go in a
   list, in addition to prev and next, consider using `index` to correctly
   order them.
