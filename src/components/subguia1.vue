    <template>
        <div v-if="slider === 0" class="d-flex  tamanho justify-content-center flex-column align-items-center">
                <div class="d-flex align-items-center  justify-content-around keeps ">
                    <img class="tamanhog" src="@/assets/logo_Reforma_w.svg" alt="Logo">
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
                    <img class="tamanhog" src="@/assets/logo_Reforma_w.svg" alt="Logo">
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
                    <img class="tamanhog" src="@/assets/logo_Reforma_w.svg" alt="Logo">
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
.fonte {
    font-size: 4.5vw;
}

.colo45 {
    color: #4A4A48;
    font-weight: 500;
}

.tamanho {
    width: 85%;
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
    background-color: #FFC676;
}

.indicator {
    width: 20%;
    background-color: #FFC676;
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
    margin-top: 1.9%;
    width: 100%;
    margin: 1.2%;
    margin-bottom: 1%;
}

.size {
    width: 28%;
    margin: 1.5%;
}

.tamanhog {
    height: auto;
    width: 25.4%;
    margin-left: 4%;
}
.tamanho32 {
    width: 51%;
}

/* Media Query para telas menores que 768px */
@media (max-width: 768px) {
    .tamanhog {
        width: 28%;
    }
    .fonte {
        font-size: 4.4vw;
    }
    .round45 {
        width: 20%;
        font-size: 2.5vw;
    }
    .indi {
        height: 0.6vw;
    }
    .indicator {
        height: 3vw;
    }
}

/* Media Query para telas menores que 600px */
@media (max-width: 600px) {
    .yip {
        font-size: 4vw;
    }
    .tamanho32 {
        width: 50%;
    }
    .fonte {
        font-size: 4.4vw;
    }
    .keeps {
        margin: 2.6%;
    }
    .round45 {
        font-size: 2.1vw;
    }
    .tamanhog {
        width: 27%;
    }
}

/* Media Query para telas menores que 500px */
@media (max-width: 460px) {
    .yip {
        font-size: 4vw;
    }
    .tamanho32 {
        width: 55%;
    }
    .fonte {
        font-size: 4.7vw;
        margin-top: 2%;
    }
    .keeps {
        margin: 2.6%;
    }
    .round45 {
        font-size: 2.7vw;
        width: 35%;
        margin: 1%;
    }
    .tamanhog {
        width: 30%;
    }
}
</style>