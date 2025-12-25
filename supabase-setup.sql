-- ================================================
-- GlitchHunt - Supabase Database Setup
-- ================================================
-- Run this SQL in your Supabase SQL Editor
-- to create the early_registrations table
-- ================================================

-- Create early_registrations table
CREATE TABLE early_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  date_of_birth DATE NOT NULL,
  referral_source TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX idx_early_registrations_email ON early_registrations(email);

-- Create index on created_at for sorting
CREATE INDEX idx_early_registrations_created_at ON early_registrations(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE early_registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for registration)
CREATE POLICY "Allow public inserts" ON early_registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Optional: Create policy to allow you to read all registrations (when authenticated as admin)
CREATE POLICY "Allow authenticated reads" ON early_registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- ================================================
-- Verification Query
-- ================================================
-- Run this to verify the table was created correctly
-- SELECT * FROM early_registrations;


