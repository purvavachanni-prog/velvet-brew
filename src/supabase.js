import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aeqatkblsomamibzpkhs.supabase.co";
const supabaseKey = "sb_publishable_nvfTf_q-WG4Ul8rRGKfXyA_2M2f4pAu";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);