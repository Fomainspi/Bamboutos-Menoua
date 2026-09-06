import { EmptyState } from './PageState';

interface AdminListPageProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T) => string;
  emptyDescription: string;
}

/**
 * Generic admin list scaffold used across resource sections (members,
 * articles, events, gallery, culture, heritage, media, locations,
 * announcements). Each section can later be extended with full CRUD forms
 * backed by Supabase.
 */
export function AdminListPage<T>({
  title,
  items,
  renderItem,
  emptyDescription,
}: AdminListPageProps<T>) {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-heritage-green">{title}</h1>
        <button
          type="button"
          className="rounded-md bg-heritage-green px-4 py-2 text-sm font-semibold text-heritage-cream hover:bg-heritage-green-dark"
        >
          Ajouter
        </button>
      </div>
      {items.length === 0 ? (
        <EmptyState title="Aucun élément" description={emptyDescription} />
      ) : (
        <ul className="divide-y divide-heritage-brown/10 rounded-lg border border-heritage-brown/10 bg-white">
          {items.map((item, index) => (
            <li key={index} className="px-4 py-3 text-sm">
              {renderItem(item)}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
