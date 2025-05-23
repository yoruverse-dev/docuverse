import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "src/content/docs"
    }),
    schema: z.object({
        title: z.string(),
        collection: z.object({
            name: z.string(),
            slug: z.string(),
        }),
        slug: z.string(),
    })
});

export const collections = { docs };