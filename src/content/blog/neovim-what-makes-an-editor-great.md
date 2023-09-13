---
title: 'Neovim, what makes an editor great' 
description: "In this blog post, I will explain why Rust has become the best choice for me, and why should consider Rust for your next project"
pubDate: 'Sep 13 2023'
heroImage: 'https://i.imgur.com/gbNYmiQ.png'
---

Hello, in this blogspot, I will tell you why I (personally) think neovim is the best editor, and how to start your nvim journey.

#### Why Neovim?
So, first question you might have is why use neovim? Why not use VSCode or IntelliJ for example? Solutions like VSCode or IntelliJ tend to be heavy and memory consuming, while VSCode is very light and is very optimized, in does have some trouble with more limited devices, specially on Windows. Neovim is extremely lightweight, and doesn't consume almost any resources, Neovim is also HIGHLY customizable and extensible, and it's really easy to save your configuration, because you just have to save your `~/.config/nvim` folder, that has all of your configurations. You can upload the folder to a github repo if you wish to use neovim in multiple computers or just to share it with the world. Apart from all of this, Neovim also helps you learn how LSPs and other useful tools work, helping you make your experience as perfect as possible for you. And another amazing point is keybindings, it might be a little difficult at first, but once you get used to all of neovim keybindings, you wont have to use the mouse.

#### Why not VIM tho?
Some of you might be asking "Why not use vim tho?", the answer is very easy lua. It's going to be much easier to configure your editor in lua than in vimscript, while you can use vimscript, It is recommended to use lua for new neovim configs.

#### How do I start?
You should probably start using a preset, my personal favourite for beginners is [astronvim](https://github.com/AstroNvim/AstroNvim). Once you get used to the neovim way of doing things, you could write your own config, [here's mine](https://github.com/angelnext/dotfiles/tree/main/.config/nvim) if you're interested, or just use a preset, you might get used to it and not need to make your own custom config (although I do recommend it).

#### Conclusion
Neovim is a great editor, specially once it's extended with plugins. I hope you give it a try!
