<template>
    <Navbar></Navbar>
    <Guia84></Guia84>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia84 from './guia84.vue';
    export default {
        name: 'Persona',
        components:{
            Navbar,
            Final25,
            Guia84
        }
    }
</script>
<style>
</style>