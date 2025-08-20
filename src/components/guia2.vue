<template>

<div class="w-100">
    <div v-if="this.controlador[0] === 0"class="w-100 d-flex justify-content-around  alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        <div  class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp colo48 "> Conheça o reforma</h1>
            <div class="wid  pad margip3"></div>
            <span class="w-80 margaro">
                <p class="hmp22 text-align cril2">O Reforma na Palma da Mão disponibiliza dicas para facilitar reformas de moradias. O conteúdo, organizado por especialistas, melhora a qualidade de vida. Moradores, arquitetos e prestadores de serviços podem acessar informações práticas e acessíveis.</p>
            </span>
            <div class=" setune d-flex flex-column justify-content-center align-items-center ">
                <p class="hmp33 cril2">E fique atento sempre que este botão aparacer</p>
                <a class="w-100 nolink d-flex justify-content-center" href="https://www.caumg.gov.br/"><button class="tip colo4 nolans lalula p-1 pad2 marko25 "> Ache um Arquiteto </button></a>
                <p  class="hmp33 cril2 text-align"> Significa que é OBRIGATÓRIO buscar a ajuda de um profissional.  </p>
                <p  class="hmp33 cril2 text-align"> Ao clicar no botão, você será redirecionado para o portal do CAU</p>
               
            
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indicator "></div>
                    <div class="indi34 "></div>
                    <div class="indi34 "></div>
                    <div class="indi34 "></div>
                </div>

        </div>
        
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            >
        </button>
    </div>
    <div v-if="this.controlador[0] === 1"class="w-100 d-flex justify-content-between  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        <div  class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp colo48 text-light"> Como Funciona o Reforma</h1>
            <div class="wid  pad margip3"></div>
            <span class="w-80 margaro">
                <p class="hmp22 text-align cril2 text-light">O Reforma na Palma da Mão disponibiliza dicas para facilitar reformas de moradias. O conteúdo, organizado por especialistas, melhora a qualidade de vida. Moradores, arquitetos e prestadores de serviços podem acessar informações práticas e acessíveis.</p>
            </span>
            <div class="d-flex w-100 justify-content-center align-items-center">
                <img class="tami2" src="@/assets/trem.svg" alt="Logo2">
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indi "></div>
                    <div class="indicator "></div>
                    <div class="indi "></div>
                    <div class="indi "></div>
                </div>

        </div>
        
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            >
        </button>
    </div>
    <div v-if="this.controlador[0] === 2"class="w-100 d-flex justify-content-between  alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        <div  class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp colo48 "> Como Funciona o Reforma</h1>
            <div class="wid  pad margip3"></div>
            <span class="w-80 margaro">
                <p class="hmp22 text-align cril2">Além dos tópicos sobre problemas e necessidades das habitações, nosso site também oferece conteúdos extras na página inicial. Eles podem ser acessados rolando a página ou clicando nos botões dos banners principais acima dos tópicos. Você também pode acess-a-los clicando nos botões abaixo:</p>
            </span>
            <img class="tami2" src="@/assets/trem2.svg" alt="Logo2">
            <div class=" size d-flex justify-content-between">
                    <div class="indi34 "></div>
                    <div class="indi34 "></div>
                    <div class="indicator "></div>
                    <div class="indi34 "></div>
                </div>

        </div>
        
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            >
        </button>
    </div>
    <div v-if="this.controlador[0] === 3"class="w-100 d-flex justify-content-between  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow text-light btn-round edit">
            <
        </button>
        <div  class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp colo48 text-light">Evolução do Reforma</h1>
            <div class="wid  pad margip3"></div>
            <span class="w-80 margaro">
                <p class="hmp22 text-align cril2 text-light">O Reforma na Palma da Mão disponibiliza dicas para facilitar reformas de moradias. O conteúdo, organizado por especialistas, melhora a qualidade de vida. Moradores, arquitetos e prestadores de serviços podem acessar informações práticas e acessíveis.</p>
            </span>
            <div class="d-flex w-100 justify-content-center align-items-center">
                <img class="tami2" src="@/assets/trem.svg" alt="Logo2">
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indi "></div>
                    <div class="indi "></div>
                    <div class="indi "></div>
                    <div class="indicator "></div>
                </div>

        </div>
        
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            >
        </button>
    </div>
    <div id="antes">
        <div v-if="this.controlador[0] === 0" class="w-100 d-flex justify-content-between  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            <
        </button>
        <div class="d-flex flex-column justify-content-center  align-items-center tamanho">
            <h1 class="hmp text-light"> Propostas de Reforma</h1>
            <div class="wid  pad margip3"></div>
            <div class="wiwi d-flex justify-content-center">
                    <img class="tami" src="@/assets/image3.svg" alt="Logo2">
                    <img class="tami" src="@/assets/image2.svg" alt="Logo2">
                        
    
                </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
                <span class="w-100 margaro">
                    <p class="hmp22 text-light text-align">Ana Silva usou o tópico "Aumentar minha casa" do site "Reforma na Palma da Mão" na oficina de coprodução. Com maquetes 3D e planejamento detalhado, planejou sua cozinha em um espaço mais funcional para sua família.</p>
                    
                
                </span>
                
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indicator "></div>
                    <div class="indi "></div>
                    <div class="indi"></div>
                    <div class="indi "></div>
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            >
        </button>
    </div> 
    <div v-if="this.controlador[0] === 1" class="w-100 d-flex justify-content-between  alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            <
        </button>
        <div class="d-flex flex-column justify-content-center  align-items-center tamanho">
            <h1 class="hmp"> Propostas de Reforma</h1>
            <div class="wid  pad margip3"></div>
            <div class="wiwi d-flex justify-content-center">
                    <img class="tami" src="@/assets/image3.svg" alt="Logo2">
                    <img class="tami" src="@/assets/image2.svg" alt="Logo2">
                        
    
                </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
                <span class="w-100 margaro">
                    <p class="hmp22 text-align">Ana Silva usou o tópico "Aumentar minha casa" do site "Reforma na Palma da Mão" na oficina de coprodução. Com maquetes 3D e planejamento detalhado, planejou sua cozinha em um espaço mais funcional para sua família.</p>
                    
                
                </span>
                
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indi34 "></div>
                    <div class="indicator "></div>
                    <div class="indi34 "></div>
                    <div class="indi34 "></div>
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            >
        </button>
    </div> 
    <div v-if="this.controlador[0] === 2" class="w-100 d-flex justify-content-between alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        <div class="d-flex flex-column justify-content-center  align-items-center tamanho">
            <h1 class="hmp text-light"> Propostas de Reforma</h1>
            <div class="wid  pad margip3"></div>
            <div class="wiwi d-flex justify-content-center">
                    <img class="tami" src="@/assets/image3.svg" alt="Logo2">
                    <img class="tami" src="@/assets/image2.svg" alt="Logo2">
                        
    
                </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
                <span class="w-100 margaro">
                    <p class="hmp22 text-light text-align">Ana Silva usou o tópico "Aumentar minha casa" do site "Reforma na Palma da Mão" na oficina de coprodução. Com maquetes 3D e planejamento detalhado, planejou sua cozinha em um espaço mais funcional para sua família.</p>
                    
                
                </span>
                
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indi "></div>
                    <div class="indi "></div>
                    <div class="indicator"></div>
                    <div class="indi "></div>
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            >
        </button>
    </div> 
    <div v-if="this.controlador[0] === 3" class="w-100 d-flex justify-content-between  alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            <
        </button>
        <div class="d-flex flex-column justify-content-center  align-items-center tamanho">
            <h1 class="hmp"> Propostas de Reforma</h1>
            <div class="wid  pad margip3"></div>
            <div class="wiwi d-flex justify-content-center">
                    <img class="tami" src="@/assets/image3.svg" alt="Logo2">
                    <img class="tami" src="@/assets/image2.svg" alt="Logo2">
                        
    
                </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
                <span class="w-100 margaro">
                    <p class="hmp22 text-align">Ana Silva usou o tópico "Aumentar minha casa" do site "Reforma na Palma da Mão" na oficina de coprodução. Com maquetes 3D e planejamento detalhado, planejou sua cozinha em um espaço mais funcional para sua família.</p>
                    
                
                </span>
                
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indi34 "></div>
                    <div class="indi34 "></div>
                    <div class="indi34 "></div>
                    <div class="indicator "></div>
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            >
        </button>
    </div> 
