import { z, defineCollection } from 'astro:content';

export const LANGUAGES = ['en', 'it', 'es'] as const;
export type Language = (typeof LANGUAGES)[number];

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    series: z.string().optional(),
    image: z.string().optional(),

    canonical: z.string().url().optional(),

    publishDate: z.date().or(z.string()).optional(),
    draft: z.boolean().optional(),

    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});

const newsletter = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date().or(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  post,
  newsletter,
};
