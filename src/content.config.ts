import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.union([z.string(), z.number()]),
    role: z.string(),
    tools: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    link: z.string().optional(),
    repo: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { posts, projects };
