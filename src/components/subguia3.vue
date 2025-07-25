<template>
    <div id="escorrega" v-if="slider == 1" class=" animate__animated animate__slideInLeft tamanho h-100 tesp">
            <span class="w-80  d-flex flex-column justify-content-center align-items-center mk3">
                <h1 class="fonte text-light text-align">Problemas da </h1>
                <h1 class="fonte text-light "> AUTOCONSTRUÇÂO</h1>
                <button @click="scrollToprob()" class="  colo45 nolans round45">Descubra aqui</button>
            </span>
            <div class=" d-flex maluk w-100 justify-content-center flex-column align-items-center">
                <div class=" size d-flex justify-content-between">
                    <div class="indi "></div>
                    <div class="indi "></div>
                    <div class="indicator "></div>
                    <div class="indi "></div>
                    <div class="indi "></div>
                </div>
            </div>
    
    </div>
        <div v-else-if="slider == -1" class="tamanho tesp animate__animated h-100 animate__slideInRight">
            <span class="w-80  d-flex flex-column justify-content-center align-items-center mk3">
                <h1 class="fonte text-light text-align">Problemas da</h1>
                <h1 class="fonte text-light "> AUTOCONSTRUÇÂO</h1>
                <button @click="scrollToprob()" class="colo45 nolans round45">Descubra aqui</button>
            </span>
                <div class=" d-flex maluk w-100 justify-content-center flex-column align-items-center">
                    <div class=" size d-flex justify-content-between">
                        <div class="indi "></div>
                        <div class="indi "></div>
                        <div class="indicator "></div>
                        <div class="indi "></div>
                        <div class="indi "></div>
                    </div>
                </div>
        </div>
</template>

<script>
    export default {
        name: 'Subguia3',
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
            scrollToprob() {
                const el = document.getElementById('prob');
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }

                },
        }
       

    }
        
</script>
