<template>
    <div id="Home">
      <Navbar></Navbar>
      <Guia></Guia>
      <Seção></Seção>
      <Final></Final>
      <Guia2></Guia2>

    </div>
  </template>
  
  <script>
  import Navbar from './Navbar.vue'; // Importa o componente Navbar
  import Guia from './guia.vue';
  import Guia2 from './guia2.vue';
  import Seção from './seção.vue';
  import Final from './final.vue';
  
  export default {
    name: 'home',
    components: {
          Navbar,
          Guia,
          Seção,
          Final,
          Guia2
      }
  };
  </script>