import type { ReactNode } from 'react';

export function LoadingState({ label = 'Chargement…' }: { label?: string }) {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center gap-3 py-16 text-heritage-charcoal/70"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-heritage-gold border-t-transparent" />
      <p>{label}</p>
    </div>
  );
}

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="rounded-lg border border-dashed border-heritage-brown/30 bg-heritage-cream px-6 py-12 text-center">
      <p className="font-display text-xl text-heritage-green">{title}</p>
      {description && (
        <p className="mt-2 text-sm text-heritage-charcoal/70">{description}</p>
      )}
    </div>
  );
}

export function ErrorState({
  message = "Une erreur est survenue lors du chargement des données.",
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div
      role="alert"
      className="rounded-lg border border-red-300 bg-red-50 px-6 py-8 text-center text-red-800"
    >
      <p>{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-md bg-heritage-green px-4 py-2 text-sm font-medium text-white hover:bg-heritage-green-dark"
        >
          Réessayer
        </button>
      )}
    </div>
  );
}

export function PlaceholderNotice({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-md bg-heritage-gold/10 px-4 py-3 text-sm italic text-heritage-charcoal/70">
      {children}
    </p>
  );
}
