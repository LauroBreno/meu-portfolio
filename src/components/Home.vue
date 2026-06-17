<template>
  <div id="topo" class="min-h-screen bg-black text-slate-50 relative">
    <header class="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-slate-900">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center gap-2">
        <div class="flex flex-col items-start truncate">
          <h1 class="text-lg sm:text-2xl font-bold text-slate-50 truncate">Lauro Breno</h1>
          <p class="text-[10px] sm:text-sm text-blue-500 h-5 typewriter-container truncate">
            <span class="typewriter"></span>
          </p>
        </div>
        <div class="flex gap-3 sm:gap-6 items-center text-xs sm:text-base whitespace-nowrap">
          <a href="#projetos" class="hover:text-blue-500 transition-colors">Projetos</a>
          <a href="#contato" class="hover:text-blue-500 transition-colors">Contato</a>
        </div>
      </nav>
    </header>

    <section class="relative min-h-screen flex flex-col justify-center items-center px-6 py-10 sm:py-20 overflow-hidden">
      <div class="absolute top-6 left-0 right-0 z-20 pointer-events-none">
        <div class="max-w-6xl mx-auto px-6 flex justify-end">
          <a href="/Curriculo_Lauro_Breno.pdf" download="Curriculo_Lauro_Breno.pdf" class="pointer-events-auto inline-block btn-no-underline px-4 py-1.5 text-xs sm:px-6 sm:py-2 sm:text-base bg-slate-900 border border-blue-600/30 text-blue-400 rounded-lg hover:bg-blue-600/10 hover:border-blue-600 transition-all duration-300">
            Baixar Currículo
          </a>
        </div>
      </div>

      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="glow-orb glow-orb-1 opacity-20"></div>
        <div class="glow-orb glow-orb-2 opacity-20"></div>
        <div class="glow-orb glow-orb-3 opacity-20"></div>
      </div>

      <div class="relative z-10 max-w-3xl text-center w-full">
        <h2 class="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">Seja bem-vindo!</h2>
        <p class="text-base sm:text-xl text-slate-300 mb-6 sm:mb-12 animate-fade-in-up delay-1">
          Uma jornada de transformação: da engenharia química ao desenvolvimento de software
        </p>
        <div class="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 sm:mb-8"></div>
        
        <div class="flex items-center justify-center gap-2 mt-12 sm:mt-24 animate-bounce pointer-events-auto cursor-pointer">
          <a href="#historia" class="flex items-center gap-2 text-slate-500 opacity-60 hover:opacity-100 transition-opacity btn-no-underline hover:text-blue-600">
            <span class="text-xs sm:text-sm tracking-wide">Conhecer minha história</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <section id="historia" class="relative py-12 sm:py-20 px-6 bg-black scroll-mt-32">
      <div class="max-w-5xl mx-auto flex flex-col">
        <div ref="storyElement0" class="mb-8 sm:mb-12 opacity-0 transform translate-y-10 max-w-2xl mr-auto text-left">
          <p class="text-base sm:text-lg leading-relaxed text-slate-200">
            Olá! Me chamo <span class="font-bold text-blue-600">Lauro Breno</span>, tenho 27 anos e esta é a minha história.
          </p>
        </div>

        <div ref="storyElement1" class="mb-8 sm:mb-12 opacity-0 transform translate-y-10 max-w-2xl mr-auto text-left">
          <p class="text-base sm:text-lg leading-relaxed text-slate-300 font-light">
            Antes de escrever linhas de código, eu calculava reações químicas, controlava variáveis e otimizava processos industriais. A Engenharia Química me ensinou a pensar como um engenheiro: a olhar para o caos de um problema complexo e enxergar um sistema lógico por trás.
          </p>
        </div>

        <div ref="storyElement2" class="mb-8 sm:mb-12 opacity-0 transform translate-y-10 max-w-2xl mr-auto text-left">
          <p class="text-base sm:text-lg leading-relaxed text-slate-300 font-light">
            Mas, no meio do caminho, percebi que a minha verdadeira vocação não estava em tubulações e caldeiras, mas sim em fluxos de dados e linhas de lógica. Apesar da frustração inicial ao sair da faculdade de engenharia, percebi que não foi um passo em falso, e sim o momento em que percebi que podia aplicar toda essa bagagem analítica para criar coisas do zero no mundo digital. Foi aí que minha migração para o desenvolvimento de software começou.
          </p>
        </div>

        <div ref="storyElement3" class="mb-8 sm:mb-12 opacity-0 transform translate-y-10 max-w-2xl mr-auto md:mr-0 md:ml-auto text-left md:text-right">
          <p class="text-base sm:text-lg leading-relaxed text-slate-300 font-light">
            O ponto de virada real começou no Senac. Inicialmente, entrei com o intuito de dominar novas ferramentas, como o Python, essencial para a minha visão analítica. Mas o que era para ser apenas um acréscimo técnico se transformou em uma verdadeira paixão por codar.
          </p>
        </div>

        <div ref="storyElement4" class="mb-8 sm:mb-12 opacity-0 transform translate-y-10 max-w-2xl mr-auto md:mr-0 md:ml-auto text-left md:text-right">
          <p class="text-base sm:text-lg leading-relaxed text-slate-300 font-light">
            Mais do que sintaxe e algoritmos, o curso me desafiou a expandir minhas <em>soft skills</em>. Aprendi a apresentar ideias com clareza, a assumir uma postura de dono, a colaborar intensamente em equipe e a me comunicar de forma muito mais assertiva.
          </p>
        </div>

        <div ref="storyElement5" class="mb-8 sm:mb-12 opacity-0 transform translate-y-10 max-w-2xl mr-auto text-left">
          <p class="text-base sm:text-lg leading-relaxed text-slate-300 font-light">
            A grande prova de fogo veio no projeto final. Desenvolvemos um sistema completo para resolver uma dor real do próprio Senac. A solução foi tão prática e bem estruturada que quiseram implementá-la ali mesmo. Para um primeiro contato com a programação, foi uma validação maravilhosa. A partir daquele momento, a certeza se consolidou: eu não queria apenas escrever códigos, eu queria ser um criador de soluções digitais.
          </p>
        </div>

        <div ref="storyElement6" class="mb-8 sm:mb-12 opacity-0 transform translate-y-10 max-w-2xl mr-auto md:mr-0 md:ml-auto text-left md:text-right">
          <p class="text-base sm:text-lg leading-relaxed text-slate-300 font-light">
            O passo seguinte foi na UFBA, através do projeto CapaciTIC. Lá, solidifiquei minha base em JavaScript e dei vida ao meu segundo projeto: um simulador de fatura de energia. O objetivo era promover o consumo consciente e permitir que o usuário monitorasse suas contas, investigando possíveis desperdícios ou anomalias.
          </p>
        </div>

        <div ref="storyElement7" class="mb-8 sm:mb-12 opacity-0 transform translate-y-10 max-w-2xl mr-auto text-left">
          <p class="text-base sm:text-lg leading-relaxed text-slate-300 font-light">
            Em paralelo, oficializei essa transição ingressando na graduação em Análise e Desenvolvimento de Sistemas. Hoje, cursando o terceiro semestre, respiro código diariamente e busco construir sistemas práticos e funcionais constantemente.
          </p>
        </div>

        <div ref="storyElement8" class="opacity-0 transform translate-y-10 max-w-2xl mr-auto text-left">
          <p class="text-base sm:text-lg leading-relaxed text-slate-300 font-light">
            O resultado dessa imersão contínua foi um portfólio composto por projetos práticos que refletem minha evolução como desenvolvedor. Cada um deles representa não apenas linhas de código, mas soluções reais para problemas reais. Veja abaixo alguns desses projetos:
          </p>
        </div>

        <div class="mt-10 sm:mt-16 flex justify-center w-full animate-fade-in-up delay-1">
          <a href="#topo" class="group flex items-center gap-2 px-6 py-2 bg-slate-900 border border-slate-800 hover:border-blue-600 text-slate-400 hover:text-blue-600 rounded-full transition-all duration-300 btn-no-underline">
            <svg class="w-4 h-4 transform group-hover:-translate-y-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
            <span class="text-sm font-medium">Voltar ao topo</span>
          </a>
        </div>
      </div>
    </section>

    <section id="projetos" class="pt-10 pb-12 sm:pb-20 px-6 bg-black scroll-mt-32">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
          <span class="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Meus Projetos</span>
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-if="isLoadingProjects" class="col-span-full text-center py-10 text-slate-500 animate-pulse">
            Sincronizando portfólio...
          </div>

          <a v-else v-for="project in projects" :key="project.id" :href="project.url" target="_blank" rel="noopener noreferrer" class="btn-no-underline group relative bg-slate-900/40 rounded-xl p-5 sm:p-6 transition-colors duration-300 border border-slate-800 hover:border-blue-600 flex flex-col h-full cursor-pointer">
            
            <div v-if="project.type === 'academico'" class="bg-indigo-900/20 group-hover:bg-indigo-500/20 mb-4 h-32 sm:h-40 rounded-lg flex flex-col items-center justify-center border border-slate-800/50 transition-colors duration-300">
              <svg class="w-8 h-8 text-indigo-500/50 group-hover:text-indigo-400 mb-2 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v7" /></svg>
              <span class="text-indigo-500/70 group-hover:text-indigo-400 text-xs uppercase tracking-wider font-semibold transition-colors duration-300">{{ project.type }}</span>
            </div>

            <div v-else-if="project.type === 'profissional'" class="bg-slate-800/30 group-hover:bg-slate-700/40 mb-4 h-32 sm:h-40 rounded-lg flex flex-col items-center justify-center border border-slate-800/50 transition-colors duration-300">
              <svg class="w-8 h-8 text-slate-400/60 group-hover:text-slate-300 mb-2 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span class="text-slate-400/70 group-hover:text-slate-300 text-xs uppercase tracking-wider font-semibold transition-colors duration-300">{{ project.type }}</span>
            </div>

            <div v-else class="bg-blue-900/20 group-hover:bg-blue-500/20 mb-4 h-32 sm:h-40 rounded-lg flex flex-col items-center justify-center border border-slate-800/50 transition-colors duration-300">
              <svg class="w-8 h-8 text-blue-500/50 group-hover:text-blue-400 mb-2 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              <span class="text-blue-500/70 group-hover:text-blue-400 text-xs uppercase tracking-wider font-semibold transition-colors duration-300">{{ project.type }}</span>
            </div>

            <h4 class="text-xl font-bold mb-2 text-slate-200 group-hover:text-white transition-colors capitalize">{{ project.name }}</h4>
            
            <div class="flex-grow mb-4">
             <p class="text-slate-400 text-sm" style="display: -webkit-box; -webkit-line-clamp: 3; line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">
                {{ project.description }}
              </p>
            </div>
            
            <div class="flex gap-2 flex-wrap mt-auto">
              <span v-for="(tag, index) in project.topics" :key="index" class="inline-block bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 text-blue-400 text-[10px] uppercase px-2.5 py-1 rounded-full transition-colors duration-300">
                {{ tag }}
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section id="skills" class="py-12 sm:py-20 px-6 bg-black scroll-mt-32">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
          <span class="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Habilidades e Tecnologias</span>
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="bg-slate-900/40 rounded-xl p-6 sm:p-8 border border-slate-800">
            <h4 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-8 text-blue-500">Frontend</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div class="flex items-center gap-3 p-3 bg-black/40 rounded-lg hover:bg-slate-800 transition-colors border border-slate-800/50">
                <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span class="text-slate-300">JavaScript</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/40 rounded-lg hover:bg-slate-800 transition-colors border border-slate-800/50">
                <div class="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <span class="text-slate-300">Vue.js</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/40 rounded-lg hover:bg-slate-800 transition-colors border border-slate-800/50">
                <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span class="text-slate-300">Tailwind CSS</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/40 rounded-lg hover:bg-slate-800 transition-colors border border-slate-800/50">
                <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span class="text-slate-300">React</span>
              </div>
            </div>
          </div>

          <div class="bg-slate-900/40 rounded-xl p-6 sm:p-8 border border-slate-800">
            <h4 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-8 text-blue-400">Backend</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div class="flex items-center gap-3 p-3 bg-black/40 rounded-lg hover:bg-slate-800 transition-colors border border-slate-800/50">
                <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span class="text-slate-300">Python</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/40 rounded-lg hover:bg-slate-800 transition-colors border border-slate-800/50">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-slate-300">Node.js</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/40 rounded-lg hover:bg-slate-800 transition-colors border border-slate-800/50">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-slate-300">SQL</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-black/40 rounded-lg hover:bg-slate-800 transition-colors border border-slate-800/50">
                <div class="w-3 h-3 bg-slate-400 rounded-full"></div>
                <span class="text-slate-300">APIs REST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 sm:py-20 px-6 bg-black scroll-mt-32">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
          <span class="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Futuro e Visão</span>
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-slate-900/40 rounded-xl p-6 sm:p-8 border border-slate-800 hover:border-blue-600/40 transition-colors">
            <h4 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-500">Qual é o meu objetivo?</h4>
            <p class="text-sm sm:text-base text-slate-400 leading-relaxed">
              Criar soluções digitais de impacto real que resolvam problemas complexos. Ser um desenvolvedor versátil, capaz de transitar entre frontend e backend, sempre buscando excelência técnica e código limpo.
            </p>
          </div>

          <div class="bg-slate-900/40 rounded-xl p-6 sm:p-8 border border-slate-800 hover:border-blue-400/40 transition-colors">
            <h4 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-400">O que espero para meu futuro?</h4>
            <p class="text-sm sm:text-base text-slate-400 leading-relaxed">
              Consolidar minha carreira em desenvolvimento full-stack, contribuir para projetos open source de impacto, e eventualmente liderar equipes de tecnologia. Continuar aprendendo e evoluindo nessa jornada infinita da programação.
            </p>
          </div>
        </div>
      </div>
    </section>

    <footer id="contato" class="bg-black border-t border-slate-900 py-10 sm:py-16 px-6 scroll-mt-32">
      <div class="max-w-6xl mx-auto w-full">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12 w-full">
          
          <div class="flex flex-col items-start text-left w-full">
            <h5 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Sobre</h5>
            <p class="text-slate-400 text-sm leading-relaxed">
              Desenvolvedor full-stack apaixonado por criar soluções digitais de impacto. Sempre em busca de novos desafios e oportunidades de aprendizado.
            </p>
          </div>

          <div class="flex flex-col md:items-center w-full">
            <div class="w-fit">
              <h5 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-300">Últimas Atividades</h5>
              <ul class="space-y-4 text-sm w-full">
                <li v-if="isLoadingActivities" class="text-slate-500 animate-pulse text-xs">
                  Sincronizando atividades...
                </li>
                
                <li v-else v-for="activity in recentActivities" :key="activity.id" class="flex flex-row items-center justify-start gap-3 w-full">
                  <a :href="activity.url" target="_blank" rel="noopener noreferrer" class="btn-no-underline text-slate-400 hover:text-blue-500 transition-colors cursor-pointer truncate max-w-[180px] sm:max-w-[200px] capitalize">
                    {{ activity.name }}
                  </a>
                  
                  <span v-if="activity.isFinished" class="flex items-center gap-1.5 px-1.5 py-0.5 rounded border border-emerald-400/20 bg-emerald-400/10 text-emerald-400 font-medium text-[9px] uppercase tracking-wider flex-shrink-0">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Finalizado
                  </span>
                  <span v-else class="flex items-center gap-1.5 px-1.5 py-0.5 rounded border border-blue-500/20 bg-blue-500/10 text-blue-400 font-medium text-[9px] uppercase tracking-wider flex-shrink-0">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> Em andamento
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col items-start md:items-end w-full">
            <div class="flex flex-col items-start text-left w-fit">
              <h5 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-300">Conecte-se</h5>
              <div class="flex gap-4 justify-start">
                <a href="https://www.linkedin.com/in/lauro-freitas-b2850510a/" target="_blank" rel="noopener noreferrer" class="btn-no-underline after:hidden w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:border-transparent transition-all" title="LinkedIn">
                  <svg class="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z"/></svg>
                </a>
                <a href="mailto:brenofrei@hotmail.com" class="btn-no-underline after:hidden w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:border-transparent transition-all group" title="Email">
                  <span class="text-xl font-bold text-slate-300 group-hover:text-white mt-[-2px]">@</span>
                </a>
                <a href="https://wa.me/71997110885" target="_blank" rel="noopener noreferrer" class="btn-no-underline after:hidden w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:border-transparent transition-all" title="WhatsApp">
                  <svg class="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                </a>
                <a href="https://github.com/LauroBreno" target="_blank" rel="noopener noreferrer" class="btn-no-underline after:hidden w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 hover:border-transparent transition-all" title="GitHub">
                  <svg class="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div class="border-t border-slate-900 pt-8 text-center text-slate-500 text-sm">
          <p>© {{ currentYear }} Lauro Breno. Todos os direitos reservados. Construído com Vue.js e muita dedicação.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";

