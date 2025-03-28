<template>
    <Navbar></Navbar>
    <Guia94></Guia94>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia59 from './guia59.vue';
import Guia94 from './guia94.vue';
    export default {
        name: 'Aquecimento',
        components:{
            Navbar,
            Final25,
            Guia94
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