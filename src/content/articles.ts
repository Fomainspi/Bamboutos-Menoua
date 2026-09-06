import type { Article } from '../types';

export const articleCategories = [
  'Culture',
  'Patrimoine',
  'Histoire',
  'Communauté',
  'Événements',
  'Jeunesse',
  'Éducation',
  'Association',
];

/**
 * No articles are fabricated. Real editorial content will be added here (or
 * migrated to Supabase `articles` table) once written and verified.
 */
export const articles: Article[] = [];
