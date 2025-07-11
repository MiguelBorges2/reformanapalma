<template>
    <Navbar></Navbar>
    <Guia72></Guia72>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia72 from './guia72.vue';
    export default {
        name: 'Saudavel',
        components:{
            Navbar,
            Final25,
            Guia72
        }
    }
</script>
