---
agent: agent
---

If there is no `subtitles.md` file in the project root, reply with exactly:

"No subtitles file found, put it in the root of the project and try again."

# From Subtitles to Article

You will convert the content of `subtitles.md` into a blog post article.

## Context and Style

- Use existing articles in this repository as reference to match my writing style.  
  - You can find them in the `src/content/post` subfolders.
- Keep a friendly, approachable tone similar to my other articles.
- Stay faithful to the original transcript, but:
  - Remove filler words or sentences that do not work in written form.
  - Smooth out the flow to read like a well-structured blog post.
- Do not use the `—` character; use `,` or standard punctuation instead.
- Use `"` for quotes (do not use other quote characters).

## Structure and Editing

- Organize the article into clear sections with headings where appropriate.
- Add short introductions and conclusions if needed to make the article feel complete.
- Fix obvious grammar, spelling, and punctuation issues without changing the core meaning.
- When the transcript jumps around, reorder small parts only if it clearly improves readability.

## Code Snippets and Images

- If a code snippet would clearly help the reader understand a concept, insert a `[CODE]` placeholder instead of actual code.
- If the transcript mentions or would benefit from visual elements (images, diagrams, UI screenshots), insert an `[IMAGE]` placeholder.
  - If you add an image placeholder, make sure to add the import at the top of the article as well `import Image from '~/components/widgets/Image.astro';`
- Use placeholders only when they add real value; do not overuse them.

## Video Embed

- Choose a natural point early in the article (after the introduction or after the first main section) to embed the related YouTube video.
- Use the same Astro component used in other articles, but with a placeholder video ID:
  
  `<YouTube id="VIDEO_ID_HERE" />`
  
- Place the embed so that it supports the content rather than interrupting the flow.
- Add the import at the top of the article as well:
  
  `import YouTube from '~/components/widgets/YouTube.astro';`

## Output Format and Location

- Create a new file at:

  `src/content/post/[TODAY-YEAR]/[TODAY-MONTH]/[SLUG]/index.mdx`

  where:
  - `[TODAY-YEAR]` is the current year (e.g. `2025`),
  - `[TODAY-MONTH]` is the current month as a two-digit number (e.g. `11`),
  - `[SLUG]` is a URL-friendly slug derived from the article title (lowercase, words separated by `-`).

- The file must follow the same structure as other posts in that folder.

### Frontmatter

At the top of the file, include frontmatter with at least:

```yaml
---
title: "Your Generated Title"
description: "A concise, friendly summary of the article."
publishDate: "YYYY-MM-DD"
image: "_cover.png"
tags:
  - tag-one
  - tag-two
---