import { Database } from "./supabase";

export type Contact = Database["public"]["Tables"]["contacts"]["Row"];
