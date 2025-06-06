<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">A construção de um novo banheiro pode ter uma série de benefícios para a saúde, incluindo melhorias na higiene pessoal, privacidade, conveniência, acessibilidade e prevenção de doenças. Esses benefícios podem contribuir significativamente para o conforto e o bem-estar dos moradores da casa. Além de valorizar o imóvel quando construído conforme as instruções.
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
                    <span id="barra1" class="tupi white tucs " > 1º Passo: Utilizar aquecimento de água por energia solar</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    
                    <p class="subtugali text-align">O sistema de aquecimento solar de água é composto por Coletores Solares (placas de aquecimento solar de água) e Reservatório térmico (boiler). O sistema de funcionamento por termo sifão baseia-se em um processo natural em que a água aquecida nos coletores solares se expande e tende a subir para o reservatório térmico e provoca a circulação da água presente no reservatório para os coletores, formando o fluxo natural de circulação. Nos períodos em que a radiação solar não é suficiente para o aquecimento da água é necessário o uso de uma fonte de energia auxiliar que pode ser elétrica ou a gás.
Certifique-se: </p>
                    <ul>
                        <li><p class="subtugali text-align">- Coletores devem ter ENCE A ou B ou Selo Procel;</p></li>
                        <li><p class="subtugali text-align">- Reservatórios devem possuir Selo Procel;></p></li>
                        <li><p class="subtugali text-align">- Volume de armazenamento entre 50 e 150 l/m² de coletor.</p></li>
                    </ul>
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " > 2º Passo: Verificar as dimensões mínimas recomendadas para banheiros </span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <p class="subtugali text-align down">Sobre o tamanho do banheiro
                    </p>
                    <p class="subtugali text-align">Verifique as dimensões mínimas recomendadas para banheiros residenciais:</p>
                    <img class="tamanho866" src="@/assets/medidasa.svg" alt="Logo2">
                    <img class="tamanho866" src="@/assets/medidasb.svg" alt="Logo2">
                    <img class="tamanho866" src="@/assets/medidasc.svg" alt="Logo2">
                    <p class="subtugali text-align">- Caso necessário construir um banheiro acessível:</p>
                    <img class="tamanho867" src="@/assets/medidasd.svg" alt="Logo2">
                </div> 

            </div> 
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " >3º Passo: Posicionar janela para ventilação e iluminação natural</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-start" v-if="togi3 === true">
                    <p class="subtugali text-align">A melhor posição para uma janela no banheiro depende de fatores como ventilação, iluminação natural e privacidade. Recomenda-se:</p>
                    <p class="subtugali text-align sam"> A janela deve ser instalada em uma altura que permita a entrada de luz e ventilação, mas que também mantenha a privacidade</p>
                    <ul>
                        <li><p class="subtugali text-align">Normalmente, cerca de 1,5 a 1,8 metros do piso.</p></li>
                        <li><p class="subtugali text-align">
                            Isso evita que a janela esteja na linha de visão direta, especialmente se o banheiro estiver próximo de áreas externas ou vizinhos.</p></li>
                    </ul>
                    
                    <p class="subtugali text-align sam2">Perto do Chuveiro ou Banheira:</p>
                    <ul>
                        <li><p class="subtugali text-align">Para permitir a rápida dissipação do vapor, a janela deve estar próxima ao chuveiro ou banheira.</p></li>
                        <li><p class="subtugali text-align">
                            Use materiais resistentes à umidade (como alumínio ou PVC) para evitar danos devido ao vapor</p></li>
                    </ul>
                    <p class="subtugali text-align sam2">Na Parede Oposta à Porta:</p>
                    <ul>
                        <li><p class="subtugali text-align">Isso ajuda na circulação de ar, criando um fluxo eficiente entre a entrada e a saída do ar no ambiente.</p></li>
                    </ul>
                    <p class="subtugali text-align sam2">Voltada para o Norte (no Hemisfério Sul):</p>
                    <ul>
                        <li><p class="subtugali text-align">Garante maior iluminação natural durante o dia, já que o Sol incide de forma mais constante</p></li>
                    </ul>
                    <p class="subtugali text-align sam2">Evite dieração Sul (no Hemisfério Sul):</p>
                    <ul>
                        <li><p class="subtugali text-align">Essa posição pode deixar o banheiro mais frio e menos iluminado.</p></li>
                    </ul>
                    <p class="subtugali text-align sam2">Janela Horizontal Longa</p>
                    <ul>
                        <li><p class="subtugali text-align">Ideal para maximizar a ventilação enquanto mantém a privacidade.</p></li>
                        <li><p class="subtugali text-align">Instale na parte superior da parede.</p></li>
                    </ul>
                    <p class="subtugali text-align sam2">Pequena e Vertical:</p>
                    <ul>
                        <li><p class="subtugali text-align">Boa para banheiros menores. Posicione perto do teto para captar luz e ventilação.</p></li>
                    </ul>
                    <p class="subtugali text-align sam2">Vidro Fosco ou Jateado:</p>
                    <ul>
                        <li><p class="subtugali text-align">Essencial para privacidade, especialmente se a janela estiver voltada para áreas externas visíveis.</p></li>
                    </ul>
                    <p class="subtugali text-align">e possível, posicione a janela de forma que complemente outras aberturas do banheiro (como uma porta ou exaustor) para facilitar a circulação do ar</p>
                </div>
            </div>   
            
               
        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec561',
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