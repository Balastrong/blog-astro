---
description: Audit and improve the frontmatter of the current blog post. Ensures all required fields are present, the title and description are SEO-optimized, and tags are well-chosen.
---

Audit and improve the frontmatter of the currently open `index.mdx` blog post.

## Schema

The supported frontmatter fields are:

| Field         | Required | Notes |
|---------------|----------|-------|
| `title`       | yes      | String |
| `description` | yes      | String, 140–160 characters |
| `publishDate` | yes      | `YYYY-MM-DD` string |
| `image`       | yes      | Relative path, typically `./_cover.png` |
| `tags`        | yes      | Array, 2–5 items (see tag rules below) |
| `series`      | no       | Only if the post is part of a named series |
| `canonical`   | no       | Full URL, only if the post was published elsewhere first |
| `draft`       | no       | `true` to hide from production; omit when publishing |
| `excerpt`     | no       | Short override for list previews; omit if `description` is sufficient |
| `author`      | no       | Omit if it's the default author |

## Title Rules

- Include the primary keyword naturally in the first half of the title.
- Be specific and concrete — avoid vague titles like "Getting started with X".
- Aim for 50–65 characters.
- Do not keyword-stuff; the title should still read naturally.

## Description Rules

- 140–160 characters (check your output — this matters for search snippets).
- Lead with the primary keyword or the most concrete benefit.
- Avoid opening with "Learn how to" or "In this article" — start with what the reader gets.
- Should complement, not repeat, the title.

## Tag Rules

Follow the tag rules and use the canonical tag list defined in [`set-tags.prompt.md`](./set-tags.prompt.md). If you create a new tag, add it there.

## What to Do

1. Read the article body to understand the core topics, primary keyword, and audience.
2. Audit each required field:
   - Missing fields → add them.
   - Suboptimal title or description → rewrite following the rules above.
   - Wrong or missing tags → fix them.
3. Leave optional fields (`series`, `canonical`, `draft`, `excerpt`, `author`) untouched unless clearly needed.
4. Output the updated frontmatter block and briefly explain any changes made.
