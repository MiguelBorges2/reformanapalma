<template>
    <div class="gho w-100 d-flex flex-column justify content-center align-items-center">
       <div class="dev d-flex flex-column justify-content-center ">
            <p class="fo famp">importância para saúde</p>
            <p class="fo3 famp">O distanciamento social trouxe novas necessidades para casa, como garantir que que o ambiente seja seguro e confortavel para trabalhar ou estudar. Isso inclui melhorar a disposição  dos móveis para evitar que problemas de saúde. tanto físicos quanto mentais. Especialmente, idosos, crianças e pessoas com sistema imunológico frágil podem ser mais afetados, ficando mais  vulneráveis a doenças</p>
       </div>
       <div class="dev2 d-flex flex-column justify-content-center ">
            <p class="fo">Aprovação para fazer</p>
            <p class="fo3 famp">Não é necessario nenhuma aprovação da Prefeitura Municipal  </p>
       </div>
       <div class="dev2 d-flex flex-column justify-content-center ">
            <p class="fo">Escala da intervenção</p>
            <p class="fo3 famp">Pontual </p>
       </div>
       <div class="w-80 dev3 ">
            <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar</P>
        </div>
        <div class="dev4 d-flex align-items-start justify-content-start ">
            <div class="w-50 d-flex flex-column align-items-center justify-content-center">
                <div class="d-inline-block custiome">
                    <div class=" d-flex flex-column border vai justify-content-center align-items-center border-dark   ">
                        <div @click="flip1" class="d-flex holt w-100" >
                            <div id="ex251" class=" d-flex  justify-content-center  custi2 lop lign-item-center">
                                <span class="fo7 famap500"> 1: verificar suas necessidades</span>
                            </div>
                            <span   class="wid3  d-flex justify-content-center  color22 align-items-center btn-arrow"> &#709;</span>
                        </div>
                        <div v-if="bott1 === true" class="dev5">
                            <p class="fo4">É importante refletir quais são suas necessidades. Qual tamanho da mesa te atenderia? Essas reflexões, serão essenciais para tomar as descisões e planejar seu cômodo</p>
                        </div>
                        <div v-if="bott1 === true" class="dev5">
                            <p class="fo4">Realize medições do cômodo para apartir dai poder separar sua sala para suas necessidades</p>
                        </div>
                    </div>
                </div>
    
                <div class="d-inline-block custiome">
                    <div  class=" d-flex flex-column border vai justify-content-center align-items-center border-dark   ">
                        <div @click="flip3" class="d-flex holt w-100" >
                            <div id="ex4" class=" d-flex  justify-content-center  custi2 align-item-center">
                                <span class="fo7 famap500"> 3: Escolher mesas e cadeiras adequadas </span>
                            </div>
                            <span   class="wid3  d-flex justify-content-center  color1 align-items-center btn-arrow"> &#709;</span>
                        </div>
                        <div v-if="bott3 === true" class="dev5">
                            <p class="fo6">O importante é escolher sempre por uma cadeira confortável entre 40 a 45 cm de altura, com apoio nas costas, a mesa com 72 a 75 cm de altura, profundidade de no mínimo 50 a 60 cm e largura mínima de 80cm, que pode ser adquirida no mercado ou pode ser confeccionada em madeira, MDF, MDP (com acabamento laminado), metálico, vidro temperado etc. E, caso utilize telas, se atente a distância do rosto a tela e da inclinação dela, o monitor deve estar entre 45 a 70 cm de distância dos seus olhos e alinhado horizontalmente com eles.</p>
                        </div>
                        <img v-if="bott3 === true" class="tamanho72" src="@/assets/IMG 5 1.svg" alt="Logo2">
                    </div>
        
                </div>
                <div class="d-inline-block custiome">
                    <div  class=" d-flex flex-column border vai justify-content-center align-items-center border-dark   ">
                        <div @click="flip5" class="d-flex holt w-100" >
                            <div id="ex6" class=" d-flex  justify-content-center  custi2 align-item-center">
                                <span class="fo7 famap500"> 5: Utilizar mobiliário para guardar material</span>
                            </div>
                            <span   class="wid3  d-flex justify-content-center  color22 align-items-center btn-arrow"> &#709;</span>
                        </div>
                        <div v-if="bott5 === true" class="dev5">
                            <p class="fo6">Para guardar seu material de estudo/trabalho você pode utilizar gaveteiros com rodízios que não ocupam muito espaço e pode ser transportado com facilidade. Além de guardar seu material, você conseguirá ampliar a sua área de trabalho utilizando como apoio durante o dia e a noite pode usar como mesa de apoio</p>
                        </div>
                        <img v-if="bott5 === true" class="tamanho72" src="@/assets/IMG 11 3.svg" alt="Logo2">
                        <img v-if="bott5 === true" class="tamanho72" src="@/assets/IMG 11 4.svg" alt="Logo2">
                        <div v-if="bott5 === true" class="dev5">
                            <p class="fo6">Você, também, pode utilizar armário multifuncional com mesa e escrivaninha dobrável como nas opções a seguir. </p>
                        </div>
                        <img v-if="bott5 === true" class="tamanho72" src="@/assets/IMG 12 2.svg" alt="Logo2">
                    </div>
                </div>
            </div>
            <div class="w-50 d-flex justify-content-center align-items-center flex-column">
                <div class="d-inline-block custiome">
                    <div class="d-flex flex-column vai border justify-content-center align-items-center border-dark vai">
                        <div @click="flip2"  class="d-flex holt w-100" >
                            <div id="ex3" class=" d-flex  justify-content-center  custi2 align-item-center">
                                <span class="fo7 famap500"> 2: preparar o ambiente</span>
                            </div>
                            <span   class="wid3  d-flex justify-content-center  color22 align-items-center btn-arrow"> &#709;</span>
                        </div>
                        <div v-if="bott2 === true" class="dev5">
                            <p class="fo4">Decida quais mobiliários deverão permanecer, que precisam ser adequados ou ainda ainda substituídos</p>
                        </div>
                        <div v-if="bott2 === true" class="dev5">
                            <p class="fo4">Atente-se a licalização dos pontos elétricos para não tampar com mobiliário e conseguir usar com facilidade. Veja mais em tomadas e interruptores em somente uma parede</p>
                        </div>
                    
                        <div v-if="bott2 === true" class="dev5">
                            <p class="fo4">Leve em conta o espaço existente com a porta aberta para evitar o caso do exemplo abaixo, em que não é possível abri-la completamente</p>
                        </div>
                        <img v-if="bott2 === true" class="tamanho72" src="@/assets/GIF - Sala pequena - Conflito com portas.gif" alt="Logo2"> 
                        <div v-if="bott2 === true" class="dev5">
                            <p class="fo4">E no caso das janelas verifique a altura do mobiliário que irá instalar em frente à abertura para evitar o bloqueio de iluminação e ventilação</p>
                        </div>
                        <img v-if="bott2 === true" class="tamanho72" src="@/assets/GIF - Sala pequena - Conflito com janelas.gif" alt="Logo2">
                    </div>  
                </div>
                <div class="d-inline-block custiome">
                    <div  class="d-flex flex-column vai border justify-content-center align-items-center border-dark vai ">
                        <div @click="flip4" class="d-flex holt w-100" >
                            <div id="ex5" class=" d-flex  justify-content-center  custi2 align-item-center">
                                <span class="fo7 famap500"> 4: Providenciar uma bancada de trabalho</span>
                            </div>
                            <span class="wid3  d-flex justify-content-center  color1 align-items-center btn-arrow"> &#709;</span>
                        </div>
                        <div v-if="bott4 === true" class="dev5">
                            <p class="fo6">Sempre se atente às dimensões disponíveis para instalação da mesa. Você pode aproveitar o espaço abaixo da TV para organizar seu ambiente. Caso sua sala não comporte uma mesa, há opções dobráveis, como escrivaninha dobrável com prateleira, mesa dobrável de alumino com tampo de mdf e mesa dobrável com rodízio.</p>
                        </div>
                        <img v-if="bott4 === true" class="tamanho72" src="@/assets/GIF - Sala pequena - Móveis.gif" alt="Logo2">
                        <img v-if="bott4 === true" class="tamanho72" src="@/assets/IMG 6 1.svg" alt="Logo2">
                        <img v-if="bott4 === true" class="tamanho72" src="@/assets/IMG 6 2.svg" alt="Logo2">
                        <img v-if="bott4 === true" class="tamanho72" src="@/assets/IMG 7 1.svg" alt="Logo2">
                        <img v-if="bott4 === true" class="tamanho72" src="@/assets/IMG 7 2.svg" alt="Logo2">
                        <img v-if="bott4 === true" class="tamanho72" src="@/assets/IMG 9 1.svg" alt="Logo2">
                        <img v-if="bott4 === true" class="tamanho72" src="@/assets/IMG 8 1.svg" alt="Logo2">
                        <img v-if="bott4 === true" class="tamanho72" src="@/assets/IMG 8 2.svg" alt="Logo2">
                        <img v-if="bott4 === true" class="tamanho72" src="@/assets/IMG 9 2.svg" alt="Logo2">
                        <img v-if="bott4 === true" class="tamanho72" src="@/assets/IMG 11 6.svg" alt="Logo2">
                    </div>   
                </div>
         
                <div class="d-inline-block custiome">
                    <div  class=" d-flex flex-column border border-dark vai ">
                        <div class="d-flex holt w-100" >
                            <div class=" d-flex  justify-content-center  custi2 align-item-center">
                                <span class="fo7 famap500">6: Utilizar mobiliária para guardar material</span>
                            </div>
                            <span   class="wid3  d-flex justify-content-center  color22 align-items-center btn-arrow"> &#709;</span>
                        
                        </div>
                    </div>  
                </div>
            </div>
      </div>
    </div>


 

