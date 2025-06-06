<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
        <div class="gz marrg d-flex flex-column justify-content-center ">
            <p class="gta hj">Para mais informações:</p>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Normas reguladoras</p>
                <p class="gw">NBR_16401 - Instalações de ar condicionado - sistemas centrais e unitários</p>
                <p class="gw"> NBR 16655 - Instalação de sistemas residenciais de ar-condicionado — Split  e compacto</p>
                <p class="gw">ASHRAE Handbook (American Society of Heating, Refrigerating, and Air-Conditioning Engineers) </p>
                <p class="gw">https://agenciabrasil.ebc.com.br/economia/noticia/2023-01/aparelhos-de-ar-condicionado-mudam-forma-de-medir-consumo-de-energia  </p>
                <p class="gw">https://gauchazh.clicrbs.com.br/saude/noticia/2022/01/uso-do-ar-condicionado-pode-causar-e-agravar-problemas-respiratorios-confira-os-cuidados-necessarios-ckyssflgq002r01885tp4a3uc.html </p>
                <p class="gw">https://www.produttivo.com.br/blog/guia-da-instalacao-de-ar-condicionado/</p>
        
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'sec596',
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