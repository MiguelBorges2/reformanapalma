<template>

<div class="w-100">
    <div v-if="this.controlador[0] === 0"class="w-100 d-flex justify-content-around  alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round234 edit">
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
        
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round234 edit">
            >
        </button>
    </div>
    <div v-if="this.controlador[0] === 1"class="w-100 d-flex justify-content-around  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow text-light btn-round edit">
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
        
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow text-light btn-round edit">
            >
        </button>
    </div>
    <div v-if="this.controlador[0] === 2"class="w-100 d-flex justify-content-around  alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round234 edit">
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
        
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round234 edit">
            >
        </button>
    </div>
    <div v-if="this.controlador[0] === 3"class="w-100 d-flex justify-content-around  alturatotal align-items-center tuna">
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
        
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow text-light btn-round edit">
            >
        </button>
    </div>
    <div id="antes">
        <div v-if="this.controlador[0] === 0" class="w-100 d-flex justify-content-around  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round ">
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
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round ">
            >
        </button>
    </div> 
    <div v-if="this.controlador[0] === 1" class="w-100 d-flex justify-content-around  alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round234 ">
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
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round234 ">
            >
        </button>
    </div> 
    <div v-if="this.controlador[0] === 2" class="w-100 d-flex justify-content-around  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round ">
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
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round ">
            >
        </button>
    </div> 
    <div v-if="this.controlador[0] === 3" class="w-100 d-flex justify-content-around  alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round234 ">
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
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round234 ">
            >
        </button>
    </div> 
</div>
    
<div id="prob">
    <div v-if="this.controlador[0] === 0" class="w-100 d-flex justify-content-around  alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round234 edit">
            <
        </button>
        <div class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp colo48"> Problemas da Autoconstrução</h1>
            <div class="wid  pad margip3"></div>
            <span class="w-80 margaro">
                <p class="hmp22 text-align  cril2">A autoconstrução, feita sem profissionais, pode ser arriscada e resultar em projetos inadequados. O CAU/BR oferece uma lista de profissionais qualificados. Para mais informações, acesse os artigos do MORA e a lista do CAU/BR.</p>
                
            </span>
            <div class="setune3 d-flex flex-column justify-content-around align-items-center">
                <p class="hmp33 mt-3 cril2">Clique para acesso à lista de arquitetos recomendados pelo</p>
                <p class="hmp33 cril2">Conselho de Arquitetura e Urbanismo (CAU/BR)</p>
                <div class="d-flex w-100 align-items-center justify-content-center">
                    <button @click="toggleOverlay2()" class=" tip  lalula colo4  mako2  p-1">  Conteúdos </button>
                    <div v-if="overlay2" class="overlay d-flex justify-content-center align-items-center" @click=" toggleOverlay2()">
                        <div class="d-flex formulario  align-items-center justify-content-center " @click.stop >
                            <button @click="subcont"  class="btn-hover-yellow2  border btn-round234 ">
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

                   
                        <button @click="addcont"  class="btn-hover-yellow2  border btn-round234 ">
                                >
                        </button>
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
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round234 edit">
            >
        </button>
    </div>
    <div v-if="this.controlador[0] === 1" class="w-100 d-flex justify-content-around  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow text-light btn-round edit">
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
                            <button @click="subcont"  class="btn-hover-yellow2  border btn-round234 ">
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

                   
                        <button @click="addcont"  class="btn-hover-yellow2  border btn-round ">
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
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round text-light edit">
            >
        </button>
    </div>

    <div v-if="this.controlador[0] === 2" class="w-100 d-flex justify-content-around  alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round234 edit">
            <
        </button>
        <div class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp colo48"> Saiba mais sobre o ATHIS</h1>
            <div class="wid  pad margip3"></div>
            <span class="w-80 margaro">
                <p class="hmp22 text-align  cril2">A ATHIS (Assistência Técnica para Habitação de Interesse Social), Lei 11.888/2008, oferece assistência técnica gratuita para melhoria de moradias de baixa renda realizados por profissionais. Moradores elegíveis podem procurar prefeituras para acessar esses serviços.</p>
                
            </span>
            <div class="setune3 d-flex flex-column justify-content-around align-items-center">
                <p class="hmp33 mt-3 cril2">Clique no botão abaixo e saiba sobre o ATHIS</p>
                <div class="d-flex w-100 align-items-center justify-content-center">
                    <button @click="toggleOverlay2()" class=" tip  lalula colo4  mako2  p-1">  Saiba mais </button>
                    <div v-if="overlay2" class="overlay d-flex justify-content-center align-items-center" @click=" toggleOverlay2()">
                        <div class="d-flex formulario  align-items-center justify-content-center " @click.stop >
                            <button @click="subcont"  class="btn-hover-yellow2  border btn-round234 ">
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

                   
                        <button @click="addcont"  class="btn-hover-yellow2  border btn-round ">
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
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round234  edit">
            >
        </button>
    </div>
    <div v-if="this.controlador[0] === 3" class="w-100 d-flex justify-content-around  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round ">
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
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round ">
            >
        </button>
    </div> 
  