const currentYear = ref(new Date().getFullYear());

const projects = ref([]);
const recentActivities = ref([]);
const isLoadingProjects = ref(true);
const isLoadingActivities = ref(true);
const githubUsername = 'LauroBreno'; 

const storyElement0 = ref(null);
const storyElement1 = ref(null);
const storyElement2 = ref(null);
const storyElement3 = ref(null);
const storyElement4 = ref(null);
const storyElement5 = ref(null);
const storyElement6 = ref(null);
const storyElement7 = ref(null);
const storyElement8 = ref(null);

const storyElements = [
  storyElement0,
  storyElement1,
  storyElement2,
  storyElement3,
  storyElement4,
  storyElement5,
  storyElement6,
  storyElement7,
  storyElement8,
];

// LÓGICA MESTRE UNIFICADA (Cruzamento: Permissões do Banco + Ordem do GitHub)
const loadPortfolioData = async () => {
  isLoadingProjects.value = true;
  isLoadingActivities.value = true;
  
  try {
    // 1. Busca todos os projetos marcados como ATIVOS no Supabase
    const { data: dbData, error } = await supabase
      .from('portfolio_projetos')
      .select('*')
      .eq('is_ativo', true);

    if (error) throw error;

    // 2. Busca TODOS os repositórios do GitHub ordenados por ÚLTIMA MODIFICAÇÃO
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Falha na API do GitHub');
    const githubRepos = await response.json();

    // 3. Monta as ÚLTIMAS ATIVIDADES do Footer
    recentActivities.value = githubRepos.slice(0, 3).map(repo => {
      // Cruzamento com o banco para descobrir o status
      const dbProject = dbData && dbData.find(p => p.github_id === repo.id);
      
      // Se estiver no banco e marcado como finalizado, recebe true. Senão, false (Em andamento).
      const isFinished = dbProject ? dbProject.status === 'finalizado' : false;
      
      return {
        id: repo.id,
        name: repo.name.replace(/-/g, ' '),
        url: repo.html_url,
        isFinished
      };
    });

    // 4. Monta os PROJETOS cruzando a ordem do GitHub com os ativos do Supabase
    const orderedProjects = [];
    
    if (dbData && dbData.length > 0) {
      // Loop sobre o GitHub
      for (const repo of githubRepos) {
        // Verifica se esse repositorio foi importado e está ativo no Supabase
        const dbProject = dbData.find(p => p.github_id === repo.id);
        
        if (dbProject) {
          orderedProjects.push({
            id: dbProject.id,
            url: repo.html_url, // URL Direta do GitHub 
            type: dbProject.tipo, // Somente a Categoria vem do Supabase
            name: repo.name.replace(/-/g, ' '), // Nome Direto do GitHub
            description: repo.description, // Descrição Direta do GitHub
            topics: (repo.topics || []).slice(0, 4)
          });
        }

        // Limita a exibição máxima de 6 projetos
        if (orderedProjects.length === 6) break;
      }
    }
    
    projects.value = orderedProjects;

  } catch (error) {
    console.error("Erro ao carregar os dados:", error);
  } finally {
    isLoadingProjects.value = false;
    isLoadingActivities.value = false;
  }
};

