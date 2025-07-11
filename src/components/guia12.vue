<template>
    <div class="w-100 d-flex justify-content-around alturatotal calo align-items-center gradient-bg">
            <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow border  btn-round  ">
                <
            </button>
            
            <!-- Comparando apenas o índice (controlador[0]) -->
            <Subguia12 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia12>
            <Subguia12 v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia12>
            <Subguia12 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia12> 
            <Subguia12 v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia12>     
            <Subguia12 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia12>
            <Subguia12 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia12>
            <Subguia12 v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia12>
            <Subguia12 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia12>
            <Subguia12 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia12> 
            <Subguia12 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia12>     
            <Subguia12 v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia12>
            <Subguia12 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia12>                       
            <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow  border btn-round ">
                >
            </button>
        </div>
        <sec121 v-if="controlador1[0] === 0"></sec121>
        <sec122 v-if="controlador1[0] === 1"></sec122>
        <sec123 v-if="controlador1[0] === 2"></sec123>
        <sec134 v-if="controlador1[0] === 3"></sec134>
        <sec125 v-if="controlador1[0] === 4"></sec125>
        <sec256 v-if="controlador1[0] === 5"></sec256>
    </template>
    <script>
    import sec122 from './sec122.vue';
    import sec251 from './sec251.vue';
    import final25 from  './final25.vue';
    import sec252 from './sec252.vue';
    import sec253 from './sec253.vue';
    import sec134 from './sec134.vue';
    import sec125 from './sec125.vue';
    import sec256 from './sec256.vue';
    import sec231 from './sec231.vue';
    import sec243 from './sec243.vue';
    import Subguia12 from './subguia12.vue';
    import Sec121 from './sec121.vue';
    import sec123 from './sec123.vue';
    export default {
        name: 'guia12',
        components: {
            Subguia12,
            sec251,
            final25,
            sec252,
            sec253,
            sec134,
            sec125,
            sec256,
            sec231,
            sec243,
            Sec121,
            sec122,
            sec123
    
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
    