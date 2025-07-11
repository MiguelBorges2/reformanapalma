<template>
    <div class="gho w-100 d-flex flex-column justify content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">Importância para saúde</p>
                <p class="fo3 famp">Fazer pátios internos com jardins é ótimo para deixar o ar mais limpo, ajudando pessoas com problemas respiratórios, especialmente durante pandemias. Também, pode reduzir o estresse, melhorar a saúde mental e deixar o lugar mais bonito. As plantas, com suas diferentes cores e texturas, aumentam a sensação de bem-estar.</p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Todas as obras que envolvem acréscimo ou redução de área construída, necessita de aprovação da Prefeitura.
                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Escala da intervenção</p>
                <p class="fo3 famp">Pontual, edificação. </p>
           </div>
           <div class="d-flex dev2 justify-content-center align-items-center ">
                <img class="imai" src="@/assets/Vector.svg">
                <p class="fo3 famp">ATENÇÃO! Antes de reformar a casa, consulte o Manual do Proprietário (entregue pela construtora) para informações sobre o que pode ser feito e garantias.</p>
           </div>
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar.</P>
            </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
            <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " > 1º passo: verificar suas necessidades</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column" v-if="togi1 === true">
                    <p class="subtugali">Em um primeiro momento é essencial pensar quais são suas necessidades com a construção de um pátio interno com jardim. O desejo é ventilar cômodos existentes? De levar mais radiação solar? Construir novos cômodos e ter a possibilidade de instalar aberturas? Ou de personalizar o ambiente com um jardim e deixá-lo mais aconchegante?</p>
                </div>
            </div>      
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " > 2º Passo: Verificar qual área disponível para adequação</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <p class="subtugali">
                        Um fator essencial para a construção de seu pátio interno é  conferir as medidas disponíveis.

                    </p>
                </div>
            </div>    
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " >3º Passo: Escolher materiais e técnicas construtivas</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi3 === true">
                    <p class="subtugali text-align">Construir um pátio interno com jardim é uma estratégia importante para a construção de novos cômodos sem obstruir janelas.
Para este ambiente receber radiação solar, pode-se filtrá-la por pérgolas por exemplo, executadas com materiais regionais. 
Também, pode-se utilizar uma grande variedade de texturas e cores para plantas e materiais, criando contrastantes e um jogo de luz e sombra.
Os pátios devem ter pelo menos 2 metros de largura e profundidade, com uma porta para manutenção.
Escolha o sistema construtivo que permita o vão desejado. É melhor usar viga, pilar e laje na construção, porque permitirá fazer mudanças mais seguras no futuro.
Se houver cômodos voltados para este pátio, escolher modelo e tamanho de janelas mais apropriado.
</p>
                    <img class="tamanho81" src="@/assets/jardiminterno1.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/jardo.gif" alt="Logo2">
                </div>
            </div>    
            <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao4" class="d-flex w-100 color1 tucs2">
                    <span id="barra4" class="tupi white tucs " > 4º Passo: Escolher plantas adequadas</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                    <p class="subtugali">Escolher plantas que se adaptem bem à sombra para os ambientes com elementos de filtragem de radiação solar.
                        Para pátios internos em Uberlândia, Minas Gerais, onde a sombra pode ser mais predominante, algumas plantas que se adaptam bem a essas condições são</p>
                    <span class="subtugali maw ">1. Espada-de-são-jorge (Sansevieria trifasciata)</span>
                    <p class="subtugali maw">2. Zamioculcas (Zamioculcas zamiifolia)</p>
                    <p class="subtugali maw">3. Maranta (Maranta leuconeura)</p>
                    <p class="subtugali maw">4. Aglaonema (Aglaonema sp.)</p>
                    <span class="subtugali maw ">5. Poto (Epipremnum aureum)</span>
                    <p class="subtugali maw">6. Peperômia (Peperomia sp.)</p>
                    <p class="subtugali maw">7. Aspidistra (Aspidistra elatior)</p>
                    <p class="subtugali maw">8. Filodendro (Philodendron sp.)</p>
                    <p class="subtugali maw">9. Ráfis (Rhapis excelsa)</p>
                    <p class="subtugali maw">10. Lírio da paz (Spathiphyllum sp.)</p>
                    <p class="subtugali">Essas plantas são conhecidas por tolerar sombra parcial ou até mesmo sombra densa, tornando-as ótimas opções para ambientes internos com menos luz solar direta. Certifique-se de considerar outros fatores, como a umidade e a temperatura do ambiente ao escolher as plantas ideais para o seu pátio interno.</p>
                    <img class="tamanho81" src="@/assets/image12.svg" alt="Logo2">
                    <img class="tamanho83 mp" src="@/assets/image22.svg" alt="Logo2">
                </div>
            </div>            
                 
        </div>
        
        </div>
       
</template>
<script>
export default {
    name: 'sec321',
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