</div>
    
<div id="prob">
    <div v-if="this.controlador[0] === 0" class="w-100 d-flex justify-content-between alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        <div class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp colo48"> Problemas da Autoconstrução</h1>
            <div class="wid  pad margip3"></div>
            <span class="w-80 margaro">
                <p class="hmp22 text-align  cril2">A autoconstrução, feita sem profissionais, pode ser arriscada e resultar em projetos inadequados. O CAU/BR oferece uma lista de profissionais qualificados. Para mais informações, acesse os artigos do [MORA] e a lista do CAU/BR.</p>
                
            </span>
            <div class="setune3 d-flex flex-column justify-content-around align-items-center">
                <p class="hmp33 mt-3 cril2">Clique para acesso à lista de arquitetos recomendados pelo</p>
                <p class="hmp33 cril2">Conselho de Arquitetura e Urbanismo (CAU/BR)</p>
                <div class="d-flex w-100 align-items-center justify-content-center">
                    <button @click="toggleOverlay3()" class=" tip  lalula colo4  mako2  p-1">  Conteúdos </button>
                    <div v-if="this.overlay3" class="overlay d-flex justify-content-center align-items-center" @click=" toggleOverlay3()">
                            <div class="d-flex formulario  align-items-center justify-content-center " @click.stop >
                                <button @click="subcont"  class="btn-hover-yellow2  border btn-round2 ">
                                    <
                                </button>
                                <div v-if="this.controler === 1" class="d-flex flex-column align-items-center justify-content-around form2">
                                    <p class="text-light margo34">Responda o formulário abaixo para </p>
                                    <p class="text-light margo43" >baixar a cartilha desejada</p>
                                    <input class="margo2" type="text" id="username" name="username" placeholder="Nome...">
                                    <div @click="make()"v-if="this.diy === false" class="margo3 d-flex justify-content-between align-items-center">
                                        <p id="sapato" class="m-0">{{ tet }} </p>
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
                                        <p class="text-light margo34">Pronto! Agora você já pode baixar as pesquisas</p>
                                        <p class="text-light margo43">conforme sua necessidade</p>
                                    </div>
                                
                                    <div class="mocombi d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center mocombo2">Clima e projeto: impactos sobre o conforto...</span>
                                        <img class="gats" src="@/assets/elements.svg"></img>
                                    </div>
                                    
                                    <div class="mocombi d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center mocombo2">Os impactos nas atividades de geração de...</span>
                                        <img class="gats" src="@/assets/elements.svg"></img>
                                    </div>
                                    
                                    <div class="mocombi d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center mocombo2">Resiliência no ambiente construído em...</span>
                                        <img class="gats" src="@/assets/elements.svg"></img>
                                    </div>
                                    
                                    <div class="mocombi d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center mocombo2">[CASA RESILIENTE] Estratégias projetuais...</span>
                                        <img class="gats" src="@/assets/elements.svg"></img>
                                    </div>
                                    
                                    <div class="mocombi d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center mocombo2">Estratégias “na palma da mão” para uma...</span>
                                        <img class="gats" src="@/assets/elements.svg"></img>
                                    </div>
                                    
                                    <div class="mocombi d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center mocombo2">Mais espaço, por favor: adaptações...</span>
                                        <img class="gats" src="@/assets/elements.svg"></img>
                                    </div>
                                      <div class="mocombi d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center mocombo2">Transformações habitacionais e seus...</span>
                                        <img class="gats" src="@/assets/elements.svg"></img>
                                    </div>
                                      <div class="mocombi d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center mocombo2">How uncomfortable and unhealthy...</span>
                                        <img class="gats" src="@/assets/elements.svg"></img>
                                    </div>
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
                 
            
                   <a class="nolink lalula  d-flex justify-content-center" href="https://www.caumg.gov.br/"><button class="  tip  colo4 mako2  p-1 "> Ache um Arquiteto</button></a>
                </div>
                
                
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indicator "></div>
                    <div class="indi34 "></div>
                    <div class="indi34 "></div>
                    <div class="indi34 "></div>
            </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            >
        </button>
    </div>
    <div v-if="this.controlador[0] === 1" class="w-100 d-flex justify-content-between alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        <div class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp colo48 text-light"> O que é ATHIS?</h1>
            <div class="wid  pad margip3"></div>
            <span class="w-80 margaro">
                <p class="hmp22 text-align  text-light cril2">A ATHIS (Assistência Técnica para Habitação de Interesse Social), Lei 11.888/2008, oferece assistência técnica gratuita para melhoria de moradias de baixa renda realizados por profissionais. Moradores elegíveis podem procurar prefeituras para acessar esses serviços.</p>
                
            </span>
            <div class="setune3 d-flex flex-column justify-content-around align-items-center">
                <p class="hmp33 mt-3 text-light cril2">Clique no botão abaixo e saiba sobre o ATHIS</p>
                <div class="d-flex w-100 align-items-center justify-content-center">
                    <button @click="toggleOverlay2()" class=" tip  lalula colo4  mako2  p-1">  Saiba mais </button>
                    <div v-if="overlay2" class="overlay d-flex justify-content-center align-items-center" @click=" toggleOverlay2()">
                        <div class="d-flex formulario  align-items-center justify-content-center " @click.stop >
                            <button @click="subcont"  class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
                                <
                            </button>
                            <div v-if="this.controler2 === 1" class="d-flex flex-column align-items-center justify-content-around form2">
                                <p class="text-light margo">Responda o formulário abaixo para baixar a cartilha desejada</p>
                                <input class="margo2" type="text" id="username" name="username" placeholder="Nome...">
                                <input class="margo2" type="text" id="username" name="username" placeholder="Em qual perfil você se enquadra...">
                                <input class="margo2" type="text" id="username" name="username" placeholder="Email ou WhatsApp...">
                                <div class="d-flex w-50 justify-content-center align-items-center ">
                                    <div class=" calca "></div>
                                    <div class=" calca2 "></div>
                                </div>
                            </div>
                        
                        <div v-if="this.controler2 === 2" class="d-flex flex-column align-items-center justify-content-between form2">
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

                   
                        <button @click="addcont"  class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
                                >
                        </button>
                    </div>
                </div>

                </div>
                
                
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indi "></div>
                    <div class="indicator "></div>
                    <div class="indi "></div>
                    <div class="indi "></div>
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            >
        </button>
    </div>

    <div v-if="this.controlador[0] === 2" class="w-100 d-flex justify-content-between alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        <div class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp colo48"> Saiba mais sobre o ATHIS</h1>
            <div class="wid  pad margip3"></div>
            <span class="w-80 margaro">
                <p class="hmp22 text-align margaro cril2">A ATHIS (Assistência Técnica para Habitação de Interesse Social), Lei 11.888/2008, oferece assistência técnica gratuita para melhoria de moradias de baixa renda realizados por profissionais. Moradores elegíveis podem procurar prefeituras para acessar esses serviços.</p>
                
            </span>
            <div class="setune3 d-flex flex-column justify-content-around align-items-center">
                <p class="hmp33 mt-3 cril2">Clique no botão abaixo e saiba sobre o ATHIS</p>
                <div class="d-flex w-100 align-items-center justify-content-center">
                    <button @click="toggleOverlay2()" class=" tip  lalula colo4  mako2  p-1">  Saiba mais </button>
                    <div v-if="overlay2" class="overlay d-flex justify-content-center align-items-center" @click=" toggleOverlay2()">
                        <div class="d-flex formulario  align-items-center justify-content-center " @click.stop >
                            <button @click="subcont"  class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
                                <
                            </button>
                            <div v-if="this.controler2 === 1" class="d-flex flex-column align-items-center justify-content-around form2">
                                <p class="text-light margo">Responda o formulário abaixo para baixar a cartilha desejada</p>
                                <input class="margo2" type="text" id="username" name="username" placeholder="Nome...">
                                <input class="margo2" type="text" id="username" name="username" placeholder="Em qual perfil você se enquadra...">
                                <input class="margo2" type="text" id="username" name="username" placeholder="Email ou WhatsApp...">
                                <div class="d-flex w-50 justify-content-center align-items-center ">
                                    <div class=" calca "></div>
                                    <div class=" calca2 "></div>
                                </div>
                            </div>
                        
                        <div v-if="this.controler2 === 2" class="d-flex flex-column align-items-center justify-content-between form2">
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

                   
                        <button @click="addcont"  class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
                                >
                        </button>
                    </div>
                </div>

                </div>
                
                
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indi34 "></div>
                    <div class="indi34 "></div>
                    <div class="indicator "></div>
                    <div class="indi34 "></div>
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            >
        </button>
    </div>
    <div v-if="this.controlador[0] === 3" class="w-100 d-flex justify-content-between  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            <
        </button>
        <div class="d-flex flex-column justify-content-center  align-items-center tamanho">
            <h1 class="hmp text-light"> O que é HIS?</h1>
            <div class="wid  pad margip3"></div>
            <div class="wiwi d-flex justify-content-center">
                    <img class="tami" src="@/assets/image3.svg" alt="Logo2">
                    <img class="tami" src="@/assets/image2.svg" alt="Logo2">
                        
    
                </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
                <span class="w-100 margaro">
                    <p class="hmp22 text-light text-align">A Habitação de Interesse Social (HIS) é uma moradia acessível destinada a famílias de baixa renda, promovida por políticas públicas para garantir habitação digna. O site fornece orientações baseadas em pesquisas de habitações sociais térreas de Uberlândia.</p>
                    
                
                </span>
                
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indi "></div>
                    <div class="indi "></div>
                    <div class="indi"></div>
                    <div class="indicator "></div>
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            >
        </button>
    </div> 
  
