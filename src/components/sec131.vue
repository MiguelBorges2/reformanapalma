<template>
    <div class="gho w-100 d-flex flex-column justify content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">Importância para saúde</p>
                <p class="fo3 famp">As infiltrações geram excesso de umidade e mofo nos ambientes, podendo causar ou piorar problemas respiratórios, principalmente em idosos, crianças e imunossuprimidos, os deixando mais vulneráveis às doenças.</p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Não é necessario nenhuma aprovação da Prefeitura Municipal.  </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Escala da intervenção</p>
                <p class="fo3 famp">Pontual. </p>
           </div>
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar.</P>
            </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
                <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao1" class="d-flex w-100 color22 tucs2">
                        <span id="barra1" class="tupi white tucs " >1º Passo: Instalar calhas e rufos</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                        <p class="subtugali">Devem existir calhas na beirada mais baixa de telhados e entre superfícies de um mesmo telhado para coletar as águas de chuva. Os rufos, por sua vez, protegem o encontro entre telhado e parede/muro, conduzindo a água. Essas duas peças evitam que a água escorra para dentro dos ambientes, gerando goteiras, e infiltrações. 
Calhas e rufos devem ser bem encaixados no telhado e vedados, garantindo inclinação mínima para que a água escoe através deles e não das telhas. Diferentes tipos de telhados demandam diferentes tipos de calhas e rufos. 
Garanta que seu telhado tenha essas peças. Conte com a ajuda de um profissional para definir as melhores estratégias para seu caso.  Entenda melhor essa questão acessando a seção sobre Consertar goteiras.
</p>
                    </div>
                </div>      
                <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao2" class="d-flex w-100 color1 tucs2">
                        <span id="barra2" class="tupi white tucs " >2º Passo: Fazer acabamento nas paredes/muros</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                        <p class="subtugali">Paredes "no osso", sem reboco externo, são mais vulneráveis ao clima e seus rigores, inclusive à chuva. Elas absorvem mais facilmente a água de chuva, causando infiltrações. Por isso, é necessário que as paredes sejam acabadas com as camadas adequadas
                        </p>
                        <img class="tamanho81" src="@/assets/imagem11.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/imagem21.svg" alt="Logo2">
                    </div>
                </div>    
                <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao3" class="d-flex w-100 color22 tucs2">
                        <span id="barra3" class="tupi white tucs " > 3º Passo: Fazer caimento correto de pisos</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi3 === true">
                        <p class="subtugali">Pisos de áreas externas, banheiros, áreas de serviços ou cozinhas sem caimento para ralos ou áreas permeáveis favorecem empoçamento de água rente à base de paredes. Essa água empoçada pode ser absorvida pela base da parede, ocasionando infiltrações "de baixo para cima". </p>
                        <img class="tamanho81 bubs" src="@/assets/imagem3(1).svg" alt="Logo2">
                        <p class="subtugali">Essa infiltração danifica paredes e pisos, causando manchas difíceis de serem removidas e, também, excesso de umidade nos ambientes. </p>
                        <img class="tamanho81 bubs" src="@/assets/imagem44.svg" alt="Logo2">
                        <img class="tamanho81 bubs" src="@/assets/imagem43.svg" alt="Logo2">
                        <img class="tamanho81 bubs" src="@/assets/imagem42.svg" alt="Logo2">
                        <img class="tamanho83 bubs" src="@/assets/imagem41.svg" alt="Logo2">
                        <p class="subtugali">O piso deve ter caimento constante de 2% em direção a um ralo. Isto é, a cada 1 m de piso na horizontal deve existir um desnível de 1,5 cm na vertical.
                        </p>
                        <img class="tamanho83 bubs" src="@/assets/imagem52(1).svg" alt="Logo2">
                        <img class="tamanho83 bubs" src="@/assets/imagem51(1).svg" alt="Logo2">

                    </div>
                </div>    
                <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao4" class="d-flex w-100 color1 tucs2">
                        <span id="barra4" class="tupi white tucs " > 4º Passo: Verificar/consertar tubulações de água</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                        <p class="subtugali">Ao furar paredes, pode-se furar ou rachar um cano por acidente, causando infiltrações. </p>
                        <img class="tamanho81 bubs" src="@/assets/imagem61.svg" alt="Logo2">
                        <img class="tamanho83 bubs" src="@/assets/imagem7(1).svg" alt="Logo2">
                        <p class="subtugali">. Para evitar esse acidente, procure não fazer furos no alinhamento vertical e horizontal de pontos de água e tomadas.</p>
                        <img class="tamanho83" src="@/assets/imagem81.svg" alt="Logo2">
                        <img class="tamanho83" src="@/assets/imagem82.svg" alt="Logo2">

                    </div>
                </div>            
               
                
            </div>
            
        </div>
       
    
    </template>
    <script>
        export default {
            name: 'sec131',
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
    