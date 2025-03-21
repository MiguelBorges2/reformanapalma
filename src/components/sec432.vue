<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
        <div class="gz d-flex flex-column justify-content-center ">
            <p class="gt hj">Primeiro reflita e anote quais são suas necessidades</p>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Crie uma rotina</p>
                <p class="gw text-align">Crie uma rotina de busca de informações sobre o clima (utilizando aplicativos e/ou observando o céu) e abertura de janelas para renovação/refrescamento do ar e iluminação.</p>
            </div>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">materiais</p>
                <p class="gw text-align">Próprio smartphone, bacias, toalhas, umidificadores, desumidificadores comprados em mercado, e termômetros de parede.</p>
            </div>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Reformas maiores podem ser necessárias</p>
                <p class="gw">Para tornar as janelas mais adequadas. Veja mais sobre isso na sessão Criar condições para ventilação e iluminação</p>
            </div>  
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sec432',
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