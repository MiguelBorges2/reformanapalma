<template>
    <div >
        <Navbar></Navbar>
        <guia81></guia81>
        <final25></final25>
    </div>
  </template>
  
  <script>
    import Navbar from './Navbar.vue';
    import guia81 from './guia81.vue';
    import final25 from './final25.vue';
    export default{
        name: 'Renda',
        components: {
            Navbar,
            guia81,
            final25
        },
        data(){
        return{
              
        };
    },
};
  </script>
  