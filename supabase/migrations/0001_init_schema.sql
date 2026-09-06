-- Bamboutos–Menoua initial schema
-- Enables required extensions and defines core tables.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------
-- Profiles & roles
-- ---------------------------------------------------------------------
create table if not exists profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  first_name text,
  last_name text,
  email text,
  phone text,
  whatsapp text,
  country text,
  city text,
  department_of_origin text,
  commune text,
  village_or_community text,
  profession text,
  profile_photo_url text,
  role text not null default 'member' check (role in ('member', 'admin', 'super_admin')),
  status text not null default 'pending' check (status in ('pending', 'active', 'suspended')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_profiles_role on profiles (role);

-- ---------------------------------------------------------------------
-- Articles
-- ---------------------------------------------------------------------
create table if not exists article_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique
);

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  content text not null,
  cover_image_url text,
  category_id uuid references article_categories (id) on delete set null,
  tags text[] not null default '{}',
  author_id uuid references profiles (id) on delete set null,
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_articles_status on articles (status);
create index if not exists idx_articles_category on articles (category_id);

-- ---------------------------------------------------------------------
-- Events
-- ---------------------------------------------------------------------
create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text,
  event_date date not null,
  event_time time,
  location text,
  image_url text,
  organizer text,
  capacity integer,
  registration_enabled boolean not null default false,
  status text not null default 'upcoming' check (status in ('upcoming', 'past', 'cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_events_status on events (status);
create index if not exists idx_events_date on events (event_date);

create table if not exists event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events (id) on delete cascade,
  member_id uuid not null references profiles (id) on delete cascade,
  status text not null default 'registered' check (status in ('registered', 'cancelled', 'attended')),
  created_at timestamptz not null default now(),
  unique (event_id, member_id)
);

-- ---------------------------------------------------------------------
-- Gallery
-- ---------------------------------------------------------------------
create table if not exists gallery_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique
);

create table if not exists gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category_id uuid references gallery_categories (id) on delete set null,
  location text,
  item_date date,
  photographer text,
  credit text,
  source text,
  image_url text not null,
  status text not null default 'published' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_gallery_items_category on gallery_items (category_id);

-- ---------------------------------------------------------------------
-- Cultural content
-- ---------------------------------------------------------------------
create table if not exists cultural_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique
);

create table if not exists cultural_content (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references cultural_categories (id) on delete set null,
  title text not null,
  body text,
  image_url text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- Heritage digital archive
-- ---------------------------------------------------------------------
create table if not exists heritage_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text not null check (
    category in (
      'photograph', 'document', 'oral-history', 'interview',
      'object', 'article', 'audio', 'video'
    )
  ),
  location text,
  item_date date,
  source text,
  author text,
  photographer text,
  credit text,
  tags text[] not null default '{}',
  media_url text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- Media (external videos)
-- ---------------------------------------------------------------------
create table if not exists videos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text,
  url text not null,
  thumbnail_url text,
  status text not null default 'published' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- Locations / cultural map
-- ---------------------------------------------------------------------
create table if not exists locations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text not null check (
    type in (
      'department', 'commune', 'town', 'village',
      'cultural-location', 'chiefdom', 'heritage-site'
    )
  ),
  description text,
  latitude double precision,
  longitude double precision,
  images text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- Announcements
-- ---------------------------------------------------------------------
create table if not exists announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz,
  created_at timestamptz not null default now()
);
