import { Link } from 'react-router-dom';
import { Seo } from '../../components/common/Seo';

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page introuvable" description="La page demandée est introuvable." />
      <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
        <p className="font-display text-6xl font-bold text-heritage-green">404</p>
        <p className="mt-4 text-heritage-charcoal/70">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="mt-6 text-heritage-green underline">
          Retour à l'accueil
        </Link>
      </div>
    </>
  );
}
