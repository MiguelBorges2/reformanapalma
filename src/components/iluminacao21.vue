<template>
    <Navbar></Navbar>
    <Guia93></Guia93>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia93 from './guia93.vue';
import Guia63 from './guia63.vue';

    export default {
        name: 'iluminacao21',
        components:{
            Navbar,
            Final25,
            Guia63,
            Guia93
        },
        props: {
            selector: {
                type: Number,
                required: true,
            }
        }
    }
</script>

