<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">Este tópico sugere a construção de um cômodo específico dentro da residência, destinado à realização de atividades comerciais ou de prestação de serviços, proporcionando um espaço adequado para atender clientes e desenvolver negócios de forma organizada e profissional.
                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Todas as obras que envolvem acréscimo ou redução de área construída, necessita de aprovação da Prefeitura.

                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Escala da intervenção</p>
                <p class="fo3 famp">Pontual ou edificação.</p>
           </div>
           
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar</P>
            </div>
            <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " >1º Passo: Definir as aberturas (portas e janelas)</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <ul>
                       <p class="subtugali text-align">O primeiro fato a ser considerado antes da elaboração do projeto é o estudo solar do terreno. O projeto que considera a orientação solar, se resultará em um ambiente iluminado e ventilado naturalmente. </p>
                       <p class="subtugali text-align">Verifique o norte do lote, e identifique o melhor posicionamento disponível para o novo cômodo e suas aberturas, evitando a setorização oeste. O posicionamento das aberturas em relação ao sol é muito importante para uma edificação, além de proporcionar conforto térmico, reduz significativamente no uso de lâmpadas e na economia de energia.</p>
                       <img class="tacks2" src="@/assets/group1055.svg">
                       <img class="tacks2" src="@/assets/abertura.svg">
                    </ul>
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " >2º Passo: Layout para o cômodo</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <p class="subtugali text-align">É importante que o projeto seja elaborado por um profissional habilitado. Para assim definir de forma funcional o layout do cômodo, prevendo a disposição do mobiliário:</p>
                    <ul>
                        
                        <li><p class="subtugali text-align">Beleza e Estética: cadeira de corte, sofá/poltrona de espera, aparador, carrinho auxiliar, mesa e cadeira manicure:</p></li>
                        <img class="tacks2" src="@/assets/salao.svg">
                        <li><p class="subtugali text-align">Comércio varejista de mercadorias em geral: gôndolas, prateleiras, balcão caixa, mesas e cadeiras;</p></li>
                        <img class="tacks2" src="@/assets/varejo.svg">
                        <li><p class="subtugali text-align">Loja de vestuário, calçados e acessórios; prateleiras, araras, balcão para atendimento:</p></li>
                        <img class="tacks2" src="@/assets/vest.svg">
                        <li><p class="subtugali text-align"> Oficina mecânica/borracharia: Carrinho de ferramentas, estante ou prateleiras, bancada de serviço.</p></li>
                        <img class="tacks2" src="@/assets/mecanica.svg">
                    </ul>
                   
                </div> 

            </div> 
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " > 3º Passo: Pontos elétricos e de iluminação</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-start" v-if="togi3 === true">
                    <p class="subtugali text-align">De acordo com a NBR-5410, o número de pontos de tomada deve ser determinado em função da destinação do local e dos equipamentos elétricos que podem ser ali utilizados. Dessa maneira, é importante ter em mãos o projeto realizado por um profissional habilitado, prevendo equipamentos e pontos de tomadas antes de iniciar a obra como:</p>
                    <ul>
                        <li><p class="subtugali text-align">Beleza e Estética: secador, prancha, máquina de cortar cabelo, babyliss, estufas esterilizadoras, vaporizador capilar, luminária de mesa, máquina de cartão entre outros;</p></li>
                        <li><p class="subtugali text-align">Comércio varejista de mercadorias em geral: freezers, refrigeradores, geladeira, balança, estufa para salgados, micro- ondas, chapa sanduicheira, fogão com forno ou forno individual, exaustor, liquidificador, espremedor de frutas e máquina de cartão, entre outros;</p></li>
                        <li><p class="subtugali text-align">Loja de vestuário, calçados e acessórios: Impressora de etiqueta, impressora, máquina de cartão, computador, gaveta para dinheiro, leitor de código de barras/scanner, ferro de passar roupas entre outros;</p></li>
                        <li><p class="subtugali text-align">Oficina mecânica/borracharia: elevador automotivo, manômetro, scanner automotivo, alinhador de direção digital, chanfradeira pneumática, elevador trifásico, rampa pneumática, marcador elétrico de pneus entre outros;</p></li>
                    </ul>
                </div>  

            </div>   
            <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao4" class="d-flex w-100 color1 tucs2">
                        <span id="barra4" class="tupi white tucs " > 4º Passo: Instalações hidráulicas</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                        <p class="subtugali text-align">É necessário prever pontos de tomadas e iluminação para os equipamentos da atividade  como:</p>
                    <ul>
                        <li><p class="subtugali text-align">Beleza e Estética: pia para manter a higiene do estabelecimento e pessoal, ponto para filtro de água e lavatório, (caso houver banheiro: pontos para pia, descarga hidra e vaso sanitário);</p></li>
                        <li><p class="subtugali text-align">Comércio varejista de mercadorias em geral: pia na parte de manipulação dos alimentos, tanque para manter a higiene do estabelecimento, (caso houver banheiro: pontos para pia, descarga hidra e vaso sanitário);</p></li>
                        <li><p class="subtugali text-align">Loja de vestuário, calçados e acessórios: pia para manter a higiene do estabelecimento e pessoal, (caso houver banheiro: pontos para pia, descarga hidra e vaso sanitário)</p></li>
                        <li><p class="subtugali text-align">Oficina mecânica/borracharia: pia para higiene pessoal das mãos e ponto para torneira para manter a higiene do estabelecimento.</p></li>
                    </ul>
                    </div>
                </div>     
            <div @click="changes5()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao5" class="d-flex w-100 color22 tucs2">
                        <span id="barra5"  class="tupi white tucs " >5º Passo: Acabamento</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi5 === true">
                        <p class="subtugali text-align">O acabamento é a fase final da obra, nessa etapa será colocado piso, revestimento em paredes, forro, acabamento elétrico (placa de tomadas e interruptores) e hidráulico (louças e metais), pintura e marcenaria. Portanto, essa etapa demanda investimento financeiro, pesquise os tipos de materiais e acabamento para seu custo-benefício, assim será evitado surpresas financeiras.</p>
                    </div>
                </div>        
                <div @click="changes6()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao6" class="d-flex w-100 color1 tucs2">
                        <span id="barra6" class="tupi white tucs " > 6 passo: verificar suas necessidades</span>
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
                        <span id="barra7" class="tupi white tucs " > 7 passo: verificar suas necessidades</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi7 === true">
                        <p class="subtugali"> O importante é que opte sempre por uma cadeira confortável entre 40 a 45 cm de altura, com apoio nas costas, a mesa com 72 a 75 cm de altura, profundidade de no mínimo 50 a 60 cm e largura mínima de 80cm, que pode ser adquirida no mercado ou pode ser confeccionada em madeira, MDF, MDP (com acabamento laminado), metálico, vidro temperado etc. E caso utilize telas se atente a distância do rosto a tela e da inclinação dela, o monitor deve estar entre 45 a 70 cm de distância dos seus olhos e alinhado horizontalmente com eles.</p>
                        <img class="tamanho84" src="@/assets/IMG 15 1.svg" alt="Logo2">
                    </div>
                </div>  

            
               
        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec821',
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
