<template>
    <div class="gho w-100 d-flex flex-column justify content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">Excesso de umidade e mofo nos ambientes pode causar ou piorar problemas respiratórios, principalmente em idosos, crianças e imunossuprimidos, deixando-os mais vulneráveis às doenças.</p>
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
                    <span id="barra1" class="tupi white tucs " >1º Passo: Acabar com goteiras e infiltrações</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align"> Problemas com o telhado, tubulações de água, caimento de pisos e acabamentos de paredes/muros podem favorecer o surgimento de goteiras e infiltrações, gerando excesso de umidade no interior dos ambientes.
Entenda melhor essas questões e veja como resolvê-las acessando as seções sobre Goteiras e Infiltrações.</p>
                    
                </div>
            </div>      
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " > 2º Passo: Melhorar a ventilação e iluminação da casa</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <p class="subtugali text-align">Os ambientes da casa podem ficar muito úmidos em algumas situações: quando permanecem fechados todo o tempo, quando tem móveis bloqueando as janelas, quando as janelas não dão para o exterior ou são pequenas em relação ao tamanho do ambiente, ou mesmo quando não existem janelas
                    </p>
                    <img class="tamanho81" src="@/assets/imagem14.svg" alt="Logo2">
                    <p class="subtugali text-align">Para evitar o excesso de umidade em ambientes, existem algumas recomendações:</p>
                    <ul>
                        <li><p class="subtugali text-align">Deixe suas portas e janelas abertas o máximo de tempo possível e evite deixar toalhas molhadas secando no banheiro ( estenda-as no varal);</p></li>
                        <li class="puts"><img class="tamanho8" src="@/assets/imagem22.2.svg" alt="Logo2"></li>
                        <li class="puts"><img class="tamanho8" src="@/assets/imagem212.svg" alt="Logo2"></li>
                        <li><p class="subtugali text-align">Abra portas e gavetas de armários quando possível</p></li>
                        <li><p class="subtugali text-align">Use ventiladores para dispersar o excesso de umidade;</p></li>
                        <li class="puts"><img class="tamanho8" src="@/assets/imagem33.svg" alt="Logo2"></li>
                        <li><p class="subtugali text-align">Use giz branco e carvão para "sugar" a umidade de gavetas/prateleiras</p></li>
                        <li class="puts"><img class="tamanho8" src="@/assets/imagem413.svg" alt="Logo2"></li>
                        <li class="puts"><img class="tamanho8" src="@/assets/imagem422.svg" alt="Logo2"></li>
                        <li><p class="subtugali text-align">Garanta que os ambientes tenham janelas de dimensões adequadas.</p></li>
                        <li><p class="subtugali text-align">Veja mais na sessão sobre Ventilação e Iluminação</p></li>
                    </ul>
                </div>
            </div>    
            
                      
                 
        </div>
        
        </div>
       
</template>
<script>
export default {
    name: 'sec411',
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
    .puts{
        list-style: none;
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
    
    .tamanho8{
        width:95%;
        height: auto;
        
    }
    li {
        margin-bottom: 2%;
    }
</style>