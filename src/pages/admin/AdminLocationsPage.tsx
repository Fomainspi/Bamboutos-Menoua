import { AdminListPage } from '../../components/common/AdminListPage';
import { locations } from '../../content/locations';

export function AdminLocationsPage() {
  return (
    <AdminListPage
      title="Lieux"
      items={locations}
      renderItem={(l) => l.name}
      emptyDescription="Ajoutez, éditez et supprimez des lieux culturels et chefferies vérifiés."
    />
  );
}
