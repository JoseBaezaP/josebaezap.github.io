import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const tech  = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "./src/data/tech" }),
  schema: ({image}) => z.object({
    icon: image(),
    tech: z.string(),
    slug: z.string(),
  }),
});


// Expose your defined collection to Astro
// with the `collections` export
export const collections = { tech };
