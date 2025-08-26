import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://cckvdmaxsipckcribqwi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNja3ZkbWF4c2lwY2tjcmlicXdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzOTY0MzYsImV4cCI6MjA2OTk3MjQzNn0.WmXYeoQK1UzZ8MTfJ4zn30h7qgu2ruz3H5_Z0L0IZbI';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;