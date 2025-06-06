<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">Se você tiver poucos quartos e precisar isolar uma pessoa infectada, é possível usar a sala para abrigar a pessoa saudável, implementando estratégias temporárias ou permanentes. Isso é importante porque a pessoa doente deve ficar isolada em um quarto para evitar que outros membros da família sejam infectados, especialmente quando alguém da família pertence ao grupo de risco. É crucial entender melhor quem está incluído nesse grupo de risco: Idosos, diabéticos, hipertensos, portadores de doenças cardiovasculares (infarto, insuficiência cardíaca, miocardiopatias), portadores de doenças pulmonar crônica (enfisema, bronquite, asma, fibrose cística, fibrose pulmonar, etc), portadores de câncer, portadores de insuficiência renal e imunodeficientes.
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
                    <span id="barra1" class="tupi white tucs " >1º Passo: Verificar suas necessidades</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <ul>
                        <li><p class="subtugali text-align">É importante refletir quais são suas necessidades.  Quantas pessoas precisam ser alojadas e por quanto tempo? Essas reflexões serão essenciais para tomar as decisões e planejar seu cômodo.</p></li>
                        <li><p class="subtugali text-align">
                            Realize medições do cômodo para a partir daí poder preparar sua sala para suas necessidades.</p></li>
                    </ul>
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " >2º Passo: Preparar o ambiente</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <ul>
                        <li><p class="subtugali text-align">Decida quais mobiliários deverão permanecer, que precisam ser adequados ou ainda substituídos.</p></li>
                        <li><p class="subtugali text-align">Se atente à  localização dos pontos elétricos para não tampar com mobiliário e conseguir usar com facilidade. Veja mais em Tomadas e Interruptores em somente uma parede.</p></li>
                        <img class="tacks2" src="@/assets/sps.gif">
                        <li><p class="subtugali text-align">Leve em conta o espaço existente com a porta aberta para evitar o caso do exemplo abaixo, em que não é possível abri-la completamente.</p></li>
                        <img class="tacks2" src="@/assets/gifa.gif">
                        <li><p class="subtugali text-align">E no caso das janelas verifique a altura do mobiliário que irá instalar em frente à abertura para evitar o bloqueio de iluminação e ventilação.</p></li>
                        <img class="tacks2" src="@/assets/gifb.gif">
                    </ul>
                    
                </div> 

            </div> 
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " >3º Passo: Transformar a sala em dormitório</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-start" v-if="togi3 === true">
                    <p class="subtugali text-align bunny">Para transformar sua sala num dormitório você pode adquirir um sofá-cama. Há muitos tipos disponíveis no mercado, ou você pode escolher o modelo mais adequado para a sua sala e encomendar com um profissional da área. Caso seu desejo seja investir um pouco mais, opte por sofás que expandam. Veja alguns modelos:
                    </p>
                    <img class="tacks2" src="@/assets/images52.svg">
                    <img class="tacks2" src="@/assets/image34.svg">
                    <p class="subtugali text-align">Já se você optar por transformar sua sala com mais conforto para abrigar mais pessoas de modo permanente utilize sofás cama estilo bicama.
                    </p>
                    <img class="tacks2" src="@/assets/image62.svg">
                    <p class="subtugali text-align bunny2">caso opte por soluções mais econômicas e provisórias, o modelo sofanete e puff multiuso são opções que você deve considerar.
                    </p>
                    <img class="tacks2" src="@/assets/image82.svg">
                    <img class="tacks2" src="@/assets/image91.svg">
                </div>
            </div>   
            <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao4" class="d-flex w-100 color1 tucs2">
                        <span id="barra4" class="tupi white tucs " >4º Passo: Organizar o espaço entre os mobiliários</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                        <p class="subtugali text-align">Ao planejar os novos mobiliários ou adaptar os existentes, garanta os espaços de passagem entre os móveis de no mínimo 60 cm.</p>
                        <img class="tacks2" src="@/assets/nameless.svg">
                    </div>
                </div>   
               
        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec721',
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
.tacks2 {
    width: 70%;
    height: auto;
    display: block;
    margin: auto;
}
.tamanho76 {
    width: 70%;
    height: auto;
}
.cizo {
    font-weight: 700;
}
.tamanho791 {
    width: 70%;
    height: auto;
    display: block;
    margin: auto;
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
.frips {
    font-size: 1.6vw;
}
.bunny::before {
    content: 'Soluções mais permanentes:';
    font-weight: 700;
    margin-right: 1%;
}
.bunny2::before {
    content: 'Soluções mais provisórias:';
    font-weight: 700;
    margin-right: 1%;
}
</style>