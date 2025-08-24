<template>
    <div class="gho w-100 d-flex flex-column justify content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">Importância para saúde</p>
                <p class="fo3 famp text-align">É importante usar estratégias para manter sua casa mais fresca, porque ambientes muito quentes podem piorar problemas respiratórios, como asma e alergias. O ar quente pode dificultar a respiração, causar tosse e falta de ar. Além disso, o calor excessivo pode ajudar os germes a se espalharem, aumentando o risco de pegar doenças respiratórias, de pele e outras. Isso nos deixa mais vulneráveis às doenças.</p>
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
            <div class="d-flex dev31 justify-content-center align-items-center ">
                <img class="imai" src="@/assets/1383.svg">
                <p class="fo3">ATENÇÃO! Consulte o Manual do Proprietário antes de reformar sua casa para saber as garantias e o que é permitido.</p>
           </div>
         
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar.</P>
            </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
            <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " > 1 passo: Analisar a necessidade do local</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align">Pense sobre o lugar onde sua casa está. Se for úmido, escolha uma tinta que aguente bem a umidade e o mofo. Se a exposição solar for alta, é bom usar uma tinta que não desbote com os raios UV e mantenha a cor por mais tempo.
Uma tinta que reflete o calor pode fazer o interior da casa ficar mais fresco. Assim, você não vai precisar utilizar refrigeração (ar-condicionado e ventilador), o que pode te ajudar a economizar energia.
</p>
        
                </div>
            </div>      
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " > 2º Passo: Escolher a cor adequada</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <div class="w-100">
                        <p class="subtugali text-align">
                        -Uberlândia-MG está inserida na Zona bioclimática 4- ZB4 e a absortância mínima é de 0,6, mas a recomendada é 0,4 (cores claras).</p>
                        <p class="subtugali text-align">-Identifique as paredes externas dos cômodos que você mais permanece;</p>
                        <p class="subtugali text-align">-Escolha a tinta para essas paredes externas que possua absortância recomendada, 0,4 (cores claras).</p>
                        <p class="subtugali text-align">-Observe na tabela abaixo os valores para α (símbolo alfa) abaixo de 40.</p>
                        <p class="subtugali text-align">-Escolha as cores com valores de até 40.</p>
                        <p class="subtugali text-align">-Evite as cores que tem valores acima de 40.</p>
                    </div>
                    <img class="tamanho81" src="@/assets/solar.svg" alt="Logo2">
                    <p class="subtugali text-align">Fonte: DORNELLES, Kelen Almeida. Absortância solar de superfícies opacas: métodos de determinação e base de
dados para tintas látex acrílica e PVA. 2008. 160p. Tese (Doutorado) - Faculdade de Engenharia Civil, Arquitetura
e Urbanismo, Universidade Estadual de Campinas, Campinas, 2008.</p>
                </div>
            </div>    
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " > 3º Passo: Reduzir o calor</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi3 === true">
                    <p class="subtugali text-align"> A vegetação pode ser uma ótima estratégia para reduzir o calor em sua casa. As árvores, arbustos e plantas fornecem sombra natural, ajudando a diminuir a temperatura ambiente ao redor da casa. Além disso, a evapotranspiração das plantas ajuda a resfriar o ar, criando uma sensação de frescor. Ao plantar vegetação ao redor da sua casa, você pode criar um ambiente mais fresco e confortável, reduzindo assim a necessidade de ar condicionado e ventilador, economizando energia.</p>
                    <img class="tamanho81" src="@/assets/casapintada1.svg" alt="Logo2">

                </div>
            </div>              
                 
        </div>
        
        </div>
       
</template>
<script>
export default {
    name: 'sec351',
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
