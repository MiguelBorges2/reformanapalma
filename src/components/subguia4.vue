<template>
        <div  v-if="slider == 1" class="d-flex animate__animated animate__slideInLeft h-100 tamanho justify-content-between flex-column align-items-center">
            <span class="w-80 flex-column d-flex align-items-center align-items-center">
                <h1 class="fonte45 text-light"> Saiba o que é a ATHIS e como   </h1>
                <h1 class="fonte45 text-light">  garantir esse benefício</h1>
            </span>
            <div class=" d-flex w-100 margi6 justify-content-center flex-column align-items-center">
                    <button class=" colo45 nolans round2">Saiba Mais</button>
                    <div class="size d-flex justify-content-between">
                        <div class="indi "></div>
                        <div class="indi "></div>
                        <div class="indi "></div>
                        <div class="indicator "></div>
                    </div>
            </div>
        </div>
        <div v-else-if="slider == -1" class="d-flex h-100 tamanho animate__animated animate__slideInRight justify-content-between flex-column align-items-center">
            <span class="w-80 flex-column  d-flex align-items-center align-items-center">
                <h1 class="fonte45 text-light"> Veja o antes e depois das Habitatações   </h1>
                <h1 class="fonte45 text-light">  Sociais com a ajuda do nosso Site   </h1>
            </span>
            <div class=" d-flex w-100 margi6 justify-content-center flex-column align-items-center">
                    <button class=" colo45 nolans round2">Saiba Mais</button>
                    <div class="size d-flex justify-content-between">
                        <div class="indi "></div>
                        <div class="indi "></div>
                        <div class="indi "></div>
                        <div class="indicator "></div>
                    </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'Subguia4',
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
    @media (max-width: 600px) {
            .yip{
                font-size: 4.3vw;
            }
            .fonte45 {
                font-size: 5.25vw;
            }
        }
    .fonte45 {
        font-size: 4.5vw;
    }

    .round2 {
        border-radius: 24px;
        width: 14%;
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        font-size: 1.5vw;
        padding: 0.5%;
        background-color: #FFC676;
    }
    .indicator {
            width: 20%;
            background-color: #FFC676;
            border-radius: 24px;
            height:0.8vw;
        }
    .indi {
            width: 20%;
            background-color: white;
            border-radius: 24px;
            height: 0.8vw;
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


    
    .tamanho2 {
        width: 50%;
    }
    
     
    



</style>
    



