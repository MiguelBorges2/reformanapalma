<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
        <div class="gz d-flex flex-column justify-content-center ">
            <p class="gt hj">Primeiro reflita e anote quais são suas necessidades</p>
            
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">materiais</p>
                <p class="gw">Materiais para assentamento de novas janelas e aberturas altas para ventilação, e construção de paredes, lajes e forros, como argamassa, cimento, brita, areia, tintas, revestimentos e utensílios para seu preparo e aplicação.</p>
            </div>
            <div class="d-flex w-100 justify-content-around align-items-center">
                <img class="tamamp022" src="@/assets/group686.svg" alt="Logo2">
            </div>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Ferramentas</p>
                <p class="gw">Lâmina de serra segueta, tesoura, alicate, estilete, maçarico e outras próprias para preparo e assentamento de concreto - como baldes, masseiras, colher de pedreiro, espátula, esponja, sarrafo, etc.</p>
            </div>  
            <div class="d-flex w-100 justify-content-center align-items-center">
                <img class="tamamp022" src="@/assets/group682.svg" alt="Logo2"> 
            </div>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Equipamentos</p>
                <p class="gw">Equipamentos de proteção individual, como capacetes, luvas, óculos, calçados antiderrapantes, cordas, etc.</p>
            </div>
            <div class="d-flex w-100 justify-content-center align-items-center">
                <img class="tamamp022" src="@/assets/group1129.svg" alt="Logo2"> 
            </div>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Novas Peças</p>
                <p class="gw">Novas peças como forros de PVC (ou outro material) e janelas.</p>
            </div>  
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sec512',
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