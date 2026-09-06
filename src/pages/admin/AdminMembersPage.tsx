import { AdminListPage } from '../../components/common/AdminListPage';

export function AdminMembersPage() {
  return (
    <AdminListPage
      title="Membres"
      items={[] as string[]}
      renderItem={(item) => item}
      emptyDescription="Les membres inscrits apparaîtront ici pour recherche, filtrage, approbation et gestion."
    />
  );
}
