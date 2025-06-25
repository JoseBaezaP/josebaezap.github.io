import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const tech = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "./src/data/tech" }),
  schema: ({ image }) =>
    z.object({
      order: z.number().int().positive(),
      icon: image(),
      tech: z.string(),
    }),
});

const companies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/companies" }),
  schema: () =>
    z.object({
      title: z.string(),
      company: z.string(),
      start: z.string(),
      end: z.string(),
    }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { tech, companies };
