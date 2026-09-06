import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { PlaceholderNotice } from '../../components/common/PageState';

export function AboutPage() {
  return (
    <>
      <Seo
        title="À propos"
        description="Mission, vision et engagement de l'association Bamboutos–Menoua pour la préservation culturelle."
      />
      <Section title="À propos de Bamboutos–Menoua">
        <p className="max-w-3xl text-heritage-charcoal/80">
          Bamboutos–Menoua est une plateforme culturelle et communautaire dédiée à la
          préservation, la célébration et la transmission du patrimoine culturel des
          départements du Bamboutos et de la Menoua, dans la Région de l'Ouest du Cameroun.
        </p>
      </Section>
      <Section title="Notre mission">
        <PlaceholderNotice>
          Les informations détaillées sur l'association (histoire, statuts, mission
          officielle) seront fournies et vérifiées par l'association.
        </PlaceholderNotice>
      </Section>
      <Section title="Notre vision">
        <PlaceholderNotice>
          Documentation à venir, fournie par l'association.
        </PlaceholderNotice>
      </Section>
      <Section title="Préservation culturelle et communauté">
        <PlaceholderNotice>
          Documentation à venir, fournie par l'association.
        </PlaceholderNotice>
      </Section>
    </>
  );
}
