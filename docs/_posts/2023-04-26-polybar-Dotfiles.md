---
layout: post
featured: false
---

Unixporn is the art of wasting time customising your unix.
I really enjoy setting up my [polybar](https://github.com/polybar/polybar) and here are the dotfiles if someone is curious or if I ever loose them.


[imagepolybar]:{{ "/assets/images/polybar.png" | relative_url }}

![my polybar as it is now][imagepolybar]


```javascript
;==========================================================
;
;
;   ██████╗  ██████╗ ██╗  ██╗   ██╗██████╗  █████╗ ██████╗
;   ██╔══██╗██╔═══██╗██║  ╚██╗ ██╔╝██╔══██╗██╔══██╗██╔══██╗
;   ██████╔╝██║   ██║██║   ╚████╔╝ ██████╔╝███████║██████╔╝
;   ██╔═══╝ ██║   ██║██║    ╚██╔╝  ██╔══██╗██╔══██║██╔══██╗
;   ██║     ╚██████╔╝███████╗██║   ██████╔╝██║  ██║██║  ██║
;   ╚═╝      ╚═════╝ ╚══════╝╚═╝   ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
;
;==========================================================

[colors]
background = #181818
background-alt = #373B41
foreground = #C5C8C6
primary = #89c4f4
secondary = #c9f29b
alert = #ff4c30
disabled = #707880


[bar/bar1]
monitor = ${env:MONITOR:}
width = 100%
height = 18pt
radius = 0

; dpi = 96

background = ${colors.background}
foreground = ${colors.foreground}

size = 0pt

border-size = 0pt
border-color = #00000000

padding-left = 0
padding-right = 0

module-margin = 1

separator = | 
separator-foreground = ${colors.disabled}

;font-0 = monospace;2
font-0 = "Mono:size=10:weight=regular;1"
font-1 = "Noto Color Emoji:scale=10:pixelsize=16:style=Regular;2"

modules-left = xworkspaces i3 xwindow
modules-center = date
modules-right = pulseaudio wired-network wireless-network filesystem memory cpu battery backlight
; polypomo xkeyboard


cursor-click = pointer
cursor-scroll = ns-resize

enable-ipc = true

bottom = true

; tray-position = right

; wm-restack = generic
; wm-restack = bspwm
; wm-restack = i3

; override-redirect = true

[module/xworkspaces]
type = internal/xworkspaces

label-active = %name%
label-active-background = ${colors.background-alt}
label-active-underline= ${colors.primary}
label-active-padding = 1

label-occupied = %name%
label-occupied-padding = 1

label-urgent = %name%
label-urgent-background = ${colors.alert}
label-urgent-padding = 1

label-empty = %name%
label-empty-foreground = ${colors.disabled}
label-empty-padding = 1

[module/i3]
type = internal/i3
format = <label-mode>
;label-mode-foreground = ${colors.alert}

[module/battery]
type = internal/battery
full-at = 99
low-at = 30
#ls -1 /sys/class/power_supply/
battery = BAT0 
adapter = AC0
poll-interval = 5
format-low = %{A6:pkill play;play ~/Music/meme/`ls ~/Music/meme | shuf -n 1`:}<animation-lowtext> <label-low>%{A}
format-low-foreground = ${colors.alert}
format-charging = %{A6:pkill play;play ~/Music/meme/`ls ~/Music/meme | shuf -n 1`:}<label-charging>%{A}
format-charging-foreground = ${colors.secondary}
format-discharging = %{A6:pkill play;play ~/Music/meme/`ls ~/Music/meme | shuf -n 1`:}<label-discharging>%{A}

label-charging = %percentage%%
label-discharging = %percentage%%

label-low = %percentage% 🚨

[module/xwindow]
type = internal/xwindow
label = %title:0:100:...%

[module/filesystem]
type = internal/fs
interval = 25
mount-0 = /
label-mounted = %{A1:pcmanfm:}SSD: %percentage_used%%%{A}
label-unmounted = %mountpoint% not mounted
label-unmounted-foreground = ${colors.disabled}

[module/pulseaudio]
type = internal/pulseaudio
;format-volume-prefix = "VOL "
;format-volume-prefix-foreground = ${colors.primary}
format-volume = <label-volume>
label-volume = %percentage%%
label-muted = muted
label-muted-foreground = ${colors.disabled}

[module/xkeyboard]
type = internal/xkeyboard
blacklist-0 = num lock
label-layout = %{A1:(setxkbmap -query | grep -q "layout\:\\s\\+us") && setxkbmap fr || setxkbmap us:}%layout%%{A}
label-layout-foreground = ${colors.primary}
label-indicator-padding = 2
label-indicator-margin = 1
label-indicator-foreground = ${colors.background}
label-indicator-background = ${colors.secondary}

[module/backlight]
type = internal/backlight
card = intel_backlight
use-actual-brightness = true
enable-scroll = true
format = <ramp> <label>

; Available tokens:
;   %percentage% (default)
;label = %percentage%%
label =

; Only applies if <ramp> is used
ramp-4 = 🌕 
ramp-3 = 🌔 
ramp-2 = 🌓 
ramp-1 = 🌒 
ramp-0 = 🌑 

; Only applies if <bar> is used
bar-width = 10
bar-indicator = |
bar-fill = ─
bar-empty = ─


[module/memory]
type = internal/memory
interval = 2
;format-prefix = "RAM "
;format-prefix-foreground = ${colors.primary}
label = %{A1:alacritty -e "bashtop":}RAM: %percentage_used:2%%%{A}

[module/cpu]
type = internal/cpu
interval = 2
;format-prefix = "CPU "
;format-prefix-foreground = ${colors.primary}
format = %{A1:alacritty -e "bashtop":}<ramp-coreload>%{A}
label = %percentage:2%%

ramp-coreload-spacing = 0
ramp-coreload-0 = %{F#ABC798}▁%{F-}
ramp-coreload-1 = %{F#C6D1AB}▂%{F-}
ramp-coreload-2 = %{F#E1DABD}▃%{F-}
ramp-coreload-3 = %{F#EA9D8D}▄%{F-}
ramp-coreload-4 = %{F#F25F5C}▅%{F-}
ramp-coreload-5 = %{F#F04542}▆%{F-}
ramp-coreload-6 = %{F#D01411}▇%{F-}
ramp-coreload-7 = %{F#D00042}█%{F-}


;--------------;
;-- ETHERNET --;
;--------------;

;--  Ethernet IP --;

[module/wired-network]
type = internal/network

interface = enp0s20f0u1

format-connected =%{A1:alacritty -e nmtui:}<label-connected>%{A}
label-connected = %local_ip%

;----------;
;-- WIFI --;
;----------;

;-- WIFI IP and signal quality --;

[module/wireless-network]
type = internal/network
interface = wlp2s0
label-disconnected-foreground = ${colors.disabled}
format-connected =%{A1:alacritty -e nmtui:}<label-connected>%{A}
label-connected = wifi: %essid%
;%local_ip%

[module/online]
type = custom/script
exec = timeout 3 ping -c 1 8.8.8.8
interval = 5
format = <label>
label = ""
format-fail =%{A1:alacritty -e nmtui:}<label-fail>%{A}
format-fail-foreground = ${colors.alert}
label-fail = "no internet"
format-fail-padding = 0

[module/date]
type = internal/date
interval = 5

date = %H:%M
date-alt = %d/%m %H:%M

label = %date%
;label-foreground = ${colors.primary}

[settings]
screenchange-reload = true
pseudo-transparency = false

; vim:ft=dosini

```
