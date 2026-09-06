import { AdminListPage } from '../../components/common/AdminListPage';
import { articles } from '../../content/articles';

export function AdminArticlesPage() {
  return (
    <AdminListPage
      title="Articles"
      items={articles}
      renderItem={(a) => a.title}
      emptyDescription="Créez, éditez, publiez et dépubliez des articles culturels."
    />
  );
}
