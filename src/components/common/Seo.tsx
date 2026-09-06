import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
}

/**
 * Lightweight SEO helper that sets the document title and meta description
 * without pulling in an extra dependency. Works fine for a static SPA
 * deployed to GitHub Pages.
 */
export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = `${title} | Bamboutos–Menoua`;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
  }, [title, description]);

  return null;
}
