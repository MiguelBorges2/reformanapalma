<template>
    <div @click="ativa2"  id="ju9" class=" d-flex flex-column border border-dark custi">
         <div id="primeira" class="d-flex w-100 holt" >
              <div v-if="toogle2===false" class="d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 colo4"> Economizar energia</span>
              </div>
              <div v-else class="d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Economizar energia</span>
              </div>
              <span id="serg8" class="wid3  d-flex justify-content-center  color22 align-items-center btn-arrow"> &#709;</span>
            </div>
          <div v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Equipamentos</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Ar-condicionando</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div v-if="toogle2 === true" class="d-flex hito w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light">Iluminação artificial</span>
              </div>
              <span class="wid4 color22 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
          <div v-if="toogle2 === true" class="d-flex hito   w-100">
              <div class=" d-flex  justify-content-center custi2 align-item-center">
                  <span class="yip3 text-light">Aquecimento Solar de Água</span>
                
              </div>
              <span class="wid5  color22 d-flex justify-content-center align-items-center  btn-arrow">></span>
          </div>
      </div>
      
</template>

<script>
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
      },
  }
</script>
<style>
.color1 {
  background-color:#749695 ;

}
.colo4{
        color: #4A4A48;
        font-weight: 500 !important;
   }
.color22 {
  background-color: #394A55 !important;
}

.custi {
      width: 75%;
      border-radius: 18px;
      margin: 1.5%;
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
 .holt:hover {
    border: 0.5px solid black;
 }
 .holt{
    border-radius: 16px;
    
 }
 .wid5 {
  width: 10%;
  border-bottom-right-radius: 16px;
 }
.custi2 {
  width: 90%;
  border-radius: 16px 0 0 16px;
  padding: 2.5%;
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
      @media (max-width: 768px) {
            .custi2 {
                padding: 4%;
            }
            .custi {
                margin: 3%;
            }
            .yip3{
                font-size: 2.5vw !important;
            }
      }

</style>