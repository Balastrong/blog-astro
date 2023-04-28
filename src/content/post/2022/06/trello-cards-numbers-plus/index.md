---
title: Easily identify a Trello card
publishDate: '2022-06-06'
tags:
  - trello
  - productivity
  - chrome
  - open-source
---

We all love Trello, don't we?

![Trello Logo](./trello-logo.png)

It's a powerful tool that allows us to create boards that are the core of our productivity, taking care of the organization, coordination and management of our business.

One thing that is natively missing is easily identifying cards/tasks with numbers or IDs, as we can easily do with other tools such as Jira.

Fun fact, Trello actually has IDs (you can see them when opening a card, in the URL) but it's not all!

`https://trello.com/c/rFCd7Zu0/5-legal-review` with 5 being the ID.

Numbers are also already in the code but hidden behind a `hide` class.

```html
<span class="list-card-title js-card-name" dir="auto">
  <span class="card-short-id hide">#3</span>
  Sketch site banner
</span>
```

```css
.hide {
  display: none;
}
```

What we found so far? Cards do have a native and unique ID and Trello makes us the job easy to grab them with a script. There are many ways actually, a really cool trick is [this bookmark](<http://www.trello.org/bookmarklet.html?name=Show+Card+Numbers&desc=Show+card+numbers+on+the+front+of+the+card&js=(function()%7B$(%22.card-short-id%22).removeClass(%22hide%22)%7D)()>).
Looks like dark magic but it works... until you reload the page :)

There are also Trello Powerups, but having more than one needs a premium account. Not really convenient.

One of the most common way to get those handy Trello card numbers is with a simple Chrome extension. I'm clearly not the first one thinking about it, but I wanted to create one as an exercise and share it with you. It's obviously Open Source and the repo is on [GitHub](https://github.com/Balastrong/trello-card-numbers-plus). You can open an issue or a PR if you want!

![Extension Settings](./tcnp-settings.png)

![Card with Number](./tcnp-preview.png)

You can install it from the [Chrome Store](https://chrome.google.com/webstore/detail/trello-card-numbers-plus/ncibjlmfhjcjnphnpphgphbflpdpliei).

---

_Bonus content_:, I also like making YouTube videos and I though it was a cool idea to make a short clip (less than 1 minute) to showcase the little project.

If you're curious and you still have 58 spare seconds:

{% youtube G-nZXr_Gs6o %}

---

Do you use Trello? Do you think having numbers is useful? Let me know :)

Happy coding and see you soon!
