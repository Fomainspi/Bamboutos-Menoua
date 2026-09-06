import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { PlaceholderNotice } from '../../components/common/PageState';

export function LegalPage({ title }: { title: string }) {
  return (
    <>
      <Seo title={title} description={`${title} de Bamboutos–Menoua.`} />
      <Section title={title}>
        <PlaceholderNotice>
          Ce contenu juridique sera rédigé et fourni par l'association.
        </PlaceholderNotice>
      </Section>
    </>
  );
}
