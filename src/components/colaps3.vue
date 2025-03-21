<template>
    <div @click="ativa2"   id="ju3" class=" d-flex flex-column border border-dark custi ">
         <div id="primeira222" class="d-flex holt w-100" >
              <div v-if="toogle2 === false" class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 colo44"> Aumentar minha casa</span>
              </div>
              <div v-if="toogle2 === true" class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Aumentar minha casa</span>
              </div>
              <span id="serg22" class="wid3  d-flex justify-content-center  color22 align-items-center btn-arrow"> &#709;</span>
          </div>
          <div @click="teste5()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light "> Aumentar cômodo ou construir novo cômodo</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste6()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center custi2 align-item-center">
                  <span class="yip3 text-light"> criar patios internos com jardim</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste7()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div  class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light">Aumentar tomadas e interruptores</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste8()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light">Escolher materias e técnicas construtivas</span>
              </div>    
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
          <div @click="teste9()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Escolher cor das paredes externas   </span>
                
              </div>
              <span class="wid5  color22 d-flex justify-content-center align-items-center  btn-arrow">></span>
          </div>
      </div>
      
</template>

<script>
  import { useMainStore } from '../stores/mainStores';
  export default {
      name: 'Colaps3',
      data(){
          return{
              toogle2: false
          };
      },
      methods: {
          ativa2(){
            console.log('Verificando serg3:', document.getElementById('serg22'));
            this.toogle2 = !this.toogle2;
            console.log('Verificando serg3 dnovo:', document.getElementById('serg22'));
            this.$nextTick(() => {
              let elem = document.getElementById('serg22'); 
              console.log('Verificando serg ultimo', elem);
              if(this.toogle2 == true){
                 
                  elem.classList.add('wid35');
                  elem.classList.remove('wid3');
                  this.$nextTick(() => {
                        let elem = document.getElementById('ju3'); 
                        elem.classList.add('color22');
                    });
                    let prima = document.getElementById('primeira222');
                     prima.classList.add("hito");
                    prima.classList.remove("holt");
              }
              else{
                  console.log('desgraça', elem);
                  elem.classList.add('wid3');
                  elem.classList.remove('wid35');
                  elem = document.getElementById('ju3'); 
                  elem.classList.remove('color22');
                  let prima = document.getElementById('primeira222');
                  prima.classList.remove("hito");
                  prima.classList.add("holt");
              }
             }
            )
            
          },
          teste5(){
            console.log('foi');
            this.updateGlobalVariable(31);
          },
          updateGlobalVariable(value) {
            const mainStore = useMainStore();
            mainStore.updateGlobalVariable(value);
            console.log('Global Variable Updated:', mainStore.globalVariable); // Adicione isso
            },
          teste6(){
            this.updateGlobalVariable(32);
          },
          teste7(){
            this.updateGlobalVariable(33);
          },
          teste8(){
            this.updateGlobalVariable(34);
          },
          teste9(){
            this.updateGlobalVariable(35);
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
.colo44{
        color: #4A4A48;
        font-weight: 500 !important;
   }

.custi {
      width: 75%;
      border-radius: 18px;
      margin: 1%;
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

</style>