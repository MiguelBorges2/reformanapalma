<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">Ambientes refrigerados corretamente podem ser combinados com outros aparelhos de climatização, como desumidificadores e purificadores. Especialistas em saúde recomendam deixar a temperatura do ar condicionado entre 22 e 25 graus, e não frio. Ou seja, o uso correto pode trazer conforto para o usuário.
                </p>
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
           
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar</P>
            </div>
            <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " >1º Passo: Escolher o ar-condicionado ideal para o seu ambiente</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align">Aprenda a escolher o ar-condicionado ideal para o seu ambiente, analise as opções entre os principais modelos e como definir os BTUs de maneira a economizar mais na conta de energia. 
Existem diversos tipos de aparelhos de ar-condicionado disponíveis e cada um atende a uma necessidade específica. As três principais categorias de ar-condicionado comercializadas no mercado são:
</p>
                    <ul class="w-100">
                        <li><p class="subtugali text-align">Ar-condicionado de janela</p></li>
                        <li><img class="tamanho791" src="@/assets/arctipoA.svg"></li>
                        <li><p class="subtugali text-align">Ar-condicionado split</p></li>
                        <li><img class="tamanho791" src="@/assets/arctipoB.svg"></li>
                        <li><p class="subtugali text-align">Ar-condicionado portátil</p></li>
                        <li><img class="tamanho791" src="@/assets/arctipoC.svg"></li>
                    </ul>
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " >2º Passo: Escolher a capacidade do seu aparelho</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <p class="subtugali text-align">Escolha a capacidade do seu aparelho de acordo com o tamanho do cômodo</p>
                    <img class="tamanho81" src="@/assets/image81.svg">
                    <p>Fórmula Básica para BTUs:</p>
                    <p class="subtugali text-align">1. Cálculo do espaço (m²):  BTUs básicos = Área do ambiente (m²) × 600</p>
                    <p class="subtugali text-align">Cada metro quadrado requer, em média, 600 BTUs.</p> 
                    <p class="subtugali text-align">1. ajuste para pessoas no ambiente</p>
                    <ul>
                        <li><p class="subtugali text-align">Acrescente 600 BTUs para cada pessoa além da primeira (já considerada no cálculo básico). </p></li>
                    </ul>
                    <p class="subtugali text-align">2. Ajuste para equipamentos eletrônicos:</p>
                    <ul>
                        <li><p class="subtugali text-align">Adicione 600 BTUs para cada equipamento eletrônico que gera calor (televisores, computadores, etc.). </p></li>
                    </ul>
                    <p class="subtugali text-align">3. Consideração de janelas e incidência solar:</p>
                    <ul>
                        <li><p class="subtugali text-align">Se o ambiente recebe luz solar direta, especialmente em regiões quentes, aumente entre 800 e 1.000 BTUs por janela. </p></li>
                    </ul>
                    <p class="subtugali text-align">Exemplo de Cálculo</p>
                    <p class="subtugali text-align">Imagine um quarto de 20 m², com duas pessoas, uma TV e uma janela exposta ao sol.</p>
                    <p class="subtugali text-align">1. Área do ambiente: 20 m²×600 BTUs=12.000 BTUs</p>
                    <p class="subtugali text-align">2. Pessoas adicionais: 1×600 BTUs=600 BTUs</p>
                    <p class="subtugali text-align">3. Equipamentos eletrônicos: 1×600 BTUs=600 BTUs</p>
                    <p class="subtugali text-align">4 .IJanela com sol direto: +1.000 BTUs+1.000 </p>
                    <p class="subtugali text-align">5. Total:
12.000+600+600+1.000=14.200 BTUs
Nesse caso, o ideal seria um ar-condicionado com capacidade de 14.000 BTUs.</p>
                    <p class="subtugali text-align">Dicas Adicionais:</p>
                    <ul>
                        <li><p class="subtugali text-align">Ambientes corporativos: Se o espaço tiver muitos computadores ou pessoas, pode ser necessário ajustar para mais BTUs.</p></li>
                        <li><p class="subtugali text-align">Clima local: Em regiões mais quentes, opte por equipamentos com potência ligeiramente maior para maior eficiência.</p></li>
                        <li><p class="subtugali text-align">Isolamento térmico: Ambientes bem isolados exigem menos potência do que os mal isolados.</p></li>
                    </ul>
                    <p class="subtugali text-align">Fonte: ABNT NBR 16401, considerando:</p>
                    <ul>
                        <li><p class="subtugali text-align">A fórmula prática (m² × 600 BTUs + ajustes) é simplificada para aplicações residenciais e ambientes pequenos.</p></li>
                        <li><p class="subtugali text-align">As normas técnicas (como a ABNT NBR 16401 ou ASHRAE) incluem cálculos mais detalhados, considerando:</p></li>
                        <ul>
                            <li><p class="subtugali text-align">Orientação solar da edificação</p></li>
                            <li><p class="subtugali text-align">Tipo de vidro e isolação térmica</p></li>
                            <li><p class="subtugali text-align">Ventilação e renovação de ar</p></li>
                            <li><p class="subtugali text-align">Equipamentos e iluminação com potência específica.</p></li>
                        </ul>
                       
                    </ul>
                    <p class="subtugali text-align">Se o cálculo for para um projeto técnico ou com especificações mais rigorosas, é recomendável seguir as normas ABNT ou consultar um profissional especializado que utilize software de cálculo de carga térmica (como Carrier HAP ou TRANE TRACE).</p>
                </div> 

            </div> 
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " > 3º Passo: Limpar as placas solares</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-start" v-if="togi3 === true">
                    <ul>
                        <li><p class="subtugali text-align">Verifique se o ambiente já possui local indicado para posicionamento do equipamento conforme manual do imóvel. Caso não tenha, chame um profissional para identificar se é possível fazer a abertura na parede sem danificar a estrutura do imóvel. Para evitar problemas com a estrutura, recomenda-se o uso do equipamento do tipo split ou portátil. </p></li>
                        <li><p class="subtugali text-align">Posicione o aparelho (para o caso de janela ou evaporadora split) conforme composição das aberturas:</p></li>
                        <li><img class="tamanho791" src="@/assets/local.svg"></li>
                        
                        
                    </ul>
                </div>
            </div>   
            <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao4" class="d-flex w-100 color1 tucs2">
                        <span id="barra4" class="tupi white tucs " > 4º Passo: Misturar a terra com composto orgânico</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                        <ul>
                            <li><p class="subtugali text-align">Caso seu imóvel não tenha local de instalar a evaporadora, ou não possuir segurança estrutural, o ar condicionado portátil é a solução. </p></li>
                            <li><p class="subtugali text-align">Se desejar flexibilidade em resfriar mais de um ambiente por vez, o ar condicionado portátil é uma opção mais eficiente e econômica, ao invés de ter vários ar condicionados pela casa.</p></li>
                            <li><p class="subtugali text-align">Ar-condicionado portátil</p></li>
                            <li><img class="tamanho791" src="@/assets/arctipoC.svg"></li>
                            
                        
                        </ul>
    
                    </div>
                </div>              

            
               
        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec591',
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
.tamanho791 {
    width: 70%;
    height: auto;
    display: block;
    margin: auto;
}
.down {
    margin-bottom: 2%;
}
.tamanho867{
        width: 80%;
        height: auto;
        display: block;
        margin-bottom: 2%;
        
    }
.sam::before {
    content: 'Altura Elevada: ';
    font-weight: bolder;
}
.sam2 {
    font-weight: bolder;
}
</style>