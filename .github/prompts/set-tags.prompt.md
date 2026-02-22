---
description: Analyze the current blog post and set the most appropriate tags from the existing tag list. Creates new tags only when truly necessary for SEO.
---

Analyze the currently open `index.mdx` blog post and set the most appropriate tags in its frontmatter.

## Existing Tags

Reuse tags from this list whenever possible:

`advent-of-code`, `ai`, `astro`, `autocomplete`, `awesome-lists`, `branch`, `breadcrumbs`, `career`, `chatgpt`, `chess`, `chrome`, `clean-code`, `cli`, `code-coverage`, `code-review`, `code-smell`, `commit`, `community`, `conference`, `context-engineering`, `copilot`, `debugger`, `devrel`, `events`, `fig`, `framework`, `git`, `git-hooks`, `github`, `github-actions`, `github-desktop`, `good-first-issue`, `hacktoberfest`, `impostor`, `issues`, `javascript`, `json`, `live`, `live-coding`, `llm`, `localization`, `mcp`, `merge`, `merge-conflict`, `nodejs`, `npm`, `nvm`, `open-source`, `personal`, `pr`, `productivity`, `pull-request`, `qwik`, `react`, `rebase`, `refactoring`, `rust`, `shadcn-ui`, `smartworking`, `spark`, `squash`, `swag`, `tailwind`, `tanstack`, `tanstack-form`, `tanstack-router`, `tanstack-start`, `tdd`, `terminal`, `testing`, `trello`, `tutorial`, `typescript`, `vscode`, `warnings`, `warp`, `webdev`, `workflow`, `youtube`

## Rules

1. **Prefer existing tags.** Only create a new tag if no existing one covers the topic and the topic is significant enough to warrant its own SEO-friendly tag.
2. **Choose 2–5 tags.** Enough to be discoverable, not so many they lose meaning.
3. **Relevance over quantity.** Each tag must reflect a main topic of the article, not just a passing mention.
4. **New tags must be:** lowercase, hyphenated (e.g. `my-new-tag`), and genuinely useful for readers browsing by topic.
5. If you create a new tag, update the existing tags list in this prompt file.

## What to Do

1. Read the article title, description, and body to understand the core topics.
2. Select the most relevant tags from the list above.
3. Replace the `tags:` block in the frontmatter with your chosen tags.
4. Briefly explain (1–2 sentences) why you picked those tags and whether any new tags were created.
