import { AdminListPage } from '../../components/common/AdminListPage';

export function AdminAnnouncementsPage() {
  return (
    <AdminListPage
      title="Annonces"
      items={[] as string[]}
      renderItem={(item) => item}
      emptyDescription="Créez, publiez et archivez des annonces pour la communauté."
    />
  );
}
