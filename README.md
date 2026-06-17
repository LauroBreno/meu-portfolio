# Portfólio Dinâmico com CMS (Vue.js + Supabase)

> Uma plataforma de portfólio pessoal interativa, equipada com um painel administrativo (CMS) blindado para gerenciamento de projetos. A aplicação consome a API do GitHub em tempo real e utiliza o Supabase para controle de estado, categorias e autenticação.

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=flat&logo=vue.js&logoColor=4FC08D)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)

## Visão Geral

Este não é apenas um site estático, mas sim um sistema completo. Desenvolvido para centralizar minha evolução profissional, o sistema cruza os repositórios reais do meu GitHub com um banco de dados relacional. Através de um painel de administração restrito, consigo classificar projetos (Acadêmico, Profissional, Pessoal) e ocultar/exibir cards na tela inicial sem precisar mexer em uma única linha de código.

### Funcionalidades Principais

* **Sincronização com GitHub API:** Busca repositórios públicos, descrições e tags em tempo real, contornando gargalos de cache.
* **Painel Administrativo (Admin):** Área restrita protegida por autenticação (Supabase Auth) para gestão do portfólio.
* **Single Source of Truth:** Textos e tags vêm do GitHub, enquanto regras de negócio (visibilidade e tipo) vêm do Supabase.
* **Segurança Refinada (RLS):** Banco de dados protegido contra falhas silenciosas e injeções, exigindo JWT validado para qualquer alteração (Updates/Inserts).
* **UI/UX Premium:** Design responsivo, *dark mode* nativo, microinterações e animações baseadas em *scroll* utilizando `Intersection Observer`.

## Tecnologias e Ferramentas

* **Frontend:** Vue.js 3 (Composition API), Vite, Vue Router
* **Estilização:** Tailwind CSS
* **Backend (BaaS):** Supabase (PostgreSQL, Authentication, Row Level Security)
* **Integrações:** API REST do GitHub

## Como executar o projeto localmente

Para rodar este projeto em sua máquina, você precisará do [Node.js](https://nodejs.org/en/) instalado e de um banco de dados configurado no Supabase.

**1. Clone o repositório:**
```bash
git clone [https://github.com/LauroBreno/meu-portfolio.git](https://github.com/LauroBreno/meu-portfolio.git)
```

**2. Acesse a pasta do projeto:**
cd meu-portfolio

**3. Instale as dependências:**
npm install

**4. Configure as Variáveis de Ambiente:**
Vá no arquivo supabase.js e configure suas credenciais de projeto geradas no painel do Supabase.(Nota: em um ambiente de produção real, é recomendado o uso de arquivos .env para proteção das chaves).

**5. Execute o servidor de desenvolvimento:**
npm run dev

## Autor
Criado por Lauro Breno
Da Engenharia Química para o Desenvolvimento de Software.