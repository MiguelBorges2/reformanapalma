<template>
    <div class="w-100 d-flex justify-content-between alturatotal calo align-items-center gradient-bg">
        <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        
        <!-- Comparando apenas o índice (controlador[0]) -->
        <Subguia57 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia57>
        <Subguia57 v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia57>
        <Subguia57 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia57> 
        <Subguia57 v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia57>     
        <Subguia57 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia57>
        <Subguia57 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia57>
        <Subguia57 v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia57>
        <Subguia57 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia57>
        <Subguia57 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia57> 
        <Subguia57 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia57>     
        <Subguia57 v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia57>
        <Subguia57 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia57>                       
        <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            >
        </button>
    </div>
    <sec571 v-if="controlador1[0] === 0"></sec571>
    <sec572 v-if="controlador1[0] === 1"></sec572>
    <sec573 v-if="controlador1[0] === 2"></sec573>
    <sec254 v-if="controlador1[0] === 3"></sec254>
    <sec575 v-if="controlador1[0] === 4"></sec575>
    <sec576 v-if="controlador1[0] === 5"></sec576>
    
    
</template>

<script>        
import Subguia57 from './subguia57.vue';
import sec571 from './sec571.vue';
import final25 from  './final25.vue';
import sec572 from './sec572.vue';
import sec422 from './sec422.vue';
import sec254 from './sec254.vue';
import sec575 from './sec575.vue';
import sec576 from './sec576.vue';
import sec423 from './sec423.vue';
import sec432 from './sec432.vue';
import sec573 from './sec573.vue';


export default {
    name: 'Guia57',
    components: {
        Subguia57,
        sec571,
        final25,
        sec572,
        sec423,
        sec254,
        sec575,
        sec576,
        sec422,
        sec432,
        sec573
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
