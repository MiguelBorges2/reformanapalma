<template>
      <div v-if="cor == true" class="d-flex border border-dark custi color1 m-3">
            <div class=" d-flex  justify-content-center bg-light custi2 align-item-center">
                <span class="yip3">{{ texto }}</span>
            </div>
            <button  class="btn color1 btn-arrow"> &#9660;</button>
        </div>
        <div v-else class="d-flex border border-dark custi color2 m-3">
            <div class=" d-flex  justify-content-center bg-light custi2 align-item-center">
                <span class="yip3">{{ texto }}</span>
            </div>
            <button  class="btn  color2 btn-arrow"> &#9660;</button>
        </div>
</template>

<script>
    export default {
        name: 'Colaps',
        props: {
            texto: {
                type: String,
                required: true
            },
            cor: {
                type: Boolean,
                required: true
            }
        },
        data(){
            return{};
        },
    }
</script>
<style>
  .color1 {
    background-color:#749695 ;

  }
  .color2 {
    background-color: #394A55;
  }
  .custi {
        width: 75%;
        border-radius: 24px;
    }
  .custi2 {
    width: 95%;
    border-radius: 24px 0 0 24px;
    padding: 20px;
        }
        
    .btn-arrow {
        font-size: 20px;
        background: none;
            border: none;
            cursor: pointer;
            color: white;
        }
    .gradient-bg3 {
            background:  #618ab6; /* Ajuste as cores conforme necessário */
            
        }

</style>