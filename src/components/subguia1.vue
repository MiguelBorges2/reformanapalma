<template>
        <div v-if="slider === 0" class="d-flex  tamanho justify-content-center flex-column align-items-center">
                <div class="d-flex align-items-center  justify-content-around keeps ">
                    <img class="tamanhog" src="@/assets/logo_Reforma_w.svg" alt="Logo">
                    <span class=" tamanho32 margin-left">
                        <h1 class="fonte text-light">Receba informações essenciais para reformar sua casa com facilidade</h1>
                    </span>
                </div>
                <button @click="movetosec()" class="  colo45 round45">Saiba Mais</button>
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
                <button @click="movetosec()" class=" colo45 round45">Saiba Mais</button>
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
                    <button @click="movetosec()" class="  colo45 round45">Saiba Mais</button>
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
            methods: {
                movetosec() {
                    let a = document.getElementById('sec');
                    if(a) {
                        a.scrollIntoView({ behavior: 'smooth' });
                    }
                }  
            }
            

        };
    </script>
 