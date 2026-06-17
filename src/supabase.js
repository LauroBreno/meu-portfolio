import { createClient } from '@supabase/supabase-js'

// O Vite usa a sintaxe import.meta.env para ler o arquivo .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Ordena que a chave seja destruída quando a aba do navegador for fechada
    storage: window.sessionStorage 
  }
})