</div>


    <div id="quem">
        <div v-if="this.controlador[0] === 0" class="w-100 d-flex justify-content-between  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        <div class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1  class="hmp text-light"> Quem Somos</h1>
            <div class="wid  pad margip3"></div>
            <span class="w-90 margaro">
                <p class="hmp22 text-align text-light">O [MORA] Pesquisa em Habitação é um grupo de pesquisa da UFU dedicado à melhoria da habitação. Integra academia e prática, com foco em tecnologia e sustentabilidade. Desenvolve projetos interdisciplinares com financiamento nacional e internacional.</p>
            </span>
            <div class="d-flex w-100 justify-content-center align-items-center">
                <img class="tami" src="@/assets/d31e3010-2030-427d-958e-36674aca7fd4 1.svg" alt="Logo2">
                
            </div>
            <div class=" size d-flex justify-content-center">
                    <div class="indicator acabalogo "></div>
                    <div class="indi acabalogo "></div>
                    <div class="indi acabalogo"></div>
            
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            >
        </button>
    </div> 
    <div v-if="this.controlador[0] === 1" class="w-100 d-flex justify-content-between alturatotal align-items-center bg-dark">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        <div class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp text-light"> Em memória de Lamoise  </h1>
            <div class="wid  pad margip3"></div>
            <span class="w-90 margaro">
                <p class="hmp22 text-align text-light">Lamonise Vasconcelos Oliveira foi essencial para a criação deste site, dedicando-se à habitação social e resiliência. Integrou projetos que melhoraram moradias e impactaram profissionais e moradores. Seu legado acadêmico e social será sempre lembrado.</p>
            </span>
            <div class="d-flex w-100 justify-content-center align-items-center">
                <img class="tami" src="@/assets/d31e3010-2030-427d-958e-36674aca7fd4 1.svg" alt="Logo2">
                
            </div>
            <div class=" size d-flex justify-content-center">
                    <div class="indi acabalogo "></div>
                    <div class="indicator acabalogo "></div>
                    <div class="indi acabalogo"></div>
            
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            >
        </button>
    </div> 
    <div v-if="this.controlador[0] === 2 || this.controlador[0] === 3" class="w-100 d-flex justify-content-between  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square">
            <
        </button>
        <div class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp text-light"> Contatos</h1>
            <div class="wid  pad margip3"></div>
            <div class="w-100">
                <img class="tami9 marc2" src="@/assets/goog.svg" alt="Logo2">
                <p class="text-light op">Simone Barbosa Villa (coordenadora) - simonevilla@ufu.br</p>
                <p class="text-light marc2 op">Email: morafauedufu@gmail.com</p>
                <div class="d-flex  marc2">
                    <img class="tami9" src="@/assets/goog.svg" alt="Logo2">
                    <img class="tami9" src="@/assets/goog.svg" alt="Logo2">
                    <img class="tami9" src="@/assets/goog.svg" alt="Logo2">
                </div>
                <p class="text-light op">Instagram: @moraufu</p>
                <p class="text-light op">Facebook: facebook.com/mora.habitacao</p>
                <p class="text-light marc2 op">LinkedIn: /moraufu</p>
                <img class="tami9 marc2" src="@/assets/goog.svg" alt="Logo2">
                <p class="text-light op">Faculdade de Arquitetura e Urbanismo e Design (FAUeD/UFU), Núcleo de Pesquisa em Projeto de Arquitetura (NUPPA), [MORA] Pesquisa em Habitação</p>
                <p class="text-light op">Av. João Naves de Ávila, 2121 – Bairro Santa Mônica</p>
                <p class="text-light op">Uberlândia – MG – CEP 38400-902</p>
                
            </div>
            <div class=" size d-flex justify-content-center">
                    <div class="indi acabalogo"></div>
                    <div class="indi acabalogo"></div>
                    <div class="indicator acabalogo"></div>
            
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow d-flex justify-content-center align-items-center border  btn-square ">
            >
        </button>
        </div>  
    </div>
    <div class="w-100 d-flex alturatotal julo">
        <div class="w-50 justify-content-start align-items-start d-flex flex-column ">
            <p class="hmp223 marc4 marc5 marc2">Siga-nos nas redes</p>
            <div class="w-100 d-flex marc2 marc4 justify-content-start">
                <img class="trumi marc5 marc3" src="@/assets/link.svg" alt="Logo2">
                <img class="trumi marc3" src="@/assets/insta.svg" alt="Logo2">
                <img class="trumi" src="@/assets/face.svg" alt="Logo2"> 
            </div>
            <span class="chamba marc4">
                <p class="hmp224 text-align marc5">Reforma na Palma da Mão © 2025 Todos os direitos reservados</p>
            </span>
             
        </div>
        <div class="sarra marc2"></div>
        <div class="w-50 justify-content-start align-items-start d-flex flex-column ">
            <p class="hmp223 marc5 marc4 marc2">Realização:</p>
            <div class="w-100 d-flex marc2 justify-content-start">
                <img class="trumi2 marc3 marc5" src="@/assets/group460.svg" alt="Logo2">
                <img class="trumi3 marc3" src="@/assets/mora.svg" alt="Logo2">
            </div>
            <p class="hmp223 marc2 marc5">Fomento:</p>
             <div class="w-100 d-flex marc2 justify-content-start">
                <img class="trumi3 marc3 marc5" src="@/assets/cnpq.svg" alt="Logo2">
                <img class="trumi3 marc3 marc5" src="@/assets/fapemig.svg" alt="Logo2">
            </div>
            <p class="hmp223  marc2 marc5">Apoio:</p>
             <div class="w-100 d-flex marc2 justify-content-start">
                <img class="trumi2 marc3 marc5" src="@/assets/caumg.svg" alt="Logo2">
            </div>
        </div>
    </div>
 </div>

