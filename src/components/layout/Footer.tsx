import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { siteConfig } from '../../config/site';

const footerNav = [
  { to: '/about', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
  { to: '/culture', label: 'Culture' },
  { to: '/heritage', label: 'Patrimoine' },
  { to: '/events', label: 'Événements' },
  { to: '/articles', label: 'Articles' },
];

export function Footer() {
  return (
    <footer className="bg-heritage-charcoal text-heritage-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold text-heritage-cream">
            Bamboutos–Menoua
          </p>
          <p className="mt-3 text-sm leading-relaxed">{siteConfig.mission}</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-heritage-gold-light">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-heritage-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-heritage-gold-light">
            Communauté
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/login" className="hover:text-heritage-gold">
                Connexion
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-heritage-gold">
                Rejoindre l’association
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-heritage-gold">
                Confidentialité
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-heritage-gold">
                Conditions d’utilisation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-heritage-gold-light">
            Contact
          </h3>
          <p className="text-sm">
            {siteConfig.contact.email || 'Coordonnées à venir'}
          </p>
          <div className="mt-4 flex gap-4">
            {siteConfig.social.facebook && (
              <a href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-heritage-gold">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            {siteConfig.social.instagram && (
              <a href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-heritage-gold">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            {siteConfig.social.youtube && (
              <a href={siteConfig.social.youtube} aria-label="YouTube" className="hover:text-heritage-gold">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-heritage-cream/10 px-6 py-4 text-center text-xs text-heritage-cream/60">
        © {new Date().getFullYear()} Bamboutos–Menoua. Tous droits réservés.
      </div>
    </footer>
  );
}
