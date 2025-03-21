<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">A limpeza regular de telhados, paredes externas e placas solares evita escurecimento e previne infiltrações e umidade, aumentando a vida útil desses elementos. Com o tempo, sujeira acumulada reduz a eficiência e altera a cor original, por isso recomenda-se uma limpeza anual. É ideal realizá-la em dias nublados e com clima ameno, verificando possíveis infiltrações, vazamentos e o estado de calhas, rufos, encaixe de telhas e tubulações.
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
                    <span id="barra1" class="tupi white tucs " > 1º Passo: Limpar o telhado</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <ul>
                        <li><p class="subtugali text-align">Proteja o entorno do telhado onde podem sofrer com queda de objetos ou produtos químicos. Pode ser utilizado lona ou papelão. Para jardins, utilize tecidos;</p></li>
                        <li><p class="subtugali text-align">Equipamentos de segurança devem ser usados, como botas com solado emborrachado, luvas de borracha, cinta, óculos e capacetes.</p></li>
                        <li><p class="subtugali text-align">Escolher o produto desejado para a limpeza. Pode ser utilizada água sanitária misturada com água comum ou opte por um produto de limpeza a seco aplicado com pulverizador. </p></li>
                        <li><p class="subtugali text-align">Após a aplicação do produto não se preocupe em enxaguar. A finalização da lavagem é feita posteriormente com a chuva. </p></li>
                    </ul>
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " > 2º Passo: Limpar as paredes</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <ul>
                        <li><p class="subtugali text-align">Comece removendo qualquer sujeira grossa das paredes externas com uma vassoura de cerdas duras ou uma escova de cerdas. Isso pode incluir poeira, teias de aranha, folhas secas e outros detritos soltos.</p></li>
                        <li><p class="subtugali text-align">Use uma mangueira de jardim para enxaguar as paredes com água. Isso ajudará a remover a sujeira solta e a preparar as paredes para uma limpeza mais profunda.</p></li>
                        <li><p class="subtugali text-align">Misture água morna com um detergente suave em um balde. Use uma esponja ou um pano macio para aplicar a solução de limpeza nas paredes, trabalhando de baixo para cima. Evite usar detergentes agressivos, pois eles podem danificar a pintura ou o revestimento das paredes. </p></li>
                        <li><p class="subtugali text-align">Se houver manchas persistentes nas paredes, você pode precisar esfregá-las com uma escova de cerdas macias ou uma esponja. Molhe a área afetada com a solução de limpeza e esfregue suavemente até que a mancha seja removida.</p></li>
                        <li><p class="subtugali text-align">Após limpar as paredes, enxágue bem com água limpa para remover qualquer resíduo de detergente. Certifique-se de enxaguar completamente todas as áreas para evitar o acúmulo de resíduos que possam danificar a pintura ou o revestimento das paredes.</p></li>
                        <li><p class="subtugali text-align">Deixe as paredes secarem ao ar livre completamente antes de aplicar qualquer tratamento adicional, como pintura ou selante.</p></li>
                    </ul>
                </div> 

            </div> 
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " > 3º Passo: Limpar as placas solares</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-start" v-if="togi3 === true">
                    <ul>
                        <li><p class="subtugali text-align">Antes de começar a limpeza, desligue o sistema solar para garantir sua segurança. Isso evitará o risco de choque elétrico durante o processo de limpeza.</p></li>
                        <li><p class="subtugali text-align">Opte por limpar as placas solares em um dia nublado ou no início da manhã ou final da tarde, quando o sol não estiver tão intenso. Limpar as placas solares sob o sol forte pode resultar em manchas de água ou secagem rápida dos produtos de limpeza, o que pode deixar resíduos.</p></li>
                        <li><p class="subtugali text-align">Use uma vassoura de cerdas suaves ou um espanador para remover a sujeira grosseira, como poeira, folhas e detritos soltos. Tenha cuidado para não arranhar as placas solares.</p></li>
                        <li><p class="subtugali text-align">Enxágue as placas solares com água limpa usando uma mangueira de jardim com um spray suave. Isso ajudará a remover a sujeira solta e preparar as placas para a limpeza mais profunda. </p></li>
                        <li><p class="subtugali text-align">Misture água morna com um detergente suave em um balde. Use um pano macio ou uma esponja não abrasiva para aplicar a solução de limpeza nas placas solares. Evite usar produtos químicos agressivos ou abrasivos, pois eles podem danificar as placas solares. </p></li>
                        <li><p class="subtugali text-align">Após a limpeza, enxágue bem as placas solares com água limpa para remover qualquer resíduo de detergente ou sujeira solta.</p></li>
                        <li><p class="subtugali text-align">Deixe as placas solares secarem ao ar livre completamente antes de ligar o sistema solar novamente. Isso garantirá que as placas estejam completamente secas e prontas para produzir energia novamente.</p></li>
                        
                    </ul>
                </div>
            </div>   
            <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao4" class="d-flex w-100 color1 tucs2">
                        <span id="barra4" class="tupi white tucs " > 4º Passo: Misturar a terra com composto orgânico</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                        <p class="subtugali text-align">Para plantio, misture a terra com composto orgânico e cubra o recipiente escolhido até a borda. Cave a terra e plante a semente ou a muda. Acrescente terra adubada para tampar a semente e tampar o buraco.</p>
    
                    </div>
                </div>              
            <div @click="changes5()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao5" class="d-flex w-100 color22 tucs2">
                    <span id="barra5" class="tupi white tucs " > 5º Passo: Fazer a manutenção e cultivo</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi5 === true">
                    <p class="subtugali text-align">Faça a manutenção e cultivo de forma correta. No geral as plantinhas devem ser regadas com frequência e adubadas uma vez ao mês. </p>
                </div>
            </div>  
            
               
        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec581',
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

.down {
    margin-bottom: 2%;
}
.tamanho867{
        width: 80%;
        height: auto;
        display: block;
        margin-bottom: 2%;
        
    }
.sam::before {
    content: 'Altura Elevada: ';
    font-weight: bolder;
}
.sam2 {
    font-weight: bolder;
}
</style>