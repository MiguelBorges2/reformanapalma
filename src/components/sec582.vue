<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
        <div class="gz d-flex flex-column justify-content-center ">
            <p class="gt hj">Primeiro reflita e anote quais são suas necessidades</p>
            
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">materiais</p>
                <p class="gw">Mangueiras de jardim, escovas de cerdas macias, esponjas, vassouras de cerdas suaves, detergente suave e balde. </p>
            </div>
            <div class="d-flex w-100 justify-content-around align-items-center">
                <img class="tamamp022" src="@/assets/group1153.svg" alt="Logo2">
            </div>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Equipamentos</p>
                <p class="gw">Cinto de segurança tipo paraquedista com talabarte e trava-quedas para proteção contra quedas, capacete com jugular, calçados antiderrapantes, luvas resistentes (nitrílicas ou de couro), óculos de proteção contra respingos, máscara PFF2 ou PFF3 para poeiras e produtos químicos, e roupas com proteção UV para exposição ao sol. É essencial usar um ponto de ancoragem seguro e, quando possível, uma linha de vida, além de seguir as normas NR-6 (EPIs) e NR-35 (trabalho em altura) para garantir segurança total.</p>
            </div>
            <div class="d-flex w-100 justify-content-center align-items-center">
                <img class="tamamp022" src="@/assets/group1155.svg" alt="Logo2"> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sec582',
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
        margin-bottom: 3%;

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
    .tamamp022 {
        width: 90%;
        height: auto;  
        margin-right: 3%;
        margin-bottom: 3%;
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