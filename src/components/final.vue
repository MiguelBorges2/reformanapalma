<template>
    <div class="container-fluid height: auto">
        <Subfinal :colors="true" :texto="'Baixe as cartilhas com as orientações completas'"  :bot1="'baixe a cartilha para o morador'" :bot2="'baixe a cartilha para o profissional'"></subfinal>
        <Subfinal :colors="false" :texto="'Antes de continuar, você teve algum outro problema?'"  :bot1="'baixe a cartilha para o morador'" :bot2="'baixe a cartilha para o profissional'" :texto2="'Clique no botão abaixo e preencha o formulário para ajidar a melhorar os conteúdos da plataforma'"></subfinal>

    </div>
</template>

<script>
import Subfinal from './subfinal.vue';

export default{
    name: "Final",
    components: {
        Subfinal,
    }
}

</script>