import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({ pattern: '*/index.md', base: './src/content/projects' }),
    schema: ({ image }) =>
    {
        // A gallery entry is either an image (optimized by Astro) or a short looping video (former GIFs).
        const galleryItem = z.union([
            z.object({ image: image(), caption: z.string().optional() }),
            z.object({ video: z.string().endsWith('.mp4'), caption: z.string().optional() }),
        ]);

        return z.object({
            title: z.string(),
            tagline: z.string().default(''),
            year: z.number().int(),
            duration: z.string(),
            tech: z.string(),
            roles: z.string(),
            teamSize: z.string(),
            cover: image(),
            // Higher shows first on the Games page. Gaps of 10 let a new project slot in without renumbering.
            order: z.number(),
            // Position on the Home page (1 = first). Omit to keep the project off the Home page.
            featured: z.number().int().positive().optional(),
            youtube: z.string().default(''),
            availableOn: z.array(z.object({
                platform: z.enum(['itch', 'googleplay', 'steam', 'link']),
                url: z.url(),
            })).default([]),
            pitch: z.string(),
            screenshots: z.array(galleryItem).default([]),
            features: z.array(galleryItem).default([]),
        });
    },
});

export const collections = { projects };
