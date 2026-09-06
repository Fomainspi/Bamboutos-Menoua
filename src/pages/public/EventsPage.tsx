import { Seo } from '../../components/common/Seo';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { EmptyState } from '../../components/common/PageState';
import { events } from '../../content/events';
import { images } from '../../config/images';

export function EventsPage() {
  const upcoming = events.filter((e) => e.status === 'upcoming');
  const past = events.filter((e) => e.status === 'past');

  return (
    <>
      <Seo
        title="Événements"
        description="Découvrez les événements culturels et communautaires de Bamboutos–Menoua."
      />
      <PageHero eyebrow="Agenda" title="Événements" image={images.eventsHero} />

      <Section title="À venir">
        {upcoming.length === 0 ? (
          <EmptyState
            title="Aucun événement programmé"
            description="Les prochains événements de l'association seront annoncés ici."
          />
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <li key={event.id} className="rounded-lg border border-heritage-brown/10 bg-white p-4">
                <a href={`/events/${event.id}`} className="font-semibold text-heritage-green hover:underline">
                  {event.title}
                </a>
                <p className="mt-1 text-sm text-heritage-charcoal/70">{event.date}</p>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section title="Événements passés">
        {past.length === 0 ? (
          <EmptyState title="Aucun événement passé enregistré" />
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((event) => (
              <li key={event.id} className="rounded-lg border border-heritage-brown/10 bg-white p-4">
                {event.title}
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
