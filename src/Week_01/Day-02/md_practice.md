# Markdown Syntax Practice


## Headers
Use `#` for headings. 1 to 6 `#` characters define heading levels.

# This is a Heading h1
## This is a Heading h2
### This is a Heading h3
#### This is a Heading h4
##### This is a Heading h5
###### This is a Heading h6


## Emphasis (bold / italic)
- Italic: `*italic*` or `_italic_`  Output: _Italic_
- Bold: `**bold**` or `__bold__`  Output: **Italic**


## Inline code
Wrap short code or commands with backticks:

Example: `node index.js` or `const x = 1;`



## Horizontal rule
A horizontal rule creates a visual separator. Use three or more hyphens, asterisks, or underscores on a line by themselves:

Examples:
```md
---
***
___
```


## Lists (unordered / ordered)
Unordered list:
```md
- Item A
- Item B
  - Nested item
* You can also use asterisks
```

Ordered list:
```md
1. First
2. Second
3. Third
   1. Nested numbered
```

## Links
Inline:
```md
Syntex: [Context](link..).
Example : [GitHub](https://github.com/knilesh2212)
```
Output: [GitHub](https://github.com/knilesh2212)


## Images
Syntax is similar to links but with a leading `!`:

Inline image:
```md
![Alt text](https://via.placeholder.com/300x120.png "Optional title")
```

Relative image (stored in repo):
```md
![logo](../public/markdown-logo.jpg)
```
![logo](../public/markdown-logo.jpg)


## Blockquotes
Use `>` for quotes or callouts:
```md
> This is a blockquote. Good for notes or quotations.
>
> You can have multiple paragraphs.
```

**Output:**
> This is a blockquote. Good for notes or quotations.

## Tables
Simple tables (GitHub supports basic alignment):

```md
| Name     | Role         | Location      |
|----------|:------------:|--------------:|
| ABC    | Developer    | Remote        |
| XYZ      | Designer     | London        |
```

**Output:**

| Name     | Role         | Location      |
|----------|:------------:|--------------:|
| ABC    | Developer    | Remote        |
| XYZ      | Designer     | London        |
- Use `:---:` for center, `:---` for left, `---:` for right alignment.



