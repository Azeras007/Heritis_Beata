import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

// Utilisez ces valeurs pour le développement local
// Dans un environnement de production, utilisez des variables d'environnement
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://your-supabase-url.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || "your-anon-key";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
