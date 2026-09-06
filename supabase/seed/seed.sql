-- Optional seed data for local development only.
-- Do NOT seed fabricated cultural or historical content into production.
-- This file only seeds category taxonomies referenced by the frontend.

insert into article_categories (name, slug) values
  ('Culture', 'culture'),
  ('Patrimoine', 'patrimoine'),
  ('Histoire', 'histoire'),
  ('Communauté', 'communaute'),
  ('Événements', 'evenements'),
  ('Jeunesse', 'jeunesse'),
  ('Éducation', 'education'),
  ('Association', 'association')
on conflict (slug) do nothing;

insert into gallery_categories (name) values
  ('Bamboutos'), ('Menoua'), ('Paysages'), ('Habillement traditionnel'),
  ('Danse'), ('Musique'), ('Gastronomie'), ('Architecture'),
  ('Cérémonies'), ('Arts'), ('Communauté'), ('Événements')
on conflict (name) do nothing;

insert into cultural_categories (name, slug) values
  ('Patrimoine traditionnel', 'traditional-heritage'),
  ('Arts et artisanat', 'arts-crafts'),
  ('Musique et danse', 'music-dance'),
  ('Habillement', 'clothing'),
  ('Gastronomie', 'food'),
  ('Patrimoine oral', 'oral-heritage')
on conflict (slug) do nothing;
