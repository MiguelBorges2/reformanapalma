<template>
    <div class="container-fluid d-flex dip flex-column align-items-center justify-content-around height: auto">
        <div class="d-flex six gradient-bg2 flex-column align-items-center p-1 m-5">
            <h2 class="text-light yip2">Olá!</h2>
            <p class=" yip3 text-light">o que você gostaria de resolver em sua casa hoje?</p>
        </div>
        <Colaps :texto="'Consertar Telhado'" :cor="true"></Colaps>
        <Colaps :texto="'Estudar/trabalhar em espaço pequeno'":cor="false"></Colaps>
        <Colaps :texto="'Aumentar minha casa'" :cor="true"></Colaps>
        <Colaps :texto="'Acabar com a umidade'" :cor="false"></Colaps>
        <Colaps :texto="'Refrescar minha casa'" :cor="true"></Colaps>
        <Colaps :texto="'Ventilar e iluminar minha casa'" :cor="false"></Colaps>
        <Colaps :texto="'Adaptar minha casa para doenças contagiosas'" :cor="true"></Colaps>
        <Colaps :texto="'Adaptar minha casa para comércios e serviços'" :cor="false"></Colaps>
        <Colaps :texto="'Economizar energia'" :cor="true"></Colaps>
        <Colaps :texto="'Acessibilidade para idosos'" :cor="false"></Colaps>
    </div>
</template>

<script>
    import Colaps from './colaps.vue';
    export default {
        name: 'Seção',
        components: {
        Colaps
    },
    data(){
        return{
              
        }
    },
};

</script>
<style>
.six {
            width: 50%;
        }
.gradient-bg2 {
        background: linear-gradient(to top, #749695, #394A55);
        border-radius: 18px;
     }
 .yip3 {
        font-size: 2vw;
    }
.yip2 {
            font-size: 3vw;
        }

    
    @media (max-width: 768px) {
        .six {
            width: 52%;
        }
    }
</style>