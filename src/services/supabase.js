import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cmlbvpszgiswmwydigjf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtbGJ2cHN6Z2lzd213eWRpZ2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5OTk3NTgsImV4cCI6MjA1NjU3NTc1OH0.ClWSr9C26nGVx7AIz_x3tEVO9NFQYiePhTmO-j2X_B4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
