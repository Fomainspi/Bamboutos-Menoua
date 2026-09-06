import { Navigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { LoadingState } from './PageState';
import type { UserRole } from '../../types';

export function ProtectedRoute({
  children,
  requiredRole,
}: {
  children: ReactNode;
  requiredRole?: UserRole;
}) {
  const { user, role, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingState label="Vérification de la session…" />;

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (requiredRole) {
    const allowed =
      requiredRole === 'member' || role === requiredRole || role === 'super_admin';
    if (!allowed) {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return <>{children}</>;
}
