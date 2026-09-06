import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { LinkButton } from '../../components/common/Button';
import { images } from '../../config/images';
import { siteConfig } from '../../config/site';
import { cultureCategories } from '../../content/culture';
import { PlaceholderNotice } from '../../components/common/PageState';

const discoverCards = [
  {
    to: '/bamboutos',
    title: 'Découvrir Bamboutos',
    image: images.bamboutosHero,
    text: "Géographie, communautés et patrimoine du département du Bamboutos.",
  },
  {
    to: '/menoua',
    title: 'Découvrir Menoua',
    image: images.menouaHero,
    text: 'Géographie, communautés et patrimoine du département de la Menoua.',
  },
];

export function HomePage() {
  return (
    <>
      <Seo title="Accueil" description={siteConfig.description} />

      {/* Hero */}
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-heritage-green-dark">
        <img
          src={images.homeHero}
          alt="Paysage représentatif des hauts plateaux de l'Ouest Cameroun"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-charcoal via-heritage-charcoal/50 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center text-heritage-cream">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-heritage-gold-light">
            {siteConfig.tagline}
          </p>
          <h1 className="font-display text-5xl font-bold sm:text-6xl">Bamboutos–Menoua</h1>
          <p className="mt-4 text-xl font-medium text-heritage-gold-light">
            {siteConfig.mission}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-heritage-cream/90">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <LinkButton to="/heritage" variant="primary">
              Explorer notre patrimoine
            </LinkButton>
            <LinkButton to="/community" variant="secondary">
              Découvrir notre communauté
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Mission */}
      <Section
        title="Notre mission"
        subtitle="Préserver notre patrimoine. Célébrer notre culture. Connecter notre communauté."
      >
        <p className="max-w-3xl text-heritage-charcoal/80">
          Bamboutos–Menoua est bien plus qu'une association : c'est une communauté, un
          patrimoine, une culture et une identité à transmettre aux générations futures.
        </p>
      </Section>

      {/* Discover Bamboutos / Menoua */}
      <Section title="Découvrir nos départements">
        <div className="grid gap-6 sm:grid-cols-2">
          {discoverCards.map((card) => (
            <a
              key={card.to}
              href={card.to}
              className="group overflow-hidden rounded-xl border border-heritage-brown/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={card.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-heritage-green">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-heritage-charcoal/70">{card.text}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Cultural Heritage */}
      <Section
        title="Patrimoine culturel"
        subtitle="Un aperçu des catégories culturelles documentées progressivement par l'association."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cultureCategories.map((cat) => (
            <div key={cat.id} className="rounded-lg border border-heritage-brown/10 bg-white p-5">
              <h3 className="font-display text-lg font-semibold text-heritage-green">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-heritage-charcoal/70">{cat.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Traditional Arts */}
      <Section title="Arts traditionnels">
        <PlaceholderNotice>
          Documentation culturelle vérifiée à venir, fournie par l'association.
        </PlaceholderNotice>
      </Section>

      {/* Music & Dance */}
      <Section title="Musique et danse">
        <PlaceholderNotice>
          Documentation culturelle vérifiée à venir, fournie par l'association.
        </PlaceholderNotice>
      </Section>

      {/* Community Stories */}
      <Section
        title="Histoires de la communauté"
        subtitle="Notre patrimoine survit à travers celles et ceux qui le portent."
      >
        <PlaceholderNotice>
          Les témoignages vérifiés de la communauté seront publiés ici.
        </PlaceholderNotice>
      </Section>

      {/* Upcoming Events */}
      <Section title="Événements à venir">
        <PlaceholderNotice>
          Aucun événement n'est actuellement programmé. Revenez bientôt.
        </PlaceholderNotice>
        <div className="mt-4">
          <LinkButton to="/events" variant="outline">
            Voir tous les événements
          </LinkButton>
        </div>
      </Section>

      {/* Latest Articles */}
      <Section title="Derniers articles">
        <PlaceholderNotice>
          Aucun article publié pour le moment.
        </PlaceholderNotice>
        <div className="mt-4">
          <LinkButton to="/articles" variant="outline">
            Voir tous les articles
          </LinkButton>
        </div>
      </Section>

      {/* Gallery */}
      <Section title="Galerie photo">
        <PlaceholderNotice>
          La galerie sera enrichie avec des photographies authentiques fournies par
          l'association.
        </PlaceholderNotice>
        <div className="mt-4">
          <LinkButton to="/gallery" variant="outline">
            Explorer la galerie
          </LinkButton>
        </div>
      </Section>

      {/* Cultural Map */}
      <Section title="Carte culturelle">
        <PlaceholderNotice>
          La carte interactive des villages, chefferies et lieux culturels est en cours de
          construction.
        </PlaceholderNotice>
        <div className="mt-4">
          <LinkButton to="/map" variant="outline">
            Voir la carte
          </LinkButton>
        </div>
      </Section>

      {/* Join the community */}
      <section className="bg-heritage-green px-6 py-16 text-center text-heritage-cream">
        <h2 className="font-display text-3xl font-bold">Rejoignez la communauté</h2>
        <p className="mx-auto mt-3 max-w-xl text-heritage-cream/90">
          Créez votre compte pour recevoir les annonces, participer aux événements et
          contribuer à la préservation de notre patrimoine.
        </p>
        <div className="mt-8">
          <LinkButton to="/register" variant="primary">
            Créer mon compte
          </LinkButton>
        </div>
      </section>
    </>
  );
}
