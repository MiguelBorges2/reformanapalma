<template>
    <div class="gh2 d-flex flex-column justify-content-center align-items-center ">
            <div class="gz gf2 d-flex flex-column">
                <p class="ga">Dê caimento nos pisos das ampliações</p>
                <p class="gw">Ao fazer ampliações, cuide para que o novo contrapiso seja feito considerando o caimento necessário para cada ambiente.</p>
            </div>
            <div class="gz gf2 d-flex flex-column">
                <p class="ga">Cuidado com a manta asfáltica e o calor</p>
                <p class="gw">Por envolver serviços em altura, existe o risco de escorregamento e quedas e, por isso, quem for consertar as goteiras deve utilizar equipamentos de proteção individual como capacetes, óculos, luvas e calçados que não escorreguem. Prenda a escada ao telhado e coloque algo em sua base para fixá-la, tenha alguém para te ajudar com isso.</p>
            </div>
            <div class="gz gf2 d-flex flex-column">
                <p class="ga">Limpe a parede antes de fazer o reboco</p>
                <p class="gw">Antes de fazer o acabamento de uma parede/muro “no osso”, é necessário remover de sua superfície qualquer poeira, mofo ou sujeira acumulados.</p>
            </div>
            <div class="gz gf2 d-flex flex-column">
                <p class="ga">Não faça reboco sob sol muito forte ou após chuvas</p>
                <p class="gw">No momento em que for fazer o acabamento, a parede/muro não deve estar sob sol forte, nem muito úmida.</p>
            </div>
            <div class="gz gf2 d-flex flex-column">
                <p class="ga">Proteja as mãos, olhos, nariz e boca</p>
                <p class="gw">Utilize luvas, máscaras e óculos de proteção quando manusear produtos químicos, cimento, argamassas, rejuntes e outros materiais para reboco.</p>
            </div>
            <div class="gz gf2 d-flex flex-column">
                <p class="ga">Cuidado com vazamentos e choques elétricos</p>
                <p class="gw">Quando for perfurar paredes, desligue o registro geral de água e a chave geral da energia, para, em caso de furos em locais errados, não ocorrerem alagamentos ou curtos-circuitos.</p>
            </div>
            <div class="gz gf2 bottom d-flex flex-column">
                <p class="ga">Proteja as mãos, olhos, nariz e boca</p>
                <p class="gw">Utilize luvas, máscaras e óculos de proteção quando manusear produtos químicos, cimento, argamassas, rejuntes e outros materiais para reboco.</p>
            </div>
    </div>
</template>
<script>
    export default {
        name: 'sec123',
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