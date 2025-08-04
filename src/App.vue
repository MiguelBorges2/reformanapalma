<template>
  <div id="app">
    <!-- Aqui o Vue Router vai renderizar o componente da rota atual -->
    <router-view />
  </div>
</template>

<script>
import './assets/global.css'
export default {
  name: "App",
};
</script>

<style>
/* Se quiser, coloque seu CSS global aqui */
</style>