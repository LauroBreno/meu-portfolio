// src/supabase.js
import { createClient } from '@supabase/supabase-js'

// Substitua pelas chaves reais do seu novo projeto no Supabase
const supabaseUrl = 'https://uzlcxvvismlarkavtsrd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6bGN4dnZpc21sYXJrYXZ0c3JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MTM0NDIsImV4cCI6MjA5NzE4OTQ0Mn0.O7WOK0TQSO6iNIiVXuD5C1rMNNH1J5Chs_xcCQ2ew0c'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Ordena que a chave seja destruída quando a aba do navegador for fechada
    storage: window.sessionStorage 
  }
})