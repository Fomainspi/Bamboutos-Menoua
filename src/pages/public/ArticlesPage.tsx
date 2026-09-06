import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { EmptyState } from '../../components/common/PageState';
import { articles, articleCategories } from '../../content/articles';

export function ArticlesPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      articles.filter((article) => {
        const matchesQuery = article.title.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = !category || article.category === category;
        return matchesQuery && matchesCategory;
      }),
    [query, category],
  );

  return (
    <>
      <Seo
        title="Articles"
        description="Culture, patrimoine, histoire et vie communautaire de Bamboutos–Menoua."
      />
      <Section title="Articles" subtitle="Culture • Patrimoine • Histoire • Communauté">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex-1">
            <span className="sr-only">Rechercher un article</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un article…"
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
            {articleCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            title="Aucun article publié pour le moment"
            description="Les articles culturels et communautaires seront publiés ici au fur et à mesure."
          />
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <li key={article.slug} className="rounded-lg border border-heritage-brown/10 bg-white p-5">
                <Link to={`/articles/${article.slug}`} className="font-display text-lg font-semibold text-heritage-green hover:underline">
                  {article.title}
                </Link>
                <p className="mt-2 text-sm text-heritage-charcoal/70">{article.excerpt}</p>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
