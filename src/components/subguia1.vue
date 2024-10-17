    <template>
        <div v-if="slider === 0" class="d-flex tamanho justify-content-center flex-column align-items-center">
                <div class="d-flex mt-4 align-items-center  justify-content-around keeps m-2">
                    <img class="tamanho3" src="@/assets/logo_Reforma_w.svg" alt="Logo">
                    <span class=" tamanho32 margin-left">
                        <h1 class="fonte text-light">Receba informações essenciais para reformar sua casa com facilidade</h1>
                    </span>
                </div>
                <button class="  round2">Saiba Mais</button>
                <div class="m-3 size d-flex justify-content-between">
                    <div class="indicator p-1"></div>
                    <div class="indi p-1"></div>
                    <div class="indi p-1"></div>
                    <div class="indi p-1"></div>
                </div>
            </div>
            <div v-if="slider === 1" class="d-flex animate__animated animate__slideInLeft tamanho justify-content-center flex-column align-items-center">
                <div class="d-flex mt-4 align-items-center  justify-content-around keeps m-2">
                    <img class="tamanho3" src="@/assets/logo_Reforma_w.svg" alt="Logo">
                    <span class=" tamanho32 margin-left">
                        <h1 class="fonte text-light">Receba informações essenciais para reformar sua casa com facilidade</h1>
                    </span>
                </div>
                <button class="  round2">Saiba Mais</button>
                <div class="m-3 size d-flex justify-content-between">
                    <div class="indicator p-1"></div>
                    <div class="indi p-1"></div>
                    <div class="indi p-1"></div>
                    <div class="indi p-1"></div>
                </div>
            </div>
            <div v-if="slider === -1" class="d-flex animate__animated animate__slideInRight tamanho justify-content-center flex-column align-items-center">
                <div class="d-flex mt-4 align-items-center  justify-content-around keeps m-2">
                    <img class="tamanho3" src="@/assets/logo_Reforma_w.svg" alt="Logo">
                    <span class=" tamanho32 margin-left">
                        <h1 class="fonte text-light">Receba informações essenciais para reformar sua casa com facilidade</h1>
                    </span>
                </div>
                <button class="  round2">Saiba Mais</button>
                <div class="m-3 size d-flex justify-content-between">
                    <div class="indicator p-1"></div>
                    <div class="indi p-1"></div>
                    <div class="indi p-1"></div>
                    <div class="indi p-1"></div>
                </div>
            </div>
    </template>

    <script>
        export default {
            name: 'Subguia1',
            props: {
                slider: {
                type: Number,
                default: 0
            }
        },
            data(){
                return{};
            },

        };
    </script>
    <style>
        @media (max-width: 480px) {
                .yip{
                    font-size: 4vw;
                }
                .tamanho32 {
                    width: 56%;
                }
            }
        .fonte {
            font-size: 4.5vw;
        }
        .tamanho{
            width: 90%;
            height: auto;
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


        
        .tamanho32 {
            width: 51%;
        }
        
            @media (max-width: 768px) {
        
                .indi {
                    height: 5px;
                }
                .indicator {
                    height: 5px;
                }
                .tamanho32 {
                    width: 53%;
                }
                
            }
        



    </style>