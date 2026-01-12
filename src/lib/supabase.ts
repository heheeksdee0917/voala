import { createClient } from '@supabase/supabase-js';

// These environment variables must be set in your project's .env file.
// For Vite, they should be prefixed with VITE_.
// Example .env content:
// VITE_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
// VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

