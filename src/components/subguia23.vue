<template>
    <div v-if="slider === 0" class="d-flex tamanho animate__animated animate__slideInLeft  justify-content-center align-items-center flex-column" >
        <h1 class="funko text-light famap400">Estudar/trabalhar em espaço pequeno</h1>
        <p class="text-light funko2 famap300">Estudar/trabalhar em espaço pequeno > Estudar/trabalhar em quarto para uma pessoa ou mais</p>
        <div class="d-flex w-100 tix justify-content-center align-items-center">
            <img class="tamanho89" src="@/assets/pict_trabalhar-estudar 1.svg" alt="Logo2">
            <div class="d-flex flex-column jutify-content-center align-items-center">
                <div class="conta d-flex justify-content-center align-items-center"> 
                    <p v-if="windowSize >= 820"  class="funkot3 famap400 text-light">Este tópico traz soluções  para otimizar o espaço do quarto para uma pessoa e transformá-lo em um lugar apto e con- fortavel para estudo e trabalho   </p>
                    <p v-if="windowSize < 820"  class="funkot3 famap400 text-light">Este tópico traz soluções  para otimizar o espaço do quarto para uma pessoas e transformá-lo em um lugar apto e confortável para estudo e trabalho  </p>
                </div>
                
            </div>
        </div>
        
        <img v-if="img3 == 1" class="tamanho98" src="@/assets/fazer 1.svg" alt="Logo2">      
        <img v-if="img3 == 2" class="tamanho98" src="@/assets/precisar 5.svg" alt="Logo2">
        <img v-if="img3 == 3" class="tamanho98" src="@/assets/cuidados 1.svg" alt="Logo2">
        <img v-if="img3 == 4" class="tamanho98" src="@/assets/contratar 1.svg" alt="Logo2">
        <img v-if="img3 == 5" class="tamanho98" src="@/assets/saúde 1.svg" alt="Logo2">
        <img v-if="img3 == 6" class="tamanho98" src="@/assets/consultar 1.svg" alt="Logo2">
        <h1 class="text-light funk">{{ tex }}</h1>
                <div  v-if="img3 === 1" class=" size25 d-flex justify-content-between">
                    <div class="indicator25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                </div>
                <div  v-if="img3 === 2" class=" size25 d-flex justify-content-between">
                    <div class="indi25 "></div>
                    <div class="indicator25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                </div>
                <div  v-if="img3 === 3" class=" size25 d-flex justify-content-between">
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indicator25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                </div>
                <div  v-if="img3 === 4" class=" size25 d-flex justify-content-between">
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indicator25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                </div>
                <div  v-if="img3 === 5" class=" size25 d-flex justify-content-between">
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indicator25 "></div>
                    <div class="indi25 "></div>
                </div>
                <div  v-if="img3 === 6" class=" size25 d-flex justify-content-between">
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indicator25 "></div>
                </div>



    </div>
    <div v-if="slider === 1" class="d-flex tamanho animate__animated animate__slideInRight  justify-content-center align-items-center flex-column" >
        <h1 class="funko text-light famap400">Estudar/trabalhar em espaço pequeno</h1>
        <p class="text-light funko2 famap300">Estudar/trabalhar em espaço pequeno > Estudar/trabalhar em quarto para duas pessoas ou mais</p>
        <div class="d-flex w-100 justify-content-center align-items-center">
            <img class="tamanho89" src="@/assets/pict_trabalhar-estudar 1.svg" alt="Logo2">
            <div class="d-flex flex-column jutify-content-center align-items-center">
                <div class="conta d-flex justify-content-center align-items-center"> 
                    <p  class="funkot3 famap400 text-light">Este tópico traz soluções  para otimizar o espaço do quarto para duas pessoas e transformá-lo em um lugar apto e confortável para estudo e trabalho  </p>
                </div>
                
            </div>
        </div>
        
        <img v-if="img3 == 1" class="tamanho98" src="@/assets/fazer 1.svg" alt="Logo2">      
        <img v-if="img3 == 2" class="tamanho98" src="@/assets/precisar 5.svg" alt="Logo2">
        <img v-if="img3 == 3" class="tamanho98" src="@/assets/cuidados 1.svg" alt="Logo2">
        <img v-if="img3 == 4" class="tamanho98" src="@/assets/contratar 1.svg" alt="Logo2">
        <img v-if="img3 == 5" class="tamanho98" src="@/assets/saúde 1.svg" alt="Logo2">
        <img v-if="img3 == 6" class="tamanho98" src="@/assets/consultar 1.svg" alt="Logo2">
        <h1 class="text-light funk">{{ tex }}</h1>
        <div  v-if="img3 === 1" class=" size25 d-flex justify-content-between">
                    <div class="indicator25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                </div>
                <div  v-if="img3 === 2" class=" size25 d-flex justify-content-between">
                    <div class="indi25 "></div>
                    <div class="indicator25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                </div>
                <div  v-if="img3 === 3" class=" size25 d-flex justify-content-between">
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indicator25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                </div>
                <div  v-if="img3 === 4" class=" size25 d-flex justify-content-between">
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indicator25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                </div>
                <div  v-if="img3 === 5" class=" size25 d-flex justify-content-between">
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indicator25 "></div>
                    <div class="indi25 "></div>
                </div>
                <div  v-if="img3 === 6" class=" size25 d-flex justify-content-between">
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indi25 "></div>
                    <div class="indicator25 "></div>
                </div>

    </div>
    
