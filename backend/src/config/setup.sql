-- =============================================
-- NIVAS INTERIORS — SUPABASE DATABASE SETUP
-- Run this in your Supabase SQL Editor
-- =============================================

-- Create enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
  id                   UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name            TEXT NOT NULL CHECK (char_length(full_name) >= 2),
  phone                TEXT NOT NULL,
  email                TEXT NOT NULL,
  service_required     TEXT NOT NULL,
  property_type        TEXT NOT NULL,
  budget               TEXT NOT NULL,
  consultation_date    DATE,
  project_description  TEXT NOT NULL CHECK (char_length(project_description) >= 10),
  status               TEXT DEFAULT 'new' NOT NULL CHECK (status IN ('new', 'contacted', 'in_progress', 'completed', 'closed')),
  created_at           TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Only service role can read/write (no public access)
-- The backend uses the service role key, so no additional policies needed
-- for the API. If you want to view data in the Supabase dashboard, use
-- the dashboard's built-in access which bypasses RLS.

-- Optional: Create an index for faster querying by status and date
CREATE INDEX IF NOT EXISTS enquiries_status_idx ON enquiries(status);
CREATE INDEX IF NOT EXISTS enquiries_created_at_idx ON enquiries(created_at DESC);

-- =============================================
-- VERIFY SETUP
-- =============================================
SELECT 'Enquiries table created successfully.' AS message;
