<template>
    <div class="w-100 d-flex justify-content-around alturatotal calo align-items-center gradient-bg">
        <button @click="ShiftLeft25()" id="shiftLe25" class="btn-hover-yellow border  btn-round">
            <
        </button>
        
        <!-- Comparando apenas o índice (controlador[0]) -->
        <Subguia31 v-if="controlador1[0] === 0 && controlador1[1] === 0" :slider=0 :img3= 1 :tex="'O que fazer?'"></Subguia31>
        <Subguia31 v-if="controlador1[0] === 1 && controlador1[1] === 0" :slider=0 :img3=2 :tex="'O que vou precisar'"></Subguia31>
        <Subguia31 v-if="controlador1[0] === 2 && controlador1[1] === 0" :slider=0 :img3=3 :tex="'Quais cuidados tomar'"></Subguia31> 
        <Subguia31 v-if="controlador1[0] === 3 && controlador1[1] === 0" :slider=0 :img3=4 :tex="'Quem Contratar'"></Subguia31>     
        <Subguia31 v-if="controlador1[0] === 4 && controlador1[1] === 0" :slider=0 :img3=5 :tex="'Importância para Saúde'"></Subguia31>
        <Subguia31 v-if="controlador1[0] === 5 && controlador1[1] === 0" :slider=0 :img3=6 :tex="'Normas reguladoras'"></Subguia31>
        <Subguia31 v-if="controlador1[0] === 0 && controlador1[1] === 1" :slider=1 :img3= 1 :tex="'O que fazer?'"></Subguia31>
        <Subguia31 v-if="controlador1[0] === 1 && controlador1[1] === 1" :slider=1 :img3=2 :tex="'O que vou precisar'"></Subguia31>
        <Subguia31 v-if="controlador1[0] === 2 && controlador1[1] === 1" :slider=1 :img3=3 :tex="'Quais cuidados tomar'"></Subguia31> 
        <Subguia31 v-if="controlador1[0] === 3 && controlador1[1] === 1" :slider=1 :img3=4 :tex="'Quem Contratar'"></Subguia31>     
        <Subguia31 v-if="controlador1[0] === 4 && controlador1[1] === 1" :slider=1 :img3=5 :tex="'Importância para Saúde'"></Subguia31>
        <Subguia31 v-if="controlador1[0] === 5 && controlador1[1] === 1" :slider=1 :img3=6 :tex="'Normas reguladoras'"></Subguia31>                       
        <button @click="ShiftRight25()" id="shiftR25" class="btn-hover-yellow  border btn-round ">
            >
        </button>
    </div>
    <sec311 v-if="controlador1[0] === 0"></sec311>
    <sec252 v-if="controlador1[0] === 1"></sec252>
    <sec313 v-if="controlador1[0] === 2"></sec313>
    <sec254 v-if="controlador1[0] === 3"></sec254>
    <sec255 v-if="controlador1[0] === 4"></sec255>
    <sec256 v-if="controlador1[0] === 5"></sec256>
    
    
</template>

<script>        
import Subguia31 from './subguia31.vue';
import sec311 from './sec311.vue';
import final25 from  './final25.vue';
import sec252 from './sec252.vue';
import sec313 from './sec313.vue';
import sec254 from './sec254.vue';
import sec255 from './sec255.vue';
import sec256 from './sec256.vue'
export default {
    name: 'guia31',
    components: {
        Subguia31,
        sec311,
        final25,
        sec252,
        sec313,
        sec254,
        sec255,
        sec256
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
html, body {
  height: 100%; /* Faz com que o html e o body ocupem toda a altura */
  margin: 0;
  padding: 0;
}
.calo {
    border-radius: 0 0 60px 60px !important;   
}
.famap400{
    font-weight: 400 !important;
}
.famap300{
    font-weight: 300 !important;
}
.famap700{
    font-weight: 700     !important;
}
.famap500{
    font-weight: 500      !important;
}
.btn-round {  
  height: 3vw;
  width: 3%;      
  padding: 0;              
  display: flex;           
  align-items: center;     
  justify-content: center; 
  border-radius: 80px;       
  color: white;            
  border: 1px solid white; 
  transition: background-color 0.3s ease; 
}

.alturatotal {
    height: auto;
    transition: height 0.5s ease, width 0.5s ease; 
}



.gradient-bg {
    background: linear-gradient(to top, #749695, #394A55); 
    border-radius: 0 0 24px 24px;
}

.btn-hover-yellow:hover {
    background-color:   #FFC676;
    
}

@media (max-width: 768px) {
    .btn-round {
        width: 4%; 
        height: 4vw;   
    }
    
}
@media (max-width: 1200px) {
    
    .calo{
        border-radius: 0 0 40px 40px !important;
    }
}

</style>