</template>

<script>        
import Subguia1 from './subguia1.vue';
import Subguia2 from './subguia2.vue';
import Subguia3 from './subguia3.vue';
import Subguia4 from './subguia4.vue';

export default {
    name: 'Guia2',
    components: {
        Subguia1,
        Subguia2,
        Subguia3,
        Subguia4
    },
    data() {
      return {
        controlador: [0, 0], // [índice atual, direção da animação]
        windowWidth: window.innerWidth,
        overlay2: false,
        overlay3: false,
        controler2: 1,
        showOverlay: false,
        controler: 1,
        diy: false,
         tet: "Em qual perfil você se enquadra...",
      };
    },
    mounted() {
    // Adiciona um ouvinte de evento para mudanças no tamanho da tela
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    // Remove o ouvinte de evento quando o componente for destruído
    window.removeEventListener('resize', this.handleResize);
  },
    methods: {
        ShiftRight() {
            console.log('oi')
            if (this.controlador[0] < 3) {
                this.controlador = [this.controlador[0] + 1, 1]; // Muda o índice e define a direção como 1 (direita)
            }
        },
        ShiftLeft() {
            if (this.controlador[0] > 0) {
                this.controlador = [this.controlador[0] - 1, -1]; // Muda o índice e define a direção como -1 (esquerda)
                if (this.controlador[0] == 0){
                    this.controlador[1] = 0;
                }
            }
            
        },
        handleResize() {
      // Atualiza a largura da janela sempre que o tamanho mudar
        this.windowWidth = window.innerWidth;
        },
        toggleOverlay2(){
                this.overlay2 = !this.overlay2;
                console.log('showOverlay:', this.overlay2);
            },
         toggleOverlay3(){
                this.overlay3 = !this.overlay3;
                console.log('showOverlay:', this.overlay2);
            },
            subcont(){
                if(this.controler2 === 2) {
                    this.controler2 = 1;
                }
                console.log(this.controler);
            },
            addcont(){
                if (this.controler2 === 1) {
                    this.controler2 = 2;
                }
                console.log(this.controler);
            },
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





