<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
        <div class="gz marrg d-flex flex-column justify-content-center ">
            <p class="gta hj">Para mais informações:</p>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Normas reguladoras</p>
                <p class="gw">ANSI/ASHRAE Standard 55/2017 - Thermal Environmental Conditions for Human Occupancy.</p>
                <p class="gw">EEDUS. Apostila dos Diálogos sobre Eficiência Energética (DEE) por zonas bioclimáticas. Projeto EEDUS, 2022. Disponível em: https://labeee.ufsc.br/sites/default/files/documents/APOSTILA_DialagoEE_ZB.pdf</p>
                <p class="gw">LAMBERTS, R.; CANDIDO, C.; DE DEAR, R. DE VECCHI, R. Towards a Brazilian standard on termal comfort. Research report. Universidade Federal de Santa Catarina, The University of Sidney, 2013. </p>
                <p class="gw">LEI COMPLEMENTAR Nº 524/2011 – CÓDIGO MUNICIPAL DE OBRAS DO MUNICÍPIO DE UBERLÂNDIA E DE SEUS DISTRITOS. </p>
                <p class="gw">NBR1557/2013 – Parte 1: Requisitos gerais. </p>
                <p class="gw">NBR1557/2013 – Parte 4: Sistemas de Vedações Verticais Internas e Externas. </p>
                <p class="gw">NBR1557/2013 – Parte 5: Requisitos para o sistema de coberturas.</p>
                <p class="gw">NBR16401/2019 – Instalações de ar-condicionado – Sistemas centrais e unitários Parte 2: Parâmetros de conforto térmico. </p>
                <p class="gw">NBR15220-2/2005 – Métodos de cálculo da transmitância térmica, da capacidade térmica, do atraso térmico e do fator solar de elementos e componentes de edificações.</p>
                <p class="gw">NBR15220-3/2005 – Desempenho térmico de edificações Parte 3: Zoneamento bioclimático brasileiro e diretrizes construtivas para habitações unifamiliares de interesse social.</p>
                <p class="gw">PROCEL EDIFICA. Regulamento Técnico da Qualidade para o Nível de Eficiência Energética de Edificações Residenciais (RTQ-R). 2012, 96 p. 
VILLA, S. B.; BORTOLI, K. C. R.; OLIVEIRA, L. V.; MIRANDA, N. L.; BARBOSA, G. S.; QUEIROZ, J. G.; SILVA, F. O.; DE PAULA, G. F. V.; SILVA, V. G.; VASCONCELOS, P. B. Relatório Final - Estratégias "na palma da mão" para uma casa saudável e resiliente. Universidade Federal de Uberlândia, 2022.</p>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'sec346',
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