<template>
    <div class="w-100 d-flex justify-content-around alturatotal calo align-items-center gradient-bg">
            <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow border  btn-round  ">
                <
            </button>
            
            <!-- Comparando apenas o índice (controlador[0]) -->
            <Subguia22 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia22>
            <Subguia22 v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia22>
            <Subguia22 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia22> 
            <Subguia22 v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia22>     
            <Subguia22 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia22>
            <Subguia22 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia22>
            <Subguia22 v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia22>
            <Subguia22 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia22>
            <Subguia22 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia22> 
            <Subguia22 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia22>     
            <Subguia22 v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia22>
            <Subguia22 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia22>                       
            <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow  border btn-round ">
                >
            </button>
        </div>
        <sec221 v-if="controlador1[0] === 0"></sec221>
        <sec252 v-if="controlador1[0] === 1"></sec252>
        <sec243 v-if="controlador1[0] === 2"></sec243>
        <sec254 v-if="controlador1[0] === 3"></sec254>
        <sec255 v-if="controlador1[0] === 4"></sec255>
        <sec256 v-if="controlador1[0] === 5"></sec256>
    </template>
    <script>
    import Subguia23 from './subguia23.vue';
    import sec251 from './sec251.vue';
    import final25 from  './final25.vue';
    import sec252 from './sec252.vue';
    import sec253 from './sec253.vue';
    import sec254 from './sec254.vue';
    import sec255 from './sec255.vue';
    import sec256 from './sec256.vue';
    import sec231 from './sec231.vue';
    import sec243 from './sec243.vue';
    import Subguia22 from './subguia22.vue';
import Sec221 from './sec221.vue';
    export default {
        name: 'guia22',
        components: {
            Subguia22,
            sec251,
            final25,
            sec252,
            sec253,
            sec254,
            sec255,
            sec256,
            sec231,
            sec243,
            Sec221
    
        },
        data() {
          return {
            controlador1: [0, 0], // [índice atual, direção da animação]
          };
        },
        methods: {
            ShiftRight25() {
                console.log('oi')
                if(this.controlador1[0] < 5){
                    this.controlador1[0] += 1;
                    this.controlador1[1] = 0;
                }
                console.log(this.controlador1)
            },
            ShiftLeft25() {
                if (this.controlador1[0] > 0) {
                    this.controlador1[0] -= 1;
                    this.controlador1[1] = 1;
                }
            }
        }
    }
    </script>
    <style>
    
    </style>
    