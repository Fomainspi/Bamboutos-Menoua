import { Seo } from '../../components/common/Seo';
import { Section } from '../../components/common/Section';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';

export function ProfilePage() {
  const { user, signOut } = useAuth();

  return (
    <>
      <Seo title="Mon profil" description="Gérez votre profil membre Bamboutos–Menoua." />
      <Section title="Mon profil">
        <div className="max-w-md space-y-4">
          <div>
            <p className="text-sm font-medium text-heritage-charcoal/60">Email</p>
            <p>{user?.email}</p>
          </div>
          <Button variant="outline" onClick={() => signOut()}>
            Se déconnecter
          </Button>
        </div>
      </Section>
    </>
  );
}
