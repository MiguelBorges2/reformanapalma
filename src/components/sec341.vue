<template>
    <div class="gho w-100 d-flex flex-column justify content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">Importância para saúde</p>
                <p class="fo3 famp text-align">O excesso de calor dentro de casa pode causar problemas de saúde, principalmente respiratórios e cardiovasculares, comprometendo especialmente a saúde de idosos, crianças e imunossuprimidos. A melhor escolha de materiais e técnicas construtivas protege a casa do calor, diminuindo a necessidade de ar-condicionado/ventilador.</p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Não é necessária nenhuma aprovação da Prefeitura Municipal.

                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Escala da intervenção</p>
                <p class="fo3 famp">Pontual e edificação.</p>
           </div>
           <div class="d-flex dev2 justify-content-center align-items-center ">
                <img class="imai" src="@/assets/Vector.svg">
                <p class="fo3 famp">ATENÇÃO! Antes de reformar a casa, consulte o Manual do Proprietário (entregue pela construtora) para informações sobre o que pode ser feito e garantias.</p>
           </div>
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar</P>
            </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
            <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " >1º Passo: Instalar forro/lajes</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align">O forro e laje criam uma camada a mais entre telhado e chão, reduzindo a passagem de calor. Para criar um forro, é necessária uma estrutura complementar, seja qual for o material utilizado (PVC, gesso, etc). E, para criar uma laje, a estrutura da casa precisa ser reforçada, sob risco de desabamentos e prejuízo. Contrate um profissional para te ajudar.</p>
                    <img class="tamanho81" src="@/assets/image15.svg" alt="Logo2">
                </div>
            </div>      
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " > 2º Passo: Altura adequada do teto</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <p class="subtugali text-align">
                        Se o teto é baixo, o ar quente e sujo fica na altura das pessoas, tornando o ambiente desagradável. Ao criar um novo cômodo, garanta uma altura livre de pelo menos 2,4m em banheiros e 2,6m ou mais nos outros ambientes. Janelas rentes à laje/forro também ajudam a eliminar o ar quente/sujo. Contrate um profissional para te ajudar.
                    </p>
                    <img class="tamanho81" src="@/assets/imagem32.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/imagem412.svg" alt="Logo2">
                </div>
            </div>    
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " > 3º Passo: Escolher janelas</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi3 === true">
                    <p class="subtugali text-align"> Janelas de blindex (totalmente envidraçadas) são ótimas para iluminação, mas se não forem sombreadas (por uma cortina, marquise ou mesmo árvore) podem deixar os ambientes muito quentes. Nos quartos, opte por janelas combinando vidro e veneziana, preferencialmente voltadas para o sol nascente (direção Leste). Nas salas, modelos 100% em vidro são interessantes, desde que sombreados por uma cortina, marquise ou outro elemento. Contrate um profissional para te ajudar a escolher as melhores opções para seu caso.</p>
                    <img class="tamanho81" src="@/assets/image33.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/inco.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/imagem71.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/imagem812.svg" alt="Logo2">
                </div>
            </div>    
            <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao4" class="d-flex w-100 color1 tucs2">
                    <span id="barra4" class="tupi white tucs " > 4 passo: Escolher telhado e paredes</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                    <p class="subtugali text-align">O telhado recebe sol durante todo o dia, sendo o primeiro maior absorvedor de calor da casa. As paredes vêm em segundo lugar, sendo especialmente absorvedoras de calor quando “no osso”, isto é, sem reboco/acabamento externo.  Opte por paredes e telhas mais claras e menos absorvedoras de calor. Coberturas e paredes “verdes”, com vegetação plantada em si, são boas isolantes da passagem do calor. Consulte a plataforma http://www.mme.gov.br/projeteee/ , catálogos de fabricantes para decidir a melhor opção, com a ajuda de um profissional e o subítem Escolher cor das paredes externas.</p>
                    <img class="tamanho81" src="@/assets/imagem13.svg" alt="Logo2">
                </div>
            </div>
                      
                 
        </div>
        
        </div>
       
</template>
<script>
export default {
    name: 'sec341',
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
