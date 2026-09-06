import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';
import { isSupabaseConfigured } from '../../lib/supabase';

export function RegisterPage() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const form = new FormData(event.currentTarget);
    const firstName = String(form.get('firstName') ?? '').trim();
    const lastName = String(form.get('lastName') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const password = String(form.get('password') ?? '');

    if (!firstName || !lastName) {
      setError('Le prénom et le nom sont requis.');
      return;
    }
    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }

    setLoading(true);
    const { error: signUpError } = await signUp(email, password);
    setLoading(false);
    if (signUpError) {
      setError(signUpError);
      return;
    }
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <Seo title="Rejoindre" description="Créez votre compte membre Bamboutos–Menoua." />
      <Section title="Rejoindre la communauté">
        {!isSupabaseConfigured && (
          <p className="mb-4 rounded-md bg-heritage-gold/10 px-4 py-3 text-sm">
            L'inscription nécessite la configuration de Supabase (variables
            VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY).
          </p>
        )}
        <form onSubmit={handleSubmit} className="max-w-lg space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-1 block text-sm font-medium">
                Prénom
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="w-full rounded-md border border-heritage-brown/20 px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-1 block text-sm font-medium">
                Nom
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="w-full rounded-md border border-heritage-brown/20 px-4 py-2"
              />
            </div>
          </div>
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
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium">
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              className="w-full rounded-md border border-heritage-brown/20 px-4 py-2"
            />
          </div>
          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}
          <Button type="submit" disabled={loading}>
            {loading ? 'Création du compte…' : 'Créer mon compte'}
          </Button>
        </form>
        <p className="mt-4 text-sm">
          Déjà membre ?{' '}
          <Link to="/login" className="text-heritage-green underline">
            Se connecter
          </Link>
        </p>
      </Section>
    </>
  );
}
