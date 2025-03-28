<template>
    <div @click="ativa2"  id="ju4" class=" d-flex flex-column border border-dark custi  ">
         <div   class="d-flex holt  w-100" >
              <div v-if="toogle2 === false" class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 colo47"> Acabar com a umidade</span>
              </div>
              <div v-else class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Acabar com a umidade</span>
              </div>
              <span id="serg3" class="wid3  d-flex justify-content-center  color1 align-items-center btn-arrow"> &#709; </span>
          </div>
          <div @click="teste10()" v-if="toogle2 === true" class="d-flex holt  w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Diminuir umidade</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div @click="teste11()" v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Acabar com manchas de umidade</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            
          <div @click="teste12()" v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip34 text-light"> Adaptar a temperatura e umidade </span>
                
              </div>
              <span class="wid5  color1 d-flex justify-content-center align-items-center  btn-arrow">></span>
          </div>
      </div>
      
</template>

<script>
import { useMainStore } from '../stores/mainStores';
  export default {
      name: 'Colaps4',
      data(){
          return{
              toogle2: false
          };
      },
      methods: {
          ativa2(){
            this.toogle2 = !this.toogle2;
              if(this.toogle2 == true){
                  let elem = document.getElementById('serg3'); 
                  elem.classList.add('wid35');
                  elem.classList.remove('wid3');
                  this.$nextTick(() => {
                        let elem = document.getElementById('ju4'); 
                        elem.classList.add('color1');
                    });
    
              }
              else{
                  let elem = document.getElementById('serg3'); 
                  elem.classList.add('wid3');
                  elem.classList.remove('wid35');
                  elem = document.getElementById('ju4'); 
                  elem.classList.remove('color1');
                  
              }
          },
          updateGlobalVariable(value) {
            const mainStore = useMainStore();
            mainStore.updateGlobalVariable(value);
            console.log('Global Variable Updated:', mainStore.globalVariable); // Adicione isso
            },
          teste10(){
            this.updateGlobalVariable(41);
            },
          teste11(){  
            this.updateGlobalVariable(42);
          },
          teste12(){
            this.updateGlobalVariable(43);
          }
      },
  }
</script>
<style>
.color1 {
  background-color:#749695 !important ;

}
.color22 {
  background-color: #394A55;
}

.custi {
      width: 75%;
      border-radius: 16px;
      margin: 1%;
  }
 .wid3 {
  width: 10%;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

 }
 .colo47{
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