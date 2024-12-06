  <template>
    <nav :class="divClasses"> <!-- Use :class para aplicar a classe dinâmica -->
      <div :class=" divClasses2">
        <div class="d-flex justify-content-center align-items-center gab">
          <img class="ralao  " src="@/assets/logo_Reforma_hznt_w.svg" alt="Logo" />
        </div>
        <div class="d-flex gabs  justify-content-end align-items-center " id="navbarNav">
          <ul :class="[divClasses3, 'navbar-nav', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-center']">
            <li class="nav-item me-3   yip5">
              <a href="#" class="nav-link text-light">Início</a>
            </li>
            <li class="nav-item yip5 me-3">
              <a href="#" class="nav-link text-light">Quem somos</a>
            </li>
            <li class="nav-item me-3 yip5">
              <a href="#" class="nav-link text-light">Conte seu problema</a>
            </li>
            <form class="d-flex scu2 wid2   " action="/search" method="get">
              <input class="form-control scu2 me-2" type="search" name="query" placeholder="buscar" aria-label="Search" />
            </form>
          </ul>
        </div>
      </div>
    </nav>
  </template>

  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        windowWidth: window.innerWidth, // Defina windowWidth aqui
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
      handleResize() {
        this.windowWidth = window.innerWidth; // Atualiza windowWidth
      },
    },
  };
  </script>

    <style>
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
    .gab {
      padding: 0;
      width: 30%;
    }
    .ralao {
      height: auto;
      width: 45%;
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
    @media (max-width: 768px) {
      .wid2 {
        height: 2.5vw;
        width: 29%;
        margin-bottom: 1%;
      }
      
    
}
    
    </style>
    
