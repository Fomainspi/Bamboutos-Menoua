import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-14 ${className}`}>
      {title && (
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold text-heritage-green">{title}</h2>
          {subtitle && <p className="mt-2 max-w-2xl text-heritage-charcoal/70">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
