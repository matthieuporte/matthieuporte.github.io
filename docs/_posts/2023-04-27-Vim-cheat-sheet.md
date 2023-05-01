---
layout: post
featured: true
---

I enjoy learning vim, I get more and more efficient with it, but learning it takes quite some time and I tend to often forget what are the shortcuts. Here's my cheat sheet:

### Commands

---

| Command | Function            |
|:-------:|---------------------|
|   :x    | write and quit      |
|   :w    | write               |
|   :w (filename)   | creates the file (filename)   |
|   :q    | quit                |
|   :q!   | quit without saving |
|  :set tw=80   | set text wrap to 80 |
|:s/old/new/g| substitute every "old" to "new" in the line|
|:#,#s/old/new/g| the substitute function on the range of lines defined by #,# (# being a number) |
|:%s/old/new/g|the substitute function applied to the whole file |
|:%s/old/new/gc|the substitute function on the whole file asking whether to substitute or not every time| 
|:!(command)|execute a command in the console and then gets back to your text|
|:r (filename)|pastes the file in your text. You can also use a **command**|
|:help (command)|opens another page with help about the requested command. writing only help gives you general information.|

### Modes

---

|key|Mode|
|:-:|---|
|esc|NORMAL|
|i|INSERT|
|v|VISUAL|
|R|REPLACE|


### Shortcuts

---

| Shortcut | Function                                                          |
|:--------:|-------------------------------------------------------------------|
| h j k l  | move around                                                       |
|    u     | undo                                                              |
|    U     | undo everything that happened to that particular line             | 
|  CTRL+R  | redo                                                              | 
|o| opens a line below and place you in insert mode |
|a|put you in insert mode on the next char (useful when at the end of the line)|
|y|yank(copy) you need to be in visual mode. |
|    x     | deletes a letter                                                  |
|    d     | waits for a motion and deletes accordingly                        |
|    dd    | deletes the whole line                                            |
|    p     | pastes whatever was just deleted                            | 
| r(char)  | replace the current char                                          | 
|    c     | deletes according to the motion given and puts you in insert mode | 
|    cc    | deletes the end of the line and puts you in insert mode           | 
|    G     | gets you to the end of the file                                   | 
|    gg    | gets you to the beggining of the file                             | 
|   (x)G   | gets you to the line number "x"                                   | 
|    /(word)   | searches for (word) in the text. **n** to navigate between the occurences and **N**to go backwards |
|%|gets to the matching (,[ or {|

### Motions
Motions are a parameter of the functions. It lets you decide what you want to do exactly. For example if you want to delete something, you will use d then the motion you want. You can use a number before a motion to cover a greater distance.

---

| Shortcut | Motion                               |
|:--------:|--------------------------------------|
|    w     | to the char before the next word     |
|    e     | to the end of the current word       |
|    b     | to the first char of the word |
|    $     | to the end of the line               |
|          |                                      |



