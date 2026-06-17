// src/composables/useGithub.js
import { ref } from 'vue';

export function useGithub() {
  const projects = ref([]);
  const recentActivities = ref([]);
  const isLoading = ref(true);

  // Coloque seu nome de usuário do GitHub aqui!
  const githubUsername = 'LauroBreno'; 

  const fetchGithubData = async () => {
    isLoading.value = true;
    try {
      // Puxa os repositórios ordenados por atualização mais recente
      const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=10`);
      if (!response.ok) throw new Error('Falha ao buscar dados');
      
      const repos = await response.json();

      // 1. LÓGICA DAS ÚLTIMAS ATIVIDADES (Pega os 2 mais recentes)
      recentActivities.value = repos.slice(0, 2).map(repo => {
        // Se você colocar a tag 'finalizado' no GitHub, ele fica verde, senão fica em andamento (azul)
        const isFinished = repo.topics && repo.topics.includes('finalizado');
        return {
          id: repo.id,
          name: repo.name.replace(/-/g, ' '), // Tira os hífens do nome
          url: repo.html_url,
          isFinished
        };
      });

      // 2. LÓGICA DOS PROJETOS
      // Pega repositórios (que não sejam forks) e limita a 6
      projects.value = repos.filter(repo => !repo.fork).slice(0, 6).map(repo => {
        // Define o tipo baseado nas tags do GitHub (para renderizar a imagem certa no visual)
        let type = 'pessoal'; 
        if (repo.topics.includes('academico')) type = 'academico';
        if (repo.topics.includes('profissional')) type = 'profissional';

        return {
          id: repo.id,
          name: repo.name.replace(/-/g, ' '),
          description: repo.description || 'Projeto em desenvolvimento e estruturação...',
          url: repo.html_url,
          // Pega até 3 tags do repositório, ou coloca 'Code' se não tiver nenhuma
          topics: repo.topics && repo.topics.length > 0 ? repo.topics.slice(0, 3) : ['Code'],
          type
        };
      });

    } catch (error) {
      console.error('Erro ao buscar do GitHub:', error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    projects,
    recentActivities,
    isLoading,
    fetchGithubData
  };
}