<template>
    <Navbar></Navbar>
    <Guia54></Guia54>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia43 from './guia43.vue';
import Guia54 from './guia54.vue';
import Guia78 from './guia78.vue';
    export default {
        name: 'Adaptartemp2',
        components:{
            Navbar,
            Guia54,
            Final25,
            Guia43,
            Guia78
        },
        props: {
            selector: {
                type: Number,
                required: true,
            }
        }
    }
</script>
