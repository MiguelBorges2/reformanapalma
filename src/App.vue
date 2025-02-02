<template>
  <div id="app">
    <home v-if="globalVariable === 0"></home> <!-- Exibe o componente Home se controleglobal for 0 -->
    <salapequena v-if="globalVariable === 25"></salapequena>
    <quartopradois v-if="globalVariable === 24"></quartopradois>
    <quartopraum v-if="globalVariable === 23"></quartopraum>
    <quartopracasal v-if="globalVariable === 22"></quartopracasal>
    <consertagot v-if="globalVariable === 12"></consertagot>
    <acabarcominfil v-if="globalVariable === 13"></acabarcominfil>
  </div>
</template>

<script>
import consertagot from './components/consertagot.vue';
import home from './components/home.vue'; // Verifique o caminho do componente
import { useMainStore } from './stores/mainStores'; // Ajuste o caminho conforme necessário
import { computed } from 'vue';
import salapequena from './components/salapequena.vue';
import quartopradois from './components/quartopradois.vue';
import quartopraum from './components/quartopraum.vue';
import quartopracasal from './components/quartopracasal.vue';
import acabarcominfil from './components/acabarcominfil.vue';



export default {
  name: 'App',
  components: {
    home, // Registra o componente Home
    salapequena,
    quartopradois,
    quartopraum,
    quartopracasal,
    consertagot,
    acabarcominfil
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



