import { Seo } from '../../components/common/Seo';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { cultureCategories } from '../../content/culture';
import { images } from '../../config/images';

export function CulturePage() {
  return (
    <>
      <Seo
        title="Culture"
        description="Explorez les catégories culturelles de Bamboutos et Menoua : patrimoine traditionnel, arts, musique, danse, habillement, gastronomie et patrimoine oral."
      />
      <PageHero
        eyebrow="Culture"
        title="Notre culture"
        subtitle="Un aperçu structuré des dimensions culturelles du Bamboutos et de la Menoua."
        image={images.cultureHero}
      />
      {cultureCategories.map((category) => (
        <Section key={category.id} id={category.id} title={category.title}>
          <p className="max-w-3xl text-heritage-charcoal/80">{category.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {category.topics.map((topic) => (
              <li
                key={topic}
                className="rounded-full border border-heritage-green/20 bg-heritage-green/5 px-3 py-1 text-sm text-heritage-green"
              >
                {topic}
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}
