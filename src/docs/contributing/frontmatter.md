---
layout: layouts/default.njk
contributors: [ "Christopher Godwin" ]
tags: docs
time: 2021-01-01
copyright:
  minLength: 1
title: Frontmatter
icon: code


index: 80
---
# Frontmatter

Frontmatter is the way pages of content are configured. At the top of each
Markdown document, a required amount of frontmatter is needed. Front matter is
in yaml format. An example body of frontmatter looks like this:

```yaml
---
title: Title of the Content

icon: sample
---
```

## First Heading
The first heading after the body of frontmatter on a Markdown file is ignored
because it is assumed that this is the title of the page. So it is a standard of
ours to assign the value of the title: tag in frontmatter to the value of the
first H1 after the frontmatter body.

Here is the example:

```md
---
title: Title of the Content

icon: sample
description: Description of this page
---
# Title of the Content <-- this value is ignored but required.
```

## Required Frontmatter options:

* `article: false`
* `date: YYYY-MM-DD or YYYY/MM/DD hh:mm:ss`
* `author: you`
* `contributors: somebody, somebodyelse, andnowyou`
* `isOriginal: true or false`
* `description: A brief description of the content`

## Prefered Frontmatter options:

* `title: sometitle`
* `category: reasonablecategory`
* ```yaml
    tag:
    - tag1
    - tag2
    ```
* `icon: oneofthefeaturedicons`
* `image: http://somepath.com/to/an/image/for/the/page.jpg or /assets/some/public/image/in/the/project.jpg`
* `prev: location/to/previous/content.md`
* `next: location/of/what/to/read/nexd.md`

## All Frontmatter options:

You can control quite a great deal about the display of a single page using the
following references:

[Informational Frontmatter](https://vuepress-theme-hope.github.io/v2/config/frontmatter/info.html)
[Layout Frontmatter](https://vuepress-theme-hope.github.io/v2/config/frontmatter/layout.html)
[Plugin Frontmatter](https://vuepress-theme-hope.github.io/v2/config/frontmatter/plugins.html)