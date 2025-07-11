<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">Limpar os sapatos ao chegar da rua se tornou mais comum durante a pandemia, assim como guardar os sapatos em um lugar específico. Fazer isso ajuda a reduzir a sujeira e as substâncias nocivas que podem entrar em nossas casas. É uma prática importante não apenas durante a pandemia, mas também para manter nossa saúde em geral. Por isso, é importante ter um lugar adequado e bem ventilado para guardar os sapatos.
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
                    <p class="subtugali text-align"> É importante refletir quais são suas necessidades. Onde irá dispor os calçados? Qual as dimensões desse espaço? Como será a organização? Terá um nicho para sapatos  limpos e outros sujos? Essas reflexões serão essenciais para tomar as decisões e planejar seu móvel.
</p>
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " >2º Passo: Escolher o tipo de mobiliário</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <ul>
                        <li><p class="subtugali text-align">Para definir o modelo do seu mobiliário  realize medições do espaço que você tem disponível, então decida se comprará mobiliários prontos ou planejados. Há opções como:</p></li>
                        <li><p class="subtugali text-align">Sapateira/bancos com rodinhas que podem ser feitos por você a partir de caixotes de feira.</p></li>
                    </ul>
                    
                </div> 

            </div> 
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " > 3º Passo: Fazer a Sapateira de caixote com roldanas</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-start" v-if="togi3 === true">
                    <p class="subtugali text-align"> 1º etapa: Pegue um caixote, limpe bem, lixe para deixar a superfície lisa.
                    </p>
                    <p class="subtugali text-align"> 2º etapa: Aplique um fundo sintético nivelador para tratar a superfície de madeira, espere secar e passe a tinta desejada.
                    </p>
                    <p class="subtugali text-align"> 3º etapa: Instale as rodinhas.
                    </p>
                    <p class="subtugali text-align"> 4º etapa: Faça uma almofada com pano e espuma e coloque sobre a sapateira/banco.
                    </p>
                    <img class="tacks2"  src="@/assets/comofazer.svg">
                    <p class="text-align frips">Fonte: https://www.tuacasa.com.br/sapateira-pequena/
Organizados por Parreira (2020).
</p>
                    <p class="text-align cizo subtugali">Alguns Exemplos</p>
                    <p class="text-align subtugali">Sapateira em madeira ripada, utilizando o espaço disponível, disposta na entrada de casa, para organizar os sapatos vindos da rua.</p>
                    <img class="tacks2"  src="@/assets/sapateira.svg">
                    <p class="text-align subtugali">Se desejar que cada pessoa ou grupo de pessoas tenha um nicho, a opção de aço inox com detalhes coloridos é uma alternativa a ser considerada.</p>
                    <img class="tacks2"  src="@/assets/sapateiraaço.svg">
                    <p class="subtugali text-align">E ainda, a solução com blocos de concreto, que pode ser montada por você mesmo e personalizá-lo com a cor de sua preferência. Você também pode escolher uma planta para compor seu ambiente.</p>
                    <img class="tacks2"  src="@/assets/sapateiroconc.svg">
                </div>
            </div>   

            
               
        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec711',
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
