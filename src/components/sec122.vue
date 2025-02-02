<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
        <div class="gz d-flex flex-column justify-content-center ">
            <p class="gt hj">Primeiro reflita e anote quais são suas necessidades</p>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">materiais</p>
                <p class="gw">Materiais calafetantes (de vedação) como fitas aluminizadas, selantes sintéticos e silicones, bem como aplicadores e novas peças de calhas, rufos, telhas, pregos, etc.</p>
            </div>
            <div class="d-flex w-100 justify-content-around flex-column align-items-center">
                <img class="tamamp012" src="@/assets/Group 684.svg" alt="Logo2">
                <img class="tamamp0123" src="@/assets/6 1.svg" alt="Logo2">
            </div>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Ferramentas</p>
                <p class="gw">Martelo, estilete, tesoura, maçarico e outras, bem como escadas.</p>
            </div>
            <div class="d-flex w-100 justify-content-center align-items-center">
                <img class="tamamp012" src="@/assets/Group 675.svg" alt="Logo2">
            </div>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Equipamentos</p>
                <p class="gw">Equipamentos de proteção individual, como capacetes, luvas, óculos, calçados antiderrapantes, cordas, etc.</p>
            </div>
            <div class="d-flex w-100 justify-content-center align-items-center">
                <img class="tamamp012" src="@/assets/Group 1129.svg" alt="Logo2">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sec122',
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
    .tamamp012 {
            width: 92%;
            height: auto;  
            margin: 2%;
          }
          .tamamp0123 {
            width: 23%;
            height: auto;  
            margin: 2%;
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