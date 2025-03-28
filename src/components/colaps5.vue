<template>
    <div @click="ativa2" id="ju5"  class=" d-flex flex-column border border-dark custi   ">
         <div  id="primeira5" class="d-flex holt w-100" >
              <div v-if="toogle2 === false" class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 colo43"> Refrescar minha casa</span>
              </div>
              <div v-else class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Refrescar minha casa</span>
              </div>
              <span id="serg4" class="wid3  d-flex justify-content-center  color22 align-items-center btn-arrow"> &#709;</span>
          </div>
          <div @click="teste14()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center custi2 align-item-center">
                  <span class="yip34 text-light"> Escolher materias e técnicas construtivas</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div> 
            <div @click="teste15()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Gerar energia</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste16()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light">Posicionar e sombrear aberturas</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste17()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light">Adaptar a temperatura e umidade</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste18()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light">Criar condições para iluminação e ventilação</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste19()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center custi2 align-item-center">
                  <span class="yip34 text-light">Construir novo banheiro</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div  @click="teste20()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light">Horta</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste21()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light">Manutenção</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste33()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light">Criar pátios internos com jardim</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
          <div @click="teste22()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center   custi2 align-item-center">
                  <span class="yip34 text-light"> Ar-condicionado</span>
                
              </div>
              <span class="wid5  color22 d-flex justify-content-center align-items-center  btn-arrow">></span>
          </div>
      </div>
      
</template>

<script>
  import { useMainStore } from '../stores/mainStores';
  export default {
      name: 'Colaps5',
      data(){
          return{
              toogle2: false
          };
      },
      methods: {
          ativa2(){
            this.toogle2 = !this.toogle2;
              if(this.toogle2 == true){
                  let elem = document.getElementById('serg4'); 
                  elem.classList.add('wid35');
                  elem.classList.remove('wid3');
                  this.$nextTick(() => {
                        let elem = document.getElementById('ju5'); 
                        elem.classList.add('color22');
                    });
                    let prima = document.getElementById('primeira5');
                    prima.classList.add("hito");
                    prima.classList.remove("holt");
              }
              else{
                  let elem = document.getElementById('serg4'); 
                  elem.classList.add('wid3');
                  elem.classList.remove('wid35');
                  elem = document.getElementById('ju5'); 
                  elem.classList.remove('color22');
                  let prima = document.getElementById('primeira5');
                  prima.classList.remove("hito");
                  prima.classList.add("holt");
              }
          },
          updateGlobalVariable(value) {
            const mainStore = useMainStore();
            mainStore.updateGlobalVariable(value);
            console.log('Global Variable Updated:', mainStore.globalVariable); // Adicione isso
            },  
          teste14(){
            this.updateGlobalVariable(51);
            },
          teste15(){
            this.updateGlobalVariable(52);
          },
          teste16(){
            this.updateGlobalVariable(53);
          },
          teste17(){
            this.updateGlobalVariable(54);
          },
          teste18(){
            this.updateGlobalVariable(55);
          },
          teste19(){
            this.updateGlobalVariable(56);
          },
          teste20(){
            this.updateGlobalVariable(57);
          },
          teste21(){
            this.updateGlobalVariable(58);
          },
          teste22(){
            this.updateGlobalVariable(59);
          },
          teste33(){
            this.updateGlobalVariable(510);
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
  }
 .wid3 {
  width: 10%;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

 }
 .colo43{
        color: #4A4A48;
        font-weight: 500 !important;
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