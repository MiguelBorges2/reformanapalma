<template>
    <Navbar></Navbar>
    <Guia51></Guia51>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia51 from './guia51.vue';
    export default {
        name: 'Materi',
        components:{
            Navbar,
            Final25,
            Guia51
        }
    }
</script>
