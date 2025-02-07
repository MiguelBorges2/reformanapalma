<template>
    <div class="w-100 d-flex justify-content-around alturatotal align-items-center gradient-bg42">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  border btn-round ">
            <
        </button>
        
        <!-- Comparando apenas o índice (controlador[0]) -->
        <Subguia1 v-if="controlador[0] === 0 && controlador[1] === 0" :slider="0"></Subguia1>
        <Subguia1 v-if="controlador[0] === 0 && controlador[1] === 1" :slider="1"></Subguia1>
        <Subguia1 v-if="controlador[0] === 0 && controlador[1] === -1" :slider="-1"></Subguia1>
        <Subguia2 v-else-if="controlador[0] === 1 && controlador[1] === 1" :slider="controlador[1]"></Subguia2>
        <Subguia2 v-else-if="controlador[0] === 1 && controlador[1] === -1" :slider="controlador[1]"></Subguia2>
        <Subguia3 v-else-if="controlador[0] === 2 && controlador[1] === 1" :slider="controlador[1]"></Subguia3>
        <Subguia3 v-else-if="controlador[0] === 2 && controlador[1] === -1" :slider="controlador[1]"></Subguia3>
        <Subguia4 v-else-if="controlador[0] === 3 && controlador[1] === 1" :slider="controlador[1]"></Subguia4>
        <Subguia4 v-else-if="controlador[0] === 3 && controlador[1] === -1" :slider="controlador[1]"></Subguia4>
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  border btn-round ">
            >
        </button>
    </div>
</template>

<script>        
import Subguia1 from './subguia1.vue';
import Subguia2 from './subguia2.vue';
import Subguia3 from './subguia3.vue';
import Subguia4 from './subguia4.vue';

export default {
    name: 'Guia',
    components: {
        Subguia1,
        Subguia2,
        Subguia3,
        Subguia4
    },
    data() {
      return {
        controlador: [0, 0], // [índice atual, direção da animação]
      };
    },
    methods: {
        ShiftRight() {
            console.log('oi')
            if (this.controlador[0] < 3) {
                this.controlador = [this.controlador[0] + 1, 1]; // Muda o índice e define a direção como 1 (direita)
            }
        },
        ShiftLeft() {
            if (this.controlador[0] > 0) {
                this.controlador = [this.controlador[0] - 1, -1]; // Muda o índice e define a direção como -1 (esquerda)
            }
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

.btn-round {  
  height: 3vw;
  width: 3%;      
  padding: 0;              
  display: flex;           
  align-items: center;     
  justify-content: center; 
  border-radius: 80px;
  background: transparent;     
  color: white;            
  border: 1px solid white; 
  transition: background-color 0.3s ease; 
  margin: 1%;
}

.alturatotal {
    height: auto;
    transition: height 0.5s ease, width 0.5s ease; 
}

.edit {
    color: white;
}

.gradient-bg42 {
    background: linear-gradient(to top, #749695, #394A55); 
    border-radius: 0 0 60px 60px;
}


.btn-hover-yellow:hover {
    background-color:   #FFC676;
    
}

@media (max-width: 768px) {
    .btn-round {
        width: 4%; 
        height: 4vw;   
    }
    .gradient-bg42 {
        background: linear-gradient(to top, #749695, #394A55); 
        border-radius: 0 0 24px 24px;
    
    }
}
@media (max-width: 600px) {
    .btn-round {
        width: 6% !important; 
        height: 5.4vw !important;   
    }
    .gradient-bg42 {
        background: linear-gradient(to top, #749695, #394A55); 
        border-radius: 0 0 24px 24px;
    
}
@media (max-width: 1200px) {
    .gradient-bg42 {
        background: linear-gradient(to top, #749695, #394A55); 
        border-radius: 0 0 40px 40px;
    }      
}


}


</style>

