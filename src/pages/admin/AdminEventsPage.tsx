import { AdminListPage } from '../../components/common/AdminListPage';
import { events } from '../../content/events';

export function AdminEventsPage() {
  return (
    <AdminListPage
      title="Événements"
      items={events}
      renderItem={(e) => e.title}
      emptyDescription="Créez, éditez, publiez et supprimez des événements communautaires."
    />
  );
}
