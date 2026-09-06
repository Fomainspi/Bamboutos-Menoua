import { NavLink, Outlet } from 'react-router-dom';

const adminNav = [
  { to: '/admin', label: 'Tableau de bord', end: true },
  { to: '/admin/members', label: 'Membres' },
  { to: '/admin/articles', label: 'Articles' },
  { to: '/admin/events', label: 'Événements' },
  { to: '/admin/gallery', label: 'Galerie' },
  { to: '/admin/culture', label: 'Culture' },
  { to: '/admin/heritage', label: 'Patrimoine' },
  { to: '/admin/media', label: 'Média' },
  { to: '/admin/locations', label: 'Lieux' },
  { to: '/admin/announcements', label: 'Annonces' },
  { to: '/admin/settings', label: 'Paramètres' },
];

export function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-heritage-cream">
      <aside className="hidden w-64 shrink-0 border-r border-heritage-brown/10 bg-white sm:block">
        <div className="px-6 py-6">
          <p className="font-display text-lg font-bold text-heritage-green">Administration</p>
        </div>
        <nav className="flex flex-col gap-1 px-3">
          {adminNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-heritage-green text-heritage-cream'
                    : 'text-heritage-charcoal hover:bg-heritage-green/10'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
