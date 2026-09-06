import { Link, useParams } from 'react-router-dom';
import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { EmptyState } from '../../components/common/PageState';
import { articles } from '../../content/articles';

export function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Section title="Article introuvable">
        <EmptyState title="Cet article n'existe pas ou n'est plus disponible" />
        <Link to="/articles" className="mt-4 inline-block text-heritage-green underline">
          Retour aux articles
        </Link>
      </Section>
    );
  }

  return (
    <>
      <Seo title={article.title} description={article.excerpt} />
      <article className="mx-auto max-w-3xl px-6 py-14">
        <p className="text-sm font-semibold uppercase tracking-wide text-heritage-gold">
          {article.category}
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold text-heritage-green">
          {article.title}
        </h1>
        <div className="mt-6 max-w-none leading-relaxed text-heritage-charcoal/90">{article.content}</div>
      </article>
    </>
  );
}
