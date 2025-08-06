<template>
    <div class="w-100 d-flex justify-content-between alturatotal calo align-items-center gradient-bg">
        <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        
        <!-- Comparando apenas o índice (controlador[0]) -->
        <Subguia41 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia41>
        <Subguia41 v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia41>
        <Subguia41 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia41> 
        <Subguia41 v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia41>     
        <Subguia41 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia41>
        <Subguia41 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia41>
        <Subguia41 v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia41>
        <Subguia41 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia41>
        <Subguia41 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia41> 
        <Subguia41 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia41>     
        <Subguia41 v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia41>
        <Subguia41 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia41>                       
        <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            >
        </button>
    </div>
    <sec411 v-if="controlador1[0] === 0"></sec411>
    <sec412 v-if="controlador1[0] === 1"></sec412>
    <sec413 v-if="controlador1[0] === 2"></sec413>
    <sec254 v-if="controlador1[0] === 3"></sec254>
    <sec415 v-if="controlador1[0] === 4"></sec415>
    <sec416 v-if="controlador1[0] === 5"></sec416>
    
    
</template>

<script>        
import Subguia41 from './subguia41.vue';
import sec411 from './sec411.vue';
import final25 from  './final25.vue';
import sec412 from './sec412.vue';
import sec353 from './sec353.vue';
import sec254 from './sec254.vue';
import sec415 from './sec415.vue';
import sec416 from './sec416.vue';
import sec413 from './sec413.vue';

export default {
    name: 'Guia41',
    components: {
        Subguia41,
        sec411,
        final25,
        sec412,
        sec413,
        sec254,
        sec415,
        sec416
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
