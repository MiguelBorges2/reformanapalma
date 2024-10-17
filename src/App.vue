<template>
  <div id="app">
    <Navbar></Navbar>
    <Guia></Guia>
    <Seção></Seção>
    <Final></Final>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'; // Importa o componente Navbar
import Guia from './components/guia.vue';
import Seção from './components/seção.vue';
import Final from './components/final.vue';

export default {
  name: 'App',
  components: {
        Navbar,
        Guia,
        Seção,
        Final
    }
};
</script>

