import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2';
const variants = {
  primary: 'bg-heritage-gold text-heritage-charcoal hover:bg-heritage-gold-light',
  secondary:
    'border border-heritage-cream/70 text-heritage-cream hover:bg-heritage-cream/10',
  outline:
    'border border-heritage-green text-heritage-green hover:bg-heritage-green hover:text-heritage-cream',
};

type Variant = keyof typeof variants;

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = 'primary',
  to,
  children,
  className = '',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  to: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
