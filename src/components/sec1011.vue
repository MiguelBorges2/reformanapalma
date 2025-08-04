<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">Eficiência significa que utiliza menos energia e tem menor impacto ambiental. Além disso, você gasta menos e pesa menos no bolso. Ao economizar você diminui os seus custos fixos, podendo direcionar o valor para outros itens que garantam mais qualidade de vida para você e sua família.
                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Não é necessária nenhuma aprovação da Prefeitura Municipal.

                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Escala da intervenção</p>
                <p class="fo3 famp">Pontual ou edificação</p>
           </div>
           <div class="d-flex dev2 justify-content-center align-items-center ">
                <img class="imai" src="@/assets/Vector.svg">
                <p class="fo3 famp">ATENÇÃO! Antes de reformar a casa, consulte o Manual do Proprietário (entregue pela construtora) para informações sobre o que pode ser feito e garantias.</p>
           </div>
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar</P>
            </div>
            <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " >1º Passo: Verificar o telhado a cada 6 meses</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align">Verifique o telhado a cada 6 meses, observando se há telhas quebradas, calhas entupidas, infiltrações ou sinais de goteira no forro. Essa manutenção é ainda mais importante antes do período de chuvas intensas. No caso de Uberlândia-MG, recomenda-se que essa vistoria seja feita antes do período mais chuvoso, entre os meses de setembro e outubro. Veja o item Acabar com goteiras.
</p>
                    <p class="subtugali text-align">O forro também deve ser inspecionado anualmente, procurando por manchas, rachaduras, sinais de umidade ou presença de cupins.
</p>
                    <img class="tamanho81" src="@/assets/trincas.svg">
                    <img class="tamanho81 maluk" src="@/assets/1280.svg">
                    <p class="subtugali text-align">As calhas e condutores devem ser limpos pelo menos duas vezes ao ano, garantindo o escoamento correto da água.
</p>
                    
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " >2° Passo: Verificar instalações hidráulicas e caixa d’água</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <p class="subtugali text-align"> Verifique a cada três meses se há vazamentos em torneiras, registros, sifões ou em canos aparentes. Observe também a presença de umidade em paredes, ao redor das pias e tanques </p>
                    <p class="subtugali text-align"> A caixa d’água deve ser limpa a cada 6 meses. Essa periodicidade visa garantir a qualidade da água e evitar a proliferação de bactérias e outros microrganismos.  Nessa manutenção, verifique se está tampada, sem sujeira e bem vedada para evitar contaminação da água por insetos ou resíduos. </p>
                    <img class="tamanho80 maluk" src="@/assets/81novo.svg">
                    <p class="subtugali text-align"> Fonte: https://www.sostubo.com.br/limpeza-de-caixa-dagua-em-gravatai  </p>
                    <p class="subtugali text-align"> Como fazer a manutenção da caixa d’água:</p>
                    <p class="subtugali text-align"> 1.      Feche o registro de entrada de água. Evite que mais água entre durante a limpeza</p>
                    <p class="subtugali text-align">  
2.      Use a água da caixa até restar aproximadamente 20 cm no fundo. Essa água restante pode ser usada para lavar pisos, por exemplo</p>
                    <p class="subtugali text-align">3.      Tampe a saída de água da caixa com um pano limpo ou rolha. Isso evita que a sujeira vá para as tubulações.
</p>
                    <p class="subtugali text-align">4.      Lave as paredes e o fundo da caixa. Use esponja ou panos macios. Nunca use sabão, detergentes, escovas metálicas ou produtos químicos abrasivos.
 
</p>
                    <p class="subtugali text-align">5.      Retire a água suja. Use balde ou panos absorventes para remover completamente a água com sujeira.
 
</p>
                    <p class="subtugali text-align">
6.      Enxágue. Repita o processo com água limpa, sem deixar resíduos da lavagem
 
</p>
                    <p class="subtugali text-align">
 
7.      Encha novamente e tampe bem. A tampa deve impedir a entrada de insetos, folhas e sujeiras. Nunca deixe a caixa destampada
 
</p>
                </div> 

            </div> 
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " > 3º Passo: Verificar estrutura/alvenaria</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center2e" v-if="togi3 === true">
                    <p class="subtugali text-align">As paredes externas devem ser avaliadas anualmente em busca de infiltrações, rachaduras, bolor, descascamento da pintura ou descolamento de reboco. Já as paredes internas devem ser inspecionadas com atenção a trincas, manchas de umidade e estufamento de revestimentos.</p>
                    <img class="tamanho81" src="@/assets/trincas.svg">
                    <img class="tamanho81 maluk" src="@/assets/1280.svg">
                    <p class="subtugali text-align">Se houver ferragens aparentes (como armaduras de pilares ou vigas), isso pode indicar corrosão, o que exige atenção de um profissional habilitado (Arquiteto ou engenheiro).</p>
                    <p class="subtugali text-align">A pintura externa deve ser refeita, em média, a cada 3 a 5 anos, dependendo da exposição ao sol e à chuva. Nas áreas internas, a repintura pode ser feita conforme a necessidade — especialmente em casos de mofo ou manchas. Veja também o subítem: Como acabar com infiltrações.</p>
                </div>
            </div>   
            <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao4" class="d-flex w-100 color1 tucs2">
                        <span id="barra4" class="tupi white tucs " > 4º Passo: Verificar esquadrias (portas e janelas)</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                        <p class="subtugali text-align">Faça uma verificação anual para checar se as portas e janelas estão bem fixadas, abrindo e fechando sem esforço. Observe se há dobradiças, fechaduras ou trincos soltos, enferrujados ou danificados. Caso necessite faça a troca dos itens. Pequenos ajustes evitam problemas maiores e aumentam a vida útil dos elementos.</p>
    
                    </div>
                </div>              
            <div @click="changes5()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao5" class="d-flex w-100 color22 tucs2">
                    <span id="barra5" class="tupi white tucs " > 5º Passo: Verificar instalações elétricas</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi5 === true">
                    <p class="subtugali text-align">Realize uma revisão anual na instalação elétrica. Verifique se há tomadas soltas, interruptores com mau contato, cheiro de queimado ou disjuntores desarmando com frequência. Caso note qualquer uma dessas situações, é fundamental consultar um eletricista. Nunca improvise em instalações elétricas: isso pode representar risco de choques, curto-circuito e até incêndios.</p>
                    <img class="tamanho81" src="@/assets/imagem10.svg">
                    <img class="tamanho81 maluk" src="@/assets/imagem9.svg">
                </div>
            </div>  
            

        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec1011',
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
