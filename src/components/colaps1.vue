<template>
      <div @click="ativa" id="ju" class=" d-flex flex-column border border-dark custi   ">
           <div id="primeira12" class="d-flex holt w-100" >
                <div v-if="toogle==false" class=" d-flex  justify-content-center  custi2 align-item-center">
                    <span class="yip34 colo4"> Consertar telhado</span>
                </div>  
                <div v-if="toogle === true" class=" d-flex  justify-content-center  custi2 align-item-center">
                    <span class="yip3 text-light"> Consertar telhado</span>
                </div>  
                <span id="serg" class="wid3  d-flex justify-content-center  color22 align-items-center btn-arrow"> &#709;</span>
            </div>
            <div v-if="toogle==true">
                    <div @click="teste12" class="d-flex hito w-100">
                        <div class=" d-flex  justify-content-center  custi2 align-item-center">
                            <span class="yip3 text-light"> Consertar goteiras</span>
                        </div>
                        <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
                    </div>
                    <div  @click="teste13" class="d-flex hito w-100">
                        <div class=" d-flex  justify-content-center  custi2 align-item-center">
                            <span class="yip3 text-light"> Acabar com infiltrações</span>
                        </div>
                        <span class="wid5  color22 d-flex justify-content-center align-items-center  btn-arrow">></span>
                    </div>
                </div>
            </div>
        
</template>

<script>
    import { useMainStore } from '../stores/mainStores';
    export default {
        name: 'Colaps1',
        data(){
            return{
                toogle: false
            };
        },
        methods: {
            ativa(){
              let elem2 = document.getElementById('serg');
              if(!elem2){
                console.log("bosta");
                return;
              }
              this.toogle = !this.toogle;
              if(this.toogle == true){
                  let elem = document.getElementById('serg'); 
                  elem.classList.add('wid35');
                  elem.classList.remove('wid3');
                  this.$nextTick(() => {
                        let elem = document.getElementById('ju'); 
                        elem.classList.add('color22');
                    });
                    let prima = document.getElementById('primeira12');
                     prima.classList.add("hito");
                    prima.classList.remove("holt");
              }
              else{
                  let elem = document.getElementById('serg'); 
                  elem.classList.add('wid3');
                  elem.classList.remove('wid35');
                  elem = document.getElementById('ju'); 
                  elem.classList.remove('color22');
                  let prima = document.getElementById('primeira12');
                  prima.classList.remove("hito");
                  prima.classList.add("holt");
              }
            },
            teste12(){
            console.log('foi gostoso');
            this.updateGlobalVariable(12);
          },
          teste13(){
            console.log('foi gostoso');
            this.updateGlobalVariable(13);
          },
          teste2(){
            console.log('foi gostoso');
            this.updateGlobalVariable(24);
          },
          teste(){
            console.log('foi');
            this.updateGlobalVariable(25);
          },
          teste3(){
            console.log('foi');
            this.updateGlobalVariable(23);
          },
          updateGlobalVariable(value) {
            const mainStore = useMainStore();
            mainStore.updateGlobalVariable(value);
            console.log('Global Variable Updated:', mainStore.globalVariable); // Adicione isso
            }
        },
    }
</script>
<style>

  .color1 {
    background-color:#749695 ;

  }
  .color22 {
    background-color: #394A55;
  }

  .custi {
        width: 75%;
        border-radius: 18px;
        margin: 1%;
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2); /* Sombra abaixo da div */
    }
   .wid3 {
    width: 10%;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  
   }
   .wid35 {
    width: 10%;
    border-top-right-radius: 16px;
   }
   .wid4 {
    width: 10%;


   }
   .yip34{
    font-size: 2.2vw;
   }
   .colo4{
        color: #4A4A48;
        font-weight: 500 !important;
   }
   .wid5 {
    width: 10%;
    border-bottom-right-radius: 16px;
   }
  .custi2 {
    width: 90%;
    border-radius: 16px 0 0 16px;
    
        }
        
    .btn-arrow {
        background: none;
        border: none;
        outline: none; /* Remove o contorno de foco */
        cursor: pointer;
        color: white; /* Mantém a cor do texto branca */
    }
    .gradient-bg3 {
            background:  #618ab6; /* Ajuste as cores conforme necessário */
            
        }
    

    @media (max-width: 460px){
      .custi {
        width: 90% !important;
      }
      .yip34 {
        font-size: 3.2vw !important;
      }
    }
</style>