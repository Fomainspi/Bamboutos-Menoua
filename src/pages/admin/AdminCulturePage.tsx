import { AdminListPage } from '../../components/common/AdminListPage';
import { cultureCategories } from '../../content/culture';

export function AdminCulturePage() {
  return (
    <AdminListPage
      title="Culture"
      items={cultureCategories}
      renderItem={(c) => c.title}
      emptyDescription="Créez, éditez, publiez et organisez le contenu culturel."
    />
  );
}
