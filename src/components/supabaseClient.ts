// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Your Supabase credentials
const SUPABASE_URL = 'https://irepefifgczkvhzmttba.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyZXBlZmlmZ2N6a3Zoem10dGJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1NzM5MTMsImV4cCI6MjA1MjE0OTkxM30.fj2B9O32uCCGHRGP_lpXxE3ihEoxbqx7RpdQi_kL_-0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
