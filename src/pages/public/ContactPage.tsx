import { useState, type FormEvent } from 'react';
import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { Button } from '../../components/common/Button';
import { siteConfig } from '../../config/site';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = 'Le nom est requis.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Une adresse email valide est requise.';
    }
    if (!message) nextErrors.message = 'Le message est requis.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      event.currentTarget.reset();
    }
  };

  return (
    <>
      <Seo title="Contact" description="Contactez l'association Bamboutos–Menoua." />
      <Section title="Contactez-nous">
        <div className="grid gap-10 lg:grid-cols-2">
          <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Formulaire de contact">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Nom complet
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-md border border-heritage-brown/20 px-4 py-2"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md border border-heritage-brown/20 px-4 py-2"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-md border border-heritage-brown/20 px-4 py-2"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.message}
                </p>
              )}
            </div>
            <Button type="submit">Envoyer</Button>
            {submitted && (
              <p role="status" className="text-sm text-heritage-green">
                Merci, votre message a été enregistré localement. L'intégration d'envoi
                d'emails sera configurée par l'association.
              </p>
            )}
          </form>

          <div>
            <h3 className="font-display text-lg font-semibold text-heritage-green">
              Coordonnées
            </h3>
            <p className="mt-2 text-sm text-heritage-charcoal/70">
              {siteConfig.contact.email || 'Coordonnées à venir, fournies par l\'association.'}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
