<template>
        <div  v-if="slider == 1" class="d-flex animate__animated animate__slideInLeft h-100 tamanho justify-content-between flex-column align-items-center">
            <span class="w-80 flex-column mk3 d-flex align-items-center align-items-center">
                <h1 class="fonte50 maluk5 text-light"> Visite a VERSÂO 1.0   </h1>
                <h1 class="fonte50 text-light">  do site Reforma</h1>
                <button @click="scrollToprob()" class=" colo45 nolans round45">Clique aqui</button>
            </span>
            <div class=" d-flex w-100 maluk justify-content-center flex-column align-items-center">
                    <div class="size d-flex justify-content-between">
                        <div class="indi "></div>
                        <div class="indi "></div>
                        <div class="indi "></div>
                        <div class="indi "></div>
                        <div class="indicator "></div>
                    </div>
            </div>
        </div>
        <div v-else-if="slider == -1" class="d-flex h-100 tamanho animate__animated animate__slideInRight justify-content-between flex-column align-items-center">
            <span class="w-80 flex-column mk3 d-flex align-items-center align-items-center">
                <h1 class="fonte50 maluk5 text-light"> Visite a VERSÂO 1.0    </h1>
                <h1 class="fonte50 text-light">  do site Reforma   </h1>
                <button @click="scrollToprob()" class=" colo45 nolans round45">Clique aqui</button>
            </span>
            <div class=" d-flex w-100 maluk justify-content-center flex-column align-items-center">
                    <div class="size d-flex justify-content-between">
                        <div class="indi "></div>
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
        name: 'Subguia5',
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

    



