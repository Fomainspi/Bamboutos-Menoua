import { useState, type FormEvent } from 'react';
import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';

export function ForgotPasswordPage() {
  const { resetPassword } = useAuth();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email') ?? '');
    const { error: resetError } = await resetPassword(email);
    if (resetError) {
      setError(resetError);
      return;
    }
    setSent(true);
  };

  return (
    <>
      <Seo title="Mot de passe oublié" description="Réinitialisez votre mot de passe." />
      <Section title="Mot de passe oublié">
        <form onSubmit={handleSubmit} className="max-w-sm space-y-4" noValidate>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-heritage-brown/20 px-4 py-2"
            />
          </div>
          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}
          <Button type="submit">Envoyer le lien de réinitialisation</Button>
        </form>
        {sent && (
          <p role="status" className="mt-4 text-sm text-heritage-green">
            Si un compte existe avec cette adresse, un lien de réinitialisation a été
            envoyé.
          </p>
        )}
      </Section>
    </>
  );
}
