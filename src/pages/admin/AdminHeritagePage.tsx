import { AdminListPage } from '../../components/common/AdminListPage';
import { heritageItems } from '../../content/heritage';

export function AdminHeritagePage() {
  return (
    <AdminListPage
      title="Patrimoine"
      items={heritageItems}
      renderItem={(h) => h.title}
      emptyDescription="Ajoutez, éditez, publiez et archivez des éléments du patrimoine numérique."
    />
  );
}
