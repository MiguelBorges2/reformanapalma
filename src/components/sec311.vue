<template>
    <div class="gho w-100 d-flex flex-column justify content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp">Manter a ventilação adequada, evitar a exposição direta ao sol, garantir a segurança da estrutura e prevenir infiltrações, mofo e umidade ajuda a criar um ambiente seguro e saudável. Isso reduz riscos de doenças respiratórias causadas pelo mofo e evita danos à estrutura da casa provocados pelas infiltrações.</p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Todas as obras que envolvem acréscimo ou redução de área construída, necessita de aprovação da Prefeitura.
                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Escala da intervenção</p>
                <p class="fo3 famp">Pontual </p>
           </div>
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar</P>
            </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
            <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " > 1 passo: verificar suas necessidades</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column" v-if="togi1 === true">
                    <p class="subtugali">Em um primeiro momento é essencial pensar: Quais são suas necessidades? Qual tamanho te atenderia? Essas reflexões serão essenciais para tomar as decisões e planejar seu cômodo.</p>
                </div>
            </div>      
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " > 2º Passo: Preparar o ambiente</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <p class="subtugali">Se os afastamentos, área construída, coeficiente de aproveitamento permitido e taxa de permeabilidade necessária permitirem a ampliação no local onde você deseja, passe para a definição das dimensões da ampliação.</p>
                </div>
            </div>    
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " > 3º Passo: Preparar o ambiente</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi3 === true">
                    <p class="subtugali">Verifique o sistema estrutural para somente depois realizar a intervenção. Contrate um profissional qualificado para verificar o projeto e calcular um reforço que não comprometa a segurança da edificação. Dê preferência para o sistema construtivo de viga, pilar e laje, pois este sistema permite modificação a longo prazo.</p>
                    <img class="tamanho81" src="@/assets/casaemconstrucao1.svg" alt="Logo2">
                </div>
            </div>    
            <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao4" class="d-flex w-100 color1 tucs2">
                    <span id="barra4" class="tupi white tucs " > 4º Passo: Preparar o ambiente</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                    <p class="subtugali">Defina a conexão entre as coberturas novas e existentes para que os pés-direitos não fiquem menores que 2,6m.</p>
                    <img class="tamanho81" src="@/assets/image41.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/image51.svg" alt="Logo2">
                </div>
            </div>            
           <div @click="changes5()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao5" class="d-flex w-100 color22 tucs2">
                    <span id="barra5" class="tupi white tucs " > 5º Passo: Preparar o ambiente</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi5 === true">
                    <p class="subtugali">Os ambientes devem possuir áreas de circulação de ao menos 60 cm, portas de no mínimo 80cm. E os banheiros 30cm cada lado da bacia sanitária e 30 cm para o box. É preciso ver como irá passar água e eletricidade. Consultar o subítem Tomadas e interruptores em somente uma parede.
                    </p>
                    <img class="tamanho81" src="@/assets/group524.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/image21.svg" alt="Logo2">
                </div>
            </div>        
            <div @click="changes6()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao6" class="d-flex w-100 color1 tucs2">
                    <span id="barra6" class="tupi white tucs " > 6 passo: verificar suas necessidades</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi6 === true">
                    <p id="678" class="subtugali acab">Uma parede sem acabamentos é mais afetada pelo sol, vento e chuva, deixando os ambientes mais quentes no verão e mais frios no inverno. Por isso, é melhor planejar a reforma quando puder fazer os acabamentos adequados.</p>
                    <p class="subtugali forro"> Não deixe o ambiente sem forro ou laje, porque eles ajudam a impedir que o calor entre nos momentos quentes e evitam que o calor escape nos momentos frios. Se houver um espaço com ar entre o forro e as telhas, isso faz com que o calor tenha mais dificuldade para passar, mantendo a temperatura mais estável dentro da casa </p>
                    <img class="tamanho81" src="@/assets/image111.svg" alt="Logo2">
                    <p class ="subtugali janelas">As janelas são as principais responsáveis pelas mudanças de temperatura em casa. O tipo de vidro, o tamanho da janela, se há alguma proteção externa como marquises ou árvores, e as cortinas afetam diretamente a quantidade de calor que entra ou sai. Janelas totalmente envidraçadas sem sombreamento absorvem mais calor, especialmente se estiverem voltadas para o sol poente ou para o norte.</p>
                    <img class="tamanho81" src="@/assets/image31.svg" alt="Logo2">
                    <p class="subtugali">Para mais informações ver o subítem Escolher materiais e técnicas construtivas.</p>
                </div>
            </div>       
        </div>
        
        </div>
       
    
    </template>
    <script>
        export default {
            name: 'sec121',
            data(){
                return {
                    togi1: false,
                    togi2: false,
                    togi3: false,
                    togi4: false,
                    togi5: false,
                    togi6: false,
                    togi7: false,
                }
            },
            methods: {
                changes(){
                    this.togi1 =!this.togi1;
                    const p = document.getElementById("botao1");
                    const d = document.getElementById("barra1");
                    if(this.togi1 == true){
                        p.classList.add("hig");
                        d.classList.remove("white");
                        d.classList.add("color22");
                        d.classList.add("finta");
                    }
                    if(this.togi1 == false){
                        p.classList.remove("hig");
                        d.classList.add("white");
                        d.classList.remove("color22");
                        d.classList.remove("finta");
                    }
                    
                },
                changes2(){
                    this.togi2 =!this.togi2;
                    const p = document.getElementById("botao2");
                    const d = document.getElementById("barra2");
                    if(this.togi2 == true){
                        p.classList.add("hig");
                        d.classList.remove("white");
                        d.classList.add("color1");
                        d.classList.add("finta");
                        
                    }
                    if(this.togi2 == false){
                        p.classList.remove("hig");
                        p.classList.remove("hig");
                        d.classList.add("white");
                        d.classList.remove("color1");
                        d.classList.remove("finta");
                    }
                    
                },
                changes3(){
                    this.togi3 =!this.togi3;
                    const p = document.getElementById("botao3");
                    const d = document.getElementById("barra3");
                    if(this.togi3 == true){
                        p.classList.add("hig");
                        d.classList.remove("white");
                        d.classList.add("color22");
                        d.classList.add("finta");
                    }
                    if(this.togi3 == false){
                        p.classList.remove("hig");
                        d.classList.add("white");
                        d.classList.remove("color22");
                        d.classList.remove("finta");
                    }
                    
                },
                changes4(){
                    this.togi4 =!this.togi4;
                    const p = document.getElementById("botao4");
                    const d = document.getElementById("barra4");
                    if(this.togi4 == true){
                        p.classList.add("hig");
                        d.classList.remove("white");
                        d.classList.add("color1");
                        d.classList.add("finta");
                    }
                    if(this.togi4 == false){
                        p.classList.remove("hig");
                        d.classList.add("white");
                        d.classList.remove("color1");
                        d.classList.remove("finta");
                    }
                    
                },
                changes5(){
                    this.togi5 =!this.togi5;
                    const p = document.getElementById("botao5");
                    const d = document.getElementById("barra5");
                    if(this.togi5 == true){
                        p.classList.add("hig");
                        d.classList.remove("white");
                        d.classList.add("color22");
                        d.classList.add("finta");
                    }
                    if(this.togi5 == false){
                        p.classList.remove("hig");
                        d.classList.add("white");
                        d.classList.remove("color22");
                        d.classList.remove("finta");
                    }
                    
                    
                },
                changes6(){
                    this.togi6 =! this.togi6;
                    const p = document.getElementById("botao6");
                    const d = document.getElementById("barra6");
                    if(this.togi6 == true){
                        p.classList.add("hig");
                        d.classList.remove("white");
                        d.classList.add("color1");
                        d.classList.add("finta");
                    }
                    if(this.togi6 == false){
                        p.classList.remove("hig");
                        d.classList.add("white");
                        d.classList.remove("color1");
                        d.classList.remove("finta");
                    }
                    
                },
                changes7(){
                    this.togi7 =!this.togi7;
                    const p = document.getElementById("botao7");
                    const d = document.getElementById("barra7");
                    if(this.togi7 == true){
                        p.classList.add("hig");
                        d.classList.remove("white");
                        d.classList.add("color22");
                        d.classList.add("finta");
                    }
                    if(this.togi7 == false){
                        p.classList.remove("hig");
                        d.classList.add("white");
                        d.classList.remove("color22");
                        d.classList.remove("finta");
                    }
                },
            }
        }
    </script>
    <style>
    .hig {
        border-bottom: 1px solid black;
        
        
    }
    .acab::before {
        content: 'Acabamento:';
        font-weight: bold;
        margin-right: 0.5%;
    }
    .forro::before {
        content: 'Forro e Laje:';
        font-weight: bold;
        margin-right: 0.5%;
    }
    .janelas::before {
        content: 'Janelas:';
        font-weight: bold;
        margin-right: 0.5%;
    }
    .tamanho80 {
        width: 60%;
        height: auto;   
    }
    .tamanho81 {
        width: 75%;
        height: auto;   
    }
    .tamanho82 {
        width: 100%;
        height: auto;   
        margin-right: 13%;
    }
    .tamanho83 {
        width: 55%;
        height: auto;   
    }
    .tamanho84 {
        width: 80% !important;
        height: auto;   
    }
    .tugali {
        padding: 3%;
        font-size: 1.7vw;
        font-weight: 550 !important;
        font-family: 'Quicksand', sans-serif;
        
    }
     .tucs {    
        padding-top: 3%;
        padding-bottom: 3%;
        font-size: 2vw;
        
    }
     
     .subtugali {
        margin-bottom: 5%;
     }
     .tcs {
        width: 75%;
        border: 1px solid black;
        border-radius: 25px;
        margin-bottom: 3.5%;
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2); /* Sombra abaixo da div */
     }
     .finta {
        color: white !important;
     }
     .white {
        background-color: white;
        color: #4A4A48;
     }
     .tucs2 {
        border-radius: 24px;
     }
     .tcs:hover {
        border: 2px solid black;
        border-radius: 27px;
    }
     .tucs3 {
        border-radius: 20px;
     }
     .tupi {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items:center;
        border-radius: 24px 0px 0px 24px;
        margin-right: 0;
        font-weight: 600;
        font-family: 'Quicksand', sans-serif;
        color: #4A4A48;
     }
     .tupi2{
        width: 10%;
        display: flex;
        justify-content: center;
        align-items:center;
        margin: 0;
        color: white;
        
     }
     @media (max-width: 720px) {
        .hig {
            
        }
        .tcs {
            border-radius: 16px;
        }
        .tucs {
            padding-bottom: 3%;
            padding-top: 3%;
            font-size: 2.2vw;
        }
        .tucs2{
            border-radius: 15px;
        }
        .tugali{
            font-size: 2vw;
        }
        .tupi {
            border-radius: 15px 0px 0px 15px;
        }
        .tamanho81 {
            width: 100% !important;
        }
        .tamanho82 {
            width: 180% !important;
        }
        .tamanho83 {
            width: 80% !important;
        }
        .tamanho80 {
            width: 95% !important;
        }
        .tamanho84 {
            width: 90% !important;
        }
    
    }
    
    </style>