<template>
    <div v-if="colors === true" class="d-flex cor w-100 flex-column align-items-center mt-1 justify-content-center ">
        <h2 class="  margip2 yip4 text-light">{{ texto }}</h2>
        <div class="d-flex w-100 align-items-center justify-content-center">
                <button @click = "toggleOverlay()" class=" fonte3 tip  colo45  mako2 margip6 p-1 "> {{ bot2 }}</button>
                <div v-if="showOverlay" class="overlay d-flex justify-content-center align-items-center" @click=" toggleOverlay()">
                    <div class="d-flex formulario  align-items-center justify-content-center " @click.stop >
                        <button @click="subcont"  class="btn-hover-yellow2  border btn-round2 ">
                            <
                        </button>
                        <div v-if="this.controler === 1" class="d-flex flex-column align-items-center justify-content-around form2">
                            <p class="text-light margo">Responda o formulário abaixo para baixar a cartilha desejada</p>
                            <input class="margo2" type="text" id="username" name="username" placeholder="Nome...">
                            <input class="margo2" type="text" id="username" name="username" placeholder="Em qual perfil você se enquadra...">
                            <input class="margo2" type="text" id="username" name="username" placeholder="Email ou WhatsApp...">
                            <div class="d-flex w-50 justify-content-center align-items-center ">
                                <div class=" calca "></div>
                                <div class=" calca2 "></div>
                            </div>
                        </div>
                        <div v-if="this.controler === 2" class="d-flex flex-column align-items-center justify-content-between form2">
                            <div class="w-100 d-flex flex-column align-items-center justify-content-around ">
                                <p class="text-light margo34">Pronto! Agora você já pode baixar as cartilhas  com as orientações</p>
                                <p class="text-light margo43">técnicas de acordo com suas necessidades</p>
                            </div>
                            <button class="mocombo"> Baixe a cartilha do arquiteto</button>
                            <div class="d-flex w-50 justify-content-center align-items-center ">
                                <div class=" calca2 "></div>
                                <div class=" calca "></div>
                            </div>

                        </div>
                        <button @click="addcont"  class="btn-hover-yellow2  border btn-round2 ">
                        >
                        </button>
                    </div>

                </div>

        </div>
    </div>
    <div v-if="colors === false" class="d-flex w-100 camelo flex-column align-items-center justify-content-center ">
        <h2 class=" margip yip4 text-light">{{ texto }}</h2>
        <div class="wid  pad margip3"></div>
        <h1 class="fonte4 text-light margip6">{{ texto2 }}</h1>
        <div class="d-flex align-items-center justify-content-center">
                <button class="fonte3 tip  colo45  p-2 pad2 marko  "> {{ bot1 }} </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Subfinal',
        props: {
            texto: {
                type: String,   
                required: true
            },
            texto2: {
                type: String,
                required: false
            },
            bot1: {
                type: String,
                required: true
            },
            bot2: {
                type: String,
                required: false
            },
            colors: {
                type: Boolean,
                required: true
            }
            
        },
        data(){
            return{
                showOverlay: false,
                controler: 1,
            };
        },
        methods: {
            toggleOverlay(){
                this.showOverlay = !this.showOverlay;
                console.log('showOverlay:', this.showOverlay);
            },
            subcont(){
                if(this.controler === 2) {
                    this.controler = 1;
                }
                console.log(this.controler);
            },
            addcont(){
                if (this.controler === 1) {
                    this.controler = 2;
                }
                console.log(this.controler);
            }
        }
    }
</script>

<style>
.btn-hover-yellow2:hover {
    background-color:   #FFC676;
    
}
.calca {
    background-color:  #FFC676;
    width: 8%;
    padding: 1%;
    border-radius: 60px;
    margin-right:2%;
    margin-bottom: 8%;
    margin-top: 4%;
}
.calca2 {
    background-color: white;
    width: 8%;
    padding: 1%;
    border-radius: 60px;
    margin-right: 2%;
    margin-bottom: 8%;
    margin-top: 4%;
}
.btn-round2 {  
  height: 3vw;
  width: 3.5%;      
  padding: 0;              
  display: flex;           
  align-items: center;     
  justify-content: center; 
  border-radius: 80px;
  background: transparent;     
  color: white;            
  border: 1px solid white; 
  transition: background-color 0.3s ease; 
  margin: 0.1%;
}
.mocombo {
    width: 70%;
    border-radius: 60px;
    padding: 1.5%;
    background-color:#FFC676;
    margin: 8.7%;
    border: none;
    color:#4A4A48;
    font-weight: 500;
    font-size: 1.5vw;
}
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);  /* Fundo opaco (transparente) */
    z-index: 999; /* Garantir que o fundo fique acima de outros elementos */
}
 .yip4 {
        font-size: 3vw;
    }   
  .marko {
    margin-top: 3%;
    margin-bottom: 25%; 
    background-color: #FFC676;
    border: none;
  }
  .formulario { 
    width: 90%;
    background: linear-gradient(to top, #749695, #394A55); 
    border-radius: 50px;

  }
  .form2 {
    width: 90%;
  }
 .cor {
        background:   #749695; /* Ajuste as cores conforme necessário */
            
        }
.camelo {
    background: linear-gradient(to top, #749695, #394A55); 

}
.pad {
    padding: 0.2%;
    background-color: #FFC676;
}
.fonte3{
            font-size: 1.5vw;
        }
.margip{
    margin-top: 8%;
    margin-bottom: 3%;  

}
.margip6{
    margin: 3%;
    
}
.margo {
    margin-top: 5%;
    margin-bottom: 3%;
    font-size: 1.5vw;
}
.margo34 {
    margin-top: 5%;
    margin-bottom: 0;
    font-size: 1.5vw;
}
.margo43 {
    margin-bottom: 1%;
    font-size: 1.5vw;
}

.margo2 {
    margin-bottom: 3%;
    font-size: 2vw;
    width: 75%;
    border-radius: 60px;
    border-width: 2px;;
    border-color: #568D8B;
    padding: 0.5%;
}
.mako2 {
    background-color: #FFC676;
    border: none;
}
.margip2{
    margin-top: 3%;
    margin-bottom: 6%;
}

.margip3{
    margin-bottom: 2%;
}
.tip {
            border-radius: 24px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
        }

.wid{
    width: 50%;
}
.colo452 {
    color: #4A4A48;
    font-weight: 450;
}
.fonte4{
    font-size: 1.7vw;
}
@media (max-width: 768px) {
    .formulario {
        border-radius: 30px;
    }
    .margo {
        font-size: 1.7vw;
    }
    .fonte3 {
        font-size: 1.7vw;
    }
    .fonte4 {
        font-size: 1.9vw;
    }
    
}

</style>