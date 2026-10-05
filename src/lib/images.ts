import type { ImageMetadata } from 'astro';

// Content files (JSON data and markdown) name card photographs by their path under
// src/assets/images, e.g. "features/expedition-penguins.jpg", so the CMS can edit them as text.
// This resolves that path to the processed asset Astro needs.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/**/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

export function findImage(path: string | null | undefined): ImageMetadata | undefined {
  if (!path) return undefined;
  return files[`../assets/images/${path}`]?.default;
}
