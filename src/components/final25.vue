<template>
      <div class="d-flex flex-column align-items-center spain justify-content-around">
         <p class="text-light lm zabata">Essas informações foram uteis?</p>
         <div class="d-flex justify-content-center align-items-center zaba">
            <img class="tamamp" src="@/assets/satisfeito 1.svg">
            <img class="tamamp" src="@/assets/insatisfeito 1.svg">
         </div>
         <p class="text-light zabata">Antes de continuar, Você teve algum outro problema? </p>
         <p class="text-light zabata2  "> Clique no botão abaixo e preencha o formulário para ajudar a melhorar os conteúdos da plataforma</p>
         <button class="hmp3 tip colo4 nolans p-2 pad2 ml marko25 ">Tive outro problema</button>
      </div>
</template>
<script>
 export default {
    name: 'final25',
    
 };
</script>
<style>
.spain{

   background: linear-gradient(to top, #749695, #394A55); 
   border-radius: 60px 60px 0px 0px;
}

.zabata{
   font-size: 2vw;
   font-weight: 400;
   margin-bottom: 1%;
}
.ml {
      margin: 3% !important;
   }
.zabata2{
   font-size: 1.4vw;
   font-weight: 400;
   margin: 0;
}
.tamamp{
   width: 18%;
   height: auto;
   margin: 3%;
}
.zaba {
   width: 55%;
}
.lm{
      margin-top: 4%;
   }
@media(max-width: 1200px){
   .zabata{
      font-size: 2.5vw;
   }
   .zabata2{
      font-size: 1.8vw;
   }
   .tamamp{
      width: 22%;
   }
   .spain{
      border-radius: 40px 40px 0px 0px;
   }
   
}

@media(max-width: 600px){
   .zabata{
      font-size: 2.5vw;
   }
   .zabata2{
      font-size: 1.9vw;
   }

   .spain{
      border-radius: 40px 40px 0px 0px;
   }
   .tamamp {
      width: 24%;
   }
   
}
</style>