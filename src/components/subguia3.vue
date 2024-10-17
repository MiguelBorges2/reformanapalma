<template>
    <div id="escorrega" v-if="slider == 1" class=" animate__animated animate__slideInLeft tamanho h-100 tesp">
            <span class="w-80">
                <h1 class="fonte2 text-light ">Problemas da autocontruçao e a  </h1>
                <h1 class="fonte2 text-light "> importancia da Assistência técninca </h1>
            </span>
            <div class=" d-flex margi w-100 justify-content-center flex-column align-items-center">
                <button class="  round2">Saiba Mais</button>
                <div class="m-3 size d-flex justify-content-between">
                    <div class="indi p-1"></div>
                    <div class="indi p-1"></div>
                    <div class="indicator p-1"></div>
                    <div class="indi p-1"></div>
                </div>
            </div>
    
    </div>
        <div v-else-if="slider == -1" class="tamanho tesp animate__animated h-100 animate__slideInRight">
            <span class="w-80">
                <h1 class="fonte2 text-light ">Problemas da autocontruçao e a  </h1>
                <h1 class="fonte2 text-light "> importancia da Assistência técninca </h1>
            </span>
                <div class=" d-flex margi w-100 justify-content-center flex-column align-items-center">
                    <button class="  round2">Saiba Mais</button>
                    <div class="m-3 size d-flex justify-content-between">
                        <div class="indi p-1"></div>
                        <div class="indi p-1"></div>
                        <div class="indicator p-1"></div>
                        <div class="indi p-1"></div>
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
    .tamanho{
        width: 90%;
        height: 100%;
    }
    .tesp {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
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