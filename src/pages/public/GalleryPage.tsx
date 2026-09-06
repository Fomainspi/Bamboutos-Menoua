import { useMemo, useState } from 'react';
import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { EmptyState } from '../../components/common/PageState';
import { galleryItems, galleryCategories } from '../../content/gallery';

export function GalleryPage() {
  const [category, setCategory] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () =>
      galleryItems.filter((item) => {
        const matchesCategory = !category || item.category === category;
        const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      }),
    [category, query],
  );

  return (
    <>
      <Seo
        title="Galerie"
        description="Galerie photo représentative de Bamboutos–Menoua : paysages, culture, communauté et événements."
      />
      <Section title="Galerie photo">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex-1">
            <span className="sr-only">Rechercher dans la galerie</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une image…"
              className="w-full rounded-md border border-heritage-brown/20 px-4 py-2"
            />
          </label>
          <select
            aria-label="Filtrer par catégorie"
            value={category ?? ''}
            onChange={(e) => setCategory(e.target.value || null)}
            className="rounded-md border border-heritage-brown/20 px-4 py-2"
          >
            <option value="">Toutes les catégories</option>
            {galleryCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            title="La galerie est en cours de constitution"
            description="Des photographies authentiques fournies par l'association seront ajoutées ici, avec crédits et métadonnées."
          />
        ) : (
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
            {filtered.map((item) => (
              <figure key={item.id} className="break-inside-avoid overflow-hidden rounded-lg">
                <img src={item.image} alt={item.title} loading="lazy" className="w-full" />
                <figcaption className="mt-1 text-xs text-heritage-charcoal/60">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
