<template>
    <Navbar></Navbar>
    <Guia76></Guia76>
    <Final25></Final25>
</template>
<script>
import Navbar from './Navbar.vue';
import Final25 from './final25.vue';
import Guia41 from './guia41.vue';
import Guia76 from './guia76.vue';
    export default {
        name: 'Acabarumidade2',
        components:{
            Navbar,
            Guia76,
            Final25,
            Guia41
        },
        props: {
            selector: {
                type: Number,
                required: true,
            }
        }
    }
</script>
