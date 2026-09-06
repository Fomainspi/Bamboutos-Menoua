import { AdminListPage } from '../../components/common/AdminListPage';
import { galleryItems } from '../../content/gallery';

export function AdminGalleryPage() {
  return (
    <AdminListPage
      title="Galerie"
      items={galleryItems}
      renderItem={(g) => g.title}
      emptyDescription="Téléversez des images, éditez les métadonnées et organisez les catégories."
    />
  );
}
