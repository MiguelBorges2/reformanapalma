    <template>
        <div v-if="slider === 0" class="d-flex  tamanho justify-content-center flex-column align-items-center">
                <div class="d-flex align-items-center  justify-content-around keeps ">
                    <img class="tamanho3" src="@/assets/logo_Reforma_w.svg" alt="Logo">
                    <span class=" tamanho32 margin-left">
                        <h1 class="fonte text-light">Receba informações essenciais para reformar sua casa com facilidade</h1>
                    </span>
                </div>
                <button class="  colo45 round45">Saiba Mais</button>
                <div class=" size d-flex justify-content-between">
                    <div class="indicator "></div>
                    <div class="indi "></div>
                    <div class="indi "></div>
                    <div class="indi "></div>
                </div>
            </div>
            <div v-if="slider === 1" class="d-flex animate__animated animate__slideInLeft tamanho justify-content-center flex-column align-items-center">
                <div class="d-flex  align-items-center  justify-content-around keeps ">
                    <img class="tamanho3" src="@/assets/logo_Reforma_w.svg" alt="Logo">
                    <span class=" tamanho32 margin-left">
                        <h1 class="fonte text-light">Receba informações essenciais para reformar sua casa com facilidade</h1>
                    </span>
                </div>
                <button class=" colo45 round45">Saiba Mais</button>
                <div class=" size d-flex justify-content-between">
                    <div class="indicator "></div>
                    <div class="indi "></div>
                    <div class="indi "></div>
                    <div class="indi "></div>
                </div>
            </div>
            <div v-if="slider === -1" class="d-flex animate__animated animate__slideInRight tamanho justify-content-center flex-column align-items-center">
                <div class="d-flex  align-items-center  justify-content-around keeps ">
                    <img class="tamanho3" src="@/assets/logo_Reforma_w.svg" alt="Logo">
                    <span class=" tamanho32 margin-left">
                        <h1 class="fonte text-light">Receba informações essenciais para reformar sua casa com facilidade</h1>
                    </span>
                </div>
                    <button class="  colo45 round45">Saiba Mais</button>
                    <div class=" size d-flex justify-content-between">
                        <div class="indicator "></div>
                        <div class="indi "></div>
                        <div class="indi "></div>
                        <div class="indi "></div>
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
        @media (max-width: 600px) {
                .yip{
                    font-size: 4vw  !important;
                }
                .tamanho32 {
                    width: 55% !important;
                }
                .fonte {
                    font-size: 5.25vw !important;

                }
                .keeps {
                    margin: 2.6% !important;
                }
                .round45 {
                    font-size: 2.2vw !important;
                    
                }
                .tamanho3{
                    width: 100% !important;
                }
                
            }
            @media (max-width: 576px) {
                .yip{
                    font-size: 4vw  !important;
                }
                .tamanho32 {
                    width: 55% !important;
                }
                .fonte {
                    font-size: 5.25vw !important;

                }
                .keeps {
                    margin: 2.6% !important;
                }
                .round45 {
                    font-size: 2vw !important;
                    
                }
                .tamanho3{
                    width: 100% !important;
                }
                
            }
        .fonte {
            font-size: 4.5vw;

        }
        .colo45 {
            color: #4A4A48;
            font-weight: 500;
        }
        .tamanho{
            width: 90%;
            height: auto;
        }
        .round45 {
            margin-top: 1%;
            border-radius: 24px;
            width: 14%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
            font-size: 1.5vw;
            padding: 0.5%;
            border: none;
            background-color:  #FFC676;
        }
        .indicator {
                width: 20%;
                background-color:   #FFC676;
                border-radius: 24px;
                height: 3vw;
            }
        .indi {
                width: 20%;
                background-color: white;
                border-radius: 24px;
                height: 3vw;
            }
        .keeps {
            margin-top: 1.9% !important;
            width: 100%;
            margin: 1.2%;
            margin-bottom: 1%;
        }
        .size {

            width: 28%;
            margin: 1.5%;
        }
        .tamanho3 {
                height: auto;
                width: 25.4% !important;
                margin-left: 4%;
        }


        
        .tamanho32 {
            width: 51%;
        }
        
            @media (max-width: 768px) {
                .tamanho3 {
                    width: 29% !important;
                }
                .fonte{
                    font-size:  4.89vw;
                }
                .round45 {
                    width: 15% !important;
                    font-size: 2.5vw !important;
                }
                .tamanho32 {
                    width: 51%;
                }
                .indi {
                    height: 0.6vw;
                }
                .indicator {
                    height: 3vw;
                }
            }

        



    </style>