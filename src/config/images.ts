/**
 * Centralized image configuration.
 *
 * Every image URL used across the application must be referenced from this
 * file rather than hard-coded inside components. This makes it possible for
 * the association to replace placeholder imagery with authentic
 * photographs simply by dropping new files into `public/images/...` and,
 * if needed, updating the paths below — no component logic changes
 * required.
 *
 * See the "Replacing Images" section of the README for full guidance on
 * naming conventions, recommended dimensions, and crediting sources.
 */

export const images = {
  // Hero images
  homeHero: '/images/hero/home-hero.svg',
  bamboutosHero: '/images/bamboutos/hero.svg',
  menouaHero: '/images/menoua/hero.svg',
  cultureHero: '/images/culture/hero.svg',
  heritageHero: '/images/heritage/hero.svg',
  communityHero: '/images/community/hero.svg',
  eventsHero: '/images/events/hero.svg',

  // Brand
  logo: '/images/placeholders/logo-placeholder.svg',

  // Section placeholders
  placeholderLandscape: '/images/placeholders/landscape-placeholder.svg',
  placeholderPortrait: '/images/placeholders/portrait-placeholder.svg',
  placeholderSquare: '/images/placeholders/square-placeholder.svg',
} as const;

export type ImageKey = keyof typeof images;

/**
 * Simple helper to describe whether an image path is authentic association
 * content or a representative placeholder used during development.
 */
export type ImageProvenance = 'authentic' | 'placeholder';

export interface ImageMeta {
  src: string;
  alt: string;
  provenance: ImageProvenance;
  credit?: string;
}
