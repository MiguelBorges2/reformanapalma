<template>
    <Navbar></Navbar>
    <Guia101></Guia101>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia101 from './guia101.vue';
import Guia72 from './guia72.vue';
    export default {
        name: 'Realizar',
        components:{
            Navbar,
            Final25,
            Guia101
        }
    }
</script>
