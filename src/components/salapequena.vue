<template>
  <Navbar></Navbar>
  <guia25 v-if="this.selector == 0"></guia25>
  <Guia75 v-if="this.selector == 1"></Guia75>
  <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import guia25 from './guia25.vue';
import Guia75 from './guia75.vue';

  export default {
      name: 'salapequena',
      components:{
          Navbar,
          Final25,
          Guia75,
          guia25
      },
      props: {
          selector: {
              type: Number,
              required: true,
          }
      }
  }
</script>
<style>
</style>