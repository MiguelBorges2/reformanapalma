<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">As lâmpadas artificiais desempenham um papel crucial na promoção da saúde física e mental, ajudando a regular o sono, melhorar o humor, aumentar a produtividade, garantir a segurança e, em alguns casos, até mesmo auxiliar no tratamento de certas condições médicas.
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
                    <span id="barra1" class="tupi white tucs " >1º Passo: Definir o tipo de luminária</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align"> Durante o dia, faça o possível para aproveitar a iluminação natural. Se isso não for possível, utilize luminárias de acordo com o trabalho que deseja desempenhar.
</p>
                    <img class="tamanho81" src="@/assets/tipolu1.svg">
                    <p class="subtugali text-align"> Por exemplo:
                        Para atividades de estudo ou trabalho em uma mesa, utilize luminárias de foco, como pendentes, luminária de leitura, abajur ou de piso
                    </p>
                    <p class="subtugali text-align"> Para atividades que utilizam objetos maiores ou ocupam parte significativa do ambiente, opte por luminárias gerais, como as luminárias de teto. 
                    </p>  
                    <p class="subtugali text-align"> Para as lâmpadas, escolha lâmpadas de LED. Elas não produzem calor, utilizam até 90% menos de energia e não causam impacto ambiental, pois são completamente recicláveis
                    </p>  
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " >2º Passo: Definir a potência da lâmpada para o ambiente</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <ul>
                        <li><p class="subtugali text-align">Meça a área em metros quadrados (m²) do espaço que você deseja iluminar. Isso pode ser feito multiplicando o comprimento pela largura do ambiente</p></li>
                        <li><p class="subtugali text-align">Escolha a iluminância desejada. A iluminância é a quantidade de luz que atinge uma superfície e é medida em lux (lm/m²). Para ambientes residenciais, os valores comuns variam entre 100 a 300 lux para áreas de estar e até 500 lux para áreas de trabalho</p></li>
                        <li><p class="subtugali text-align">Use a fórmula de potência luminosa. A potência luminosa (em lúmens) é uma medida da quantidade total de luz emitida pela lâmpada. A relação entre a potência luminosa (em lúmens), a área do ambiente (em metros quadrados) e a iluminância desejada (em lux) pode ser expressa pela fórmula:</p></li>
                    </ul>
                    <p class="subtugali text-align">Potência Luminosa (lm) = Área do Ambiente (m²) × Iluminância Desejada (lux)</p>
                    <ul>
                        <li><p class="subtugali text-align">Consulte as especificações técnicas das lâmpadas LED disponíveis no mercado para encontrar uma que forneça a potência luminosa desejada</p></li>
                        <li><p class="subtugali text-align">Leve em consideração outros fatores importantes ao escolher uma lâmpada LED, como a temperatura de cor (em Kelvin), o ângulo de feixe de luz e a qualidade da luz (índice de reprodução de cores - IRC)</p></li>
                        
                    </ul>
                    <img class="tamanho083" src="@/assets/passo11.svg">
                </div> 

            </div> 
              

            
               
        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec631',
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
