<template>
<div class="w-100 d-flex justify-content-between alturatotal calo align-items-center gradient-bg">
        <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            <
        </button>
        
        <!-- Comparando apenas o índice (controlador[0]) -->
        <Subguia24 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia24>
        <Subguia24 v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia24>
        <Subguia24 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia24> 
        <Subguia24 v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia24>     
        <Subguia24 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia24>
        <Subguia24 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia24>
        <Subguia24 v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia24>
        <Subguia24 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia24>
        <Subguia24 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia24> 
        <Subguia24 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia24>     
        <Subguia24 v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia24>
        <Subguia24 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia24>                       
        <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            >
        </button>
    </div>
    <sec241 v-if="controlador1[0] === 0"></sec241>
    <sec252 v-if="controlador1[0] === 1"></sec252>
    <sec243 v-if="controlador1[0] === 2"></sec243>
    <sec254 v-if="controlador1[0] === 3"></sec254>
    <sec255 v-if="controlador1[0] === 4"></sec255>
    <sec256 v-if="controlador1[0] === 5"></sec256>
</template>
<script>
import Subguia24 from './subguia24.vue';
import sec251 from './sec251.vue';
import final25 from  './final25.vue';
import sec252 from './sec252.vue';
import sec253 from './sec253.vue';
import sec254 from './sec254.vue';
import sec255 from './sec255.vue';
import sec256 from './sec256.vue';
import sec241 from './sec241.vue';
import sec243 from './sec243.vue';
export default {
    name: 'guia24',
    components: {
        Subguia24,
        sec251,
        final25,
        sec252,
        sec253,
        sec254,
        sec255,
        sec256,
        sec241,
        sec243

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

