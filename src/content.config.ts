import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  // IMPORTANTE: Agregamos ({ image }) aquí para poder usar la función image()
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Ahora sí, Astro reconocerá "./portada.jpg" como un objeto de imagen
    heroImage: image().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };