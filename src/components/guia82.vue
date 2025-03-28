<template>
    <div class="w-100 d-flex justify-content-around alturatotal calo align-items-center gradient-bg">
        <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow border  btn-round">
            <
        </button>
        
        <!-- Comparando apenas o índice (controlador[0]) -->
        <Subguia82 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia82>
        <Subguia82 v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia82>
        <Subguia82 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia82> 
        <Subguia82  v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia82>     
        <Subguia82 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia82>
        <Subguia82 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia82>
        <Subguia82 v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia82>
        <Subguia82 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia82>
        <Subguia82 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia82> 
        <Subguia82 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia82>     
        <Subguia82 v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia82>
        <Subguia82 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia82>                       
        <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow  border btn-round ">
            >
        </button>
    </div>
    <sec821 v-if="controlador1[0] === 0"></sec821>
    <sec822 v-if="controlador1[0] === 1"></sec822>
    <sec823 v-if="controlador1[0] === 2"></sec823>
    <sec254 v-if="controlador1[0] === 3"></sec254>
    <sec345 v-if="controlador1[0] === 4"></sec345>
    <sec256 v-if="controlador1[0] === 5"></sec256>
    
</template>

<script>        
import Subguia82 from './subguia82.vue';
import sec252 from './sec252.vue';
import sec822 from './sec822.vue';
import final25 from  './final25.vue';
import sec592 from './sec592.vue';
import sec422 from './sec422.vue';
import sec254 from './sec254.vue';
import sec345 from './sec345.vue';
import sec256 from './sec256.vue';
import sec423 from './sec423.vue';
import sec432 from './sec432.vue';
import sec693 from './sec693.vue';
import sec821 from './sec821.vue';
import sec823 from './sec823.vue';

export default {
    name: 'Guia82',
    components: {
        Subguia82,
        sec821,
        final25,
        sec592,
        sec423,
        sec254,
        sec345,
        sec256,
        sec422,
        sec432,
        sec693,
        sec252,
        sec823,
        sec822
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
<style>

</style>