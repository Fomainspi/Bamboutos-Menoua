import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/bamboutos', label: 'Bamboutos' },
  { to: '/menoua', label: 'Menoua' },
  { to: '/culture', label: 'Culture' },
  { to: '/heritage', label: 'Patrimoine' },
  { to: '/community', label: 'Communauté' },
  { to: '/events', label: 'Événements' },
  { to: '/articles', label: 'Articles' },
  { to: '/gallery', label: 'Galerie' },
  { to: '/media', label: 'Média' },
  { to: '/map', label: 'Carte' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium transition-colors hover:text-heritage-gold ${
      isActive ? 'text-heritage-gold' : 'text-heritage-cream'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-heritage-green-dark shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-display text-lg font-bold text-heritage-cream">
          Bamboutos–Menoua
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:flex lg:items-center">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/search"
            aria-label="Recherche"
            className="text-heritage-cream hover:text-heritage-gold"
          >
            <Search className="h-5 w-5" />
          </Link>
          {user ? (
            <Link
              to="/dashboard"
              className="rounded-md bg-heritage-gold px-4 py-2 text-sm font-semibold text-heritage-charcoal hover:bg-heritage-gold-light"
            >
              Mon espace
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-heritage-cream hover:text-heritage-gold">
                Connexion
              </Link>
              <Link
                to="/register"
                className="rounded-md bg-heritage-gold px-4 py-2 text-sm font-semibold text-heritage-charcoal hover:bg-heritage-gold-light"
              >
                Rejoindre
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="text-heritage-cream lg:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Navigation mobile"
          className="border-t border-heritage-cream/10 bg-heritage-green-dark px-4 pb-6 lg:hidden"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 border-t border-heritage-cream/10 pt-4">
            {user ? (
              <Link
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="rounded-md bg-heritage-gold px-4 py-2 text-center text-sm font-semibold text-heritage-charcoal"
              >
                Mon espace
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-heritage-cream/40 px-4 py-2 text-center text-sm font-medium text-heritage-cream"
                >
                  Connexion
                </Link>
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="rounded-md bg-heritage-gold px-4 py-2 text-center text-sm font-semibold text-heritage-charcoal"
                >
                  Rejoindre
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
