<template>
    <div class="container-fluid d-flex dip flex-column align-items-center justify-content-around height: auto">
        <div  class="d-flex six gradient-bg2 flex-column align-items-center   margi66 ">
            <h2 class="text-light  yip2">Olá!</h2>
            <p class=" yip89 text-light ">O que você gostaria de resolver em sua casa hoje?</p>
        </div>
        <div id="sec" class="w-100 d-flex dip flex-column align-items-center justify-content-around">
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
             windowWidth: window.innerWidth,
        };
    },
    mounted() {
            window.addEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize(){
            this.windowWidth = window.innerWidth;
        },
    }
    
};

</script>
