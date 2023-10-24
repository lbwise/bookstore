import { SupabaseClient, createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

async function createDb(): Promise<SupabaseClient> {
    return await createClient(process.env.DB_URL as string, process.env.DB_API_KEY as string);
}

export const db: SupabaseClient = await createDb();