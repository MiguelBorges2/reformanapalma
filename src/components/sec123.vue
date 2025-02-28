<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
            <div class="gz gf2 d-flex flex-column">
                <p class="ga">Limpe a superfície antes de fazer reparos</p>
                <p class="gw">Antes de aplicar qualquer produto nas telhas, calhas e rufos, é necessário remover de sua superfície qualquer poeira, mofo ou sujeira acumulados. Verifique as recomendações de cada fabricante quanto à melhor forma de higienização.
                </p>
            </div>
            <div class="gz gf2 d-flex flex-column">
                <p class="ga">Cuidado com a manta asfáltica e o calor</p>
                <p class="gw">Por envolver serviços em altura, existe o risco de escorregamento e quedas e, por isso, quem for consertar as goteiras deve utilizar equipamentos de proteção individual como capacetes, óculos, luvas e calçados que não escorreguem. Prenda a escada ao telhado e coloque algo em sua base para fixá-la, tenha alguém para te ajudar com isso.</p>
            </div>
            <div class="gz gf2 d-flex flex-column">
                <p class="ga">Não realize reparos no telhado em dias úmidos</p>
                <p class="gw">Durante o período de chuvas, a umidade pode comprometer a qualidade do serviço feito. Então garanta que o telhado esteja seco e o tempo esteja estável, sem chuvas, antes de fazer quaisquer serviços.</p>
            </div>
            <div class="gz gf2 d-flex flex-column">
                <p class="ga">Evite andar demais sobre as telhas</p>
                <p class="gw">Quando fizer os reparos, ande o mínimo possível sobre as telhas e com cuidado, para não causar mais danos.</p>
            </div>
            <div class="gz gf2 bottom d-flex flex-column">
                <p class="ga">Contrate um profissional para investir melhor seus recursos</p>
                <p class="gw">Se as goteiras insistirem em voltar, entenda que será necessário contratar um profissional para fazer os reparos, otimizando seus gastos e expectativas.</p>
            </div>
    </div>
</template>
<script>
    export default {
        name: 'sec123',
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
        margin-bottom: 3%;
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