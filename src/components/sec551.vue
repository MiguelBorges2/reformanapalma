<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">A falta de ventilação e iluminação natural tornam os ambientes mais favoráveis à transmissão e propagação de doenças respiratórias, comprometendo especialmente a saúde de idosos, crianças e imunossuprimidos. 

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
            <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " > 1º Passo: Escolher janelas</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align">Janelas de blindex (totalmente envidraçadas) são ótimas para iluminação, mas se não forem sombreadas (por uma cortina, marquise ou mesmo árvore) podem deixar os ambientes muito quentes. Nos quartos, opte por janelas combinando vidro e veneziana, preferencialmente voltadas para o sol nascente (direção Leste). Nas salas, modelos 100% em vidro são interessantes, desde que sombreados por uma cortina, marquise ou outro elemento. Contrate um profissional para te ajudar a escolher as melhores opções para seu caso.</p>
                    <img class="tamanho81" src="@/assets/image33.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/inco.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/imagem71.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/imagem812.svg" alt="Logo2">
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " > 2º Passo: Presença de janelas</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <p class="subtugali text-align">Ao reformar sem orientação, podem acabar sendo criados ambientes sem janelas, onde o ar não corre e a luz não chega.
                    </p>
                    <img class="tamanho866" src="@/assets/inco2.svg" alt="Logo2">
                    <p class="subtugali text-align"> Nesses casos, clarabóias são ótimas opções para levar iluminação natural para ambientes internos. Pode ser instalado exaustor ou chaminé solar que irá sugar o ar para fora e, com isso, forçar sua renovação.</p>
                    <img class="tamanho866" src="@/assets/imagem5122.svg" alt="Logo2">
                    <img class="tamanho866" src="@/assets/imagem522.svg" alt="Logo2">
                    <p class="subtugali text-align">Elementos permeáveis (por ex. cobogós) nas paredes podem ser utilizados para trocar mais ar com o exterior.</p>
                    <img class="tamanho866" src="@/assets/imagem612.svg" alt="Logo2">
                    <p class="subtugali text-align">Em novos ambientes, pensar em aberturas altas, rentes à cobertura ou mesmo coberturas ventiladas, são excelentes recursos para melhorar a ventilação e conforto térmico.</p>
                    <img class="tamanho866" src="@/assets/imagem72.svg" alt="Logo2">
                    <img class="tamanho866" src="@/assets/cobertura.svg" alt="Logo2">
                    <img class="tamanho866" src="@/assets/efeito.svg" alt="Logo2">
                </div> 

            </div> 
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " > 3º Passo: Ter o recurso para investimento</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi3 === true">
                    <p class="subtugali text-align">Ao reformar sem orientação, novos cômodos podem ficar “colados” a antigos, com janelas dando para outro ambiente fechado, reduzindo seu fornecimento de luz e ventilação.</p>
                    <img class="tamanho866" src="@/assets/imagem811.svg" alt="Logo2">
                    <img class="tamanho866" src="@/assets/inco3.svg" alt="Logo2">
                    <p class="subtugali text-align">Entre os ambientes existentes e os ambientes criados, recomenda-se deixar um espaço livre de pelo menos 1,5 m de largura para troca de ar e entrada de sol, conhecido como “poço de luz e ventilação”. Telhas translúcidas também podem ajudar a ter mais luz, apesar de poderem gerar acúmulo de calor.</p>
                    <img class="tamanho866" src="@/assets/imagem911.svg" alt="Logo2">
                    <img class="tamanho866" src="@/assets/imagem912.svg" alt="Logo2">
                    <img class="tamanho866" src="@/assets/imagem921.svg" alt="Logo2">
                    <img class="tamanho866" src="@/assets/imagem931.svg" alt="Logo2">
                </div>
            </div>   
            <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao4" class="d-flex w-100 color1 tucs2">
                        <span id="barra4" class="tupi white tucs " > 4º Passo: Instalar calhas e rufos</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                        <p class="subtugali text-align">Ao aumentar ambientes, o tamanho das janelas existentes também deve ser aumentado para garantir iluminação e ventilação suficientes.</p>
                        <img class="tamanho866" src="@/assets/imagem1011.svg" alt="Logo2">
                        <img class="tamanho866" src="@/assets/imagem1021.svg" alt="Logo2">
                        <p class="subtugali">Os códigos de obras municipais definem as áreas mínimas de abertura para iluminação e ventilação em edificações. Para o caso de Uberlândia (MG) a área efetiva de ventilação deve ser de pelo menos 17% de área de piso do ambiente. A área efetiva de iluminação deverá ser de pelo menos 50% da área de ventilação. Essas áreas podem ser obtidas em um ambiente, combinando-se janelas normais, janelas altas, clarabóias, vedações permeáveis e aberturas altas para troca de ar, entre outras estratégias.
