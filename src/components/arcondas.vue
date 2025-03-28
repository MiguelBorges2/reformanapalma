<template>
    <Navbar></Navbar>
    <Guia59 v-if="this.selector == 0"></Guia59>
    <Guia92 v-if="this.selector == 1"></Guia92>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia43 from './guia43.vue';
import Guia59 from './guia59.vue';
import Guia92 from './guia92.vue';
    export default {
        name: 'Arcondas',
        components:{
            Navbar,
            Guia59,
            Final25,
            Guia43,
            Guia92
        },
        props: {
            selector: {
                type: Number,
                required: true,
            }
        }
    }
</script>
<style>
</style>