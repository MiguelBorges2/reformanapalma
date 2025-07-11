<template>
    <div @click="ativa2"  id="ju8" class=" d-flex flex-column border border-dark custi">
         <div id="primeira2" class="d-flex w-100 holt" >
              <div v-if="toogle2 === false"class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 colo41"> Adaptar casa para comércios e serviços</span>
              </div>
              <div v-else class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Adaptar casa para comércios e serviços</span>
              </div>
              <span id="serg7" class="wid3  d-flex justify-content-center  color1 align-items-center btn-arrow"> &#709;  </span>
          </div>
          <div  @click="teste25()"  v-if="toogle2 === true" class="d-flex holt  w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Adaptação da habitação para  geração de renda</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste26()" v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Construir cômodo para comércio e serviço</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste27()" v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Mobiliários versáteis para comércios e serviços</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste28()" v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center custi2 align-item-center">
                  <span class="yip34 text-light"> Personalização em fachadas com geração de renda</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
          <div @click="teste29()" v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Tomadas, interruptores e iluminação para trabalho</span>
                
              </div>
              <span class="wid5  color1 d-flex justify-content-center align-items-center  btn-arrow">></span>
          </div>
      </div>
      
</template>

<script>
  import { useMainStore } from '../stores/mainStores';
  export default {
    
      name: 'Colaps8',
      data(){
          return{
              toogle2: false
          };
      },
      methods: {
        ativa2(){
              this.toogle2 = !this.toogle2;
              if(this.toogle2 == true){
                  let elem = document.getElementById('serg7'); 
                  elem.classList.add('wid35');
                  elem.classList.remove('wid3');
                  this.$nextTick(() => {
                        let elem = document.getElementById('ju8'); 
                        elem.classList.add('color1');
                    });
                 
              }
              else{
                  let elem = document.getElementById('serg7'); 
                  elem.classList.add('wid3');
                  elem.classList.remove('wid35');
                  elem = document.getElementById('ju8'); 
                  elem.classList.remove('color1');
                  
              }
          },
        updateGlobalVariable(value) {
                const mainStore = useMainStore();
                mainStore.updateGlobalVariable(value);
                console.log('Global Variable Updated:', mainStore.globalVariable); // Adicione isso
            },  
        teste25(){
                this.updateGlobalVariable(81);
        },
        teste26(){
            this.updateGlobalVariable(82);
        },
        teste27(){
            this.updateGlobalVariable(83);
        },
        teste28(){
            this.updateGlobalVariable(84);
        },
        teste29(){
            this.updateGlobalVariable(85);
        }
      },
  }
</script>
