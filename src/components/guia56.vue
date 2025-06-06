<template>
    <div class="w-100 d-flex justify-content-around alturatotal calo align-items-center gradient-bg">
        <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow border  btn-round">
            <
        </button>
        
        <!-- Comparando apenas o índice (controlador[0]) -->
        <Subguia56 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia56>
        <Subguia56 v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia56>
        <Subguia56 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia56> 
        <Subguia56 v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia56>     
        <Subguia56 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia56>
        <Subguia56 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia56>
        <Subguia56 v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia56>
        <Subguia56 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia56>
        <Subguia56 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia56> 
        <Subguia56 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia56>     
        <Subguia56 v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia56>
        <Subguia56 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia56>                       
        <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow  border btn-round ">
            >
        </button>
    </div>
    <sec561 v-if="controlador1[0] === 0"></sec561>
    <sec562 v-if="controlador1[0] === 1"></sec562>
    <sec563 v-if="controlador1[0] === 2"></sec563>
    <sec134 v-if="controlador1[0] === 3"></sec134>
    <sec565 v-if="controlador1[0] === 4"></sec565>
    <sec566 v-if="controlador1[0] === 5"></sec566>
    
    
</template>

<script>        
import Subguia56 from './subguia56.vue';
import sec561 from './sec561.vue';
import final25 from  './final25.vue';
import sec562 from './sec562.vue';
import sec422 from './sec422.vue';
import sec134 from './sec134.vue';
import sec565 from './sec565.vue';
import sec566 from './sec566.vue';
import sec423 from './sec423.vue';
import sec432 from './sec432.vue';
import sec563 from './sec563.vue';


export default {
    name: 'Guia56',
    components: {
        Subguia56,
        sec561,
        final25,
        sec562,
        sec423,
        sec134,
        sec565,
        sec566,
        sec422,
        sec432,
        sec563
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