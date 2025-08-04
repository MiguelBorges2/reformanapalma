<template>
    <Navbar></Navbar>
    <Guia32></Guia32>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia32 from './guia32.vue';
import Guia510 from './guia510.vue';
import Guia62 from './guia62.vue';
    export default {
        name: 'criarpatios',
        components:{
            Navbar,
            Final25,
            Guia510,
            Guia32,
            Guia62
        },
        props: {
            selector: {
                type: Number,
                required: true,
            }
        }
    }
</script>

