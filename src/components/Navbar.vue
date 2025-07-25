<template>
  
  <nav v-if="this.windowWidth >= 480" class="navbar quip2">
    <div class="d-flex justify-content-around align-items-center tants w-100">
      <img @click="home()" class="ralao " src="@/assets/logoref.svg" alt="Logo"/>
      <ul class="caps d-flex justify-content-center align-items-center">
        <li @click="home()" class="nav-item sublinhado pics">Início</li>
        <li @click="scrollToContato()" class="nav-item pics">quem somos</li>
        <li @click="scrollToprob()" class="nav-item pics">conte seu problema</li>
      </ul>
      <input class="serc" type="search" placeholder="Buscar..." aria-label="Search">
    </div>

  </nav>
  <nav v-if="this.windowWidth < 480" class="navbar quip2">
    <div class="d-flex justify-content-around align-items-center tants w-100">
      <img @click="home()" class="ralao " src="@/assets/logoref.svg" alt="Logo"/>
      <ul v-if="this.pesq === false" class="caps d-flex justify-content-center align-items-center">
        <li @click="home()" class="nav-item sublinhado pics">Início</li>
        <li @click="scrollToContato()" class="nav-item pics">quem somos</li>
        <li @click="scrollToprob()" class="nav-item pics">Conte seu  problema</li>
      </ul>
      <input v-if="this.pesq === true" class="serc2" type="search" placeholder="Buscar..." aria-label="Search">
      <img  @click="change()" class="ralao " src="@/assets/vec.svg" alt="Logo"/>
    </div>

  </nav>
  

</template>

  <script>
  import { useMainStore } from '../stores/mainStores';
  import { nextTick } from 'vue';
  export default {
    name: 'Navbar',
    data() {
      return {
        windowWidth: window.innerWidth,
        pesq: false,
      };
    },
    computed: {
      divClasses() { // Corrigido para 'divClasses' (capitalização)
        return this.windowWidth > 1000 ? 'navbar navbar-expand-lg border border-dark scu' : 'scu';
      },
      divClasses2() {
        return this.windowWidth > 1000 ? 'container' : 'aplicação';
      },
      divClasses3() {
          if(this.windowWidth < 1000){
            return "aplicação2";
          }
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize); // Adiciona listener para resize
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize); // Remove listener no destroy
    },
    methods: {
      change(){
        this.pesq = !this.pesq;
      },
      

    scrollToContato() {
      this.home();
      nextTick(() => {
      const el = document.getElementById('quem');
       if(el) {
         el.scrollIntoView({ behavior: 'smooth' });
      }
      });
    },
    scrollToprob() {
      this.home();
      nextTick(() => {
      const el = document.getElementById('prob');
       if (el) {
         el.scrollIntoView({ behavior: 'smooth' });
      }
      });
    },

    
      handleResize() {
        this.windowWidth = window.innerWidth; // Atualiza windowWidth
      },
      home(){
            console.log('foi');
            this.updateGlobalVariable(0);
          },
          updateGlobalVariable(value) {
            const mainStore = useMainStore();
            mainStore.updateGlobalVariable(value);
            console.log('Global Variable Updated:', mainStore.globalVariable); // Adicione isso
            },
    },
  };
  </script>

    
    
