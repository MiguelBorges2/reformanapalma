<template>
    <div @click="ativa2"  id="ju8" class=" d-flex flex-column border border-dark custi">
         <div id="primeira2" class="d-flex w-100 holt" >
              <div v-if="toogle2 === false"class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 colo41"> adaptar casa para comércios e serviços</span>
              </div>
              <div v-else class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Adaptar casa para comércios e serviços</span>
              </div>
              <span id="serg7" class="wid3  d-flex justify-content-center  color1 align-items-center btn-arrow"> &#709;  </span>
          </div>
          <div v-if="toogle2 === true" class="d-flex holt  w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Adaptação da habitação para  geração de renda</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Construir cômodo para comércio e serviço</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Mobiliários versáteis para comércios e serviços</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
            <div v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center custi2 align-item-center">
                  <span class="yip3 text-light"> Personalização em fachadas com geração de renda</span>
              </div>
              <span class="wid4 color1 d-flex justify-content-center align-items-center btn-arrow"> ></span>
            </div>
          <div v-if="toogle2 === true" class="d-flex holt w-100">
              <div class=" d-flex  justify-content-center  custi2 align-item-center">
                  <span class="yip3 text-light"> Tomadas, interruptores e iluminação para trabalho</span>
                
              </div>
              <span class="wid5  color1 d-flex justify-content-center align-items-center  btn-arrow">></span>
          </div>
      </div>
      
</template>

<script>
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
      },
  }
</script>
<style>
.color1 {
  background-color:#749695 !important ;

}
.color22 {
  background-color: #394A55 !important;
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
 .colo41{
        color: #4A4A48;
        font-weight: 500 !important;
   }
.custi2 {
  width: 90%;
  border-radius: 16px 0 0 16px;

      }
.hito {
    border-radius: 16px;
}
.hito:hover {
    border: 1px, solid white;
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