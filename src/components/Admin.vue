<template>
  <div class="min-h-screen bg-black text-slate-50 font-sans">
    
    <div v-if="!session" class="flex items-center justify-center min-h-screen p-6">
      <div class="bg-slate-900/80 border border-slate-800 p-8 rounded-xl w-full max-w-md shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
        <h2 class="text-2xl font-bold text-white mb-2 text-center">Acesso Restrito</h2>
        <p class="text-slate-400 text-sm text-center mb-8">Faça login para gerenciar seu portfólio</p>
        
        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">E-mail</label>
            <input v-model="email" type="email" class="w-full bg-black/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none" placeholder="seu@email.com" required />
          </div>
          <div>
            <label class="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Senha</label>
            <input v-model="password" type="password" class="w-full bg-black/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none" placeholder="••••••••" required />
          </div>
          
          <button type="submit" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 mt-4" :disabled="loadingAuth">
            <span v-if="loadingAuth">Autenticando...</span>
            <span v-else>Entrar no Sistema</span>
          </button>
          
          <p v-if="errorMsg" class="text-red-400 text-sm mt-4 text-center p-3 bg-red-400/10 rounded-lg border border-red-400/20">{{ errorMsg }}</p>
        </form>
      </div>
    </div>

    <div v-else class="p-6 md:p-12 max-w-6xl mx-auto animate-fade-in-up">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 border-b border-slate-800 pb-6">
        <div>
          <h1 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Gestão de Projetos</h1>
          <p class="text-slate-400 text-sm mt-1">Sincronize e gerencie seus repositórios do GitHub</p>
        </div>
        <button @click="handleLogout" class="px-5 py-2 bg-slate-900 border border-slate-700 hover:bg-red-500/10 hover:border-red-500 hover:text-red-400 text-slate-300 rounded-lg transition-all text-sm font-medium">
          Sair do Sistema
        </button>
      </div>

      <div v-if="loadingData" class="text-center py-20 text-slate-500 animate-pulse">
        Carregando dados do banco e do GitHub...
      </div>
      
      <div v-else class="space-y-6">
        <div v-for="repo in githubRepos" :key="repo.id" class="bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-6 hover:border-slate-700 transition-colors">
          
          <div class="flex-1 w-full text-left">
            <h3 class="text-xl font-bold text-slate-200 capitalize">{{ repo.name.replace(/-/g, ' ') }}</h3>
            <p class="text-sm text-slate-400 mt-1 line-clamp-2">{{ repo.description || 'Sem descrição no GitHub' }}</p>
          </div>

          <div class="flex-shrink-0 w-full sm:w-auto">
            
            <div v-if="isImported(repo.id)" class="flex flex-wrap items-center gap-4 bg-slate-950 p-4 rounded-lg border border-slate-800">
              
              <select 
                v-model="getDbProject(repo.id).tipo" 
                @change="updateProjectInfo(getDbProject(repo.id))"
                class="bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none">
                <option value="pessoal">Pessoal</option>
                <option value="academico">Acadêmico</option>
                <option value="profissional">Profissional</option>
              </select>

              <select 
                v-model="getDbProject(repo.id).status" 
                @change="updateProjectInfo(getDbProject(repo.id))"
                class="bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none">
                <option value="em andamento">Em andamento</option>
                <option value="finalizado">Finalizado</option>
              </select>

              <button 
                @click="toggleActive(getDbProject(repo.id))"
                :class="getDbProject(repo.id).is_ativo ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20' : 'bg-slate-800 text-slate-500 border-slate-700 hover:bg-slate-700'"
                class="px-4 py-2 text-sm font-medium rounded-lg border transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                
                <svg v-if="getDbProject(repo.id).is_ativo" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 012.85-4.835m2.46-2.46A10.062 10.062 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-2.246 3.869m-3.511-3.511A3 3 0 0012 9a3 3 0 00-2.245 1.025m-1.218 1.218A3 3 0 009 12a3 3 0 003 3c.316 0 .622-.05.908-.142M21 21l-18-18"/></svg>
                
                <span>{{ getDbProject(repo.id).is_ativo ? 'Visível no Site' : 'Oculto no Site' }}</span>
              </button>

            </div>

            <button v-else @click="importRepo(repo)" class="w-full sm:w-auto px-6 py-3 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/50 text-blue-400 font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              Importar para o Portfólio
            </button>
            
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

