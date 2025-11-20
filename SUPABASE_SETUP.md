# CookForMe MVP - Setup Guide

## Supabase Database Setup

### 1. Create a Supabase Project
1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in project details

### 2. Create the Database Table

Go to the SQL Editor in your Supabase dashboard and run this SQL:

```sql
CREATE TABLE order_clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  food_id TEXT NOT NULL,
  price INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE order_clicks ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts from anyone
CREATE POLICY "Allow public inserts" ON order_clicks
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create a policy to allow authenticated users to read
CREATE POLICY "Allow read access" ON order_clicks
  FOR SELECT TO authenticated
  USING (true);
```

### 3. Get Your Credentials

1. Go to Project Settings > API
2. Copy your "Project URL"
3. Copy your "anon/public" key

### 4. Set Environment Variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 5. Run the Application

```bash
npm run dev
```

Visit `http://localhost:3000`

## Viewing Order Data

### Option 1: Supabase Dashboard
1. Go to your Supabase project
2. Click "Table Editor"
3. Select "order_clicks"
4. View all orders with timestamps

### Option 2: SQL Query
Run this query in the SQL Editor to see aggregated data:

```sql
SELECT 
  food_id,
  COUNT(*) as total_orders,
  SUM(price) as total_revenue,
  MIN(created_at) as first_order,
  MAX(created_at) as last_order
FROM order_clicks
GROUP BY food_id
ORDER BY total_orders DESC;
```

## Food IDs Reference

- `f1`: Ev Yapımı Mantı (₺220)
- `f2`: Zeytinyağlı Yaprak Sarma (₺190)
- `f3`: Karnıyarık & Pilav (₺230)
- `f4`: Mercimek Köftesi (₺180)
- `f5`: Hünkar Beğendi (₺240)
- `f6`: İçli Köfte (₺200)

## Architecture

- **Frontend**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Ready for Vercel

## Key Features

✅ Realistic food marketplace UI
✅ Direct purchase tracking (no checkout flow)
✅ Database persistence in Supabase
✅ Smooth scroll navigation
✅ Responsive design
✅ Turkish localization
