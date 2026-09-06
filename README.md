# Bamboutos–Menoua

**Culture • Patrimoine • Communauté**
**Notre culture. Notre patrimoine. Notre identité.**

A production-quality cultural and community web platform for the **Bamboutos**
and **Menoua** departments (West Region of Cameroon), built to preserve and
transmit Bamiléké cultural heritage while serving as a modern association and
community platform.

> **Cultural integrity notice.** This repository intentionally contains **no
> fabricated cultural, historical, or biographical content**. Every page uses
> clearly marked placeholders (e.g. *"Documentation culturelle vérifiée à
> venir, fournie par l'association."*) until the association supplies and
> verifies real content, photographs, and data. See
> [Content management](#content-management) below.

---

## Table of contents

- [Project](#project)
- [Vision](#vision)
- [Architecture](#architecture)
- [Technology stack](#technology-stack)
- [Local setup](#local-setup)
- [Environment variables](#environment-variables)
- [Supabase setup](#supabase-setup)
- [Database migrations](#database-migrations)
- [Authentication](#authentication)
- [Roles](#roles)
- [RLS](#rls-row-level-security)
- [GitHub Pages](#github-pages)
- [GitHub Actions](#github-actions)
- [Replacing images](#replacing-images)
- [Content management](#content-management)
- [Adding articles](#adding-articles)
- [Adding events](#adding-events)
- [Adding gallery items](#adding-gallery-items)
- [Adding cultural content](#adding-cultural-content)
- [Troubleshooting](#troubleshooting)

---

## Project

Bamboutos–Menoua is a React + TypeScript single-page application that acts as
a digital cultural museum, community platform, and association website. It is
deployed as a static site to GitHub Pages, with Supabase providing
authentication, database, and storage services.

## Vision

> Bamboutos–Menoua is not simply an association. It is a community, a
> heritage, a culture, and an identity that should be preserved and
> transmitted to future generations.

The platform promotes Bamboutos, Menoua, and Bamiléké cultural heritage:
traditional institutions, villages, languages, clothing, music, dance, food,
arts and crafts, architecture, oral traditions, community stories, and
cultural events — without ever inventing facts that have not been verified by
the association.

## Architecture

```text
src/
├── components/
│   ├── common/       # Button, Section, PageHero, Seo, loading/empty/error states, guards
│   ├── layout/        # Header, Footer
│   ├── culture/       # Shared DepartmentPage template (Bamboutos/Menoua)
│   ├── gallery/
│   ├── events/
│   ├── articles/
│   └── community/
│
├── pages/
│   ├── public/        # All public routes
│   ├── auth/           # Login, register, forgot password, dashboard, profile
│   └── admin/          # Admin dashboard and management screens
│
├── layouts/            # PublicLayout, AdminLayout
├── hooks/              # useAuth (Supabase-backed auth context)
├── services/           # Reserved for data-access services as they are added
├── lib/                # supabase.ts client
├── types/               # Shared TypeScript types
├── config/             # images.ts, site.ts (centralized, no hard-coded values in components)
├── content/            # Structured placeholder content (bamboutos, menoua, culture, heritage, community, ...)
└── assets/

supabase/
├── migrations/         # SQL schema + RLS policies
└── seed/               # Non-cultural seed data (taxonomies only)
```

UI, business logic, data access, configuration, and content are kept in
separate layers so that content can later move from static TypeScript files
into Supabase tables without changing component logic.

## Technology stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router v7 ·
Lucide React · Supabase (Postgres, Auth, Storage) · ESLint · Prettier ·
Vitest + React Testing Library.

## Local setup

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase credentials
npm run dev
```

Other scripts:

```bash
npm run lint     # ESLint
npm run test     # Vitest (single run)
npm run build    # Type-check + production build
npm run preview  # Preview the production build locally
npm run format   # Prettier --write
```

## Environment variables

Copy `.env.example` to `.env.local` and provide your Supabase project
credentials:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Only the **public anon key** is ever used on the frontend. The
**service-role key must never** be added to any `VITE_*` variable or
committed to source control — all privileged writes are enforced through
Postgres Row Level Security policies instead.

If these variables are not set, the app still builds and runs; authentication
features degrade gracefully (forms show a notice instead of crashing).

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. Copy the project URL and anon key into `.env.local`.
3. Apply the SQL migrations in `supabase/migrations/` (via the SQL editor, or
   the Supabase CLI: `supabase db push`).
4. Optionally run `supabase/seed/seed.sql` to seed non-cultural taxonomy data
   (categories only — no fabricated content).
5. Configure Supabase Auth email templates and redirect URLs for your GitHub
   Pages domain.

## Database migrations

- `0001_init_schema.sql` — creates `profiles`, `articles`,
  `article_categories`, `events`, `event_registrations`, `gallery_items`,
  `gallery_categories`, `cultural_content`, `cultural_categories`,
  `heritage_items`, `videos`, `locations`, `announcements`, with UUID
  primary keys, foreign keys, indexes, and `created_at`/`updated_at`
  columns.
- `0002_row_level_security.sql` — enables RLS on every table and defines
  policies (see [RLS](#rls-row-level-security)).

## Authentication

Implemented with Supabase Auth (`src/hooks/useAuth.tsx`):

- Email/password registration and login
- Logout
- Password reset (forgot password)
- Persistent sessions (via `supabase.auth.onAuthStateChange`)
- Protected routes (`ProtectedRoute` component) for `/dashboard`, `/profile`,
  and the entire `/admin` section

The authentication layer is structured so Google OAuth (or other providers)
can be added later by calling `supabase.auth.signInWithOAuth` without
changing the surrounding route/guard structure.

## Roles

Three roles are supported: `member`, `admin`, `super_admin`, stored on the
`profiles.role` column. `ProtectedRoute` accepts a `requiredRole` prop and
allows `super_admin` to access anything an `admin` can.

## RLS (Row Level Security)

Every table has RLS enabled. General pattern:

- **Public read** of published content (`status = 'published'`) for
  `articles`, `gallery_items`, `cultural_content`, `heritage_items`,
  `videos`, `announcements`.
- **Unrestricted public read** for `events` and `locations` (no draft/private
  concept for these in v1).
- **Write access restricted to admins/super_admins** via the `is_admin()`
  SQL helper function, which checks `profiles.role`.
- **`profiles`** rows are only readable/writable by their owner or by
  admins — no public exposure of member data.
- **`event_registrations`** rows are only accessible to the registering
  member or admins.

## GitHub Pages

The app is configured to be served from
`https://<owner>.github.io/Bamboutos-Menoua/` (see `base` in
`vite.config.ts`, overridable via `VITE_BASE_PATH`).

## GitHub Actions

- `.github/workflows/ci.yml` — runs on every push/PR to `main`: checkout,
  install, lint, test, build.
- `.github/workflows/deploy.yml` — runs on pushes to `main`: checkout,
  install, build (using `VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY`
  repository secrets), then deploys `dist/` to GitHub Pages via the official
  `actions/configure-pages` + `actions/upload-pages-artifact` +
  `actions/deploy-pages` actions.

### SPA routing on GitHub Pages

GitHub Pages has no server-side rewrites, so direct requests to routes like
`/bamboutos` would 404. This is solved with the well-known
[spa-github-pages](https://github.com/rafgraph/spa-github-pages) technique:

- `public/404.html` rewrites the request into a query string and redirects to
  `index.html`.
- A small inline script in `index.html` restores the original path with
  `history.replaceState` before React Router mounts.

Verify locally with `npm run build && npm run preview`, then navigate
directly to a nested URL such as `/Bamboutos-Menoua/culture`.

## Replacing images

All image paths are centralized in `src/config/images.ts` — components never
hard-code image URLs. Files live under `public/images/`:

```text
public/images/
├── hero/
├── bamboutos/
├── menoua/
├── culture/
├── heritage/
├── community/
├── events/
├── gallery/
└── placeholders/
```

**To replace the developer placeholders with authentic association imagery:**

1. **Where images are stored:** each section has its own folder under
   `public/images/`.
2. **Naming conventions:** keep the existing file names referenced in
   `src/config/images.ts` (e.g. `hero.svg`) or update the corresponding path
   in that file if you use a different name.
3. **Recommended dimensions:** hero images ≈ 1600×900px (16:9); gallery
   images ≈ 1200×800px or 800×1200px depending on orientation; logo as a
   square SVG/PNG ≥ 512×512px.
4. **Recommended formats:** JPEG or WebP for photographs; SVG or PNG for the
   logo and icons.
5. **How to replace hero images:** overwrite the file at the path referenced
   by e.g. `images.homeHero` in `src/config/images.ts` (or update the path to
   point at a new file).
6. **How to replace gallery images:** add entries to
   `src/content/gallery.ts` (or, once migrated, the `gallery_items` Supabase
   table) with the image path plus required metadata.
7. **How to add new images:** drop the file into the relevant
   `public/images/<section>/` folder, then reference its path from
   `src/config/images.ts` or the relevant content file.
8. **How to modify image metadata:** edit the `title`, `description`,
   `location`, `date`, `photographer`, `credit`, and `source` fields on the
   corresponding entry in `src/content/*.ts` (or the Supabase row).
9. **How to add credits:** always populate the `credit`/`photographer`
   fields for authentic photographs; clearly label any remaining
   representative/placeholder imagery as such.
10. **How to avoid breaking the application:** only edit paths inside
    `src/config/images.ts` and `src/content/*.ts` — never rename files
    without updating every reference, and keep the same file extension
    unless you also update the reference.

## Content management

Cultural content is **structured, not fabricated**. It lives in
`src/content/*.ts` today and is designed to move into the corresponding
Supabase tables (`articles`, `events`, `gallery_items`, `cultural_content`,
`heritage_items`, `locations`) without changing component logic — pages
already read from these typed content modules, so swapping the data source
for a Supabase query is a localized change.

Missing content must use clearly marked placeholders such as *"Documentation
culturelle vérifiée à venir, fournie par l'association."* — never invented
facts, names, dates, or claims.

### Adding articles

Add an entry to the `articles` array in `src/content/articles.ts` (or insert
a row into the `articles` Supabase table once migrated) with `slug`, `title`,
`excerpt`, `category`, `tags`, `content`, and `status: 'published'`.

### Adding events

Add an entry to the `events` array in `src/content/events.ts` with `id`,
`title`, `description`, `date`, `location`, `category`, and `status`
(`'upcoming' | 'past' | 'cancelled'`).

### Adding gallery items

Add an entry to `galleryItems` in `src/content/gallery.ts` with `id`,
`title`, `category`, `image` (path under `public/images/gallery/`), and
optional `location`, `date`, `photographer`, `credit`, `source`.

### Adding cultural content

Extend `cultureCategories` in `src/content/culture.ts`, or the
department-specific sections in `src/content/bamboutos.ts` /
`src/content/menoua.ts`. Replace the placeholder `body`/`description` text
with verified content supplied by the association.

## Troubleshooting

- **Blank page on GitHub Pages / assets 404:** confirm `base` in
  `vite.config.ts` matches your repository name, and that the Pages source is
  set to "GitHub Actions" in repository settings.
- **Direct route (e.g. `/culture`) 404s in production:** confirm
  `public/404.html` was included in the deployed artifact (`dist/404.html`
  after `npm run build`).
- **Login/registration shows a configuration notice:** set
  `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env.local` (or as
  repository secrets for the deploy workflow).
- **RLS denies expected reads/writes:** confirm the authenticated user's
  `profiles.role` is correct and that `0002_row_level_security.sql` has been
  applied to your Supabase project.
