---
layout: layouts/default.njk
contributors: [ "Christopher Godwin" ]
tags: docs
time: 2021-01-01
copyright:
  minLength: 1
title: Text
icon: superscript


index: 1
---

## Text

This is what **bold**, _italic_ and ~~strikethrough~~ look like.

```md
This is what **bold**, _italic_ and ~~strikethrough~~ look like.
```

## Paragraph

This is a paragraph about the Morrigan.

This is another paragraph about ravens.

```md
This is a paragraph about the Morrigan.

This is another paragraph about ravens.
```

## Line Break

This is how you do a line  
break

```md
This is how you do a line  
break
```

::: warning

In block above, the word `line` is followed by two spaces.

:::

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

```md
> Blockquotes can also be nested...
>
> > ...by using greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.
```

## Preformatted

Inline Preformatted: `pre`

```md
Inline Preformatted: `pre`
```

Indented Preformatted:

    // Some comments
    line 1 of pre
    line 2 of pre
    line 3 of pre

```md
Indented Preformatted:
    // Some comments
    line 1 of pre
    line 2 of pre
    line 3 of pre
```

Preformatted Block:

```
Sample text here...
```

````md
Preformatted Block:

```
Sample text here...
```
````

## Super and Subscript

- 19^th^
- H~2~O

```md
- 19^th^
- H~2~O
```

## Alignment

::: center
Paragraph to center
:::

::: right
Right paragraph
:::

::: left
Left alignment
:::

```md

::: center
Paragraph to center
:::

::: right
Right paragraph
:::

::: left
Left alignment
:::

```

:::: danger
This is a danger box with a center block inside.
::: center
Significant changes.
:::
::::

```md
:::: danger
This is a danger box with a center block inside.
::: center
Center text.
:::
::::
```

## Footnotes

Footnote 1 sentence [^first].

Footnote 2 sentence [^second].

[^first]: Footnote one
[^second]: Footnote two

```md
Footnote 1 sentence [^first].

Footnote 2 sentence [^second].

[^first]: Footnote one
[^second]: Footnote two
```

::: warning

Check the footnotes at the bottom of this page.

:::

## Highlight words

This is how you ==highlight a word==.

```md
This is how you ==highlight a word==.
```

# Tasks and Checkboxes

- [ ] Plan A
- [x] Plan B

```md
- [ ] Plan A
- [x] Plan B
```
