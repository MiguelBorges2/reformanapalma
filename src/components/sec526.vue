<template>
    <div class="gh d-flex flex-column justify-content-center align-items-center ">
        <div class="gz marrg d-flex flex-column justify-content-center ">
            <p class="gta hj">Para mais informações:</p>
            <div class="w-100 gf d-flex flex-column">
                <p class="ga">Normas reguladoras</p>
                <p class="gw">SILVA, C. F.; GÓES, T. (Orgs.) Dicas bioclimáticas para um projeto mais sustentável. Brasília, DF: LaSUS FAU: Editora Universidade de Brasilia, 2022.</p>
                <p class="gw">KWOK, A. G; GRONDZIK, W. T. Manual de arquitetura ecológica. Porto Alegre: Bookman, 2013. </p>
                <p class="gw">OLIVEIRA, Melina Nunes. Eficiência energética como atributo da resiliência na habitação de interesse social: avaliação e proposição de estratégias para reformas e intervenções. 2022. 216 f. Dissertação (Mestrado em Arquitetura e Urbanismo) - Universidade Federal de Uberlândia, Uberlândia, 2022.  </p>
                <p class="gw">NBR 16690: Norma brasileira para sistemas fotovoltaicos conectados à rede elétrica. </p>
                <p class="gw">NBR 16149: Norma para painéis fotovoltaicos. </p>
                <p class="gw">NBR 5410: Instalações elétricas de baixa tensão.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sec526',
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