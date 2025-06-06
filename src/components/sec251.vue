<template>

    <div class="gho w-100 d-flex flex-column justify content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">Importância para saúde</p>
                <p class="fo3 famp">O distanciamento social trouxe novas necessidades para casa, como garantir que o ambiente seja seguro e confortável para trabalhar ou estudar. Isso inclui melhorar a disposição dos móveis para evitar problemas de saúde, tanto físicos quanto mentais. Especialmente, idosos, crianças e pessoas com sistema imunológico frágil podem ser mais afetados, ficando mais vulneráveis às doenças.</p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Não é necessario nenhuma aprovação da Prefeitura Municipal  </p>
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
                        <span id="barra1" class="tupi white tucs " > 1 passo: Verificar suas necessidades</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column" v-if="togi1 === true">
                        <p class="subtugali"> É importante refletir quais são suas necessidades.  Qual ambiente você utilizará? Qual tamanho de mesa te atenderá? Essas reflexões serão essenciais para tomar as decisões e planejar seu cômodo.</p>
                        <p class="subtugali">Realize medições do cômodo para a partir daí preparar seu quarto para suas necessidades.</p>
                    </div>
                </div>      
                <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao2" class="d-flex w-100 color1 tucs2">
                        <span id="barra2" class="tupi white tucs " > 2º Passo: Preparar o ambiente</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                        <p class="subtugali"> Decida quais mobiliários devam permanecer, quais precisam ser adequados ou ainda substituídos.</p>
                        <p class="subtugali">Atente-se a  localização dos pontos elétricos para não tampar com mobiliário e conseguir usar com facilidade. Veja mais em Tomadas e interruptores em somente uma parede.</p>
                        <img class="tamanho80" src="@/assets/2511.gif" alt="Logo2">
                        <p class="subtugali">Leve em conta o espaço existente com a porta aberta para evitar o caso do exemplo abaixo, em que não é possível abri-la completamente:</p>
                        <img class="tamanho80" src="@/assets/2512.gif" alt="Logo2">
                        <p class="subtugali">E no caso das janelas, verifique a altura do mobiliário que instalará em frente à abertura para evitar o bloqueio de iluminação e ventilação.</p>
                        <img class="tamanho80" src="@/assets/2513.gif" alt="Logo2">
                    </div>
                </div>    
                <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao3" class="d-flex w-100 color22 tucs2">
                        <span id="barra3" class="tupi white tucs " > 3º Passo: Escolher a cama</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi3 === true">
                        <p class="subtugali">Caso você não consiga instalar uma mesa com cadeira para estudar/trabalhar, opte por liberar espaço (durante o horário de trabalho) com uma cama de solteiro articulável vertical ou horizontal. Ou escolha uma cama com mesa integrada.</p>
                        <img class="tamanho81" src="@/assets/IMG 3 1.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/IMG 3 2.svg" alt="Logo2">
                        <img class="tamanho82" src="@/assets/GIF - Quarto p casal - Móveis.gif" alt="Logo2">
                    </div>
                </div>    
                <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao4" class="d-flex w-100 color1 tucs2">
                        <span id="barra4" class="tupi white tucs " > 4º Passo: Escolher mesas e cadeiras adequadas</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                        <p class="subtugali">O importante é escolher sempre por uma cadeira confortável entre 40 a 45 cm de altura, com apoio nas costas, a mesa com 72 a 75 cm de altura, profundidade de no mínimo 50 a 60 cm e largura mínima de 80cm, que pode ser adquirida no mercado ou pode ser confeccionada em madeira, MDF, MDP (com acabamento laminado), metálico, vidro temperado etc. E, caso utilize telas, se atente a distância do rosto a tela e da inclinação dela, o monitor deve estar entre 45 a 70 cm de distância dos seus olhos e alinhado horizontalmente com eles.</p>
                        <img class="tamanho81" src="@/assets/IMG 5 1.svg" alt="Logo2">
                    </div>
                </div>            
               <div @click="changes5()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao5" class="d-flex w-100 color22 tucs2">
                        <span id="barra5"  class="tupi white tucs " > 5º Passo: Providenciar uma bancada de trabalho/estudo</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi5 === true">
                        <p class="subtugali">Sempre se atente às dimensões disponíveis para instalação da mesa. Caso seu quarto não comporte uma cama e uma mesa simultaneamente, após liberar espaço no quarto instale uma mesa dobrável, pois no período em que não estiver precisando usá-la, você pode recolher a mesa e utilizar a cama. Há também opções de escrivaninha dobrável com prateleira, mesa dobrável de alumíno com tampo de mdf e mesa dobrável com rodízio.</p>
                        <img class="tamanho81" src="@/assets/IMG 6 1.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/IMG 6 2.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/IMG 7 1.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/IMG 7 2.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/IMG 9 1.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/IMG 8 1.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/IMG 8 2.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/IMG 9 2.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/IMG 11 6.svg" alt="Logo2">
                    </div>
                </div>        
                <div @click="changes6()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao6" class="d-flex w-100 color1 tucs2">
                        <span id="barra6" class="tupi white tucs " > 6º Passo: Utilizar mobiliário para guardar material</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi6 === true">
                        <p class="subtugali"> Para guardar seu material de estudo/trabalho você pode utilizar gaveteiros com rodízios que não ocupam muito espaço e pode ser transportado com facilidade, além de guardar seu material, você conseguirá ampliar a sua área de trabalho utilizando como apoio durante o dia e a noite pode usar como mesa de cabeceira.</p>
                        <img class="tamanho81" src="@/assets/IMG 11 3.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/IMG 11 4.svg" alt="Logo2">
                        <p class="subtugali"> Você também pode utilizar armário multifuncional com mesa e escrivaninha dobrável como nas opções a seguir. </p>
                        <img class="tamanho81" src="@/assets/IMG 12 2.svg" alt="Logo2">
                        <img class="tamanho84" src="@/assets/IMG 13 2.svg" alt="Logo2">
                    </div>
                </div>      
                <div @click="changes7()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao7" class="d-flex w-100 color22 tucs2">
                        <span id="barra7" class="tupi white tucs " > 7º Passo: Organizar o espaço entre os mobiliários</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi7 === true">
                        <p class="subtugali"> O importante é que opte sempre por uma cadeira confortável entre 40 a 45 cm de altura, com apoio nas costas, a mesa com 72 a 75 cm de altura, profundidade de no mínimo 50 a 60 cm e largura mínima de 80cm, que pode ser adquirida no mercado ou pode ser confeccionada em madeira, MDF, MDP (com acabamento laminado), metálico, vidro temperado etc. E caso utilize telas se atente a distância do rosto a tela e da inclinação dela, o monitor deve estar entre 45 a 70 cm de distância dos seus olhos e alinhado horizontalmente com eles.</p>
                        <img class="tamanho84" src="@/assets/1401.svg" alt="Logo2">
                    </div>
                </div>  
            </div>
            
        </div>
       
    
    </template>
    <script>
        export default {
            name: 'sec251',
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
.famp {
    color: #263238;
    font-weight: 400 !important;  
}
.fo2{
    
    font-size: 1.7vw;
    
}
.vai {
    border-radius: 18px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2); /* Sombra abaixo da div */
}
.custiome { 
    
        width: 97%; 
        
        margin: 1.5%;
        margin-top: 4%;
         flex-basis: auto; /* Permite que o item mantenha o tamanho do conteúdo */
    
}
.dev5{
    width: 90%;
}
.tamanho72 {
    width: 80%;
}
.gho {
    margin-bottom: 33%;
}
.dev4 {
    width: 93%;
}
.dev3 {
    margin-top: 3%;
    margin-bottom: 6%;
    width: 90%;
}
.dev{
    margin-top: 6%;
    width: 90%; 
    padding: 1%;
    border-radius: 30px;
    border: 3px solid  #FFC676;
}
.dev2{
    margin-top: 1.6%;   
    width: 90%; 
    padding: 1%;
    border-radius: 30px;
    border: 3px solid   #568D8B;
}
.fo4{
    margin-top: 1%;
    font-size: 1.6vw;
    color: #4A4A48;
}
.fo6{
    margin-top: 1%;
    font-size: 1.4vw;
    color: #4A4A48;
}
.lop {
    border: 1px solid black;
}
.famap400{
    font-weight: 400 !important;
}
.famap300{
    font-weight: 300 !important;
}
.famap700{
    font-weight: 700     !important;
}
.famap500{
    font-weight: 500      !important;
}
.fo{
    color: #568D8B;
    font-size: 1.8vw;
    margin: 0;

}
.tilt {
    margin-bottom: 30%;
}
.fo3{   
    font-size: 1.6vw;
    margin: 0;
}
.fo5 {
    font-size: 1.6vw;
    margin: 1%;
}
.fo7 {
    font-size: 1.4vw;
    margin: 2%;
    color: #4A4A48;
    
}
@media (max-width: 768px) {
          .dev {
            padding: 2%;

          }
         
          .dev2 {
            padding: 2%;
            margin-top: 3%;
          }
          .fo {
            font-size: 1.9vw !important;
          }
          .fo3 {
            font-size: 1.7vw !important;
          }
        .fo7{
            font-size: 2vw;
        } 
        .fo2 {
            font-size: 1.7vw !important;
        }
        .fo4 {
            font-size: 2vw;
        }
        .fo6 {
            font-size: 2vw;
        }
            
    }
    @media (max-width: 600px) {
    
        .fo {
            font-size: 2.4vw !important;
          }
          .fo3 {
            font-size: 2.3vw !important;
          }
        .fo7{
            font-size: 2vw;
        } 
        .fo2 {
            font-size: 2.1vw !important;
        }
        .fo4 {
            font-size: 2vw;
        }
        .fo6 {
            font-size: 2vw;
        }
            
    }
    @media (max-width: 500px) {
    .dev {
        padding: 3%;
    }
    .dev2 {
        padding: 3%;
    }
    .fo {
        font-size: 2.7vw !important;
      }
      .fo3 {
        font-size: 2.6vw !important;
      }
    .fo7{
        font-size: 2vw;
    } 
    .fo2 {
        font-size: 2.1vw !important;
    }
    .fo4 {
        font-size: 2vw;
    }
    .fo6 {
        font-size: 2vw;
    }
        
}

</style>