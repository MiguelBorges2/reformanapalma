<template>
    <Navbar></Navbar>
    <Guia71></Guia71>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia71 from './guia71.vue';
    export default {
        name: 'Mobi',
        components:{
            Navbar,
            Final25,
            Guia71
        }
    }
</script>
