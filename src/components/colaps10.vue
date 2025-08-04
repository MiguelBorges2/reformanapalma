<template>
    <div @click="ativa2"  id="ju10" class=" d-flex flex-column border border-dark custi">
         <div id="primeira" class="d-flex w-100 holt" >
              <div v-if="toogle2===false" class="d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 colo41"> Realizar manutenções</span>
              </div>
              <div v-else class="d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Realizar manutenções</span>
              </div>
              <span id="serg10" class="wid3  d-flex justify-content-center  color1 align-items-center btn-arrow"> &#709;</span>
            </div>
          <div @click="teste301()" v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Realizar cuidados periódicos</span>
              </div>
              <span class="wid5 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
      </div>
      
</template>

<script>
  import { useMainStore } from '../stores/mainStores';
  export default {
      name: 'Colaps10',
      data(){
          return{
              toogle2: false
          };
      },
      methods: {
          ativa2(){
              this.toogle2 = !this.toogle2;
              if(this.toogle2 == true){
                  let elem = document.getElementById('serg10'); 
                  elem.classList.add('wid35');
                  elem.classList.remove('wid3');
                  this.$nextTick(() => {
                        let elem = document.getElementById('ju10'); 
                        elem.classList.add('color1');
                    });
                    let prima = document.getElementById('primeira');
                     prima.classList.add("hito");
                    prima.classList.remove("holt");
              }
              else{
                  let elem = document.getElementById('serg10'); 
                  elem.classList.add('wid3');
                  elem.classList.remove('wid35');
                  elem = document.getElementById('ju10'); 
                  elem.classList.remove('color1');
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
        teste301(){
                this.$router.push('/realizar');
        },
        teste31(){
            this.updateGlobalVariable(94);
        }, 
        teste42(){
            this.updateGlobalVariable(92);
        },
        teste43(){
            this.updateGlobalVariable(93);
        }
      },
  }
</script>
