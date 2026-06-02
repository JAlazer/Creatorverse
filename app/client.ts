import { createClient } from "@supabase/supabase-js";

const URL = "https://mccxuqjyigxfaoqfdzrc.supabase.co";

const API_KEY = "sb_publishable_ppJ2eWOh0134pz9b2aXPwQ_FTl1u5DV";

export const supabase = createClient(URL, API_KEY);
