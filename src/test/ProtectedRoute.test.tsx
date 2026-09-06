import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../hooks/useAuth';
import { ProtectedRoute } from '../components/common/ProtectedRoute';

describe('ProtectedRoute', () => {
  it('redirects unauthenticated users to the login page', async () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<div>Page de connexion</div>} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute requiredRole="member">
                  <div>Tableau de bord privé</div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </MemoryRouter>,
    );

    expect(await screen.findByText(/page de connexion/i)).toBeInTheDocument();
  });
});
