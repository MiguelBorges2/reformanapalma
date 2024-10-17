<template>
    <div v-if="colors === true" class="d-flex cor flex-column align-items-center justify-content-center ">
        <h2 class="  margip2 yip4 text-light">{{ texto }}</h2>
        <div class="d-flex align-items-center justify-content-center">
                <button class=" fonte3 tip bg-warning  m-4 "> {{ bot1 }} </button>
                <button class=" fonte3 tip bg-warning  m-4 "> {{ bot2 }}</button>
        </div>
    </div>
    <div v-if="colors === false" class="d-flex w-100 gradient-bg flex-column align-items-center justify-content-center ">
        <h2 class=" margip yip4 text-light">{{ texto }}</h2>
        <div class="wid bg-warning pad margip3"></div>
        <h1 class="fonte4 text-light m-4">{{ texto2 }}</h1>
        <div class="d-flex align-items-center justify-content-center">
                <button class="fonte3 tip bg-warning   m-4 "> {{ bot1 }} </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Subfinal',
        props: {
            texto: {
                type: String,
                required: true
            },
            texto2: {
                type: String,
                required: false
            },
            bot1: {
                type: String,
                required: true
            },
            bot2: {
                type: String,
                required: false
            },
            colors: {
                type: Boolean,
                required: true
            }
            
        },
        data(){
            return{};
        },
    }
</script>

<style>
 .yip4 {
            font-size: 3vw;
        }
 .cor {
        background:   #749695; /* Ajuste as cores conforme necessário */
            
        }
        .gradient-bg {
    background: linear-gradient(to top, #749695, #394A55); 
    border-radius: 0 0 24px 24px;

}
.pad {
    padding: 0.2%;
}
.fonte3{
            font-size: 1.5vw;
        }
.margip{
    margin-top: 3%;
    margin-bottom: 5%;
}
.margip2{
    margin-top: 3%;
    margin-bottom: 6%;
}
.margip3{
    margin-bottom: 2%;
}
.tip {
            border-radius: 24px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
        }

.wid{
    width: 50%;
}
.fonte4{
    font-size: 1.6vw;
}
</style>