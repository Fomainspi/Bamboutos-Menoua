import { Link, useParams } from 'react-router-dom';
import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { EmptyState } from '../../components/common/PageState';
import { events } from '../../content/events';

export function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <Section title="Événement introuvable">
        <EmptyState
          title="Cet événement n'existe pas ou n'est plus disponible"
          description="Il a peut-être été retiré ou l'adresse est incorrecte."
        />
        <Link to="/events" className="mt-4 inline-block text-heritage-green underline">
          Retour aux événements
        </Link>
      </Section>
    );
  }

  return (
    <>
      <Seo title={event.title} description={event.description} />
      <Section title={event.title}>
        <p className="text-heritage-charcoal/80">{event.description}</p>
        <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold">Date</dt>
            <dd>{event.date}</dd>
          </div>
          <div>
            <dt className="font-semibold">Lieu</dt>
            <dd>{event.location}</dd>
          </div>
          {event.organizer && (
            <div>
              <dt className="font-semibold">Organisateur</dt>
              <dd>{event.organizer}</dd>
            </div>
          )}
          {event.capacity && (
            <div>
              <dt className="font-semibold">Capacité</dt>
              <dd>{event.capacity}</dd>
            </div>
          )}
        </dl>
      </Section>
    </>
  );
}
