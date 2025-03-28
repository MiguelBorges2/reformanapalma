<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">A fachada comercial é a parte do estabelecimento físico principal que tem como objetivo ser o meio de comunicação e adentrar os clientes. Mas a fachada vai além da estética e da comunicação visual. A fachada deve ter abertura e entrada acessíveis. Outro fator muito importante é a absortância das paredes externas e internas.
                    Evite a poluição visual em sua fachada, como excesso de cartazes, luminosos e placas, que pode transmitir desorganização a pedestres e clientes. Cores como vermelho, laranja e violeta nas paredes podem gerar irritação e sensação de desconforto. Instale corretamente placas e toldos para prevenir acidentes. Mantenha a calçada nivelada e acessível, pois irregularidades podem causar quedas e ferimentos.
                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Todas as obras que envolvem acréscimo ou redução de área construída, necessita de aprovação da Prefeitura.

                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Escala da intervenção</p>
                <p class="fo3 famp">Pontual ou edificação</p>
           </div>
           <div class="d-flex dev2 justify-content-center align-items-center ">
                <img class="imai" src="@/assets/Vector.svg">
                <p class="fo3 famp">ATENÇÃO! Antes de reformar a casa, consulte o Manual do Proprietário (entregue pela construtora) para informações sobre o que pode ser feito e garantias.</p>
           </div>
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar</P>
            </div>
            <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " >1º Passo: Acessibilidade arquitetônica</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align">Acessibilidade arquitetônica: Antes de executar a fachada, é necessário ter conhecimento da Lei 950/2015 com relação à rampa, calçada e dimensões da porta principal do estabelecimento.</p>
                    <ul>
                        <li><p class="subtugali text-align">Acessibilidade arquitetônica: Antes de executar a fachada, é necessário ter conhecimento da Lei 950/2015 com relação à rampa, calçada e dimensões da porta principal do estabelecimento.</p></li>
                        <img class="tacks2" src="@/assets/calçada.svg">
                        <li><p class="subtugali text-align">Dimensões de porta da fachada: É indicado usar portas com mínimo 90 cm de largura. As portas devem ter acesso sinalizado sempre que houver obstáculos e barreiras.</p></li>
                        <img class="tacks2" src="@/assets/fachada.svg">
                    </ul>
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " >2º Passo: Mobiliário com rodas, empilháveis e dobráveis</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">

                    <p class="subtugali text-align">Uberlândia-MG está inserida na Zona Bioclimática 4 - ZB4 e a absortância mínima é de 0,6, mas a recomendada é 0,4 (cores claras).</p>
                    <img class="tacks2" src="@/assets/solar.svg">
                    <p class="subtugali text-align">Fonte: DORNELLES, Kelen Almeida. Absortância solar de superfícies opacas: métodos de determinação e base de
dados para tintas látex acrílica e PVA. 2008. 160p. Tese (Doutorado) - Faculdade de Engenharia Civil, Arquitetura
e Urbanismo, Universidade Estadual de Campinas, Campinas, 2008.</p>

                </div> 

            </div> 
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " >3º Passo: Transformar a sala em dormitório</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-start" v-if="togi3 === true">
                    <p class="subtugali text-align">A fachada é o meio de comunicação visual principal do estabelecimento. Portanto a fachada deve se comunicar de forma clara/apropriada com relação à atividade de renda</p>
                    <ul>
                        <li><p class="subtugali text-align">Uso da calçada para mesas e cadeiras:
                            Para o uso de calçada com mesas e cadeiras deve ser regulamentada pelos órgãos municipais. As mesas, cadeiras e outros objetos deverão ficar posicionados de forma perpendicular ao longo da parede do imóvel. Deverá respeitar uma faixa de circulação com pelo menos 1,20m (um metro e vinte), para trânsito de pedestres. A área destinada à colocação de mesas, cadeiras e outros objetos deverá ser demarcada, separando-a da faixa de circulação para pedestres, por uma faixa colada ou pintada na cor amarela, com largura entre 4 (quatro) e 5 (cinco) centímetros.</p></li>
                        <img class="tacks2" src="@/assets/mesas.svg">
                        <li><p class="subtugali text-align">O Parklet é uma extensão do passeio público, implantada sobre áreas anteriormente ocupadas por faixas de estacionamento, equipada com bancos, mesas, cadeiras, floreiras e equipamentos de exercícios físicos. Pode incluir elementos recreativos ou artísticos. Limitado a vias com velocidade até 60 km/h e inclinação de até 12%, não é permitido em esquinas. Deve ter proteção de 1,30 m de altura voltada para o tráfego, acessível apenas a partir do passeio, ocupando no máximo 2,20 m de largura por 10 m de comprimento em vagas paralelas ao meio-fio.</p></li>
                        <img class="tacks2" src="@/assets/parklet1.svg">
                    </ul>
                </div>
            </div>  
            <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao4" class="d-flex w-100 color1 tucs2">
                        <span id="barra4" class="tupi white tucs " > 4º Passo: Elementos de controle da radiação solar </span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                        <ul>
                            <li><p class="subtugali text-align">Verifique as condições de uso de toldos na fachada antes de o instalar.</p></li>
                            <li><p class="subtugali text-align">Instalação de toldos na fachada: A instalação de toldos na fachada não deve exceder a 80% (oitenta por cento) da largura dos passeios e ficarem sujeitos ao balanço máximo de 2m (dois metros). Toldos no primeiro pavimento não devem ser instalados abaixo de 2.20 m (dois metros e vinte) em cota referida ao nível do passeio, inclusive seus elementos construtivos. Não devem prejudicar a iluminação pública e nem ocultar placas de nomenclatura de ruas. Devem ser feitos de material resistente às intempéries. Quando o toldo for instalado próximo às redes elétricas ou de telefonia, deverá ser consultada a concessionária quanto à distância mínima a ser preservada da fiação.</p></li>
                            <img class="tacks2" src="@/assets/passo11.svg">
                            <li><p class="subtugali text-align">Cores da fachada e do interior do comércio/serviços: Identifique as paredes externas que fazem contato com as áreas de maior permanência das partes internas; Identifique a absortância de paredes recomendada para a zona bioclimática (ZB) que a sua cidade está inserida; Escolha a tinta para as paredes externas que possua absortância recomendada, 0,4 (cores claras). </p></li>
                            <li><p class="subtugali text-align">Uberlândia-MG está inserida na Zona Bioclimática 4- ZB4 e a absortância mínima é de 0,6, mas a recomendada é 0,4 (cores claras) </p></li>  
                            <img class="tacks2" src="@/assets/solar.svg">
                            <p class="subtugali text-align">Fonte: DORNELLES, Kelen Almeida. Absortância solar de superfícies opacas: métodos de determinação e base de
dados para tintas látex acrílica e PVA. 2008. 160p. Tese (Doutorado) - Faculdade de Engenharia Civil, Arquitetura
e Urbanismo, Universidade Estadual de Campinas, Campinas, 2008.</p>
                            <img class="tacks2" src="@/assets/passo11.svg">
                        </ul>
    
                    </div>
            </div>       
            

            
               
        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec841',
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