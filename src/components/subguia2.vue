<template>
    <div  v-if="slider == 1" class="d-flex animate__animated animate__slideInLeft h-100 tamanho flex-column  justify-content-center align-items-center">
            <span class="w-80 flex-column mk3  d-flex align-items-center justify-content-center">
                <h1 class="maluk4 fonte50 text-light"> Proposta de REFORMAS  </h1>
                <h1 class="fonte50 text-light"> com moradores  </h1>
                <button @click="movetoantes()" class=" colo45 nolans round45">Veja agora</button>
            </span>
            <div class=" d-flex w-100 maluk justify-content-center flex-column align-items-center">
                    <div class=" size d-flex justify-content-between">
                        <div class="indi "></div>
                        <div class="indicator "></div>
                        <div class="indi "></div>
                        <div class="indi "></div>
                        <div class="indi "></div>
                    </div>
            </div>
        </div>
        <div v-else-if="slider == -1" class="d-flex h-100 tamanho animate__animated animate__slideInRight flex-column  justify-content-center align-items-center">
            <span class="w-80 flex-column mk3 d-flex align-items-center align-items-center">
                <h1 class="maluk4 fonte50 text-light"> Proposta de REFORMAS   </h1>
                <h1 class="fonte50 text-light"> com moradores   </h1>
                <button @click="movetoantes()" class="  colo45 nolans round45">Veja agora</button>
            </span>
            <div class=" d-flex w-100 maluk justify-content-center flex-column align-items-center">
                    <div class=" size d-flex justify-content-between">
                        <div class="indi "></div>
                        <div class="indicator "></div>
                        <div class="indi "></div>
                        <div class="indi"></div>
                        <div class="indi "></div>
                    </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'Subguia2',
        props: {
        slider: {
            type: Number,
            default: 0 // Define um valor padrão
            }
        },
        data(){
            return{
                
            };
            
        },
        methods: {
                movetoantes() {
                    let a = document.getElementById('antes');
                    if(a) {
                        console.log("foc");
                        a.scrollIntoView({ behavior: 'smooth' });
                    }
                }  
            }
    }
        
</script>
