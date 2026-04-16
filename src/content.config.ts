import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = [
  'pizza',
  'dive-bars',
  'coffee',
  'underrated',
  'legends',
  'polish',
  'breakfast',
  'late-night',
] as const;

export const CATEGORY_LABELS: Record<(typeof CATEGORIES)[number], string> = {
  pizza: 'Pizza',
  'dive-bars': 'Dive Bars',
  coffee: 'Coffee',
  underrated: 'Underrated Restaurants',
  legends: 'Neighborhood Legends',
  polish: 'Polish Greenpoint',
  breakfast: 'Bagels & Breakfast',
  'late-night': 'Last Call / Late Night',
};

const spots = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/spots' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(CATEGORIES),
    hook: z.string().max(140),
    address: z.string(),
    hours: z.string(),
    website: z.string().url().optional(),
    instagram: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.array(z.string()).min(1).max(3),
    bestFor: z.string(),
    proTip: z.string(),
    image: z.string().optional(),
    // For the future map
    lat: z.number().optional(),
    lng: z.number().optional(),
    // Sort key — lower = higher on the page
    rank: z.number().default(100),
  }),
});

export const collections = { spots };
