<template>
    <div id="ju2" class=" d-flex flex-column border border-dark custi   ">
         <div @click="ativa2"  class="d-flex holt w-100" >
              <div v-if="toogle2 === false"class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 colo441"> Estudar/trabalhar em espaço pequeno</span>
              </div>
              <div v-if="toogle2 === true"class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light  "> Estudar/trabalhar em espaço pequeno</span>
              </div>
              
              <span id="serg1" class="wid3 d-flex justify-content-center  color1 align-items-center btn-arrow"> &#709;</span>
          </div>
          <div @click="teste4" v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light "> Estudar/trabalhar em um quarta de casal</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste3" v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light "> Estudar/trabalhar em um quarto para uma pessoa</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste2" v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light "> Estudar/trabalhar em um quarto para duas pessoa</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
          <div @click="teste" v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Estudar/trabalhar em uma sala pequena </span>
                
              </div>
              <span  id="salapeq" class="wid5  color1 d-flex justify-content-center align-items-center  btn-arrow">></span>
          </div>
      </div>
      
</template>

<script>
  import { useMainStore } from '../stores/mainStores';
  export default {
      name: 'Colaps2',
      data(){
          return{
              toogle2: false
          };
      },
      methods: {
          ativa2(){
            console.log('Verificando serg2:', document.getElementById('serg1'));
            this.toogle2 = !this.toogle2;
            console.log('foi')
              if(this.toogle2 == true){
                  let elem = document.getElementById('serg1'); 
                  elem.classList.add('wid35');
                  elem.classList.remove('wid3');
                  this.$nextTick(() => {
                        let elem = document.getElementById('ju2'); 
                        elem.classList.add('color1');
                    });
               
              }
              else{
                  let elem = document.getElementById('serg1'); 
                  elem.classList.add('wid3');
                  elem.classList.remove('wid35');
                  elem = document.getElementById('ju2'); 
                  elem.classList.remove('color1');

              }
          },
          teste4(){
            console.log('foi gostoso');
            this.updateGlobalVariable(22);
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
  background-color:#749695  ;

}
.color22 {
  background-color: #394A55;
}

.custi {
      width: 75%;
      border-radius: 18px;
      margin: 1%;

  }
  .colo441{
        color: #4A4A48;
        font-weight: 500 !important;
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
 .wid5 {
  width: 10%;
  border-bottom-right-radius: 20px;
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

</style>