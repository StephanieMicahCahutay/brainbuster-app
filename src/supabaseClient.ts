import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jxnjsoysbggywkldzegj.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4bmpzb3lzYmdneXdrbGR6ZWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMDIxNTgsImV4cCI6MjAzMjU3ODE1OH0.imFCfqj8yLCXSWlT02h0p611gnoWNN54VcDQN5dPS3M';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
