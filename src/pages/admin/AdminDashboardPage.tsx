import { Seo } from '../../components/common/Seo';
import { articles } from '../../content/articles';
import { events } from '../../content/events';
import { galleryItems } from '../../content/gallery';
import { heritageItems } from '../../content/heritage';

const cards = [
  { label: 'Membres totaux', value: 0 },
  { label: 'Membres actifs', value: 0 },
  { label: 'Événements à venir', value: events.filter((e) => e.status === 'upcoming').length },
  { label: 'Articles publiés', value: articles.filter((a) => a.status === 'published').length },
  { label: 'Éléments de galerie', value: galleryItems.length },
  { label: "Éléments du patrimoine", value: heritageItems.length },
  { label: 'Inscriptions récentes', value: 0 },
];

export function AdminDashboardPage() {
  return (
    <>
      <Seo title="Administration" description="Tableau de bord administrateur." />
      <h1 className="font-display text-2xl font-bold text-heritage-green">Tableau de bord</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className="rounded-lg border border-heritage-brown/10 bg-white p-5">
            <p className="text-sm text-heritage-charcoal/60">{card.label}</p>
            <p className="mt-1 font-display text-3xl font-bold text-heritage-green">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