// --- ESTADOS DE AUTENTICAÇÃO ---
const session = ref(null)
const email = ref('')
const password = ref('')
const loadingAuth = ref(false)
const errorMsg = ref('')

// --- ESTADOS DO PAINEL ---
const githubRepos = ref([])
const dbProjects = ref([])
const loadingData = ref(false)
const githubUsername = 'LauroBreno'

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
    if (session.value) loadDashboardData()
  })

  supabase.auth.onAuthStateChange((_event, _session) => {
    session.value = _session
    if (session.value) loadDashboardData()
  })
})

const handleLogin = async () => {
  loadingAuth.value = true
  errorMsg.value = ''
  const { error } = await supabase.auth.signInWithPassword({ email: email.value, password: password.value })
  if (error) errorMsg.value = error.message
  loadingAuth.value = false
}

const handleLogout = async () => await supabase.auth.signOut()

// --- LÓGICA DO PAINEL DE GESTÃO ---

const loadDashboardData = async () => {
  loadingData.value = true
  try {
    const { data: supabaseData, error } = await supabase.from('portfolio_projetos').select('*')
    if (error) throw error
    dbProjects.value = supabaseData || []

    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=30`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Falha na API do GitHub')
    const repos = await response.json()
    githubRepos.value = repos.filter(r => !r.fork)
  } catch (err) {
    console.error(err)
    alert("Erro ao carregar dados: " + err.message)
  } finally {
    loadingData.value = false
  }
}

const isImported = (githubId) => {
  return dbProjects.value.some(p => p.github_id === githubId)
}

const getDbProject = (githubId) => {
  return dbProjects.value.find(p => p.github_id === githubId)
}

const importRepo = async (repo) => {
  try {
    const tags = repo.topics && repo.topics.length > 0 ? repo.topics.slice(0, 4) : ['Code']
    
    const { error } = await supabase.from('portfolio_projetos').insert([{
        github_id: repo.id,
        nome: repo.name,
        descricao: repo.description || '',
        url: repo.html_url,
        tipo: 'pessoal', 
        status: 'em andamento', 
        is_ativo: true, 
        tags: tags
      }])
    
    if (error) throw error
    await loadDashboardData() 
  } catch (err) {
    alert("Erro ao importar: " + err.message)
  }
}

// CORREÇÃO: Função blindada contra Falhas Silenciosas
const toggleActive = async (project) => {
  try {
    const novoStatus = !project.is_ativo
    
    // O .select() no final obriga o banco a confirmar a alteração
    const { data, error } = await supabase
      .from('portfolio_projetos')
      .update({ is_ativo: novoStatus })
      .eq('id', project.id)
      .select()
      
    if (error) throw error
    
    // Se o banco não devolveu dados, a política de segurança bloqueou a atualização
    if (!data || data.length === 0) {
      throw new Error("O banco recusou a atualização. Ação bloqueada pelo Supabase.")
    }
    
    // Atualiza a tela com a certeza de que salvou no banco
    project.is_ativo = data[0].is_ativo 
    
  } catch (err) {
    console.error(err)
    alert("Falha ao salvar: " + err.message)
    // Recarrega para desfazer a alteração visual errada
    await loadDashboardData()
  }
}

// CORREÇÃO: O mesmo tratamento de segurança para os Selects
const updateProjectInfo = async (project) => {
  try {
    const { data, error } = await supabase
      .from('portfolio_projetos')
      .update({ 
        tipo: project.tipo,
        status: project.status
      })
      .eq('id', project.id)
      .select()
    
    if (error) throw error
    
    if (!data || data.length === 0) {
      throw new Error("A alteração foi recusada pelo banco.")
    }
  } catch (err) {
    console.error(err)
    alert("Erro ao salvar alteração: " + err.message)
    await loadDashboardData()
  }
}
</script>