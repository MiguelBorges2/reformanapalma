<template>
    <div class="w-100 d-flex justify-content-between alturatotal calo align-items-center gradient-bg">
        <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        
        <!-- Comparando apenas o índice (controlador[0]) -->
        <Subguia81 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia81>
        <Subguia81 v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia81>
        <Subguia81 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia81> 
        <Subguia81  v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia81>     
        <Subguia81 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia81>
        <Subguia81 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia81>
        <Subguia81 v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia81>
        <Subguia81 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia81>
        <Subguia81 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia81> 
        <Subguia81 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia81>     
        <Subguia81 v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia81>
        <Subguia81 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia81>                       
        <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            >
        </button>
    </div>
    <sec811 v-if="controlador1[0] === 0"></sec811>
    <sec252 v-if="controlador1[0] === 1"></sec252>
    <sec813 v-if="controlador1[0] === 2"></sec813>
    <sec134 v-if="controlador1[0] === 3"></sec134>
    <sec815 v-if="controlador1[0] === 4"></sec815>
    <sec816 v-if="controlador1[0] === 5"></sec816>
    
</template>

<script>        
import Subguia81 from './subguia81.vue';
import sec252 from './sec252.vue';
import final25 from  './final25.vue';
import sec592 from './sec592.vue';
import sec422 from './sec422.vue';
import sec134 from './sec134.vue';
import sec815 from './sec345.vue';
import sec816 from './sec256.vue';
import sec423 from './sec423.vue';
import sec432 from './sec432.vue';
import sec693 from './sec693.vue';
import sec811 from './sec811.vue';
import sec813 from './sec813.vue';

export default {
    name: 'Guia81',
    components: {
        Subguia81,
        sec811,
        final25,
        sec592,
        sec423,
        sec134,
        sec815,
        sec816,
        sec422,
        sec432,
        sec693,
        sec252,
        sec813
    },
    data() {
      return {
        controlador1: [0, 0], // [índice atual, direção da animação]
        windowSize: window.innerWidth,
      };
    },
    computed: {

    }, 
    mounted(){
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize); // Remove listener no destroy
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
        },
        handleResize(){
            this.windowsize = window.innerWidth;
        }
    }
};
</script>