</p>
                        <img class="tamanho866" src="@/assets/imagem111.svg" alt="Logo2">
                        <p class="subtugali text-align">Verifique se sua janela atende ao recomendado para ventilação:
1º- Com a ajuda de uma trena, meça (em metros) a largura e comprimento do ambiente e multiplique um pelo outro, você terá a área de piso, em m² (1); 

</p>
                        <img class="tamanho866" src="@/assets/passo11.svg" alt="Logo2">
                        <p class="subtugali text-align">2º- Meça (em metros) a altura e largura da abertura para ventilação de sua janela e multiplique uma pela outra, você terá a área efetiva de ventilação, em m² (2);</p>
                        <p class="subtugali text-align">3º- Divida (2) por (1) e multiplique por 100, você terá a porcentagem de área de ventilação efetiva do seu ambiente. 
                            Garanta que a área efetiva de ventilação de janelas seja igual ou superior a 45% do tamanho do vão em que se encaixa a janela</p>
                        <p class="subtugali text-align">Paralelamente, a área das aberturas destinadas à insolação e iluminação dos compartimentos deverá corresponder, no mínimo a: 
I - 1/6 (um sexto) da área do cômodo, se de permanência prolongada; 
II - 1/8 (um oitavo) da área do cômodo, se de permanência transitória;
Indica-se um percentual de aberturas para ventilação de 8,33% a 15% em salas e quartos e, entre 6,25% e 15% em áreas molhadas.
Paralelamente, estudos recentes recomendam que o percentual de elementos transparentes em quartos seja ≥ 23%, em salas que esteja entre 17% e 23% e em áreas molhadas, ≥ 12%.
</p>
                        <img class="tamanho866" src="@/assets/imagem441.svg" alt="Logo2">
    
                    </div>
                </div>              
            <div @click="changes5()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao5" class="d-flex w-100 color22 tucs2">
                    <span id="barra5" class="tupi white tucs " > 5º altura adequada do texto</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi5 === true">
                    <p class="subtugali text-align">Se o teto é baixo, o ar quente e sujo fica na altura das pessoas, tornando o ambiente desagradável. Ao criar um novo cômodo, garanta uma altura livre de pelo menos 2,4m em banheiros e 2,6m ou mais nos outros ambientes. Janelas rentes à laje/forro também ajudam a eliminar o ar quente/sujo. Contrate um profissional para te ajudar.</p>
                    <img class="tamanho81" src="@/assets/imagem32.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/imagem412.svg" alt="Logo2">
                </div>
            </div>  
            <div @click="changes6()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao6" class="d-flex w-100 color1 tucs2">
                    <span id="barra6" class="tupi white tucs " > 6º Passo: Atenção ao clima em relacão ao conforto</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi6 === true">
                    <p class="subtugali text-align">O clima interage com a casa, incomodando mais ou menos seus moradores de acordo com as características construtivas dessa casa e hábitos de seus moradores. Quando realizar reformas, utilize materiais construtivos e janelas adequados ao clima local. Veja mais sobre em: Escolher materiais e técnicas construtivas e Criar condições para ventilação e iluminação.
                    </p>
                    <div>   
                        <ul>
                            <li><p class="subtugali text-align">Crie o hábito de verificar a previsão do tempo e planeje sua alimentação e vestimentas de acordo</p></li>
                            <li class="puts"><img class="tamanho866" src="@/assets/imagem37.svg" alt="Logo2"></li>
                            <li><p class="subtugali text-align">Você também pode utilizar um termômetro de parede de mercúrio para monitorar a temperatura externa – seu preço é bem acessível</p></li>
                            <li class="puts"><img class="tamanho866" src="@/assets/imagem163.svg" alt="Logo2"></li>
                            <li><p class="subtugali text-align">Outros recursos como umidificador, climatizador e toalha molhada podem atenuar a sensação desconfortável</p></li>
                            <li class="puts"><img class="tamanho866" src="@/assets/umidificador1.svg" alt="Logo2"></li>
                        </ul>   
                    </div>
                </div>          
            </div>     
        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec551',
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