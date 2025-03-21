<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">O excesso de calor dentro de casa pode favorecer o agravamento e/ou surgimento de problemas de saúde, principalmente respiratórios e cardiovasculares, comprometendo especialmente a saúde de idosos, crianças e imunossuprimidos. O posicionamento correto de janelas protege a casa do calor, diminuindo a necessidade de ar-condicionado/ventilador.
                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Não é necessária nenhuma aprovação da Prefeitura Municipal.

                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Escala da intervenção</p>
                <p class="fo3 famp">Pontual</p>
           </div>
           
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar</P>
            </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
                <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " > 1 passo: Posição da janela</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align"> Janelas voltadas para o Sol poente (direção Oeste) absorvem calor nos horários mais quentes do dia (entre 12h e +-18:30h)</p>
                    <img class="tamanho81" src="@/assets/imagem24.svg" alt="Logo2">
                    <p class="subtugali text-align">Em quartos, isso pode ser mais problemático durante os meses mais quentes do ano. Janelas voltadas para a direção Sul, por sua vez, recebem pouco sol, favorecendo ambientes frios e úmidos. Conheça os pontos cardeais</p>
                    <img class="tamanho81" src="@/assets/rosa1.svg" alt="Logo2">
                    <p class="subtugali text-align"> e localize eles no seu terreno, sabendo que o Sol nasce no Leste e se põe no Oeste. Quando for construir em Uberlândia (MG), evite posicionar janelas em quartos voltadas para Oeste e Sul e, em áreas molhadas (cozinha, banheiro, área de serviço) voltadas para Sul. 
Idealmente, procure posicionar janelas de quartos e salas viradas para o Nordeste (entre Norte e Leste), que é a direção de onde os ventos vêm com mais frequência em Uberlândia (MG). Com isso, a ventilação do ambiente será maior.
ATENÇÃO! Cada caso é um caso! Prefira contar com ajuda profissional na hora de decidir a melhor posição de novos cômodos e janelas.</p>
                    <img class="tamanho81" src="@/assets/rosa2.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/rosa3.svg" alt="Logo2">
                </div>
            </div>      
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " > 2º Passo: Ter espaço adequado para instalação</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <p class="subtugali text-align">Às vezes não é possível colocar as janelas na posição ideal. Nessas situações, brises, árvores e, em último caso, cortinas, podem diminuir o desconforto</p>
                    <img class="tamanho81" src="@/assets/imagem423.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/solar.svg" alt="Logo2">
                    <p class="subtugali text-align">Os brises são como marquises, placas horizontais ou verticais que sombreiam a janela externamente. Podem ser feitos de vários materiais e seu tamanho varia de acordo com a posição em relação ao sol e com a quantidade de sol que se deseja sombrear.
                    </p>
                    <img class="tamanho81" src="@/assets/imagem511.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/imagem512.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/imagem513.svg" alt="Logo2">
                    <p class="subtugali text-align">Conte com um profissional para definir a melhor opção para seu caso. 
Árvores são aliadas no calor. Elas sombreiam as paredes e umedecem o ar ao mesmo tempo, refrescando e embelezando ambientes. Procure plantá-las próximas das janelas mais atingidas pelo sol indesejado.
                    </p>
                </div>
            </div>                
                 
        </div>
        
        </div>
       
</template>
<script>
export default {
    name: 'sec531',
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

.tamanho76 {
    width: 70%;
    height: auto;
}
</style>