onMounted(() => {
  loadPortfolioData();
  
  const professions = ["Engenheiro Químico", "Desenvolvedor Full Stack"];
  let currentProfession = 0;
  let currentChar = 0;
  let isDeleting = false;

  const typewriterElement = document.querySelector(".typewriter");
  typewriterElement.textContent = "";

  function typeWriter() {
    const profession = professions[currentProfession];

    if (!isDeleting && currentChar < profession.length) {
      typewriterElement.textContent += profession.charAt(currentChar);
      currentChar++;
      setTimeout(typeWriter, 50);
    } else if (isDeleting && currentChar > 0) {
      typewriterElement.textContent = profession.substring(0, currentChar - 1);
      currentChar--;
      setTimeout(typeWriter, 30);
    } else if (currentChar === profession.length && !isDeleting) {
      isDeleting = true;
      setTimeout(typeWriter, 3000);
    } else if (currentChar === 0 && isDeleting) {
      isDeleting = false;
      currentProfession = (currentProfession + 1) % professions.length;
      setTimeout(typeWriter, 500);
    }
  }

  typeWriter();

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  storyElements.forEach((el, index) => {
    if (el.value) {
      el.value.style.animationDelay = `${index * 0.1}s`;
      observer.observe(el.value);
    }
  });
});
</script>