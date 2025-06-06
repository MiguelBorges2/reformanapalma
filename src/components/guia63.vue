<template>
    <div class="w-100 d-flex justify-content-around alturatotal calo align-items-center gradient-bg">
        <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow border  btn-round">
            <
        </button>
        
        <!-- Comparando apenas o índice (controlador[0]) -->
        <Subguia63 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia63>
        <Subguia63 v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia63>
        <Subguia63 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia63> 
        <Subguia63 v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia63>     
        <Subguia63 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia63>
        <Subguia63 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia63>
        <Subguia63 v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia63>
        <Subguia63 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia63>
        <Subguia63 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia63> 
        <Subguia63 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia63>     
        <Subguia63 v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia63>
        <Subguia63 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia63>                       
        <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow  border btn-round ">
            >
        </button>
    </div>
    <sec631 v-if="controlador1[0] === 0"></sec631>
    <sec252 v-if="controlador1[0] === 1"></sec252>
    <sec693 v-if="controlador1[0] === 2"></sec693>
    <sec134 v-if="controlador1[0] === 3"></sec134>
    <sec635 v-if="controlador1[0] === 4"></sec635>
    <sec636 v-if="controlador1[0] === 5"></sec636>
    
    
</template>

<script>        
import Subguia63 from './subguia63.vue';
import sec252 from './sec252.vue';
import final25 from  './final25.vue';
import sec592 from './sec592.vue';
import sec422 from './sec422.vue';
import sec134 from './sec134.vue';
import sec635 from './sec635.vue';
import sec636 from './sec636.vue';
import sec423 from './sec423.vue';
import sec432 from './sec432.vue';
import sec693 from './sec693.vue';
import sec631 from './sec631.vue';

export default {
    name: 'Guia63',
    components: {
        Subguia63,
        sec631,
        final25,
        sec592,
        sec423,
        sec134,
        sec635,
        sec636,
        sec422,
        sec432,
        sec693,
        sec252
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