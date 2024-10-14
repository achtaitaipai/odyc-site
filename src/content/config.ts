import { defineCollection, z } from 'astro:content'

const tutoCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		base: z.string(),
		solution: z.string()
	})
})

const documentationCollection = defineCollection({
	schema: z.object({
		title: z.string()
	})
})

const galleryCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			author: z.string().optional(),
			screenshot: image(),
			url: z.string(),
			lang: z.string().optional()
		})
})

export const collections = {
	tutorial: tutoCollection,
	documentation: documentationCollection,
	gallery: galleryCollection
}
