<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
        <div class="gz marrg d-flex flex-column justify-content-center ">
            <p class="gta hj">Para mais informações:</p>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Normas reguladoras</p>
                <p class="gw">CORBELLA, O.; CORNER, V. Manual de arquitetura bioclimática tropical. Rio de Janeiro: Revan, 2017.</p>
                <p class="gw">LAMBERTS, R.; CANDIDO, C.; DE DEAR, R. DE VECCHI, R. Towards a Brazilian standard on termal comfort. Research report. Universidade Federal de Santa Catarina, The University of Sidney, 2013.  </p>
                <p class="gw">NBR15220-3/2005 - Desempenho térmico de edificações Parte 3: Zoneamento bioclimático brasileiro e diretrizes construtivas para habitações unifamiliares de interesse social;  </p>
                <p class="gw">RTQ-R/2012 - Regulamento Técnico da Qualidade para o Nível de Eficiência Energética em Edificações Residenciais.  </p>
                <p class="gw">VILLA, S. B.; BORTOLI, K. C. R.; OLIVEIRA, L. V.; MIRANDA, N. L.; BARBOSA, G. S.; QUEIROZ, J. G.; SILVA, F. O.; DE PAULA, G. F. V.; SILVA, V. G.; VASCONCELOS, P. B. Relatório Final - Estratégias "na palma da mão" para uma casa saudável e resiliente. Universidade Federal de Uberlândia, 2022.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sec536',
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