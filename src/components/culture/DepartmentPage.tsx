import { Seo } from '../common/Seo';
import { PageHero } from '../common/PageHero';
import { Section } from '../common/Section';
import { PlaceholderNotice } from '../common/PageState';
import type { DepartmentSection } from '../../content/bamboutos';
import type { CommunityStory } from '../../types';

interface DepartmentPageProps {
  name: string;
  heroImage: string;
  intro: string;
  sections: DepartmentSection[];
  stories: CommunityStory[];
}

export function DepartmentPage({ name, heroImage, intro, sections, stories }: DepartmentPageProps) {
  return (
    <>
      <Seo title={name} description={intro} />
      <PageHero eyebrow="Département" title={name} subtitle={intro} image={heroImage} />

      <Section title="Aperçu">
        <p className="max-w-3xl text-heritage-charcoal/80">{intro}</p>
      </Section>

      {sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          <PlaceholderNotice>{section.body}</PlaceholderNotice>
        </Section>
      ))}

      <Section title="Galerie">
        <PlaceholderNotice>
          Les photographies authentiques de {name} seront ajoutées par l'association.
        </PlaceholderNotice>
      </Section>

      <Section title="Articles liés">
        {stories.length === 0 ? (
          <PlaceholderNotice>Aucun article publié pour le moment.</PlaceholderNotice>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {stories.map((story) => (
              <li key={story.id} className="rounded-lg border border-heritage-brown/10 p-4">
                {story.name}
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
