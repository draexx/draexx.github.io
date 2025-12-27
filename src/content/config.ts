import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // 1. Especificamos que es una colección de contenido (Markdown/MDX)
  type: 'content', 
  
  // 2. IMPORTANTE: Agregamos ({ image }) aquí para poder usar la función image()
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // 3. Ahora sí, Astro reconocerá "./portada.jpg" como un objeto de imagen
    heroImage: image().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };