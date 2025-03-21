<template>
  <div id="app">
    <home v-if="globalVariable === 0"></home> <!-- Exibe o componente Home se controleglobal for 0 -->
    <salapequena v-if="globalVariable === 25"></salapequena>
    <quartopradois v-if="globalVariable === 24"></quartopradois>
    <quartopraum v-if="globalVariable === 23"></quartopraum>
    <quartopracasal v-if="globalVariable === 22"></quartopracasal>
    <consertagot v-if="globalVariable === 12"></consertagot>
    <acabarcominfil v-if="globalVariable === 13"></acabarcominfil>
    <aumentarcomodo v-if="globalVariable === 31"></aumentarcomodo>
    <criarpatios v-if="globalVariable === 32"></criarpatios>
    <tomada v-if="globalVariable === 33"></tomada>
    <Escolher v-if="globalVariable === 34"></Escolher>
    <Escolher2 v-if="globalVariable === 35"></Escolher2>
    <Acabarumidade v-if="globalVariable === 41"></Acabarumidade>
    <Acabarcommancha v-if="globalVariable === 42"></Acabarcommancha>
    <Adaptartemp :selector=0 v-if="globalVariable === 43"></Adaptartemp>
    <Materi v-if="globalVariable === 51"></Materi>
    <Gerar v-if="globalVariable === 52"></Gerar>
    <Posicionar v-if="globalVariable === 53"></Posicionar>
    <Adaptartemp :selector=1 v-if="globalVariable === 54"></Adaptartemp>
    <iluminacao v-if="globalVariable === 55"></iluminacao>
    <Banheiro v-if="globalVariable === 56"></Banheiro>
    <Horta v-if="globalVariable === 57"></Horta>
    <Manutencao v-if="globalVariable === 58"></Manutencao>
  </div>
</template>

<script>
import Posicionar from './components/posicionar.vue';
import iluminacao from './components/iluminacao.vue';
import Adaptartemp from './components/adaptartemp.vue';
import Acabarcommancha from './components/acabarcommancha.vue';
import tomada from './components/tomada.vue';
import criarpatios from './components/criarpatios.vue';
import aumentarcomodo from './components/aumentarcomodo.vue';
import consertagot from './components/consertagot.vue';
import home from './components/home.vue'; // Verifique o caminho do componente
import { useMainStore } from './stores/mainStores'; // Ajuste o caminho conforme necessário
import { computed } from 'vue';
import salapequena from './components/salapequena.vue';
import quartopradois from './components/quartopradois.vue';
import quartopraum from './components/quartopraum.vue';
import quartopracasal from './components/quartopracasal.vue';
import acabarcominfil from './components/acabarcominfil.vue';
import Escolher from './components/escolher.vue';
import Escolher2 from './components/escolher2.vue';
import Acabarumidade from './components/acabarumidade.vue';
import Materi from './components/materi.vue';
import Gerar from './components/gerar.vue';
import Banheiro from './components/banheiro.vue';
import Horta from './components/horta.vue';
import manutencao from './components/manutencao.vue';
import Manutencao from './components/manutencao.vue';
export default {
  name: 'App',
  components: {
    home, // Registra o componente Home
    salapequena,
    quartopradois,
    quartopraum,
    quartopracasal,
    consertagot,
    acabarcominfil,
    aumentarcomodo,
    criarpatios,
    tomada,
    Escolher,
    Escolher2,
    Acabarumidade,
    Acabarcommancha,
    Adaptartemp,
    Materi,
    Gerar,
    Posicionar,
    iluminacao,
    Banheiro,
    Horta,
    Manutencao
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



