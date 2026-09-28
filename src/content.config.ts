import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    game: z.string(),
    gameSlug: z.string(),
    category: z.string(),
    updated: z.coerce.date(),
    status: z.enum(['Current', 'Updating', 'Archived', 'Needs Review']).default('Current'),
    featured: z.boolean().default(false),
    order: z.number().default(999)
  })
});

export const collections = { guides };
