<template>
    <div class="w-100 d-flex justify-content-around alturatotal calo align-items-center gradient-bg">
        <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow border  btn-round">
            <
        </button>
        
        <!-- Comparando apenas o índice (controlador[0]) -->
        <Subguia55 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia55>
        <Subguia55 v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia55>
        <Subguia55 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia55> 
        <Subguia55 v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia55>     
        <Subguia55 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia55>
        <Subguia55 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia55>
        <Subguia55 v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia55>
        <Subguia55 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia55>
        <Subguia55 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia55> 
        <Subguia55 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia55>     
        <Subguia55 v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia55>
        <Subguia55 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia55>                       
        <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow  border btn-round ">
            >
        </button>
    </div>
    <sec551 v-if="controlador1[0] === 0"></sec551>
    <sec552 v-if="controlador1[0] === 1"></sec552>
    <sec553 v-if="controlador1[0] === 2"></sec553>
    <sec134 v-if="controlador1[0] === 3"></sec134>
    <sec555 v-if="controlador1[0] === 4"></sec555>
    <sec556 v-if="controlador1[0] === 5"></sec556>
    
    
</template>

<script>        
import Subguia55 from './subguia55.vue';
import sec551 from './sec551.vue';
import final25 from  './final25.vue';
import sec552 from './sec552.vue';
import sec422 from './sec422.vue';
import sec134 from './sec134.vue';
import sec555 from './sec555.vue';
import sec256 from './sec256.vue';
import sec423 from './sec423.vue';
import sec432 from './sec432.vue';
import sec556 from './sec556.vue';


export default {
    name: 'Guia55',
    components: {
        Subguia55,
        sec551,
        final25,
        sec552,
        sec423,
        sec134,
        sec555,
        sec256,
        sec422,
        sec432,
        sec556
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