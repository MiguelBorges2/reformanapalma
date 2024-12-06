<template>
    <div class="container-fluid d-flex dip flex-column align-items-center justify-content-around height: auto">
        <div class="d-flex six gradient-bg2 flex-column align-items-center   margi66 ">
            <h2 class="text-light  yip2">Olá!</h2>
            <p class=" yip3 text-light ">o que você gostaria de resolver em sua casa hoje?</p>
        </div>
        <Colaps1></Colaps1>
        <Colaps2></Colaps2>
        <Colaps3></Colaps3>
        <Colaps4></Colaps4>
        <Colaps5></Colaps5>
        <Colaps6></Colaps6>
        <Colaps7></Colaps7>
        <Colaps8></Colaps8>
        <Colaps9></Colaps9>
        
    </div>
</template>

<script>
    import Colaps1 from './colaps1.vue';
    import Colaps2 from './colaps2.vue';
    import Colaps3 from './colaps3.vue';
    import Colaps4 from './colaps4.vue';
    import Colaps5 from './colaps5.vue';
    import Colaps6 from './colaps6.vue';
    import Colaps7 from './colaps7.vue';
    import Colaps8 from './colaps8.vue';
    import Colaps9 from './colaps9.vue';
    export default {
        name: 'Seção',
        components: {
        Colaps1,
        Colaps2,
        Colaps3,
        Colaps4,
        Colaps5,
        Colaps6,
        Colaps7,
        Colaps8,
        Colaps9
    },
    data(){
        return{
              
        }
    },
};

</script>
<style>
.margi66{
    margin: 5%;
    padding: 1%;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2); /* Sombra abaixo da div */
}
.six {
            width: 50%;
        }

.gradient-bg2 {
        background: linear-gradient(to top, #749695, #394A55);
        border-radius: 18px;
     }
 .yip3 {
        font-size: 2vw;
        font-weight: 50;
    }
.yip2 {
            font-size: 3.2vw;
        }
.pad {
    padding: 0;
}
    
    @media (max-width: 768px) {
        .six {
            width: 52%;
        }
    }
</style>