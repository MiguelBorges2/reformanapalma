<template>
    <div  v-if="slider == 1" class="d-flex animate__animated animate__slideInLeft h-100 tamanho justify-content-between flex-column align-items-center">
            <span class="w-80 flex-column d-flex align-items-center align-items-center">
                <h1 class="fonte45 text-light"> Veja o antes e depois das Habitações   </h1>
                <h1 class="fonte45 text-light">  Sociais com a ajuda do nosso Site   </h1>
            </span>
            <div class=" d-flex w-100 margi6 justify-content-center flex-column align-items-center">
                    <button class=" colo45  nolans round45">Veja agora</button>
                    <div class=" size d-flex justify-content-between">
                        <div class="indi "></div>
                        <div class="indicator "></div>
                        <div class="indi "></div>
                        <div class="indi "></div>
                    </div>
            </div>
        </div>
        <div v-else-if="slider == -1" class="d-flex h-100 tamanho animate__animated animate__slideInRight justify-content-between flex-column align-items-center">
            <span class="w-80 flex-column d-flex align-items-center align-items-center">
                <h1 class="fonte45 text-light"> Veja o antes e depois das Habitações   </h1>
                <h1 class="fonte45 text-light">  Sociais com a ajuda do nosso Site   </h1>
            </span>
            <div class=" d-flex w-100 margi6 justify-content-center flex-column align-items-center">
                    <button class="  colo45 nolans round45">Veja agora</button>
                    <div class=" size d-flex justify-content-between">
                        <div class="indi "></div>
                        <div class="indicator "></div>
                        <div class="indi "></div>
                        <div class="indi"></div>
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
        }
    }
        
</script>
<style>
    .fonte45 {
        font-size: 4.5vw !important;
        
    }
    .margi6 {    
        margin-top: 24.9%;
    }
    .round2 {
        margin-top: 1.2%;
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
        margin: 1.5%;
    }
    .tamanho3 {
            height: auto;
            width: 25%;
            margin-left: 4%;
    }

    @media (max-width: 768px) {
        .indicator {
            height: 0.2vw;
        }
        .tamanho2 {
            width: 54%;
        }
        .fonte45{
                font-size: 4.9vw;
        }
        .margi6 {    
            margin-top: 27%;
        }
        .round2 {
                font-size: 2.5vw;
                width: 15% ;
            }
    
    }
    @media (max-width: 600px) {
            .yip{
                font-size: 4.3vw;
            }
            .round2 {
                font-size: 2.5vw;
                width: 15%;
            }
            .fonte45{
                font-size: 5vw !important;
            }
            .margi6 {    
                margin-top: 28%;
            }
        }
        @media (max-width: 460px) {
            .yip{
                font-size: 4.3vw;
            }
            .round2 {
                font-size: 4vw !important;
                width: 35% !important;
            }
            .fonte45{
                font-size: 5vw !important;
                margin-top: 2% !important;
            }
            .margi6 {    
                margin-top: 21.6%;
            }
        }
    
    .tamanho2 {
        width: 50%;
    }
        
    



</style>