import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  schema: ({ image }) => z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string().optional(),
    image: image(),
    author: z.string().default('Ángel González Vázquez'),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).default(['uncategorized']),
    publishDate: z.string(),
  })
})

export const collections = {
  posts,
};
