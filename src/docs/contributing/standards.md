---
layout: layouts/default.njk

icon: check-square
title: 'Standards'
tags:
  - Contributing
  - Documentation

order: 100
---
# Article Frontmatter Standards

1. Lines should be wrapped at 80 characters for files ending in .md, yaml at 80 or
   120 except for links.
1. The frontmatter section `--- key: value ---` must exist and begin and end with
   three dashes on separate lines.
1. The frontmatter section must include `layout: layouts/default.njk` or a custom layout.
1. The first heading should be omitted so that the first heading in the document is an h2.
   if title is supplied. If the frontmatter title isn't supplied, this h1 is the
   page title.
1. PCE entries must have a prev and next frontmatter tag.
1. If you are contributing multiple articles outside of the PCE that go in a
   list, in addition to prev and next, consider using `order:` to correctly
   order them.
1. Directories must have an index.md file in them for them to show up.
