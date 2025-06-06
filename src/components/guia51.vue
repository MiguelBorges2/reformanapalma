<template>
    <div class="w-100 d-flex justify-content-around alturatotal calo align-items-center gradient-bg">
        <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow border  btn-round">
            <
        </button>
        
        <!-- Comparando apenas o índice (controlador[0]) -->
        <Subguia51 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia51>
        <Subguia51 v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia51>
        <Subguia51 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia51> 
        <Subguia51 v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia51>     
        <Subguia51 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia51>
        <Subguia51 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia51>
        <Subguia51 v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia51>
        <Subguia51 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia51>
        <Subguia51 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia51> 
        <Subguia51 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia51>     
        <Subguia51 v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia51>
        <Subguia51 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia51>                       
        <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow  border btn-round ">
            >
        </button>
    </div>
    <sec511 v-if="controlador1[0] === 0"></sec511>
    <sec512 v-if="controlador1[0] === 1"></sec512>
    <sec513 v-if="controlador1[0] === 2"></sec513>
    <sec134 v-if="controlador1[0] === 3"></sec134>
    <sec345 v-if="controlador1[0] === 4"></sec345>
    <sec256 v-if="controlador1[0] === 5"></sec256>
    
    
</template>

<script>   
import sec511 from './sec511.vue';
import sec512 from './sec512.vue';
import sec513 from './sec513.vue';
import Subguia51 from './subguia51.vue';
import sec431 from './sec431.vue';
import final25 from  './final25.vue';
import sec412 from './sec412.vue';
import sec422 from './sec422.vue';
import sec134 from './sec134.vue';
import sec345 from './sec345.vue';
import sec256 from './sec256.vue';
import sec423 from './sec423.vue';
import sec432 from './sec432.vue';
import sec433 from './sec433.vue';


export default {
    name: 'Guia51',
    components: {
        Subguia51,
        sec431,
        final25,
        sec412,
        sec423,
        sec134,
        sec345,
        sec256,
        sec422,
        sec432,
        sec433,
        sec511,
        sec512,
        sec513
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