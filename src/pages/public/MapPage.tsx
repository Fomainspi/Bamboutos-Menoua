import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { EmptyState } from '../../components/common/PageState';
import { locations } from '../../content/locations';

export function MapPage() {
  return (
    <>
      <Seo
        title="Carte culturelle"
        description="Carte interactive des villages, chefferies et lieux culturels de Bamboutos et Menoua."
      />
      <Section
        title="Carte culturelle"
        subtitle="Départements, communes, villages, chefferies et sites du patrimoine."
      >
        {locations.length === 0 ? (
          <EmptyState
            title="La carte interactive est en cours de construction"
            description="Les données de localisation culturellement sensibles seront ajoutées uniquement après vérification par l'association."
          />
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <li key={loc.id} className="rounded-lg border border-heritage-brown/10 bg-white p-4">
                <p className="font-semibold text-heritage-green">{loc.name}</p>
                <p className="text-sm text-heritage-charcoal/70">{loc.description}</p>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
