<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
        <div class="gz marrg d-flex flex-column justify-content-center ">
            <p class="gta hj">Para mais informações:</p>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Normas reguladoras</p>
                <p class="gw">ELI, L. G. O impacto do padrão de uso no desempenho térmico de edificações unifamiliares no Brasil. Dissertação (mestrado) – Universidade Federal de Santa Catarina, Centro Tecnológico, Programa de Pós-Graduação em Engenharia Civil, Florianópolis, 2020.</p>
                <p class="gw">ELIAS-TROSTMANN, K.; CASSEL, D.; BURKE, L.; RANGWALA, L. Mais forte do que a tempestade: aplicando a avaliação de resiliência comunitária urbana aos eventos climáticos extremos. Documento de Trabalho. Washington, DC: World Resources Institute. Disponível online em https://www.wri.org/publication/stronger-than-the-storm. Acesso em fev. 2020.  </p>
                <p class="gw">EUROPEAN ENVIRONMENT AGENCY. Achieving energy efficiency through behaviour change: what does it take? LU: Publications Office, 2013. Disponível em: https://data.europa.eu/doi/10.2800/49941. Acesso em: 29 jun. 2023.  </p>
                <p class="gw">GIANFRATE, V.; PICCARDO, C.; LONGO, D.; GIACHETTA, A. Rethinking social housing: Behavioural patterns and technological innovations. Sustainable Cities and Society, v. 33, p. 102–112, ago. 2017. https://doi.org/10.1016/j.scs.2017.05.015</p>
                <p class="gw">SOARES, N.; BASTOS, J.; PEREIRA, L. D.; SOARES, A.; AMARAL, A. R.; ASADI, E.; RODRIGUES, E.; LAMAS, F. B.; MONTEIRO, H.; LOPES, M. A. R.; GASPAR, A. R. A review on current advances in the energy and environmental performance of buildings towards a more sustainable built environment. Renewable and Sustainable Energy Reviews, v. 77, p. 845–860, set. 2017. https://doi.org/10.1016/j.rser.2017.04.027.</p>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        name: 'sec546',
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