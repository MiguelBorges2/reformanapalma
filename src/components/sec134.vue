<template>
    <div class="w-100 d-flex flex-column justify-content-center align-items-center">
        <div class=" gf3 d-flex justify-content-center align-items-center">
            <img  class="imgr" src="@/assets/Vector.svg">
            <p class="gl">Você sabia que existe uma lei que assegura seu direito de receber gratuitamente assistência técnica para o projeto e construção de habitação social? É a Lei 11.888 de 2008. Informe-se junto à prefeitura e representantes políticos de seu município.</p>
        </div>
        <div class=" gf4 d-flex flex-column justify-content-center align-items-star">
            <p class="ga ">1º passo - Procure um profissional (Arquiteto e Urbanista)</p>
            <div class="w-100 d-flex justify-content-center align-items-center flex-column">
                <p class="gl2">Estes profissionais vão te ajudar na identificação do problema, planejamento e acompanhamento da reforma e serviços envolvidos.</p>
                <a href="https://www.caumg.gov.br/"><button class="but gl2">Ache um arquiteto</button></a>
            </div>
        </div>
        <div class=" gf4 d-flex flex-column justify-content-center align-items-star">
            <p class="ga ">2º passo - Procure um prestador de serviços técnicos especializados de sua confiança (pedreiro, calheiro, telhadista, marceneiro, serralheiro, encanador, gesseiro, e outros)</p>
            <div class="w-100 d-flex justify-content-start align-items-start flex-column">
                <p class="gl2">Este profissional vai te ajudar na execução do móvel planejado.</p>
            </div>
        </div>
        <p class="gl2 marrg">Para o projeto arquitetônico, é necessário a contratação de um profissional habilitado</p>
    </div>
</template>
<script>
    export default {
        name: 'sec134',
    }
</script>
<style>
.but{
    border-radius: 60px;
    background-color: #FFC676;
    border: none;
    font-weight: 400;
    padding: 1%;
    margin: 1%;
}
.imgr {
    margin: 1%;
    width: 13%;
    height: auto;
}
.marrg {
    margin-bottom: 30%;
}
.gf3 {
        margin-top: 8%;
        border: 3px solid  #568D8B ;
        border-radius: 30px;
        padding: 1%;
        margin-bottom: 2%;
        width: 90%;

    }
    .gf4 {
      
        border: 3px solid  #568D8B ;
        border-radius: 30px;
        padding: 1%;
        margin-bottom: 2%;
        width: 90%;

    }
    .gf5 {
      
      border: 3px solid  #568D8B ;
      border-radius: 30px;
      padding: 1%;
      margin-bottom: 8%;
      width: 90%;

    }
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
        margin-bottom: 5%;
    }
    .gl {
        color: #4A4A48;
        font-weight: 400 !important;
        font-size: 1.5vw ;
        margin-bottom: 0;
    }
    .gl2 {
        color: #4A4A48;
        font-weight: 400 !important;
        font-size: 1.5vw ;
        margin-top: 1%;
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
        margin-bottom: 3%;
    }
    @media (max-width: 768px) {
          .gf3 {
            padding: 2%;
            border: 2px solid #568D8B;;
            border-radius:20px;
          }
          .gf4 {
            padding: 2%;
            border: 2px solid #568D8B;;
            border-radius:20px;
          }
          .gf5 {
            padding: 2%;
            border: 2px solid #568D8B;;
            border-radius:20px;
          }
          .ga {
            font-size: 2.4vw;

          }
          .gl {
            font-size: 2.3vw;
          }
          .gl2 {
            font-size: 2.2vw;
          }
        
    }
</style>