import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { useAuth } from '../../hooks/useAuth';
import { events } from '../../content/events';

export function DashboardPage() {
  const { user } = useAuth();
  const upcomingCount = events.filter((e) => e.status === 'upcoming').length;

  return (
    <>
      <Seo title="Mon espace" description="Tableau de bord membre Bamboutos–Menoua." />
      <Section title={`Bienvenue, ${user?.email ?? 'Membre'}`}>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-heritage-brown/10 bg-white p-5">
            <p className="text-sm text-heritage-charcoal/60">Adhésion</p>
            <p className="mt-1 font-display text-2xl font-bold text-heritage-green">Active</p>
          </div>
          <div className="rounded-lg border border-heritage-brown/10 bg-white p-5">
            <p className="text-sm text-heritage-charcoal/60">Événements à venir</p>
            <p className="mt-1 font-display text-2xl font-bold text-heritage-green">
              {upcomingCount}
            </p>
          </div>
          <div className="rounded-lg border border-heritage-brown/10 bg-white p-5">
            <p className="text-sm text-heritage-charcoal/60">Mes inscriptions</p>
            <p className="mt-1 font-display text-2xl font-bold text-heritage-green">0</p>
          </div>
        </div>
      </Section>
      <Section title="Dernières actualités de la communauté">
        <p className="text-heritage-charcoal/70">
          Aucune annonce pour le moment.
        </p>
      </Section>
    </>
  );
}
