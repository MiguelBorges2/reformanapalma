<template>
    <div class="gho w-100 d-flex flex-column justify content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">Importância para saúde</p>
                <p class="fo3 famp text-align">Manchas escuras e úmidas em paredes e pisos indicam absorção indevida de água, que pode provocar trincas, mofo, mau cheiro e até perda total de uma pintura/revestimento. O excesso de umidade e mofo nos ambientes pode causar ou piorar problemas respiratórios, principalmente em idosos, crianças e imunossuprimidos, os deixando mais vulneráveis às doenças.</p>
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
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar</P>
            </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
            <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " > 1 passo: Acabar com goteiras/infiltrações</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align"> Problemas com o telhado, tubulações de água, caimento de pisos e acabamentos de paredes/muros podem favorecer o surgimento de goteiras e infiltrações e a absorção indevida de água pelas paredes e pisos.
Entenda melhor essas questões e veja como resolvê-las acessando as seções sobre Consertar goteiras e Acabar com infiltrações.
</p>
                    
                </div>
            </div>      
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " > 2º Passo: Garantir secagaem ao assentar revestimentos</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <p class="subtugali text-align">Antes de assentar revestimentos, é necessário aguardar a secagem completa do contrapiso. Após o assentamento do revestimento, é necessário aguardar a secagem completa da argamassa antes de rejuntar. Caso o tempo de secagem das camadas que compõem o piso não sejam respeitadas, podem surgir bolhas e manchas de umidade nos revestimento.
                    </p>
                    <img class="tamanho81" src="@/assets/imagem15.svg" alt="Logo2">
                    <img class="tamanho81" src="@/assets/imagem22.svg" alt="Logo2">
                    <div>
                        <p class="subtugali text-align">Veja alguns tempos de secagem recomendados:</p>
                        <ul>
                            <li><p class="subtugali text-align">Para o contrapiso recém-feito: pelo menos 7 dias.</p></li>
                            <li><p class="subtugali text-align">Para o contrapiso antigo, porém recém-lavado: pelo menos 24 horas.</p></li>
                            <li><p class="subtugali text-align">Para a argamassa de assentamento: pelo menos 3 dias.</p></li>
                            <li><p class="subtugali text-align">Para o rejunte: pelo menos 24 horas</p></li>
                            <li><p class="subtugali text-align">Para o caso de pisos, respeite o caimento recomendado pelo fabricante para que a água não empoce - veja seção sobre Acabar com Infiltrações.</p></li>
                        </ul>
                    </div>
                    
          
                </div>
            </div>    
            
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                        <div id="botao3" class="d-flex w-100 color22 tucs2">
                            <span id="barra3" class="tupi white tucs " > 3º Passo: Aplicar reajunte adequadamente</span>
                            <span class="tupi2 "> &#709; </span>
                        </div>
                        <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi3 === true">
                            <p class="subtugali text-align">A baixa qualidade, desgaste ou mesmo ausência do rejunte torna o espaço entre as peças de revestimento entradas para a umidade. A umidade absorvida é dificilmente evaporada, ocasionando aparecimento de manchas e mesmo mofo nos revestimentos. Caso o rejunte esteja descascando, falhando ou esteja com problemas, remova o rejunte defeituoso, higienize o ambiente e pare de usá-lo até que seque por completo. Aplique um novo rejunte, garantindo que...</p>
                            <ul>
                                <li><p class="subtugali text-align">Uma camada uniforme de rejunte seja aplicada entre peças do revestimento e entre revestimentos e a parede.</p></li>
                                <li><p class="subtugali text-align">O espaço entre as peças do revestimento seja completa e igualmente preenchido, sem deixar “degraus”.</p></li>
                                <li><p class="subtugali text-align">O rejunte seque por pelo menos 24 horas antes de ser molhado.</p></li>
                                
                            </ul>
                            <img class="tamanho81" src="@/assets/imagem332.svg" alt="Logo2">
                        </div>
                    </div>       
                 
        </div>
        
        </div>
       
</template>
<script>
export default {
    name: 'sec421',
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
