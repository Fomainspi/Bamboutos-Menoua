import { Seo } from '../../components/common/Seo';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { EmptyState } from '../../components/common/PageState';
import { heritageItems, heritageIntro } from '../../content/heritage';
import { images } from '../../config/images';

export function HeritagePage() {
  return (
    <>
      <Seo title="Patrimoine" description={heritageIntro} />
      <PageHero
        eyebrow="Archive numérique"
        title="Patrimoine"
        subtitle={heritageIntro}
        image={images.heritageHero}
      />
      <Section
        title="Archive du patrimoine"
        subtitle="Photographies, documents, témoignages oraux, entretiens, objets traditionnels, articles, audio et vidéo."
      >
        {heritageItems.length === 0 ? (
          <EmptyState
            title="Archive en cours de constitution"
            description="Les éléments du patrimoine seront ajoutés par l'association au fur et à mesure de leur vérification."
          />
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {heritageItems.map((item) => (
              <li key={item.id} className="rounded-lg border border-heritage-brown/10 bg-white p-4">
                <p className="font-semibold text-heritage-green">{item.title}</p>
                <p className="mt-1 text-sm text-heritage-charcoal/70">{item.description}</p>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
