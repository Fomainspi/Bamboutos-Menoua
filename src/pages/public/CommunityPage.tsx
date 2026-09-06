import { Seo } from '../../components/common/Seo';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { EmptyState } from '../../components/common/PageState';
import { communityIntro, communityStories, communityAmbassadors } from '../../content/community';
import { images } from '../../config/images';

export function CommunityPage() {
  return (
    <>
      <Seo title="Communauté" description={communityIntro} />
      <PageHero
        eyebrow="Communauté"
        title="Notre communauté"
        subtitle={communityIntro}
        image={images.communityHero}
      />
      <Section title="Histoires de la communauté">
        {communityStories.length === 0 ? (
          <EmptyState
            title="Aucune histoire publiée pour le moment"
            description="Les témoignages vérifiés d'anciens, de jeunes et de membres de la communauté seront publiés ici."
          />
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {communityStories.map((story) => (
              <li key={story.id} className="rounded-lg border border-heritage-brown/10 p-4">
                {story.name}
              </li>
            ))}
          </ul>
        )}
      </Section>
      <Section title="Ambassadeurs culturels">
        {communityAmbassadors.length === 0 ? (
          <EmptyState
            title="À venir"
            description="Les ambassadeurs culturels seront présentés ici une fois désignés par l'association."
          />
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {communityAmbassadors.map((story) => (
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
