<template>
  <div id="app">
    <home v-if="globalVariable === 0"></home> <!-- Exibe o componente Home se controleglobal for 0 -->
    <salapequena :selector = 0 v-if="globalVariable === 25"></salapequena>
    <quartopradois v-if="globalVariable === 24"></quartopradois>
    <quartopraum :selector = 0 v-if="globalVariable === 23"></quartopraum>
    <quartopracasal :selector = 0 v-if="globalVariable === 22"></quartopracasal>
    <consertagot v-if="globalVariable === 12"></consertagot>
    <acabarcominfil v-if="globalVariable === 13"></acabarcominfil>
    <aumentarcomodo v-if="globalVariable === 31"></aumentarcomodo>
    <criarpatios :selector = 0 v-if="globalVariable === 32"></criarpatios>
    <tomada v-if="globalVariable === 33"></tomada>
    <Escolher v-if="globalVariable === 34"></Escolher>
    <Escolher2 v-if="globalVariable === 35"></Escolher2>
    <Acabarumidade :selector = 0 v-if="globalVariable === 41"></Acabarumidade>
    <Acabarcommancha :selector = 0 v-if="globalVariable === 42"></Acabarcommancha>
    <Adaptartemp :selector=0 v-if="globalVariable === 43"></Adaptartemp>
    <Materi v-if="globalVariable === 51"></Materi>
    <Gerar v-if="globalVariable === 52"></Gerar>
    <Posicionar v-if="globalVariable === 53"></Posicionar>
    <Adaptartemp :selector=1 v-if="globalVariable === 54"></Adaptartemp>
    <iluminacao :selector=0 v-if="globalVariable === 55"></iluminacao>
    <Banheiro v-if="globalVariable === 56"></Banheiro>
    <Horta v-if="globalVariable === 57"></Horta>
    <Manutencao v-if="globalVariable === 58"></Manutencao>
    <Arcondas :selector = 0 v-if="globalVariable === 59"></Arcondas>
    <iluminacao :selector=1 v-if="globalVariable === 61"></iluminacao>
    <iluminacao2 :selector = 0 v-if="globalVariable === 63"></iluminacao2>
    <Mobi v-if="globalVariable === 71"></Mobi>
    <saudavel v-if="globalVariable === 72"></saudavel>
    <Renda v-if="globalVariable === 81"></Renda>
    <Comercio v-if="globalVariable === 82"></Comercio>
    <Versa v-if="globalVariable === 83"></Versa>
    <Persona v-if="globalVariable === 84"></Persona>
    <Tomada2 v-if="globalVariable === 85"></Tomada2>
    <Equip v-if="globalVariable === 91"></Equip>
    <Aquecimento v-if="globalVariable === 94"></Aquecimento>
    <criarpatios :selector = 1 v-if="globalVariable === 510"></criarpatios>
    <criarpatios :selector = 2 v-if="globalVariable === 62"></criarpatios>
    <quartopracasal :selector = 1 v-if="globalVariable === 73"></quartopracasal>
    <quartopraum :selector = 1 v-if="globalVariable === 74"></quartopraum>
    <salapequena :selector = 1 v-if="globalVariable === 75"></salapequena>
    <Acabarumidade :selector = 1 v-if="globalVariable === 76"></Acabarumidade>
    <Acabarcommancha :selector = 1 v-if="globalVariable === 77"></Acabarcommancha>
    <Adaptartemp :selector=2 v-if="globalVariable === 78"></Adaptartemp>
    <Arcondas :selector = 1 v-if="globalVariable === 92"></Arcondas>
    <iluminacao2 :selector = 1 v-if="globalVariable === 93"></iluminacao2>
  </div>
</template>

<script>
import Tomada2 from './components/tomada2.vue'
import Persona from './components/persona.vue';
import Versa from './components/versa.vue';
import Comercio from './components/comercio.vue';
import Renda from './components/renda.vue';
import Mobi from './components/mobi.vue';
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
import Arcondas from './components/arcondas.vue';
import iluminacao2 from './components/iluminacao2.vue';
import Saudavel from './components/saudavel.vue';
import Equip from './components/equip.vue';
import Aquecimento from './components/aquecimento.vue';
import './assets/global.css'
export default {
  name: 'App',
  components: {
    home,
    Arcondas,
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
    iluminacao2,
    Banheiro,
    Horta,
    Manutencao,
    Mobi,
    Saudavel,
    Renda,
    Comercio,
    Versa,
    Persona,
    Tomada2,
    Equip,
    Aquecimento
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





