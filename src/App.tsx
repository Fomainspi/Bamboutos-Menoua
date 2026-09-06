import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import { PublicLayout } from './layouts/PublicLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { LoadingState } from './components/common/PageState';
import { HomePage } from './pages/public/HomePage';

const BamboutosPage = lazy(() =>
  import('./pages/public/BamboutosPage').then((m) => ({ default: m.BamboutosPage })),
);
const MenouaPage = lazy(() =>
  import('./pages/public/MenouaPage').then((m) => ({ default: m.MenouaPage })),
);
const CulturePage = lazy(() =>
  import('./pages/public/CulturePage').then((m) => ({ default: m.CulturePage })),
);
const HeritagePage = lazy(() =>
  import('./pages/public/HeritagePage').then((m) => ({ default: m.HeritagePage })),
);
const CommunityPage = lazy(() =>
  import('./pages/public/CommunityPage').then((m) => ({ default: m.CommunityPage })),
);
const EventsPage = lazy(() =>
  import('./pages/public/EventsPage').then((m) => ({ default: m.EventsPage })),
);
const EventDetailPage = lazy(() =>
  import('./pages/public/EventDetailPage').then((m) => ({ default: m.EventDetailPage })),
);
const ArticlesPage = lazy(() =>
  import('./pages/public/ArticlesPage').then((m) => ({ default: m.ArticlesPage })),
);
const ArticleDetailPage = lazy(() =>
  import('./pages/public/ArticleDetailPage').then((m) => ({ default: m.ArticleDetailPage })),
);
const GalleryPage = lazy(() =>
  import('./pages/public/GalleryPage').then((m) => ({ default: m.GalleryPage })),
);
const MediaPage = lazy(() =>
  import('./pages/public/MediaPage').then((m) => ({ default: m.MediaPage })),
);
const MapPage = lazy(() => import('./pages/public/MapPage').then((m) => ({ default: m.MapPage })));
const AboutPage = lazy(() =>
  import('./pages/public/AboutPage').then((m) => ({ default: m.AboutPage })),
);
const ContactPage = lazy(() =>
  import('./pages/public/ContactPage').then((m) => ({ default: m.ContactPage })),
);
const SearchPage = lazy(() =>
  import('./pages/public/SearchPage').then((m) => ({ default: m.SearchPage })),
);
const NotFoundPage = lazy(() =>
  import('./pages/public/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
);
const LegalPage = lazy(() =>
  import('./pages/public/LegalPage').then((m) => ({ default: m.LegalPage })),
);

const LoginPage = lazy(() => import('./pages/auth/LoginPage').then((m) => ({ default: m.LoginPage })));
const RegisterPage = lazy(() =>
  import('./pages/auth/RegisterPage').then((m) => ({ default: m.RegisterPage })),
);
const ForgotPasswordPage = lazy(() =>
  import('./pages/auth/ForgotPasswordPage').then((m) => ({ default: m.ForgotPasswordPage })),
);
const DashboardPage = lazy(() =>
  import('./pages/auth/DashboardPage').then((m) => ({ default: m.DashboardPage })),
);
const ProfilePage = lazy(() =>
  import('./pages/auth/ProfilePage').then((m) => ({ default: m.ProfilePage })),
);

const AdminDashboardPage = lazy(() =>
  import('./pages/admin/AdminDashboardPage').then((m) => ({ default: m.AdminDashboardPage })),
);
const AdminMembersPage = lazy(() =>
  import('./pages/admin/AdminMembersPage').then((m) => ({ default: m.AdminMembersPage })),
);
const AdminArticlesPage = lazy(() =>
  import('./pages/admin/AdminArticlesPage').then((m) => ({ default: m.AdminArticlesPage })),
);
const AdminEventsPage = lazy(() =>
  import('./pages/admin/AdminEventsPage').then((m) => ({ default: m.AdminEventsPage })),
);
const AdminGalleryPage = lazy(() =>
  import('./pages/admin/AdminGalleryPage').then((m) => ({ default: m.AdminGalleryPage })),
);
const AdminCulturePage = lazy(() =>
  import('./pages/admin/AdminCulturePage').then((m) => ({ default: m.AdminCulturePage })),
);
const AdminHeritagePage = lazy(() =>
  import('./pages/admin/AdminHeritagePage').then((m) => ({ default: m.AdminHeritagePage })),
);
const AdminMediaPage = lazy(() =>
  import('./pages/admin/AdminMediaPage').then((m) => ({ default: m.AdminMediaPage })),
);
const AdminLocationsPage = lazy(() =>
  import('./pages/admin/AdminLocationsPage').then((m) => ({ default: m.AdminLocationsPage })),
);
const AdminAnnouncementsPage = lazy(() =>
  import('./pages/admin/AdminAnnouncementsPage').then((m) => ({
    default: m.AdminAnnouncementsPage,
  })),
);
const AdminSettingsPage = lazy(() =>
  import('./pages/admin/AdminSettingsPage').then((m) => ({ default: m.AdminSettingsPage })),
);

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AuthProvider>
        <Suspense fallback={<LoadingState />}>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/bamboutos" element={<BamboutosPage />} />
              <Route path="/menoua" element={<MenouaPage />} />
              <Route path="/culture" element={<CulturePage />} />
              <Route path="/heritage" element={<HeritagePage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/:id" element={<EventDetailPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:slug" element={<ArticleDetailPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/media" element={<MediaPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/privacy" element={<LegalPage title="Confidentialité" />} />
              <Route path="/terms" element={<LegalPage title="Conditions d'utilisation" />} />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute requiredRole="member">
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute requiredRole="member">
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<NotFoundPage />} />
            </Route>

            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminDashboardPage />} />
              <Route path="members" element={<AdminMembersPage />} />
              <Route path="articles" element={<AdminArticlesPage />} />
              <Route path="events" element={<AdminEventsPage />} />
              <Route path="gallery" element={<AdminGalleryPage />} />
              <Route path="culture" element={<AdminCulturePage />} />
              <Route path="heritage" element={<AdminHeritagePage />} />
              <Route path="media" element={<AdminMediaPage />} />
              <Route path="locations" element={<AdminLocationsPage />} />
              <Route path="announcements" element={<AdminAnnouncementsPage />} />
              <Route path="settings" element={<AdminSettingsPage />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
