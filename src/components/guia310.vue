<template>
    <div class="w-100 d-flex justify-content-between alturatotal calo align-items-center gradient-bg">
        <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        
        <!-- Comparando apenas o índice (controlador[0]) -->
        <Subguia310 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia310>
        <Subguia310  v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia310>
        <Subguia310 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia310> 
        <Subguia310 v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia310>     
        <Subguia310 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia310>
        <Subguia310 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia310>
        <Subguia310  v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia310>
        <Subguia310 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia310>
        <Subguia310 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia310> 
        <Subguia310 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia310>     
        <Subguia310  v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia310>
        <Subguia310 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia310>                       
        <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            >
        </button>
    </div>
    <sec3101 v-if="controlador1[0] === 0"></sec3101>
    <sec3102 v-if="controlador1[0] === 1"></sec3102>
    <sec3103 v-if="controlador1[0] === 2"></sec3103>
    <sec134 v-if="controlador1[0] === 3"></sec134>
    <sec3105 v-if="controlador1[0] === 4"></sec3105>
    <sec3106 v-if="controlador1[0] === 5"></sec3106>
    
    
</template>

<script>        
import Subguia310 from './subguia310.vue';
import sec3101 from './sec3101.vue';
import sec3102 from './sec3102.vue';
import sec3105 from './sec3105.vue';
import sec3106 from './sec3106.vue';
import sec3103 from './sec3103.vue';
import final25 from  './final25.vue';
import sec252 from './sec252.vue';
import sec313 from './sec313.vue';
import sec134 from './sec134.vue';
import sec315 from './sec315.vue';
import sec316 from './sec316.vue'
export default {
    name: 'guia310',
    components: {
        Subguia310,
        sec3101,
        sec3102,
        final25,
        sec252,
        sec313,
        sec134,
        sec315,
        sec316,
        sec3103,
        sec3105,
        sec3106
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
