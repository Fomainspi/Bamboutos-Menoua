interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}

export function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  return (
    <header className="relative isolate flex min-h-[45vh] items-end overflow-hidden bg-heritage-green-dark">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-heritage-charcoal/90 via-heritage-charcoal/40 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10 pt-24 text-heritage-cream">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-heritage-gold-light">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-heritage-cream/90">{subtitle}</p>}
      </div>
    </header>
  );
}
