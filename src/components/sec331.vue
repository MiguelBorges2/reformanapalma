<template>
    <div class="gho w-100 d-flex flex-column justify content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">Importância para saúde</p>
                <p class="fo3 famp text-align">Instalações elétricas inadequadas apresenta perigo de vida para moradores e profissionais. Distribuir interruptores em diferentes paredes possibilita um controle mais eficaz da iluminação, adaptando-a às necessidades específicas de cada atividade. Uma iluminação adequada é essencial para a saúde ocular, prevenindo fadiga visual e dores de cabeça. Ao configurar ambientes de maneiras diversas e simultâneas, cria-se espaços versáteis que atendem às necessidades individuais e familiares, diminuindo o estresse e promovendo o bem-estar emocional ao proporcionar maior controle sobre o ambiente doméstico.</p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Para o projeto elétrico é preciso a contratação de um profissional habilitado.
                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Escala da intervenção</p>
                <p class="fo3 famp">Pontual ou edificação.</p>
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
                    <span id="barra1" class="tupi white tucs " > 1º passo: verificar suas necessidades</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column" v-if="togi1 === true">
                    <p class="subtugali text-align">Em um primeiro momento é essencial pensar quais são suas necessidades: Qual parede com interruptores e tomadas  melhor te atenderia? Quais equipamentos utilizará? Essas reflexões serão essenciais para tomar as decisões e planejar seu cômodo.
Prefira contratar profissionais especializados para realizar os reparos e serviços necessários.</p>
<p class="subtugali text-align">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários</p>
                </div>
            </div>      
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " > 2º Passo: Verificar qual área disponível para ampliação</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <p class="subtugali text-align">
                        Peça para um profissional verificar se há aterramento dos fios. O aterramento elétrico é uma medida de segurança que garante o bom funcionamento dos equipamentos conectados à rede elétrica, garantindo a segurança dos moradores (NBR 5410).
                    </p>
                    <p class="subtugali text-align">Verifique se há fios expostos pela casa para colocá-los de forma mais segura</p>
                </div>
            </div>    
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " > 3º Passo: Escolher materiais e técnicas construtivas</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-start" v-if="togi3 === true">
                    <p class="subtugali"> Verifique o local e altura das tomadas e pontos de luz</p>
                    <p class="subtugali text-align">A altura necessária das tomadas recomendada pela  NBR 5410 é de 30 centímetros do piso. E geralmente os interruptores são instalados a uma altura entre 1,00 metro e 1,20 metros do piso acabado, seguindo as recomendações de ergonomia e acessibilidade.  Mas você pode usar uma trena, fita métrica, ou até uma régua, para medir no local e verificar qual altura de tomada será melhor para você.</p>
                    <img class="tamanho81" src="@/assets/tomadaeint.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/tomadaeint2.svg" alt="Logo2">
                    <p class="subtugali text-align">Para mudar o ponto de luz e/ou tomada de lugar, você pode utilizar eletrodutos ou eletrofitas</p>
                    <img class="tamanho81" src="@/assets/tomadaeint3.svg" alt="Logo2">
                    <p class="subtugali text-align">Para o uso de eletrofitas você pode seguir alguns passos:
                    </p>
                    <img class="tamanho81" src="@/assets/image32.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/image23.svg" alt="Logo2">
                </div>
            </div>    
           
                      
                 
        </div>
        
        </div>
       
</template>
<script>
export default {
    name: 'sec331',
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
    .maw {
        width: 100%;
    }
    .text-align {
        text-align:justify;
        hyphens: auto;
    }
    .imai {
        width: 10%;
        margin-right: 1%;
        height: auto;
    }
    .mp {
        margin-top: 1%;
    }
</style>