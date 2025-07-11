<template>
      <div @click="ativa" id="ju" class=" d-flex flex-column border border-dark custi   ">
           <div id="primeira12" class="d-flex holt w-100" >
                <div v-if="toogle==false" class=" d-flex  justify-content-center  custi2 align-item-center">
                    <span class="yip34 colo4"> Consertar telhado</span>
                </div>  
                <div v-if="toogle === true" class=" d-flex  justify-content-center  custi2 align-item-center">
                    <span class="yip34 text-light"> Consertar telhado</span>
                </div>  
                <span id="serg" class="wid3  d-flex justify-content-center  color22 align-items-center btn-arrow"> &#709;</span>
            </div>
            <div v-if="toogle==true">
                    <div @click="teste12" class="d-flex hito w-100">
                        <div class=" d-flex  justify-content-center  custi2 align-item-center">
                            <span class="yip34 text-light"> Consertar goteiras</span>
                        </div>
                        <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
                    </div>
                    <div  @click="teste13" class="d-flex hito w-100">
                        <div class=" d-flex  justify-content-center  custi2 align-item-center">
                            <span class="yip34 text-light"> Acabar com infiltrações</span>
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
