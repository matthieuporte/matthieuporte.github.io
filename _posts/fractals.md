---
layout: project
name: mandelbrot
year: 2022
featured: true
---

One of our first tp at EPITA was to draw some fractals in ocaml. One I'm proud of is mandelbrot. Your can find the code [here](https://github.com/matthieuporte/mandelbrot). The mandelbrot function allows you to really zoom in the fractal which makes it much more interesting. It works like this : 
```ocaml
mandelbrot [int : degree of prescision] 
[float * float : x and y coords of the bottom left corner]
[float : size (the smaller the size the bigger the zoom)]
```

Enjoy !

[mandelbrot]:{{ "/assets/images/mandelbrot.png" | relative_url }}

![what mandelbrot can look like when you zoom in][mandelbrot]