</template>
<script>
    export default {
        name: 'sec25',
        props: {
            selec: {
                type: Number,
                required: true,

            }
            
        },
        data() {
            return {
                bott1: false,
                bott2: false,
                bott3: false,
                bott4: false,
                bott5: false,
                bott6: false
            };
        },
        methods: {
            flip1(){
                this.bott1 = !this.bott1;
                if(this.bott1 == true){
                    let elem = document.getElementById('ex251');
                    elem.classList.add('lop');
                }
                if(this.bott1 == false){
                    let elem = document.getElementById('ex251');
                    elem.classList.remove('lop');
                }
            },
            flip2(){
                this.bott2 = !this.bott2;
                if(this.bott2 == true){
                    let elem1 = document.getElementById('ex3');
                    elem1.classList.add('lop');
                }
                if(this.bott2 == false){
                    let elem1 = document.getElementById('ex3');
                    elem1.classList.remove('lop');
                }
            },
            flip3(){
                this.bott3 = !this.bott3;
                if(this.bott3 == true){
                    let elem1 = document.getElementById('ex4');
                    elem1.classList.add('lop');
                }
                if(this.bott3 == false){
                    let elem1 = document.getElementById('ex4');
                    elem1.classList.remove('lop');
                }
            },
            flip4(){
                this.bott4 = !this.bott4;
                if(this.bott4 == true){
                    let elem1 = document.getElementById('ex5');
                    elem1.classList.add('lop');
                }
                if(this.bott4 == false){
                    let elem1 = document.getElementById('ex5');
                    elem1.classList.remove('lop');
                }
            },
            flip5(){
                this.bott5 = !this.bott5;
                if(this.bott5 == true){
                    let elem1 = document.getElementById('ex6');
                    elem1.classList.add('lop');
                }
                if(this.bott5 == false){
                    let elem1 = document.getElementById('ex6');
                    elem1.classList.remove('lop');
                }
            },
        }
    }
