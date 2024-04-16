---
title: Mandelbrot Explorer
author: matthieu
description: A simple mandelbrot explorer with parameters tweakings made in c with gtk.
date: 2024-01-13
pin: true
image:
  path: /img/mandelbrot/mandelbrot2.png
  alt: The mandelbrot fractal
categories: [Project, C]
tags: [C, gtk]
---


This is a simple mandelbrot explorer made in c with gtk.
It allows for exploration of the mandelbrot set, with customisations features
such as theming and control over the depth of rendering.

I've done other versions, not quite as good :
 - A non-interactive version [in ocaml](https://github.com/matthieuporte/mandelbrot-ocaml)
 - A version using [sdl](https://github.com/matthieuporte/mandelbrot-sdl)

Dependencies : gtk, base-devel

## Tryout the app without installing

```shell
cd mandelbrot-explorer-1.0
make
./mandelbrot-explorer
``` 

## Install as a package on arch

run 
```shell
makepkg
sudo pacman -U mandelbrot-explorer-1.0-1-x84_64.pkg.tar.zst
```

Then you should be able to run the program in a terminal and in a launcher.


## Install as flatpak (for other distros)

---

Enjoy !


[img1]: /img/mandelbrot/mandelbrot1.png
[img3]: /img/mandelbrot/mandelbrot3.png

![what mandelbrot can look like when you zoom in][img1]
![what mandelbrot can look like when you zoom in][img3]
