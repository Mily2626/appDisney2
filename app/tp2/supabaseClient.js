// Importar el cliente de Supabase desde el CDN oficial
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Reemplaza con tus credenciales de Supabase
const SUPABASE_URL = 'https://lvmmkuzowenvvustkfnh.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_eTgCMua9Uh1u-r9H5ikhUg_dYalqxRl'

// Inicializar el cliente
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)