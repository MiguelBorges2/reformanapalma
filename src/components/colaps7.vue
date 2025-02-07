<template>
    <div @click="ativa2" id="ju7"  class=" d-flex flex-column border border-dark custi   ">
         <div  id="primeira7" class="d-flex w-100 holt" >
              <div v-if="toogle2 === false " class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 colo49"> Adaptar minha casa para doenças</span>
              </div>
              <div v-else class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Adaptar minha casa para doenças contagiosas</span>
              </div>
              <span id="serg6" class="wid3  d-flex justify-content-center  color22 align-items-center btn-arrow"> &#709;</span>
          </div>
          <div v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Mobilário para sapatos</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center custi2 align-item-center">
                  <span class="yip3 text-light"> Preparar a sala para pessoa saudável</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div v-if="toogle2 === true" class="d-flex hito  w-100">
              <div class=" d-flex  justify-content-center custi2 align-item-center">
                  <span class="yip3 text-light">Estudar/trabalhar em um quarto de casal</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center custi2 align-item-center">
                  <span class="yip3 text-light">Estudar/trabalhar em um quarto para uma pessoa</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light">Estudar/trabalhar em uma sala pequena</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light">Diminuir umidade</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light">Acabar com manchas de umidade</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
          <div v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Adaptar a temperatura e umidade</span>
              </div>
              <span class="wid5  color22 d-flex justify-content-center align-items-center  btn-arrow">></span>
          </div>
      </div>
      
</template>

<script>
  export default {
      name: 'Colaps7',
      data(){
          return{
              toogle2: false
          };
      },
      methods: {
          ativa2(){
              this.toogle2 = !this.toogle2;
              if(this.toogle2 == true){
                  let elem = document.getElementById('serg6'); 
                  elem.classList.add('wid35');
                  elem.classList.remove('wid3');
                  this.$nextTick(() => {
                        let elem = document.getElementById('ju7'); 
                        elem.classList.add('color22');
                    });
                    let prima = document.getElementById('primeira7');
                    prima.classList.add("hito");
                    prima.classList.remove("holt");
              }
              else{
                  let elem = document.getElementById('serg6'); 
                  elem.classList.add('wid3');
                  elem.classList.remove('wid35');
                  elem = document.getElementById('ju7'); 
                  elem.classList.remove('color22');
                  let prima = document.getElementById('primeira7');
                  prima.classList.remove("hito");
                  prima.classList.add("holt");
              }
          },
      },
  }
</script>
<style>
.color1 {
  background-color:#749695 ;

}
.color22 {
  background-color: #394A55 !important;
}
.colo49{
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