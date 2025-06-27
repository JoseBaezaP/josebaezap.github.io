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
      lang: z.string(),
      start: z.string(),
      end: z.string(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      url: z.string().optional(),
      lang: z.string(),
    }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { tech, companies, projects };
