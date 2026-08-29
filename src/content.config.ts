import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      standfirst: z.string(),
      category: z.string(),
      date: z.coerce.date(),
      readingTime: z.string().optional(),
      author: z.string(),
      authorRole: z.string().optional(),
      cover: image(),
      coverAlt: z.string(),
      featured: z.boolean().default(false),
      // External archive entries link out instead of rendering a body page.
      externalUrl: z.string().url().optional(),
      draft: z.boolean().default(false),
    }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      order: z.number(),
      founder: z.boolean().default(false),
      portrait: image().optional(),
      portraitAlt: z.string().optional(),
      // Set false where the person has not yet approved their title or bio.
      approved: z.boolean().default(false),
    }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    label: z.string(),
    summary: z.string(),
    order: z.number(),
    anchor: z.string(),
    points: z.array(z.string()),
  }),
});

export const collections = { journal, team, services };
