import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  client = createClient(supabaseUrl, supabaseAnonKey);
} else if (process.env.NODE_ENV !== 'production') {
  console.warn(
    'Supabase credentials are missing. Skipping click tracking until NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are configured.'
  );
}

export const supabase = client;

// Database schema - you need to create this table in Supabase:
// 
// Table name: order_clicks
// Columns:
// - id: uuid (primary key, auto-generated)
// - food_id: text
// - price: integer
// - created_at: timestamp (auto-generated)
//
// SQL to create table:
// CREATE TABLE order_clicks (
//   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//   food_id TEXT NOT NULL,
//   price INTEGER NOT NULL,
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
// );
