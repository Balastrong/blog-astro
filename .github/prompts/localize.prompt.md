---
agent: agent
---

Take the current article in `index.mdx` and localize it in the requested language.

It's localization, not straight translation. Make sure to keep the flow but adapt some sentences or expressions if they sound differently in the target language and don't exactly translate word by word as usually it would sound odd to a native speaker.

**CRITICAL INSTRUCTIONS FOR NATURAL PHRASING:**
- **Avoid literal translations of idioms:** English expressions often don't map 1:1.
    - Example: "Start fresh" -> "Iniziare da zero" (NOT "iniziare fresco").
    - Example: "Something else" (meaning special) -> "Tutta un'altra cosa" (NOT "qualcos'altro").
    - Example: "I feel bad" (regret) -> "Mi dispiace" (NOT "Mi sento male").
    - Example: "Journey" (career/experience) -> "Percorso" or "Avventura" (NOT "Viaggio").
- **Rephrase for the target culture:** If a sentence structure is common in English but awkward in the target language, rewrite the entire sentence to convey the meaning naturally.
- **Tone check:** Ensure the emotional weight is correct. "Loved it" might be "Mi è piaciuto moltissimo" rather than "L'ho amato" depending on context.

Make it proficient and natural for a native speaker of the target language.

Technical terms that are of common use in English also while speaking in the target language can be kept.

In the frontmatter add a new field called `slug` with the localized and SEO optimized slug for the target language version of the article.

OUTPUT: The localized article in a file named `index.{language_code}.mdx` in the same directory as the original `index.mdx` file, where {language_code} is the appropriate ISO 639-1 language code for the requested language.

Language codes:
- Italian: it
- Spanish: es

Once you've done localization, read the article once again to make sure everything sounds natural and proficient for a native speaker of the target language, it doesn't have to sound like a direct translation but a localized article, to make it more natural for readers of that language.