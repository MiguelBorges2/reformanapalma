<template>

<div class="gho w-100 d-flex flex-column justify content-center align-items-center">
       <div class="dev d-flex flex-column justify-content-center ">
            <p class="fo famp">Importância para saúde</p>
            <p class="fo3 famp">É muito importante ter um lugar certo para trabalhar e estudar. Isso ajuda o corpo e a mente a ficarem saudáveis. Esse espaço traz conforto, ajuda a se concentrar e é fundamental para fazer bem o seu trabalho ou os seus estudos. Assim, você terá uma qualidade de vida melhor.</p>
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
                    <span id="barra1" class="tupi white tucs " > 1º Passo: Verificar suas necessidades</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column" v-if="togi1 === true">
                    <p class="subtugali"> É importante refletir quais são suas necessidades.  Qual ambiente você utilizará? qual tamanho de mesa te atenderá? Essas reflexões serão essenciais para tomar as decisões e planejar seu cômodo.</p>
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
                    <p class="subtugali">Atente-se a  localização dos pontos elétricos para não tampar com mobiliário e conseguir usar com facilidade. Veja mais em <span @click="teste29()" class="subtugali">Tomadas e interruptores em somente uma parede. </span></p>
                    <img class="tamanho82" src="@/assets/GIF - Quarto para duas ou mais pessoas - Tomadas.gif" alt="Logo2">
                    <p class="subtugali">Leve em conta o espaço existente com a porta aberta para evitar o caso do exemplo abaixo, em que não é possível abri-la completamente:</p>
                    <img class="tamanho80" src="@/assets/IMG 2.2 1.svg" alt="Logo2">
                    <img class="tamanho80" src="@/assets/IMG 2.1 1.svg" alt="Logo2">
                    <p class="subtugali">E no caso das janelas, verifique a altura do mobiliário que instalará em frente à abertura para evitar o bloqueio de iluminação e ventilação.</p>
                    <img class="tamanho82" src="@/assets/quarto-duplo-janela.gif" alt="Logo2">
                </div>
            </div>    
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " > 3º Passo: Escolher as camas</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi3 === true">
                    <p class="subtugali">Caso você não consiga instalar uma mesa com cadeira para estudar/trabalhar, opte por liberar espaço (durante o horário de trabalho) com uma cama de casal articulável vertical ou horizontal ou escolha uma cama com mesa integrada. Para acomodar mais pessoas escolha uma treliche com mesa.</p>
                    <img class="tamanho81" src="@/assets/IMG 4 1.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/IMG 3-01 1.svg" alt="Logo2">
                    <img class="tamanho83" src="@/assets/Quarto para duas pessoas ou mais 1.svg" alt="Logo2">
                    <img class="tamanho82" src="@/assets/GIF - Quarto para duas ou mais pessoas - Móveis.gif" alt="Logo2">
                    <img class="tamanho81" src="@/assets/IMG 11.1 1.svg" alt="Logo2">
                </div>
            </div>    
            <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao4" class="d-flex w-100 color1 tucs2">
                    <span id="barra4" class="tupi white tucs " > 4º Passo: Escolher mesas e cadeiras adequadas</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                    <p class="subtugali">O importante é escolher sempre por uma cadeira confortável entre 40 a 45 cm de altura, com apoio nas costas, a mesa com 72 a 75 cm de altura, profundidade de no mínimo 50 a 60 cm e largura mínima de 80cm, que pode ser adquirida no mercado ou pode ser confeccionada em madeira, MDF, MDP (com acabamento laminado), metálico, vidro temperado etc. E, caso utilize telas, se atente a distância do rosto a tela e da inclinação dela, o monitor deve estar entre 45 a 70 cm de distância dos seus olhos e alinhado horizontalmente com eles.</p>
                    <img class="tamanho82" src="@/assets/img51.svg" alt="Logo2">
                </div>
            </div>            
           <div @click="changes5()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao5" class="d-flex w-100 color22 tucs2">
                    <span id="barra5" class="tupi white tucs " > 5º Passo: Providenciar uma bancada de trabalho/estudo</span>
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
                    <img class="tamanho84" src="@/assets/IMG 15 1.svg" alt="Logo2">
                </div>
            </div>  
        </div>
        
    </div>
   

</template>
<script>
    export default {
        name: 'sec241',
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
        
        ativa2(){
              this.toogle2 = !this.toogle2;
              if(this.toogle2 == true){
                  let elem = document.getElementById('serg7'); 
                  elem.classList.add('wid35');
                  elem.classList.remove('wid3');
                  this.$nextTick(() => {
                        let elem = document.getElementById('ju8'); 
                        elem.classList.add('color1');
                    });
                 
              }
              else{
                  let elem = document.getElementById('serg7'); 
                  elem.classList.add('wid3');
                  elem.classList.remove('wid35');
                  elem = document.getElementById('ju8'); 
                  elem.classList.remove('color1');
                  
              }
          },
        updateGlobalVariable(value) {
                const mainStore = useMainStore();
                mainStore.updateGlobalVariable(value);
                console.log('Global Variable Updated:', mainStore.globalVariable); // Adicione isso
            },  
        teste25(){
                this.updateGlobalVariable(81);
        },
        teste26(){
            this.updateGlobalVariable(82);
        },
        teste27(){
            this.updateGlobalVariable(83);
        },
        teste28(){
            this.updateGlobalVariable(84);
        },
        teste29(){
            this.updateGlobalVariable(85);
        },
  
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
