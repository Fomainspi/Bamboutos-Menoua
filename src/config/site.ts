/**
 * Site-wide configuration and placeholders.
 * The association must supply real contact details, social links, and
 * legal information before launch. Never invent this information.
 */
export const siteConfig = {
  name: 'Bamboutos–Menoua',
  tagline: 'Culture • Patrimoine • Communauté',
  mission: 'Notre culture. Notre patrimoine. Notre identité.',
  description:
    'Découvrez, préservez et célébrez le riche patrimoine culturel de Bamboutos et Menoua, en connectant les générations et les communautés à travers le monde.',
  contact: {
    email: 'contact@example.org', // Placeholder — to be replaced by the association
    phone: '', // To be provided by the association
    whatsapp: '', // To be provided by the association
    address: '', // To be provided by the association
  },
  social: {
    facebook: '',
    instagram: '',
    youtube: '',
    twitter: '',
  },
} as const;
