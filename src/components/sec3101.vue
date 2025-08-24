<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">Apesar da energia elétrica ser essencial para nossas vidas, instalações inadequadas podem provocar graves acidentes como queimaduras de até 3° grau; coagulação do sangue, lesão nos nervos, contração muscular reação nervosa de estremecimento (a sensação de choque) e até eletrocussão (morte provocada devido à exposição do corpo à uma dose letal de energia elétrica). Por isso é de extrema importância a contratação de um profissional habilitado, desde pequenos reparos à instalação elétrica na moradia.
                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Todas as obras que envolvem acréscimo ou redução de área construída, necessita de aprovação da Prefeitura.

                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Escala da intervenção</p>
                <p class="fo3 famp">Pontual ou edificação</p>
           </div>
           <div class="d-flex dev31 justify-content-center align-items-center ">
                <img class="imai" src="@/assets/1383.svg">
                <p class="fo3">ATENÇÃO! Consulte o Manual do Proprietário antes de reformar sua casa para saber as garantias e o que é permitido.</p>
           </div>
           <div class="d-flex dev32 justify-content-center align-items-center ">
                <img class="imai" src="@/assets/1384.svg">
                <p class="fo3 ">ATENÇÃO! Para realizar esta ação é obrigatória a contratação de
um arquiteto(a) ou engenheiro(a). Evite a autoconstrução!</p>
           </div>
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar</P>
            </div>
            <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " >1º Passo: Consultar o manual do proprietário</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align">O manual costuma indicar o tipo de sistema estrutural da casa e informar se é permitido ou não fazer alterações nas paredes.</p>
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " >2º Passo: Procurar informações sobre as habitações</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-start flex-column" v-if="togi2 === true">
                    <h2 class="subtugali2">PROCURE O PROJETO DA CASA</h2>
                    <p class="subtugali text-align">O manual costuma indicar o tipo de sistema estrutural da casa e informar se é permitido ou não fazer alterações nas paredes.</p>
                    <h2 class="subtugali2">PROCURE INFORMAÇÃO COM VIZINHOS OU LIDERANÇAS COMUNITÁRIAS</h2>
                    <p class="subtugali text-align">Alguns moradores podem ainda ter o manual ou o projeto original e compartilhar informações úteis sobre a estrutura das casas</p>
                </div> 

            </div> 
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " >3º Passo: Observar a largura das paredes</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-start" v-if="togi3 === true">
                    <p class="subtugali text-align">Paredes muito estreitas (cerca de 10 cm) podem ser de concreto moldado in loco, o que indica função estrutural. Você pode perfurar levemente e observar: se a perfuração for difícil e o pó for parecido com cimento, é sinal de concreto estrutural. Neste caso você não deve fazer modificações nas paredes sem consultar o projeto estrutural.</p>
                    <p class="subtugali text-align">Medidas usuais de paredes:</p>
                    <img class="tamanho80 mlz" src="@/assets/expessura.svg">
                </div>
            </div> 
            <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao4" class="d-flex w-100 color1 tucs2">
                        <span id="barra4" class="tupi white tucs " > 4º Passo: Definir a conexão entre as coberturas novas</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                        <p class="subtugali text-align">Defina a conexão entre as coberturas novas e existentes para que os elementos como vigas (horizontais) ou pilares/colunas nos cantos das paredes podem indicar uma estrutura na qual as paredes só têm a função de fazer vedação e não ter função estrutural.</p>
                        <img class="tamanho80 mlz" src="@/assets/pilar.svg">
                    </div>
                </div> 
            
            

            
               
        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec3101',
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
