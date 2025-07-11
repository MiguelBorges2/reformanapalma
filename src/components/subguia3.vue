<template>
    <div id="escorrega" v-if="slider == 1" class=" animate__animated animate__slideInLeft tamanho h-100 tesp">
            <span class="w-80 mk3">
                <h1 class="fonte45 text-light text-align">Problemas da autocontruçao e a importancia da Assistência técnica </h1>
                <h1 class="fonte45 text-light "> </h1>
            </span>
            <div class=" d-flex margi6 w-100 justify-content-center flex-column align-items-center">
                <button @click="scrollToprob()" class="  colo45 nolans round45">Saiba Mais</button>
                <div class=" size d-flex justify-content-between">
                    <div class="indi "></div>
                    <div class="indi "></div>
                    <div class="indicator "></div>
                    <div class="indi "></div>
                </div>
            </div>
    
    </div>
        <div v-else-if="slider == -1" class="tamanho tesp animate__animated h-100 animate__slideInRight">
            <span class="w-80 mk3">
                <h1 class="fonte45 text-light text-align">Problemas da autocontruçao e a importancia da Assistência técnica </h1>

            </span>
                <div class=" d-flex margi6 w-100 justify-content-center flex-column align-items-center">
                    <button  @click="scrollToprob()" class=" colo45 nolans round45">Saiba Mais</button>
                    <div class=" size d-flex justify-content-between">
                        <div class="indi "></div>
                        <div class="indi "></div>
                        <div class="indicator "></div>
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
