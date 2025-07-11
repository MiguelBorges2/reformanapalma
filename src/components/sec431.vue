<template>
    <div class="gho w-100 d-flex flex-column justify content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">Importância para saúde</p>
                <p class="fo3 famp text-align">Excesso de calor dentro de casa pode favorecer o agravamento e/ou surgimento de problemas de saúde, principalmente respiratórios e cardiovasculares, comprometendo especialmente a saúde de idosos, crianças e imunossuprimidos. Comportamentos adaptativos aumentam o controle sobre a casa e melhoram condições de saúde e bem-estar durante extremos de calor.</p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Não é necessária nenhuma aprovação da Prefeitura Municipal.

                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Escala da intervenção</p>
                <p class="fo3 famp">Pontual.</p>
           </div>
           
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar.</P>
            </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
            <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " > 1º Passo: Abrir Janelas</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align"> Dependendo de qual a temperatura do lado de fora da casa, as janelas devem ou não serem abertas. É recomendável que todas as janelas da casa permaneçam totalmente abertas nas primeiras horas da manhã e primeiras horas da noite, para que o ar seja trocado e refrescado. Nos horários mais quentes, por outro lado, pode-se ter aberturas menores, para diminuir o ganho de calor pelo vento. Por outro lado, se estiver frio, é importante deixar as venezianas abertas e vidros fechados pelo menos algumas horas do dia.
</p>
                    <img class="tamanho81" src="@/assets/imagem25.svg" alt="Logo2">
                    <p class="subtugali text-align">Recomenda-se que manutenções periódicas sejam feitas nessas janelas, como lubrificação ou substituição de trincos e dobradiças, entre outras. Isso garantirá condições adequadas de uso.</p>
                </div>
            </div>      
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " > 2º Passo: Atenção ao clima em relacão ao conforto</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
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
        </div>
       
</template>
<script>
export default {
    name: 'sec431',
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
