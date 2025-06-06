<template>
  
  <nav v-if="this.windowWidth >= 480" class="navbar quip2">
    <div class="d-flex justify-content-around align-items-center tants w-100">
      <img @click="home()" class="ralao " src="@/assets/logoref.svg" alt="Logo"/>
      <ul class="caps d-flex justify-content-center align-items-center">
        <li @click="home()" class="nav-item pics">Início</li>
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
        <li @click="home()" class="nav-item pics">Início</li>
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

    <style>
    .pics {
      color: white;
      margin-right: 2%;
      margin-left: 4%;
      font-size: 1.5vw;
    }
    .tants {
      align-items: center;
    }
    .aplicação{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgb(71, 71, 68);
    }
    .scu {
      background-color: rgb(71, 71, 68);
    }
    .scu2 {
      background-color: rgb(71, 71, 68);
    }
    .yip5 {
      font-size: 1.2vw;
    }
    .gabs {
      width: 80%;
    }
    .quip2 {
      background-color: #4A4A48;
    }
    .gab {
      padding: 0;
      width: 30%;
    }
    .caps {
      list-style: none;
      width: 35%;
      height: 100%;

      margin: 0;
    }
    .ralao {
      height: auto;
      width: 5%;
      margin-left: 2%;
    }
    .aplicação2 {
      width: 95%;
      
    }
    .wid2{
      width: 30%;
      height: 2.5vw;
      
    }
    .fon {
      font-size: 0.5vw;
    }
    .serc {
      width: 15%;
      border-radius: 20px;
      background-color: rgb(71, 71, 68);
      color: white;
      border: 2px solid #FFC676;
      ;
    }
    .serc2 {
      width: 60%;
      border-radius: 20px;
      background-color: rgb(71, 71, 68);
      color: white;
      border: 2px solid #FFC676;
      ;
    }
    @media (max-width: 768px) {
      .wid2 {
        height: 2.5vw;
        width: 29%;
        margin-bottom: 1%;
      }
      .caps {
        width: 50%;
        
      }
      .pics{
        font-size: 2.2vw;
        margin-left: 2%;
      }
      .ralao {
        width: 8%;
        margin-left: 4%;
      }
      .serc{
        width: 20%;
        font-size: 1.9vw;
      }
    
}
    @media (max-width: 1200px) {
      .wid2 {
        height: 2.5vw;
        width: 29%;
        margin-bottom: 1%;
      }
      .caps {
        width: 50%;
        
      }
      .pics{
        font-size: 1.6vw;
        margin-left: 2%;
      }
      .ralao {
        width: 8%;
        margin-left: 4%;
      }
      .serc{
        width: 18%;
        font-size: 1.9vw;
      }
    
}
@media (max-width: 600px) {
      .wid2 {
        height: 2.5vw;
        width: 29%;
        margin-bottom: 1%;
      }
      .caps {
        width: 50%;
        
      }
      .pics{
        font-size: 2.4vw;
        margin-left: 4%;
        margin-right: 4%;
      }
      .ralao {
        width: 7%;
        margin-left: 4%;
      }
      .serc{
        width: 20%;
        font-size: 2.1vw;
      }
    
}
@media (max-width: 600px) {
      .wid2 {
        height: 2.5vw;
        width: 29%;
        margin-bottom: 1%;
      }
      .caps {
        width: 70%;
        
      }
      .ralao {
        width: 7%;
        margin-left: 4%;
      }
      .serc{
        width: 20%;
        font-size: 2.1vw;
      }
    
}

    </style>
    
