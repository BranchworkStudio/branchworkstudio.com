import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { branches, statuses } from './data/branches';

const keys = <T extends object>(o: T) => Object.keys(o) as [keyof T & string, ...(keyof T & string)[]];

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      branch: z.enum(keys(branches)),
      // What the thing is, in plain words: "iOS app", "Web app", "Bookshelf"…
      kind: z.string(),
      status: z.enum(keys(statuses)),
      // Lower numbers sort first on the home page; the first one gets the wide slot.
      order: z.number().default(100),
      // Materials: a tech stack for code, wood species for a table.
      made_with: z.array(z.string()).default([]),
      // A single wide image, or phone screens shown side by side.
      cover: image().optional(),
      screens: z.array(image()).default([]),
      cover_alt: z.string(),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
