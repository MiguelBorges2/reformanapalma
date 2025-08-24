import { createRouter, createWebHistory } from 'vue-router'
import { useMainStore } from '../stores/mainStores'
import { computed } from 'vue'
import '../assets/global.css'

import home from '../components/home.vue'
import salapequena from '../components/salapequena.vue'
import banheiro from '../components/banheiro.vue'
import horta from '../components/horta.vue'
import gerar from '../components/gerar.vue'
import materi from '../components/materi.vue'
import equip from '../components/equip.vue'
import aquecimento from '../components/aquecimento.vue'
import tomada2 from '../components/tomada2.vue'
import persona from '../components/persona.vue'
import versa from '../components/versa.vue'
import comercio from '../components/comercio.vue'
import renda from '../components/renda.vue'
import mobi from '../components/mobi.vue'
import posicionar from '../components/posicionar.vue'
import iluminacao from '../components/iluminacao.vue'
import adaptartemp from '../components/adaptartemp.vue'
import acabarcommancha from '../components/acabarcommancha.vue'
import tomada from '../components/tomada.vue'
import criarpatios from '../components/criarpatios.vue'
import aumentarcomodo from '../components/aumentarcomodo.vue'
import consertagot from '../components/consertagot.vue'
import quartopradois from '../components/quartopradois.vue'
import quartopraum from '../components/quartopraum.vue'
import quartopracasal from '../components/quartopracasal.vue'
import acabarcominfil from '../components/acabarcominfil.vue'
import escolher from '../components/escolher.vue'
import escolher2 from '../components/escolher2.vue'
import acabarumidade from '../components/acabarumidade.vue'
import manutencao from '../components/manutencao.vue'
import Manutencao from '../components/manutencao.vue'
import arcondas from '../components/arcondas.vue'
import iluminacao2 from '../components/iluminacao2.vue'
import saudavel from '../components/saudavel.vue'
import realizar from '../components/realizar.vue'
import Adaptartemp2 from '../components/adaptartemp2.vue'
import criarpatios2 from '../components/criarpatios2.vue'
import iluminacao12 from '../components/iluminacao1.2.vue'
import criarpatios3 from '../components/criarpatios3.vue'
import quartopracasal2 from '../components/quartopracasal2.vue'
import quartopraum2 from '../components/quartopraum2.vue'
import salapequena2 from '../components/salapequena2.vue'
import acabarumidade2 from '../components/acabarumidade2.vue'
import acabarcommancha2 from '../components/acabarcommancha2.vue'
import Adaptartemp3 from '../components/adaptartemp3.vue'
import arcondas2 from '../components/arcondas2.vue'
import iluminacao21 from '../components/iluminacao21.vue'
import Recon from '@/components/recon.vue'

const routes = [
  { path: '/', component: home },
  { path: '/salapequena', component: salapequena },
  { path: '/banheiro', component: banheiro },
  { path: '/horta', component: horta },
  { path: '/gerar', component: gerar },
  { path: '/materi', component: materi },
  { path: '/equip', component: equip },
  { path: '/aquecimento', component: aquecimento },
  { path: '/tomada2', component: tomada2 },
  { path: '/persona', component: persona },
  { path: '/versa', component: versa },
  { path: '/comercio', component: comercio },
  { path: '/renda', component: renda },
  { path: '/mobi', component: mobi },
  { path: '/posicionar', component: posicionar },
  { path: '/iluminacao', component: iluminacao },
  { path: '/adaptartemp', component: adaptartemp },
  { path: '/acabarcommancha', component: acabarcommancha },
  { path: '/tomada', component: tomada },
  { path: '/criarpatios', component: criarpatios },
  { path: '/aumentarcomodo', component: aumentarcomodo },
  { path: '/consertagot', component: consertagot },
  { path: '/quartopradois', component: quartopradois },
  { path: '/quartopraum', component: quartopraum },
  { path: '/quartopracasal', component: quartopracasal },
  { path: '/acabarcominfil', component: acabarcominfil },
  { path: '/escolher', component: escolher },
  { path: '/escolher2', component: escolher2 },
  { path: '/acabarumidade', component: acabarumidade },
  { path: '/manutencao', component: manutencao }, // uma das duas pode ser removida se for duplicada
  { path: '/Manutencao', component: Manutencao },
  { path: '/arcondas', component: arcondas },
  { path: '/iluminacao2', component: iluminacao2 },
  { path: '/saudavel', component: saudavel },
  { path: '/realizar', component: realizar },
  { path: '/adaptartemp2', component: Adaptartemp2},
  { path: '/criarpatios2', component: criarpatios2},
  {path: '/iluminacao12', component: iluminacao12},
  {path: '/criarpatios3', component: criarpatios3},
  {path: '/quartopracasal2', component: quartopracasal2},
  { path: '/quartopraum2', component: quartopraum2 },
  { path: '/salapequena2', component: salapequena2 },
  { path: '/acabarumidade2', component: acabarumidade2 },
  { path: '/acabarcommancha2', component: acabarcommancha2 },
  { path: '/adaptartemp3', component: Adaptartemp3},
  { path: '/arcondas2', component: arcondas2 },
  { path: '/iluminacao21', component: iluminacao21 },
  { path: '/recon', component: Recon},
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // sempre rola para o topo da página
    return { top: 0 };
  }
})

export default router