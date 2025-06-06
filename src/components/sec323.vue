<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
       <div class="gz bottom24 d-flex flex-column justify-content-center align-items-center ">
           <div class="w-100 gf2 d-flex flex-column">
               <p class="ga">Cuidados ao tamanho do vão.</p>
               <p class="gw">Ao tamanho do vão para que não seja menor que 2,0 metros e ao sistema construtivo adequado.
               </p>
           </div>
           <div class="w-100 gf2 d-flex flex-column">
               <p class="ga">Cuidado com a escolha da cor</p>
               <p class="gw">A cor externa adequada ao clima da região.
               </p>
           </div>
           <div class="w-100 gf2  d-flex flex-column">
               <p class="ga">Cuidados com a manutenção.</p>
               <p class="gw">A porta para manutenção.
               </p>
           </div>
           <div class="w-100 gf2  d-flex flex-column">
               <p class="ga">Cuidado com o modelo de janela.</p>
               <p class="gw">Ao modelo mais apropriado para a janela.
               </p>
           </div>
           <div class="w-100 gf2  d-flex flex-column">
               <p class="ga">Verifique o sistema estrutural.</p>
               <p class="gw">Verifique o sistema estrutural para somente depois realizar a intervenção. Contrate um profissional qualificado para verificar o projeto e calcular um reforço que não comprometa a segurança da edificação. Dê preferência para o sistema construtivo de viga, pilar e laje, pois este sistema permite modificação a longo prazo.
               </p>
           </div>
           <div class="w-100 gf2  d-flex flex-column">
               <p class="ga">Contrate um profissional para investir melhor seus recursos.</p>
               <p class="gw">Contrate um profissional para fazer os serviços necessários, otimizando seus gastos e expectativas.
               </p>
           </div>
       </div>
   </div>
</template>
<script>

export default {
   name: 'sec313',
}

</script>
<style>
   .gh {
       margin-top: 8%;
       margin-bottom: 23%;
       width: 100%;
   }
   .gz {
       width: 90%;
   }
   .gt {
       color: #4A4A48;
       font-weight: 400 !important;
       font-size: 1.8vw !important;
   }
   .ga {
       color: #568D8B;
       font-weight: 500 !important;
       font-size: 1.8vw ;
       margin-bottom:0;
   }
   .gf2 {
       border: 3px solid  #FFC676 ;
       border-radius: 30px;
       padding: 1%;

   }
   .bottom24 {
       margin-bottom: 20%;
   }
   .gw {
       color: #4A4A48;
       font-weight: 400 !important;
       font-size: 1.6vw ;
       margin-bottom: 0;
   }
   .tamamp01 {
           width: 20%;
           height: auto;  
         }
   .tamamp02 {
       width: 30%;
       height: auto;  
       margin-right: 3%;
   }
   .hj {
       margin-bottom: 1%;
   }
   @media (max-width: 768px) {
         .gf2 {
           padding: 2%;
           border: 2px solid  #FFC676;
           border-radius: 20px !important;
         }
         .ga {
           font-size: 2.3vw;

         }
         .gw {
           font-size: 2vw;
         }
       
   }

</style>