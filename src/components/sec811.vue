<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">O canteiro de obras apresenta vários riscos à saúde, como problemas respiratórios devido à inalação do pó de cimento e possíveis alergias e dermatoses causadas por produtos como argamassas, tintas, ácidos e solventes. O uso de máscaras, luvas, óculos de proteção e roupas apropriadas é crucial para evitar tais problemas. O ruído intenso das máquinas pode levar à perda auditiva, sendo necessário o uso de protetores auriculares. Além disso, a presença de animais como escorpiões, aranhas e cobras representa um risco, exigindo cuidado e uso de botas e calçados fechados para proteção contra picadas e contato.
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
                    <span id="barra1" class="tupi white tucs " >1º Passo: Preparar ambiente para atividade de rendas</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <ul>
                        <li><p class="subtugali text-align">As necessidades do ambiente para a atividade de renda: Analisar as necessidade de ambientes para atividade de renda é um fator importante para pontuar os principais mobiliários que atendem sua atividade de renda.</p></li>
                        <li><p class="subtugali text-align">Área disponível para adaptação: Verificar a área disponivel para receber mobiliários para geração de renda é um fator muito importante.</p></li>
                        <li><p class="subtugali text-align">Móveis existentes e ou/novos mobiliários: Verifique a dimensão dos móveis existentes para decidir quais mobiliários permanecerão e quais serão trocados para a modificação de layout no ambiente de atividade de renda.</p></li>
                        <li><p class="subtugali text-align">Espaço de circulação e fluxo entre os mobiliários: O espaço de circulação e o fluxo entre os mobiliários é muito importante para a funcionalidade do ambiente. Evite corredores estreitos e espaço entre os mobiliários com menos de 60 cm</p></li>
                        <img class="tacks2" src="@/assets/circulacao.svg">
                        <li><p class="subtugali text-align">Posição de portas e janelas: A adaptação do espaço demanda muitos fatores, um deles é a verificação de portas e janelas em relação ao mobiliário. Dessa maneira, verifique o espaço mais apropriado para o mobiliário, evite obstrução de janelas e portas para melhor acessibilidade e funcionalidade do espaço.</p></li>
                        <li><p class="subtugali text-align">Área disponível para a adaptação: O primeiro passo a ser feito é liberar espaço para instalação de mobiliários para atividade de renda.</p></li>

                    </ul>
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " >2º Passo: Opções de mobiliários com rodas para sala</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <ul>
                        <li><p class="subtugali text-align">Mobiliário para atividade de renda: Opte por mobiliários com rodinhas, empilháveis ou dobráveis para melhor funcionalidade do espaço. Assim a sobreposição da atividade de renda com as atividades realizadas naquele ambiente a ser utilizado serão mais confortáveis com o manejo e armazenamento dos mobiliários.
                        </p></li>
                        <li><p class="subtugali text-align">SALA (opções de mobiliários com rodinhas para melhor flexibilidade do espaço como):</p></li>
                        <img class="tacks2" src="@/assets/as.gif">
                        <li><p class="subtugali text-align">Beleza e Estética: cadeira de corte, sofá/poltrona de espera, aparador, carrinho auxiliar, mesa e cadeira manicure:</p></li>
                        <img class="tacks2" src="@/assets/salao.svg">
                        <li><p class="subtugali text-align">Loja de vestuário, calçados e acessórios; prateleiras, araras, balcão para atendimento:</p></li>
                        <img class="tacks2" src="@/assets/vest.svg">
                        <li><p class="subtugali text-align"> Consertos eletrônicos: Prateleiras, cadeira e mesa auxiliar:</p></li>
                        <img class="tacks2" src="@/assets/consert.svg">
                    </ul>
                   
                </div> 

            </div> 
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " > 3º Passo: Opções de mobiliários com rodas para cozinha</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-start" v-if="togi3 === true">
                    <ul>
                        <li><p class="subtugali text-align">Mobiliário para atividade de renda: Opte por mobiliários com rodinhas, empilháveis ou dobráveis para melhor funcionalidade do espaço. Assim a sobreposição da atividade de renda com as atividades realizadas naquele ambiente a ser utilizado serão mais confortáveis com o manejo e armazenamento dos mobiliários.</p></li>
                        <li><p class="subtugali text-align"> COZINHA (opções de mobiliários com rodinhas para melhor flexibilidade do espaço como):</p></li>
                        <li><p class="subtugali text-align">Quitandas caseiras: Armários auxiliares, fruteira, balcão e bancada</p></li>
                        <img class="tacks2" src="@/assets/salao.svg">
                        <li><p class="subtugali text-align">Circulação do ambiente: Antes de realizar a adaptação do ambiente para geração de renda, ao planejar os novos mobiliários ou adaptação dos existentes, garanta passagem entre os móveis de no mínimo 60 cm para melhor circulação e funcionalidade do espaço</p></li>
                        <li><p class="subtugali text-align">Temperatura: Aberturas como portas e janelas beneficiam o espaço com ventilação e iluminação natural. Opte realizar a atividade de renda em um ambiente com temperatura entre 20ºC e 23ºC, conforme a ISO 9241.</p></li>
                    </ul>
                </div>  
            </div>   

            
               
        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec811',
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