</div>


    <div id="quem">
        <div v-if="this.controlador[0] === 0" class="w-100 d-flex justify-content-around  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round">
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
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round ">
            >
        </button>
    </div> 
    <div v-if="this.controlador[0] === 1" class="w-100 d-flex justify-content-around  alturatotal align-items-center bg-dark">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round">
            <
        </button>
        <div class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp text-light"> Em mémoria de Lamoise  </h1>
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
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round ">
            >
        </button>
    </div> 
    <div v-if="this.controlador[0] === 2 || this.controlador[0] === 3" class="w-100 d-flex justify-content-around  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round">
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
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round ">
            >
        </button>
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
        controler2: 1,

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
            }
    }
};
</script>

<style>
html, body {
  height: 100%; /* Faz com que o html e o body ocupem toda a altura */
  margin: 0;
  padding: 0;
}
.nolink {
    text-decoration: none;
}
.wiwi {
    width: 80%;
}
.acabalogo{
    margin-right: 4%;
}
.colo4{
        color: #4A4A48;
        font-weight: 500 !important;
   }
.op {
    font-size: 2.6vw;
    margin: 0;
}
.nolans {
    border: none;
}
.tami {
    width: 30%;
    height: auto;
    margin: 5%;
}
.tami9 {
    width: 5%;
    height: auto;
    margin-right: 2%;
}
.marc2 {
    margin-bottom: 5%;
}
.tami2 {
    width: 50%;
    height: auto;
    margin: 5%;
}
.hlk{
    width: 65%;
}
.cril2 {
    color: #263238;
    font-weight: 400 !important;
}
.setune {
    border: 2px solid #FFC676;
    border-radius: 18px;
    
    width: 95%;
}
.setune3 {
    border: 2px solid #FFC676;
    border-radius: 24px;
    width: 97%;
}
.quid2 {
    width: 35%;
    margin-left: 4%;  
}
.colo48 {
    color: #4A4A48;
    font-weight: 600 !important;
}
.hmp33 {
    font-size: 2.1vw;
    margin: 0;
}
.tamamp2 {

width: 100%;
height: auto;
}
.tamamp29 {

width: 40%;
height: auto;
}
.fonfonfon {
    font-size: 2.2vw;
    color: white;
    font-weight: 50;
}
.hmp2 {
    font-size: 1.7vw;
    font-weight: 10;
    margin: 0;
}
.hmp22 {
    font-size: 2.2vw;
    font-weight: 10;
    margin: 0;

}
.hmp3 {
    font-size: 1.5vw;
    font-weight: 10;
    margin: 0;
}

.hmp {
    font-size: 4vw;
    margin: 3%;
    font-weight: 10;
}
.tuna {
    background: linear-gradient(to top, #749695, #394A55);
}

.lalula{
    width: 30%;
    margin: 5%;
    font-size: 2.5vw;
}
.btn-round234 {  
  height: 3vw;
  width: 3%;      
  padding: 0;              
  display: flex;           
  align-items: center;     
  justify-content: center; 
  border-radius: 80px;       
  color: black;          
  border: 1px solid black !important; 
  transition: background-color 0.3s ease; 
  margin: 0.1%;
}
.marko25 {
    margin: 1%;
    background-color: #FFC676;
  }
.margaro {
    margin: 2%;
}
.alturatotal {
    height: auto;
    transition: height 0.5s ease, width 0.5s ease; 
}

.edit {
    color: black !important;
}
.indi34 {
                width: 20%;
                background-color: grey;
                border-radius: 24px;
                height: 0.8vw;
            }
.gradient-bg {
    background: linear-gradient(to top, #749695, #394A55); 
    border-radius: 0 0 24px 24px;
}

.btn-hover-yellow:hover {
    background-color:   #FFC676;
    
}


@media (max-width: 768px) {
    .hmp33 {
        font-size: 2.7vw;
    }
    .hmp22 {
        font-size: 3.3vw ;
    }
    .setune3{
        width: 97%;
    }
    .hlk {
        width: 60%!important;
    }
    .quid2{
        margin-left: 2%;
    }
    .setune {
        width: 100%;
    }
    .btn-round234 {
        width: 7.5% !important; 
        height: 7.5vw !important;   
    }
    .tami {
    width: 50%;
    height: auto;
    margin: 5%;
}
.tami2 {
    width: 70%;
    height: auto;
    margin: 5%;
}
.lalula{
    width: 45%;
    margin: 5%;
    font-size: 3.4vw;
}

    
}



</style>
