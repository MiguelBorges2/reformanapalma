<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
        <div class="gz d-flex flex-column justify-content-center ">
            <p class="gt hj">Primeiro reflita e anote quais são suas necessidades</p>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">materiais</p>
                <p class="gw">Uma trena, tradicional ou eletrónica, ou fita métrica para conferir as dimensões disponíveis (tanto do cômodo, quanto dos móveis existentes que você deseja manter)</p>
            </div>
            <div class="d-flex w-100 justify-content-around align-items-center">
                <img class="tamamp01" src="@/assets/Trena comum.svg" alt="Logo2">
                <img class="tamamp01" src="@/assets/Trena eletrônica.svg" alt="Logo2">
                <img class="tamamp01"  src="@/assets/Fita métrica.svg" alt="Logo2">
            </div>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Como medir cômodo ou móvel?</p>
                <p class="gw">Para medir um cômodo ou móvel, utilize uma trena ou fita métrica e comece pelas dimensões básicas: comprimento, largura e altura. Meça de uma extremidade a outra, mantendo a trena nivelada. No caso de cômodos, inclua portas, janelas e nichos; para móveis, considere também a profundidade. Anote todas as medidas com precisão para facilitar ajustes futuros.</p>
            </div>
            <div class="d-flex w-100 justify-content-center align-items-center">
                <img class="tamamp02" src="@/assets/Medir comodo 2 1.svg" alt="Logo2">
                <img class="tamamp02" src="@/assets/Medir mobiliário 1.svg" alt="Logo2">
                
            </div>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Atenção!</p>
                <p class="gw">Sempre se atente às dimensões: Observe a posição de pontos elétricos e das portas e janelas (para não os obstruir).</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sec252',
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
    .gf {
        border: 3px solid #749695;
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
          .gf {
            padding: 2%;
            border: 2px solid #749695;
            border-radius:20px;
          }
          .ga {
            font-size: 2.3vw;

          }
          .gw {
            font-size: 2vw;
          }
        
    }

    
</style>