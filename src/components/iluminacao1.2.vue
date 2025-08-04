<template>
    <Navbar></Navbar>
    <Guia61></Guia61>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia55 from './guia55.vue';
import Guia61 from './guia61.vue';

    export default {
        name: 'iluminacao12',
        components:{
            Navbar,
            Final25,
            Guia61,
            Guia55
        },
        props: {
            selector: {
                type: Number,
                required: true,
            }
        }
    }
</script>