</template>
<script>
    export default {
        name: 'Subguia23',
        props: {
            tex:{
                type: String,
                required: true,
            },
            img3: {
                type: Number,
                required: true,
            },
            slider: {
                type: Number,
                required: true,
            }
        },
        data(){
            return{
                windowSize : window.innerWidth,
            };
        },
        mounted(){
            window.addEventListener('resize', this.handleResize);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize); // Remove listener no destroy
        },        
        methods: {
            handleResize() {
                this.windowSize = window.innerWidth; // Atualiza windowWidth
            },
        },
    }

</script>
<style>
.size25 {

width: 35%;
margin-bottom: 1%;
}
.famap400{
    font-weight: 400 !important;
}
.famap300{
    font-weight: 300 !important;
}
.famap700{
    font-weight: 700 !important;
}
.funk {
    font-size: 3vw;
}
.indicator25 {
            width: 15%;
            background-color: rgb(255, 193, 7);
            border-radius: 24px;
            height: 0.8vw;
        }
    .indi25 {
            width: 15%;
            background-color: white;
            border-radius: 24px;
            height: 0.8vw;
        }
.funko {
    font-size: 4.3vw !important;
    margin-top: 3.3% !important;
}
.funko2 {
    font-size: 2vw !important;
    margin-bottom: 0;

}
.tamanho89 {
   height: auto;    
   width: 40% !important;
   margin-left: 7%;
   margin-bottom: 0.5% !important;
   margin-top: 1% !important;
        
}  
.tamanho98{
    margin-top: 0;
    height: auto;
    width: 4%;

} 
.conta{
    border: 3px solid  #FFC676;
    border-radius: 30px !important;
    width: 80%;
    padding: 2%;
  
}
.funkot3 {
    font-size: 1.8vw;
    margin: 0;

}
@media (max-width: 768px) {
    .conta {
        padding: 3%;
        border-radius: 20px !important;
        border: 2px solid  #FFC676;
        width: 91% !important;
    }
    .funkot3 {
        font-size: 2.05vw !important;
        margin: 0;
    }
    .funko2 {

        font-size: 2.1vw;
    }
    .funko {
        font-size: 4.6vw;
    }

}
@media (max-width: 600px) {
    .conta {
        padding: 3%;
        border-radius: 20px;
        border: 2px solid  #FFC676;
        width: 97% !important;
    }
    .funkot3 {
        font-size: 2.1vw !important;
        margin: 0;
    }
    .tamanho89 {
        width: 32% !important;
    }
    .funko2 {

        font-size: 2.2vw;
    }
    
}
   
    

    

</style>
