<template>
    <div class="w-100 img1 d-flex into justify-content-between alturatotal align-items-center gradient-bg42">
            <img v-if="controlador[0] === 0" src="@/assets/bann1.gif" class="gif-bg">
            <img v-if="controlador[0] === 3" src="@/assets/bann2.gif" class="gif-bg2">
            <img v-if="controlador[0] === 2" src="@/assets/bann3.gif" class="gif-bg2">
            <img v-if="controlador[0] === 1" src="@/assets/bann4.gif" class="gif-bg">
            <img v-if="controlador[0] === 4" src="@/assets/gif5.gif" class="gif-bg">

            <button @click="ShiftLeft" id="shift-left" class=" d-flex justify-content-center  align-items-center  btn-hover-yellow  border bundis btn-square ">
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
            <Subguia5 v-else-if="controlador[0] === 4 && controlador[1] === 1" :slider="controlador[1]"></Subguia5>
            <Subguia5 v-else-if="controlador[0] === 4 && controlador[1] === -1" :slider="controlador[1]"></Subguia5>
            
            <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center bundis2 border btn-square ">
                >
            </button>
    </div>
</template>

<script>        
import Subguia1 from './subguia1.vue';
import Subguia2 from './subguia2.vue';
import Subguia3 from './subguia3.vue';
import Subguia4 from './subguia4.vue';
import Subguia5 from './subguia5.vue';

export default {
    name: 'Guia',
    components: {
        Subguia1,
        Subguia2,
        Subguia3,
        Subguia4,
        Subguia5
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
            if (this.controlador[0] < 4) {
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



