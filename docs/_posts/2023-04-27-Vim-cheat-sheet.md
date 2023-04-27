---
layout: post
featured: true
---

I enjoy learning vim, I get more and more efficient with it, but learning it takes quite some time and I tend to often forget what are the shortcuts. Here's my cheat sheet:

### Normal Mode

---

| Command | Function            |
|:-------:|---------------------|
|   :x    | write and quit      |
|   :w    | write               |
|   :q    | quit                |
|   :q!   | quit without saving |
|         |                     |

| Shortcut | Function                                                          |
|:--------:|-------------------------------------------------------------------|
| h j k l  | move around                                                       |
|    u     | undo                                                              |
|    U     | undo everything that happened to that particular line             | 
|  CTRL+R  | redo                                                              | 
|    x     | deletes a letter                                                  |
|    d     | waits for a motion and deletes accordingly                        |
|    dd    | deletes the whole line                                            |
|    p     | pastes the just deleted line                                      | 
| r(char)  | replace the current char                                          | 
|    c     | deletes according to the motion given and puts you in insert mode | 
|    cc    | deletes the end of the line and puts you in insert mode           | 
|          |                                                                   | 
|          |                                                                   | 
|          |                                                                   | 
|          |                                                                   |

### Motions
Motions are a parameter of the functions. It lets you decide what you want to do exactly. For example if you want to delete something, you will use d then the motion you want. You can use a number before a motion to cover a greater distance.

---

| Shortcut | Motion                               |
|:--------:|--------------------------------------|
|    w     | to the char before the next word     |
|    b     | to the char before the previous word |
|    e     | to the end of the current word       |
|    ge    | to the beginning of the current word |
|    $     | to the end of the line               |
|          |                                      |



