<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
        <div class="gz marrg d-flex flex-column justify-content-center ">
            <p class="gta hj">Para mais informações:</p>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Normas reguladoras</p>
                <p class="gw">NR-35: Trabalhar em altura requer treinamento específico para uso de EPIs e realização das tarefas de forma segura.</p>
                <p class="gw">ABNT NBR 16325-2: Sistema fixo para ancoragem e movimentação em segurança.</p>
                <p class="gw">ABNT NBR 15836: Para evitar quedas durante o trabalho em altura. </p>
                <p class="gw">https://www.decorfacil.com/limpeza-de-telhado/#:~:text=Preven%C3%A7%C3%A3o%20de%20infiltra%C3%A7%C3%A3o%20e%20umidade,telhas%20mal%20posicionadas%20ou%20encaixadas  </p>
                <p class="gw">https://www.portalsolar.com.br/limpeza-de-placas-solares </p>
                <p class="gw">https://cyz.ind.br/como-limpar-paredes-textura-ou-grafiato/ </p>
            </div>
        </div>
    </div>

    
</template>
<script>
    export default {
        name: 'sec576',
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
    .gta {
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
            font-size: 2.5vw;

          }
          .gw {
            font-size: 2.2vw !important;
          }
          .gta {
            font-size: 2.2vw !important;
          }
        
    }

    
</style>