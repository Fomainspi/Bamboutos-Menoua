import { Seo } from '../../components/common/Seo';
import { siteConfig } from '../../config/site';

export function AdminSettingsPage() {
  return (
    <>
      <Seo title="Paramètres" description="Paramètres de la plateforme." />
      <h1 className="font-display text-2xl font-bold text-heritage-green">Paramètres</h1>
      <div className="mt-6 max-w-lg space-y-3 rounded-lg border border-heritage-brown/10 bg-white p-5 text-sm">
        <p>
          <span className="font-semibold">Nom du site :</span> {siteConfig.name}
        </p>
        <p>
          <span className="font-semibold">Email de contact :</span>{' '}
          {siteConfig.contact.email || 'Non configuré'}
        </p>
        <p className="text-heritage-charcoal/60">
          Les paramètres avancés (rôles, RLS, intégrations) sont gérés via Supabase.
        </p>
      </div>
    </>
  );
}
