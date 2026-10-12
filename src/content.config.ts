import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// "work" entries live in src/content/work/*.md
// Each file's `id` is derived from its filename and becomes its `/work/:id` route.
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      role: z.string(),
      projectType: z.string(),
      year: z.string(),
      accent: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      detailCover: image().optional(),
      url: z.url().optional(),
      repo: z.url().optional(),
      video: z.url().optional(),
      gallery: z
        .array(
          z.object({
            image: image().optional(),
            alt: z.string(),
            caption: z.string(),
            placeholder: z.boolean().default(false),
          }),
        )
        .default([]),
      layout: z.enum(['oyster', 'themed', 'product']).default('themed'),
      homeOrder: z.number().int().nonnegative(),
      status: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
