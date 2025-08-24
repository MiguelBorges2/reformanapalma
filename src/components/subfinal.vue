<template>
    <div v-if="colors === true" class="d-flex cor w-100 flex-column align-items-center mt-1 justify-content-center ">
        <h2 class="  margip masto22 text-light">{{ texto }}</h2>
        <div class="d-flex w-100 align-items-center justify-content-center">
                <button @click = "toggleOverlay()" class=" milk  tip  colo45  mako2 masto margip6 p-1 "> {{ bot2 }}</button>
                <div v-if="showOverlay" class="overlay d-flex justify-content-center align-items-center" @click=" toggleOverlay()">
                    <div class="d-flex formulario  align-items-center justify-content-center " @click.stop >
                        <button @click="subcont"  class="btn-hover-yellow2  border btn-round2 ">
                            <
                        </button>
                          <div v-if="this.controler === 1" class="d-flex flex-column align-items-center justify-content-around form2">
                                    <p class="text-light margo34">Responda o formulário abaixo para </p>
                                    <p class="text-light margo43" >baixar a cartilha desejada</p>
                                    <input class="margo2" type="text" id="username" name="username" placeholder="Nome...">
                                    <div @click="make()"v-if="this.diy === false" class="margo3 d-flex justify-content-between align-items-center">
                                        <p id="sapato " class="margo431 m-0">{{ tet }} </p>
                                        <span class="me-1"> &#709</span>
                                    </div>
                                    <div @click="make()" v-if="this.diy === true "class="margo5 d-flex flex-column justify-content-center align-items-center">
                                        <div class="margo4 d-flex justify-content-between align-items-center">
                                            <p  class="margo431 m-0" id="sapato2" >{{ tet }} </p>
                                            <span class="me-1"> ></span>
                                        </div>
                                        <div @click="matuto('Sou morador (a)')"  class="margo4 d-flex justify-content-between align-items-center">
                                            <p class="m-0 margo431">Sou morador (a)</p>
                                            <span class="me-1"> ></span>
                                        </div>
                                        <div @click="matuto('Sou arquiteto (a)')" class="margo4 d-flex justify-content-between align-items-center">
                                            <p class="m-0 margo431">Sou arquiteto (a)</p>
                                            <span class="me-1"> ></span>
                                        </div>
                                        
                                    </div>
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
        <div class="masto d-flex flex-column justify-content-center align-items-center">
            <h2 class=" margip yip4 text-light">{{ texto }}</h2>
            <h2 class=" margip yip4 text-light">{{ texto4 }}</h2>
        </div>
        <div class="enchimento"></div>
        <div class="wid  pad margip3"></div>
        <div class="masto w-100 d-flex flex-column justify-content-center align-items-center">
            <h1 class="fonte4 m-0 text-light margip6">{{ texto2 }}</h1>
            <h1 class="fonte4 m-0 text-light margip6">{{ texto3 }}</h1>
        </div>
        
        <div class="d-flex align-items-center justify-content-center">
                <button class="margip6 tip  colo45  p-2 pad2 marko  pips "> {{ bot1 }} </button>
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
            texto3: {
                type: String,
                required: false,
            },
            texto4: {
                type: String,
                required: false,
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
                diy: false,
                tet: "Em qual perfil você se enquadra...",
            };
        },
        methods: {
            make(){
                this.diy = !this.diy;
            },
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
            matuto(string){
                this.tet = string;
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

