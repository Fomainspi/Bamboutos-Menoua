import { AdminListPage } from '../../components/common/AdminListPage';
import { videos } from '../../content/media';

export function AdminMediaPage() {
  return (
    <AdminListPage
      title="Média"
      items={videos}
      renderItem={(v) => v.title}
      emptyDescription="Ajoutez, éditez et supprimez des vidéos externes (YouTube, etc.)."
    />
  );
}
