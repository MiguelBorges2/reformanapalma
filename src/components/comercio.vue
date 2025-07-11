<template>
    <Navbar></Navbar>
    <Guia82></Guia82>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia82 from './guia82.vue';
import Guia12 from './guia12.vue';
    export default {
        name: 'Comercio',
        components:{
            Navbar,
            Guia12,
            Final25,
            Guia82
        }
    }
</script>
