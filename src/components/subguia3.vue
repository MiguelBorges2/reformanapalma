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
<style>
    @media (max-width: 480px) {
            .yip{
                font-size: 4.3vw;
            }
        }
    .fonte2 {
        font-size: 4.5vw;
    }
    .tesp {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
    .round2 {
        border-radius: 24px;
        width: 14%;
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        font-size: 1.5vw;
        padding: 0.5%;
        background-color: rgb(255, 193, 7);
    }
    .indicator {
            width: 20%;
            background-color: rgb(255, 193, 7);
            border-radius: 24px;
            height: 0.3vw;
        }
    .indi {
            width: 20%;
            background-color: white;
            border-radius: 24px;
            height: 0.3vw;
        }
    .keeps {
        width: 100%;
    }
    .size {

        width: 28%;
        margin: 1.5;
    }
    .tamanho3 {
            height: auto;
            width: 25%;
            margin-left: 4%;
    }


    
    .tamanho2 {
        width: 50%;
    }
    
        @media (max-width: 768px) {
        
            .fonte2 {
                font-size: 4.9vw !important;
            }
            .tamanho2 {
                width: 54%;
            }
            
        }
        @media (max-width: 600px) {
            
            .fonte2 {
                font-size: 4.9vw !important;
            }
            .tamanho2 {
                width: 54%;
            }
            
        }
    



</style>