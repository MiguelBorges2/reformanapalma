<template>
        <div  v-if="slider == 1" class="d-flex animate__animated animate__slideInLeft h-100 tamanho justify-content-between flex-column align-items-center">
            <span class="w-80 flex-column d-flex align-items-center align-items-center">
                <h1 class="fonte text-light"> Saiba o que é a ATHIS e como   </h1>
                <h1 class="fonte text-light">  garantir esse benefício</h1>
            </span>
            <div class=" d-flex w-100 margi justify-content-center flex-column align-items-center">
                    <button class="  round2">Saiba Mais</button>
                    <div class="m-3 size d-flex justify-content-between">
                        <div class="indi p-1"></div>
                        <div class="indi p-1"></div>
                        <div class="indi p-1"></div>
                        <div class="indicator p-1"></div>
                    </div>
            </div>
        </div>
        <div v-else-if="slider == -1" class="d-flex h-100 tamanho animate__animated animate__slideInRight justify-content-between flex-column align-items-center">
            <span class="w-80 flex-column  d-flex align-items-center align-items-center">
                <h1 class="fonte text-light"> Veja o antes e depois das Habitatações   </h1>
                <h1 class="fonte text-light">  Sociais com a ajuda do nosso Site   </h1>
            </span>
            <div class=" d-flex w-100 margi justify-content-center flex-column align-items-center">
                    <button class="  round2">Saiba Mais</button>
                    <div class="m-3 size d-flex justify-content-between">
                        <div class="indi p-1"></div>
                        <div class="indi p-1"></div>
                        <div class="indi p-1"></div>
                        <div class="indicator p-1"></div>
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
    @media (max-width: 480px) {
            .yip{
                font-size: 4.3vw;
            }
        }
    .fonte {
        font-size: 4.5vw;
    }
    .tamanho{
        width: 90%;
        height: auto;
    }
    .margi {
        margin-top: 24.75%;
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
        }
    .indi {
            width: 20%;
            background-color: white;
            border-radius: 24px;
        }
    .keeps {
        width: 100%;
    }
    .size {

        width: 28%;
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
    
            .indi {
                height: 5px;
            }
            .indicator {
                height: 5px;
            }
            .tamanho2 {
                width: 54%;
            }
            
        }
    



</style>
    



