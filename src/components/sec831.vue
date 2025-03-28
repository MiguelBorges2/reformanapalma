<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">Algumas atividades de renda demandam tempo maior em sua execução. Dessa maneira, orienta-se o uso de mobiliários ergonômicos: mesas, cadeiras (encosto e assento ajustáveis, apoio para braços e rodízio nos pés) e bancos que são pensados para facilitar o trabalho humano. Eles oferecem maior conforto, prevenção de lesões e dores, melhoria na postura e aumento na produtividade. Existem mais de 30 doenças catalogadas como ocupacionais. Entre elas, estão algumas bem conhecidas e de maior incidência: a Lesão por Esforço Repetitivo, os Distúrbios Osteomusculares Relacionados ao Trabalho, entre outras.
                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Todas as obras que envolvem acréscimo ou redução de área construída, necessita de aprovação da Prefeitura.

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
                    <span id="barra1" class="tupi white tucs " >1º Passo: Escolher o tipo de mobiliário</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align">A escolha do mobiliário deve ser relacionado de acordo com as dimensões e necessidades do ambiente. Mobiliários móveis com roldanas, encaixáveis, dobráveis e empilháveis podem ser ótimas opções para a adaptabilidade e funcionalidade para o estabelecimento comercial. Veja no próximo tópico algumas opções de mobiliários para as diferentes classificações de atividades de renda.</p>
            
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " >2º Passo: Mobiliário com rodas, empilháveis e dobráveis</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">

                    <p class="subtugali text-align">Mobiliário com rodinhas, empilháveis e dobráveis permitem maior facilidade do deslocamento dos móveis no espaço e seu armazenamento, mesmo sendo que sejam grandes e pesados. Quando for escolher o seu mobiliário com rodinhas, leve em consideração a capacidade de carga do rodízio, tração, materiais, aplicação e outros fatores que contribuirão com o conforto e mobilidade do usuário</p>
                    <ul>
                        <li><p class="subtugali text-align">Mobiliário para atividade de renda: Opte por mobiliários com rodinhas, empilháveis ou dobráveis para melhor funcionalidade do espaço. Assim a sobreposição da atividade de renda com as atividades realizadas naquele ambiente a ser utilizado serão mais confortáveis com o manejo e armazenamento dos mobiliários.
                        </p></li>
                        <li><p class="subtugali text-align">Beleza e Estética: opções de mobiliários com rodinhas para melhor flexibilidade do espaço como cadeira de corte, sofá/poltrona de espera, aparador, carrinho auxiliar, mesa e cadeira manicure. Com rodinhas, empilhavél, encaixável e/ou dobrável:</p></li>
                        <img class="tacks2" src="@/assets/salao.svg">
                        <li><p class="subtugali text-align">Comércio varejista de mercadorias em geral: gôndolas, prateleiras, balcão caixa. Com rodinhas, empilhavél, encaixável e/ou dobrável:</p></li>
                        <img class="tacks2" src="@/assets/varejo.svg">
                        <li><p class="subtugali text-align"> Loja de vestuário, calçados e acessórios; prateleiras, araras, balcão para atendimento. Com rodinhas, empilhavél, encaixável e/ou dobrável:</p></li>
                        <img class="tacks2" src="@/assets/vest.svg">
                        <li><p class="subtugali text-align">Oficina mecânica/borracharia: Carrinho de ferramentas, estante ou prateleiras, bancada de serviço com rodinhas;</p></li>
                        <img class="tacks2" src="@/assets/mecanica.svg">
                        <li><p class="subtugali text-align">Quitandas caseiras: armários auxiliares, fruteira, balcão, bancada. Com rodinhas, empilhavél, encaixável e/ou dobrável</p></li>
                        <img class="tacks2" src="@/assets/passo11.svg">
                    </ul>
                   
                </div> 

            </div> 
            

            
               
        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec831',
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
</style>