<template>
  <div id="app">
    <home v-if="globalVariable === 0"></home> <!-- Exibe o componente Home se controleglobal for 0 -->
    <salapequena v-if="globalVariable === 25"></salapequena>
  </div>
</template>

<script>
import home from './components/home.vue'; // Verifique o caminho do componente
import { useMainStore } from './stores/mainStores'; // Ajuste o caminho conforme necessário
import { computed } from 'vue';
import salapequena from './components/salapequena.vue'


export default {
  name: 'App',
  components: {
    home, // Registra o componente Home
    salapequena
  },
  setup() {
    const mainStore = useMainStore(); // Use a store
    // Computed property para acessar a variável global
    const globalVariable = computed(() => mainStore.globalVariable);

    return {
      globalVariable, // Retorna a propriedade computada para o template
    };
  },

};
</script>



