<template>
    <div @click="ativa2"  id="ju9" class=" d-flex flex-column border border-dark custi">
         <div id="primeira" class="d-flex w-100 holt" >
              <div v-if="toogle2===false" class="d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 colo4"> Economizar energia</span>
              </div>
              <div v-else class="d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Economizar energia</span>
              </div>
              <span id="serg8" class="wid3  d-flex justify-content-center  color22 align-items-center btn-arrow"> &#709;</span>
            </div>
          <div @click="teste30()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Equipamentos</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste42()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Ar-condicionando</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste43()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light">Iluminação artificial</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
          <div @click="teste31()" v-if="toogle2 === true" class="d-flex hito   w-100">
              <div class=" d-flex  justify-content-center custi2 align-item-center">
                  <span class="yip34 text-light">Aquecimento Solar de Água</span>
                
              </div>
              <span class="wid5  color22 d-flex justify-content-center align-items-center  btn-arrow">></span>
          </div>
      </div>
      
</template>

<script>
  import { useMainStore } from '../stores/mainStores';
  export default {
      name: 'Colaps9',
      data(){
          return{
              toogle2: false
          };
      },
      methods: {
          ativa2(){
              this.toogle2 = !this.toogle2;
              if(this.toogle2 == true){
                  let elem = document.getElementById('serg8'); 
                  elem.classList.add('wid35');
                  elem.classList.remove('wid3');
                  this.$nextTick(() => {
                        let elem = document.getElementById('ju9'); 
                        elem.classList.add('color22');
                    });
                    let prima = document.getElementById('primeira');
                     prima.classList.add("hito");
                    prima.classList.remove("holt");
              }
              else{
                  let elem = document.getElementById('serg8'); 
                  elem.classList.add('wid3');
                  elem.classList.remove('wid35');
                  elem = document.getElementById('ju9'); 
                  elem.classList.remove('color22');
                  let prima = document.getElementById('primeira');
                  prima.classList.remove("hito");
                  prima.classList.add("holt");
              }
          },
          updateGlobalVariable(value) {
                const mainStore = useMainStore();
                mainStore.updateGlobalVariable(value);
                console.log('Global Variable Updated:', mainStore.globalVariable); // Adicione isso
            },  
        teste30(){
                this.$router.push('/equip');
        },
        teste31(){
            this.$router.push('/aquecimento');
        }, 
        teste42(){
            this.$router.push('/arcondas2');
        },
        teste43(){
            this.$router.push('/iluminacao21');
        }
      },
  }
</script>
