<template>
    <Navbar></Navbar>
    <Guia73></Guia73>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import guia22 from './guia22.vue';
import Guia73 from './guia73.vue';

    export default {
        name: 'quartoparacasal2',
        components:{
            Navbar,
            Final25,
            Guia73,
            guia22
        },
        props: {
            selector: {
                type: Number,
                required: true,
            }
        }
    }
</script>

