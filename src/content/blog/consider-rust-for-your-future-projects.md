---
title: "Why I am using Rust (and you should too)"
description: "In this blog post, I will explain why Rust has become the best choice for me, and why should consider Rust for your next project"
pubDate: "Sep 02 2023"
heroImage: "../../assets/rust.png"
---

In this blog post, I will explain why Rust has become the best choice for me, and why should consider Rust for your next project.

## Backstory

So, one of my hobbies is doing Discord bots, they are cool, simple projects that help you learn a new programming language, since they teach you HTTP requests, errors (lots of them), and problem solving critical thinking. I even have a couple of big Discord bots. I always have used discord.js with TypeScript, because it was simple, and discord.js is very well documented. But this approach didn't come without its problems, some of them being:

- Uncaught exceptions (always)
- Many libraries built without TypeScript in mind (seriously to all library mantainers it's not that difficult just add a file for your libraries types)
- A lot of repeating code
- Funky javascript behaviour
- Undefined, lots and lots of undefined

## RUST!!!!

So, one day I researched alternate solutions for Discord bots, I had used discord.py before, but I didn't like it very much, then you also had discord.php, but I have close to zero experience with PHP, found a promising library for go, but not a single piece of good documentation. Then I finally stumbled upon `serenity-rs`, it looked very promising, the docs where not bad at all, and I had used Rust once or twice before, I also decided to go with `poise`, a framework to simplify your Discord bot. In 10 minutes I already had a functioning bot with prefix commands and slash commands, logging, and more. But the advantages didn't stop there, the rust-analyzer LSP helped me fix all errors before running the bot, I had virtually no runtime errors, and this plus Rust's amazing Option and Result structs, made me have a 100x better Developer Experience with Rust than I ever had with JavaScript, which is a language I've been using for years. Not to mention it was 🚀 **BLAZINGLY FAST** 🚀

## So, Rust for everything?

No, not at all, Rust is not for all projects, but it is amazing for CLI tools, low level programming, and performance critical code.

## Conclusion

I hope I have made you consider Rust for the next project, and until the next one!
