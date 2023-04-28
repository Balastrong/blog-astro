---
title: '10 Javascript Challenges'
publishDate: '2023-04-24'
image: ./_cover.png
description: 'A collection of 10 JavaScript minigames to prove your skills.'
tags:
  - webdev
  - javascript
---

Do you know Javascript? After the success of the [previous video](https://youtu.be/8gGuu9c9miY), I've decided to make a second one with 10 more challenges to test your knowledge of the language.

These are 4 out of the 10 challenges you'll find in the video:

---

The `++` operator is really handy and you can put it either before or after the variable. But do you know the difference between the two?

```js
let value = 3;
console.log(value++);
console.log(++value);
```

---

You can use `_` and the letter `e` in numbers and they're still valid!

```js
const THE_ANSWER = 1_2 + 3e1;

console.log(THE_ANSWER);
```

---

Isn't the output here supposed to be `7` on both cases? Actually, none of them is `7`!

```js
const x = '5';

console.log(1 + 1 + x);
console.log(x + 1 + 1);
```

---

Can you spot any unintended side effect here?

```js
let me = { name: 'Leonardo', socials: { twitter: '@balastrong' } };

let luca = { ...me };
luca.name = 'Luca';
luca.socials.twitter = '@puppo92';

console.log(me);
console.log(luca);
```

---

If you're curious about the answers, you can find them in the video below. I hope you enjoy it!

{% youtube 79R_ys7a8Aw %}

In the video above, I go through all challenges and show the answer, but I also recorded a slower version where I actually explain them in more detail. If you're curious and want to learn more, you can find it [here](https://youtu.be/wE-6CswAE64).

Let me know how many did you got right! :D
