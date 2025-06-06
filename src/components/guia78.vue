<template>
    <div class="w-100 d-flex justify-content-around alturatotal calo align-items-center gradient-bg">
        <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow border  btn-round">
            <
        </button>
        
        <!-- Comparando apenas o índice (controlador[0]) -->
        <Subguia78 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia78>
        <Subguia78 v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia78>
        <Subguia78 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia78> 
        <Subguia78 v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia78>     
        <Subguia78 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia78>
        <Subguia78 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia78>
        <Subguia78 v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia78>
        <Subguia78 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia78>
        <Subguia78 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia78> 
        <Subguia78 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia78>     
        <Subguia78 v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia78>
        <Subguia78 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia78>                       
        <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow  border btn-round ">
            >
        </button>
    </div>
    <sec431 v-if="controlador1[0] === 0"></sec431>
    <sec432 v-if="controlador1[0] === 1"></sec432>
    <sec433 v-if="controlador1[0] === 2"></sec433>
    <sec134 v-if="controlador1[0] === 3"></sec134>
    <sec545 v-if="controlador1[0] === 4"></sec545>
    <sec546 v-if="controlador1[0] === 5"></sec546>
    
    
</template>

<script>        
import Subguia78 from './subguia78.vue';
import sec431 from './sec431.vue';
import final25 from  './final25.vue';
import sec412 from './sec412.vue';
import sec432 from './sec432.vue';
import sec134 from './sec134.vue';
import sec545 from './sec545.vue';
import sec546 from './sec546.vue';
import sec433 from './sec433.vue';

export default {
    name: 'Guia78',
    components: {
        Subguia78,
        sec431,
        final25,
        sec412,
        sec433,
        sec134,
        sec545,
        sec546,
        sec432
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