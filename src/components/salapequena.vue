<template>
    <div >
        <Navbar></Navbar>
        <guia25></guia25>
        <final25></final25>
    </div>
  </template>
  
  <script>
    import Navbar from './Navbar.vue';
    import guia25 from './guia25.vue';
    import final25 from './final25.vue';
    export default{
        name: 'salapequena',
        components: {
            Navbar,
            guia25,
            final25
        },
        data(){
        return{
              
        };
    },
};
  </script>
  <style>

</style>