</script>


<style>
.famp {
    color: #263238;
    font-weight: 400 !important;  
}
.fo2{
    
    font-size: 1.7vw;
    
}
.vai {
    border-radius: 18px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2); /* Sombra abaixo da div */
}
.custiome { 
    
        width: 97%; 
        
        margin: 1.5%;
        margin-top: 4%;
         flex-basis: auto; /* Permite que o item mantenha o tamanho do conteúdo */
    
}
.dev5{
    width: 90%;
}
.tamanho72 {
    width: 80%;
}
.gho {
    margin-bottom: 33%;
}
.dev4 {
    width: 93%;
}
.dev3 {
    margin-top: 3%;
    margin-bottom: 6%;
    width: 90%;
}
.dev{
    margin-top: 6%;
    width: 90%; 
    padding: 1%;
    border-radius: 30px;
    border: 3px solid  #FFC676;
}
.dev2{
    margin-top: 1.6%;   
    width: 90%; 
    padding: 1%;
    border-radius: 30px;
    border: 3px solid   #568D8B;
}
.fo4{
    margin-top: 1%;
    font-size: 1.6vw;
    color: #4A4A48;
}
.fo6{
    margin-top: 1%;
    font-size: 1.4vw;
    color: #4A4A48;
}
.lop {
    border: 1px solid black;
}
.famap400{
    font-weight: 400 !important;
}
.famap300{
    font-weight: 300 !important;
}
.famap700{
    font-weight: 700     !important;
}
.famap500{
    font-weight: 500      !important;
}
.fo{
    color: #568D8B;
    font-size: 1.8vw;
    margin: 0;

}
.tilt {
    margin-bottom: 30%;
}
.fo3{   
    font-size: 1.6vw;
    margin: 0;
}
.fo5 {
    font-size: 1.6vw;
    margin: 1%;
}
.fo7 {
    font-size: 1.4vw;
    margin: 2%;
    color: #4A4A48;
    
}
@media (max-width: 768px) {
          .dev {
            padding: 2%;

          }
         
          .dev2 {
            padding: 2%;
            margin-top: 3%;
          }
          .fo {
            font-size: 1.9vw !important;
          }
          .fo3 {
            font-size: 1.7vw !important;
          }
        .fo7{
            font-size: 2vw;
        } 
        .fo2 {
            font-size: 1.7vw !important;
        }
        .fo4 {
            font-size: 2vw;
        }
        .fo6 {
            font-size: 2vw;
        }
            
    }
    @media (max-width: 600px) {
    
        .fo {
            font-size: 2.4vw !important;
          }
          .fo3 {
            font-size: 2.3vw !important;
          }
        .fo7{
            font-size: 2vw;
        } 
        .fo2 {
            font-size: 2.1vw !important;
        }
        .fo4 {
            font-size: 2vw;
        }
        .fo6 {
            font-size: 2vw;
        }
            
    }

</style>