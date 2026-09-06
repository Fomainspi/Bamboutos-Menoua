import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { EmptyState } from '../../components/common/PageState';
import { videos } from '../../content/media';

export function MediaPage() {
  return (
    <>
      <Seo
        title="Média"
        description="Vidéos, interviews, documentaires et performances culturelles de Bamboutos–Menoua."
      />
      <Section title="Média" subtitle="Interviews, documentaires, musique et performances de danse.">
        {videos.length === 0 ? (
          <EmptyState
            title="Aucune vidéo publiée pour le moment"
            description="Les vidéos seront ajoutées via des liens externes (YouTube, etc.) par l'association."
          />
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <li key={video.id} className="rounded-lg border border-heritage-brown/10 bg-white p-4">
                <a href={video.url} target="_blank" rel="noreferrer" className="font-semibold text-heritage-green hover:underline">
                  {video.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
