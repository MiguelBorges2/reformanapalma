<template>
    <div class="w-100 img1 d-flex into justify-content-around alturatotal align-items-center gradient-bg42">
        <img v-if="controlador[0] === 0" src="@/assets/bann1.gif" class="gif-bg">
        <img v-if="controlador[0] === 3" src="@/assets/bann2.gif" class="gif-bg2">
        <img v-if="controlador[0] === 2" src="@/assets/bann3.gif" class="gif-bg2">
        <img v-if="controlador[0] === 1" src="@/assets/bann4.gif" class="gif-bg">

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
            // Início do toque
        startSwipe(e) {
            this.startX = e.touches[0].clientX; // Captura a posição inicial do toque
        },
    // Movimento do toque
        moveSwipe(e) {
            // Atualiza a posição do toque enquanto ele se move
            this.endX = e.touches[0].clientX;
        },
    // Fim do toque
        endSwipe() {
      // Se o movimento for para a direita
        if (this.startX - this.endX > 50) {
            this.ShiftLeft(); // Muda para a esquerda
        } else if (this.endX - this.startX > 50) {
            this.ShiftRight(); // Muda para a direita
        }
        },
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
.img1 {
  background-image: 
    linear-gradient(to top, #749695, #394A55);
  border-radius: 0 0 60px 60px;
}
div {
    position: relative;
}
.gif-bg {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* ou 'cover' se quiser que ocupe tudo */
  opacity: 0.4;
  pointer-events: none;
  z-index: 0;
  
}
.gif-bg2 {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* ou 'cover' se quiser que ocupe tudo */
  opacity: 0.4;
  pointer-events: none;
  z-index: 0;
  
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
        width: 7.5% !important; 
        height: 7.5vw !important;   
        margin: 1%;
    }
    .gradient-bg42 {
        background: linear-gradient(to top, #749695, #394A55); 
        border-radius: 0 0 12px 12spx;
    
}
@media (max-width: 1200px) {
    .gradient-bg42 {
        background: linear-gradient(to top, #749695, #394A55); 
        border-radius: 0 0 40px 40px;
    }      
}


}


</style>

