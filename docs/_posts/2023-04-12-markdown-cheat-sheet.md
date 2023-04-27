---
layout: post
featured: true
---


Here's my cheat sheet for markdown in case I ever forget

___

### Titles
 
Put some \# before your Titles, for example :

\#\#\# H3 gives
### H3

you can go from H1 to H6.

___

### Text styling

*italics*  ->  with \*asterisks\* or \_underscores\_.

**bold**  ->  with \*\* double asterisks \*\* or \_\_ double underscores \_\_.

**_bold italics_** by combining both

~~Strikethrough~~ -> with \~\~two slides\~\~

___

### Footnotes

Here is a simple footnote[^1]. You can see the reference at the end of the page.

you can make footnote like this\[^1\]

[^1]: My reference.


___

### Code

To write code use triple quotes at the beggining and at the end of the code.
You can ad the name of the language just after the first three quotes to add colors.

\`\`\`ocaml

let rec factorielle n =

  if n<2 then 1  else n*factorielle (n-1);; 

\`\`\`

```ocaml
let rec factorielle n =
  if n<2 then 1  else n*factorielle (n-1);; 
```

 
```
If you don´t indicate any language, the text will be shown white,
but any code is <i>safe here</i>
```


___

### Images

To put images, define them like this : 

\[name\]: LINK "alt text"

and then use it like this: 

!\[alt text\]\[name\] 

[moon]: https://www.nasa.gov/sites/default/files/images/464487main_AS11-40-5886_full.jpg "moon pic"


![alt text][moon]

___

### Links

text put between brackets like this \<http://example.com\> will be considered as a link.

If you want to give a title to your link you can define it in a variable just like you did for images or you can do this :

\[title of the link\](actual link)

[my portfolio](https://matthieuporte.github.io)


[portfolio]: https://matthieuporte.github.io

[my portfolio][portfolio]

___

### Lists

To make a list just put a X. (X being any number) before any list item

1. First item
2. Second item
1. This item is defined with 1.
4. And another item.

Unordered lists can be made with + - and *

+ an item
- another item
- yet another

___


### Tables

Here's how to build a table in mardown

```
| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |
```

| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |

It doesn´t have to be aligned and the result will be the same.

You can put some colon (:) to align the text in a particular direction.

:-- means aligned to the left
:-: means centered
--: meand aligned to the right

___