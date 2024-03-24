import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    base: z.string(),
    solution: z.string(),
  }),
});

export const collections = {
  tutorial: blogCollection,
};
