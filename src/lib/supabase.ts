import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined;

/**
 * A single Supabase client instance for the whole application.
 *
 * Only the public anon key is ever used on the frontend. The service-role
 * key must never be committed or referenced from client code — all
 * privileged operations must go through Postgres Row Level Security
 * policies (see supabase/migrations).
 *
 * If environment variables are not configured (e.g. during local static
 * preview without a backend), `supabase` is `null` and auth-dependent
 * features degrade gracefully instead of crashing the app.
 */
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export const isSupabaseConfigured = Boolean(supabase);
