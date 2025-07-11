<template>
    <Navbar></Navbar>
    <Guia55 v-if="this.selector == 0"></Guia55>
    <Guia61 v-if="this.selector == 1"></Guia61>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia55 from './guia55.vue';
import Guia61 from './guia61.vue';

    export default {
        name: 'iluminacao',
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

