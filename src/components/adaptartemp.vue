<template>
    <Navbar></Navbar>
    <Guia43 v-if="this.selector == 0"></Guia43>
    <Guia54 v-if="this.selector == 1"></Guia54>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia43 from './guia43.vue';
import Guia54 from './guia54.vue';
    export default {
        name: 'Adaptartemp',
        components:{
            Navbar,
            Guia54,
            Final25,
            Guia43
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