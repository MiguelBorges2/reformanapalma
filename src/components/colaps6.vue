<template>
    <div @click="ativa2"  id="ju6" class=" d-flex flex-column border border-dark custi   ">
         <div id="primeira42" class="d-flex holt w-100" >
              <div v-if="toogle2 === false" class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 colo42"> Ventilar e iluminar minha casa</span>
              </div>
              <div v-else class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Ventilar e iluminar minha casa</span>
              </div>
              <span id="serg5" class="wid3  d-flex justify-content-center  color1 align-items-center btn-arrow"> &#709;</span>
          </div>
          <div @click="teste34()" v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Criar condições para ventilação e iluminação</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste35()" v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Criar pátios internos com jardins</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            
          <div @click="teste23()" v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Iluminação artificial </span>
                
              </div>
              <span class="wid5  color1 d-flex justify-content-center align-items-center  btn-arrow">></span>
          </div>
      </div>
      
</template>

<script>
  import { useMainStore } from '../stores/mainStores';
  export default {
      name: 'Colaps6',
      data(){
          return{
              toogle2: false    
          };
      },
      methods: {
          ativa2(){
              this.toogle2 = !this.toogle2;
              if(this.toogle2 == true){
                  let elem = document.getElementById('serg5'); 
                  elem.classList.add('wid35');
                  elem.classList.remove('wid3');
                  this.$nextTick(() => {
                        let elem = document.getElementById('ju6'); 
                        elem.classList.add('color1');
                    });

                }
              else{
                  let elem = document.getElementById('serg5'); 
                  elem.classList.add('wid3');
                  elem.classList.remove('wid35');
                  elem = document.getElementById('ju6'); 
                  elem.classList.remove('color1');
               }
            },
            updateGlobalVariable(value) {
                const mainStore = useMainStore();
                mainStore.updateGlobalVariable(value);
                console.log('Global Variable Updated:', mainStore.globalVariable); // Adicione isso
            },  
          teste23(){
                this.$router.push('/iluminacao2');
            },
            teste34(){
                this.$router.push('/iluminacao12');
            },
            teste35(){
                this.$router.push('/criarpatios3');
            }
      },
    }

</script>
