import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      type: z.enum(["flagship", "tile"]),
      role: z.string(),
      teamSize: z.string().optional(),
      dates: z.string(),
      platforms: z.array(z.string()).default([]),
      tech: z.string().optional(),
      hero: image().optional(),
      heroAlt: z.string().optional(),
      thumbnail: image().optional(),
      thumbnailAlt: z.string().optional(),
      youtubeId: z.string().optional(),
      localVideo: z.string().optional(),
      videoAspect: z.enum(["landscape", "portrait"]).default("landscape"),
      order: z.number().default(0),
      links: z
        .array(z.object({ label: z.string(), url: z.string().url() }))
        .default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
