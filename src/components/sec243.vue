<template>
    <div class="gh2 d-flex flex-column justify-content-center align-items-center ">
            <div class="gz gf2 d-flex flex-column">
                <p class="ga">Cuidado para não entortar as peças</p>
                <p class="gw">Realize a instalação com qualidade para não entortar peças como dobradiças.</p>
            </div>
            <div class="gz gf2 d-flex flex-column">
                <p class="ga">Confira as dimensões disponíveis</p>
                <p class="gw">Para escolher o tipo de cama mais adequado, seja com articulação horizontal ou vertical, confira as dimensões e a posição das portas e janelas do quarto.</p>
            </div>
            <div class="gz gf2 bottom d-flex flex-column">
                <p class="ga">Confira as dimensões do colchão</p>
                <p class="gw">Caso opte por utilizar o colchão já disponível, confira as dimensões do colchão antes de fazer ou adquirir a nova cama.</p>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'sec243',
    }
</script>

<style>
    .gh2 {
        margin-top: 8%;
        margin-bottom: 50%;
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