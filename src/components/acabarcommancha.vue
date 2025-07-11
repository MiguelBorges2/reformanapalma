<template>
    <Navbar></Navbar>
    <Guia42 v-if="this.selector == 0"></Guia42>
    <Guia77 v-if="this.selector == 1"></Guia77>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia42 from './guia42.vue';
import Guia77 from './guia77.vue';
    export default {
        name: 'Acabarcommancha',
        components:{
            Navbar,
            Guia77,
            Final25,
            Guia42
        },
        props: {
            selector: {
                type: Number,
                required: true,
            }
        }
    }
</script>
