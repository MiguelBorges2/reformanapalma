<template>
     <div class="gh d-flex flex-column justify-content-center align-items-center ">
        <div class="gz bottom24 d-flex flex-column justify-content-center align-items-center ">
            <div class="w-100 gf2 d-flex flex-column">
                <p class="ga">Cuidado com as circuações</p>
                <p class="gw">O espaço que você tem nos corredores, entre os cômodos, e entre os móveis vai fazer toda a diferença no seu dia a dia. E, quando se trata de limitações quanto à mobilidade, prestar atenção nos espaços de passagem é muito importante!
                </p>
            </div>
            <div class="w-100 gf2 d-flex flex-column">
                <p class="ga">Cuidado com o pé direito</p>
                <p class="gw">Espaços muito baixos costumam ser mais quentes e desconfortáveis. Observe se você precisa mexer no telhado existente para manter adequada a altura do pé direito da ampliação.
                </p>
            </div>
            <div class="w-100 gf2  d-flex flex-column">
                <p class="ga">Contrate um profissional para investir melhor seus recursos</p>
                <p class="gw">Um profissional vai indicar a forma mais eficiente de aumentar sua casa, usando os espaços que você já tem, e evitando desperdícios de gastos na hora da reforma.
                </p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'sec313',
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
    .gf2 {
        border: 3px solid  #FFC676 ;
        border-radius: 30px;
        padding: 1%;

    }
    .bottom24 {
        margin-bottom: 20%;
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
          .gf2 {
            padding: 2%;
            border: 2px solid  #FFC676;
            border-radius: 20px !important;
          }
          .ga {
            font-size: 2.3vw;

          }
          .gw {
            font-size: 2vw;
          }
        
    }

</style>