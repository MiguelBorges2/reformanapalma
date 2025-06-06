<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
        <div class="gz d-flex flex-column justify-content-center ">
            <div class="w-100 gf23 marrg d-flex flex-column">
                <p class="ga">Importância para saúde</p>
                <p class="gw">O excesso de calor dentro de casa pode favorecer o agravamento e/ou surgimento de problemas de saúde, principalmente respiratórios e cardiovasculares, comprometendo especialmente a saúde de idosos, crianças e imunossuprimidos. A existência de sistema de geração de energia elétrica confere autonomia energética à edificação, tornando mais econômico o uso de ar-condicionado/ventiladores durante picos de calor.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sec525',
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
    .gf23 {
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
          .gf23 {
            padding: 2%;
            border: 2px solid  #FFC676;
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