import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import 'bootstrap'; // Importa o JS do Bootstrap


// Cria a instância do Pinia
const pinia = createPinia(); 

// Cria a aplicação Vue
const app = createApp(App);

// Usa o Pinia como store global
app.use(pinia);

// Monta a aplicação no elemento #app
app.mount('#app');