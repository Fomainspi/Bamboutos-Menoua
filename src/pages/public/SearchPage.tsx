import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { EmptyState } from '../../components/common/PageState';
import { articles } from '../../content/articles';
import { cultureCategories } from '../../content/culture';
import { events } from '../../content/events';
import { galleryItems } from '../../content/gallery';
import { locations } from '../../content/locations';

interface SearchResult {
  type: string;
  title: string;
  to: string;
}

export function SearchPage() {
  const [query, setQuery] = useState('');

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return [
      ...articles
        .filter((a) => a.title.toLowerCase().includes(q))
        .map((a) => ({ type: 'Article', title: a.title, to: `/articles/${a.slug}` })),
      ...cultureCategories
        .filter((c) => c.title.toLowerCase().includes(q))
        .map((c) => ({ type: 'Culture', title: c.title, to: `/culture#${c.id}` })),
      ...events
        .filter((e) => e.title.toLowerCase().includes(q))
        .map((e) => ({ type: 'Événement', title: e.title, to: `/events/${e.id}` })),
      ...galleryItems
        .filter((g) => g.title.toLowerCase().includes(q))
        .map((g) => ({ type: 'Galerie', title: g.title, to: '/gallery' })),
      ...locations
        .filter((l) => l.name.toLowerCase().includes(q))
        .map((l) => ({ type: 'Lieu', title: l.name, to: '/map' })),
    ];
  }, [query]);

  return (
    <>
      <Seo title="Recherche" description="Recherchez du contenu culturel sur Bamboutos–Menoua." />
      <Section title="Recherche">
        <label className="block max-w-xl">
          <span className="sr-only">Rechercher</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher des articles, événements, lieux…"
            className="w-full rounded-md border border-heritage-brown/20 px-4 py-2"
          />
        </label>

        <div className="mt-6">
          {query.trim() && results.length === 0 && (
            <EmptyState title="Aucun résultat" description="Essayez un autre mot-clé." />
          )}
          {results.length > 0 && (
            <ul className="space-y-2">
              {results.map((r) => (
                <li key={`${r.type}-${r.title}`}>
                  <Link to={r.to} className="text-heritage-green hover:underline">
                    <span className="mr-2 text-xs uppercase text-heritage-charcoal/50">
                      {r.type}
                    </span>
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>
    </>
  );
}
