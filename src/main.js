import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa o nosso arquivo de rotas
import '../styles.css' 

const app = createApp(App)

app.use(router) // Diz para o Vue usar o sistema de rotas
app.mount('#app')