-- Row Level Security policies for Bamboutos–Menoua.
--
-- Convention: public content tables are readable by anyone when
-- status = 'published'; write access is restricted to admins/super_admins.
-- Member-only tables (profiles, event_registrations) protect private data.

-- ---------------------------------------------------------------------
-- Helper: is the current user an admin or super_admin?
-- ---------------------------------------------------------------------
create or replace function is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from profiles
    where id = auth.uid() and role in ('admin', 'super_admin')
  );
$$;

-- ---------------------------------------------------------------------
-- profiles
-- ---------------------------------------------------------------------
alter table profiles enable row level security;

create policy "Members can view their own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Admins can view all profiles"
  on profiles for select
  using (is_admin());

create policy "Members can update their own profile"
  on profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "Admins can update any profile"
  on profiles for update
  using (is_admin());

create policy "Users can insert their own profile"
  on profiles for insert
  with check (auth.uid() = id);

-- ---------------------------------------------------------------------
-- articles
-- ---------------------------------------------------------------------
alter table articles enable row level security;
alter table article_categories enable row level security;

create policy "Anyone can read published articles"
  on articles for select
  using (status = 'published' or is_admin());

create policy "Admins manage articles"
  on articles for all
  using (is_admin())
  with check (is_admin());

create policy "Anyone can read article categories"
  on article_categories for select
  using (true);

create policy "Admins manage article categories"
  on article_categories for all
  using (is_admin())
  with check (is_admin());

-- ---------------------------------------------------------------------
-- events & registrations
-- ---------------------------------------------------------------------
alter table events enable row level security;
alter table event_registrations enable row level security;

create policy "Anyone can read events"
  on events for select
  using (true);

create policy "Admins manage events"
  on events for all
  using (is_admin())
  with check (is_admin());

create policy "Members manage their own registrations"
  on event_registrations for all
  using (auth.uid() = member_id or is_admin())
  with check (auth.uid() = member_id or is_admin());

-- ---------------------------------------------------------------------
-- gallery
-- ---------------------------------------------------------------------
alter table gallery_items enable row level security;
alter table gallery_categories enable row level security;

create policy "Anyone can read published gallery items"
  on gallery_items for select
  using (status = 'published' or is_admin());

create policy "Admins manage gallery items"
  on gallery_items for all
  using (is_admin())
  with check (is_admin());

create policy "Anyone can read gallery categories"
  on gallery_categories for select
  using (true);

create policy "Admins manage gallery categories"
  on gallery_categories for all
  using (is_admin())
  with check (is_admin());

-- ---------------------------------------------------------------------
-- cultural content
-- ---------------------------------------------------------------------
alter table cultural_content enable row level security;
alter table cultural_categories enable row level security;

create policy "Anyone can read published cultural content"
  on cultural_content for select
  using (status = 'published' or is_admin());

create policy "Admins manage cultural content"
  on cultural_content for all
  using (is_admin())
  with check (is_admin());

create policy "Anyone can read cultural categories"
  on cultural_categories for select
  using (true);

create policy "Admins manage cultural categories"
  on cultural_categories for all
  using (is_admin())
  with check (is_admin());

-- ---------------------------------------------------------------------
-- heritage items
-- ---------------------------------------------------------------------
alter table heritage_items enable row level security;

create policy "Anyone can read published heritage items"
  on heritage_items for select
  using (status = 'published' or is_admin());

create policy "Admins manage heritage items"
  on heritage_items for all
  using (is_admin())
  with check (is_admin());

-- ---------------------------------------------------------------------
-- videos
-- ---------------------------------------------------------------------
alter table videos enable row level security;

create policy "Anyone can read published videos"
  on videos for select
  using (status = 'published' or is_admin());

create policy "Admins manage videos"
  on videos for all
  using (is_admin())
  with check (is_admin());

-- ---------------------------------------------------------------------
-- locations
-- ---------------------------------------------------------------------
alter table locations enable row level security;

create policy "Anyone can read locations"
  on locations for select
  using (true);

create policy "Admins manage locations"
  on locations for all
  using (is_admin())
  with check (is_admin());

-- ---------------------------------------------------------------------
-- announcements
-- ---------------------------------------------------------------------
alter table announcements enable row level security;

create policy "Anyone can read published announcements"
  on announcements for select
  using (status = 'published' or is_admin());

create policy "Admins manage announcements"
  on announcements for all
  using (is_admin())
  with check (is_admin());
