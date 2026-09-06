import { useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';
import { isSupabaseConfigured } from '../../lib/supabase';

export function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const from = (location.state as { from?: Location })?.from?.pathname ?? '/dashboard';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email') ?? '');
    const password = String(form.get('password') ?? '');
    const { error: signInError } = await signIn(email, password);
    setLoading(false);
    if (signInError) {
      setError(signInError);
      return;
    }
    navigate(from, { replace: true });
  };

  return (
    <>
      <Seo title="Connexion" description="Connectez-vous à votre espace membre Bamboutos–Menoua." />
      <Section title="Connexion">
        {!isSupabaseConfigured && (
          <p className="mb-4 rounded-md bg-heritage-gold/10 px-4 py-3 text-sm">
            L'authentification nécessite la configuration de Supabase (variables
            VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY).
          </p>
        )}
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
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium">
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-md border border-heritage-brown/20 px-4 py-2"
            />
          </div>
          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}
          <Button type="submit" disabled={loading}>
            {loading ? 'Connexion…' : 'Se connecter'}
          </Button>
        </form>
        <p className="mt-4 text-sm">
          <Link to="/forgot-password" className="text-heritage-green underline">
            Mot de passe oublié ?
          </Link>
        </p>
        <p className="mt-2 text-sm">
          Pas encore de compte ?{' '}
          <Link to="/register" className="text-heritage-green underline">
            Rejoindre la communauté
          </Link>
        </p>
      </Section>
    </>
  );
}
