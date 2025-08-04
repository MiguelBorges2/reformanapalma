<template>
    <Navbar></Navbar>
    <guia23></guia23>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import guia23 from './guia23.vue';
import Guia74 from './guia74.vue';

    export default {
        name: 'quartopraum',
        components:{
            Navbar,
            Final25,
            Guia74,
            guia23
        },
        props: {
            selector: {
                type: Number,
                required: true,
            }
        }
    }
</script>
