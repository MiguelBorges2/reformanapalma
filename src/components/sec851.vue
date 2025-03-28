<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">Apesar da energia elétrica ser essencial para nossas vidas, instalações inadequadas podem provocar graves acidentes como queimaduras de até 3° grau; coagulação do sangue, lesão nos nervos, contração muscular reação nervosa de estremecimento (a sensação de choque) e até eletrocussão (morte provocada devido à exposição do corpo à uma dose letal de energia elétrica). Por isso é de extrema importância a contratação de um profissional habilitado, desde pequenos reparos à instalação elétrica na moradia.
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
                    <span id="barra1" class="tupi white tucs " >1º Passo: Verificar condições da parte elétrica</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align">Para a realização de projeto elétrico e luminotécnico é necessário a contratação de um profissional habilitado da área. Caso haja necessidade de trocar a unidade consumidora de energia (de 127V para 220V) necessita de solicitação junto a concessionária da região. Dê preferência em contratar profissionais  especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar</p>
                    <ul>
                        <li><p class="subtugali text-align">Verifique se há fios expostos pela casa, para colocá-los de forma mais segura, e de maneira alguma toque nos fios expostos caso houver</p></li>
                        <li><p class="subtugali text-align">Verifique o local e altura das tomadas e pontos de luz. (NBR 5410): as tomadas e interruptores podem ser instaladas em 3 alturas: Baixas: 30 cm a partir do chão; Médias: 1,20 cm até 1,30 cm a partir do chão; Altas: 2 m até 2,25 cm a partir do chão</p></li>
                        <img class="tacks2" src="@/assets/tomatoma.svg">
                        <li><p class="subtugali text-align">Para mudança de ponto de luz e/ou tomada de lugar, você pode utilizar eletrodutos ou eletrofitas;</p></li>
                    </ul>
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " >2º Passo: Verificar condições junto a profissionais</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <ul>
                        <li><p class="subtugali text-align">Peça para um profissional verificar se há aterramento dos fios. O aterramento elétrico é uma medida de segurança que garante o bom funcionamento dos equipamentos conectados à rede elétrica, garantindo a segurança dos moradores (NBR 5410);</p></li>
                        <li><p class="subtugali text-align">Peça para um profissional (eletricista) para fazer o levantamento de cargas de todos os componentes (interruptores, tomadas, iluminação, chuveiro, lâmpadas). Depois da avaliação peça um novo fornecimento de energia (de 127V para 220V) junto à concessionária da região.</p></li>
                        <li><p class="subtugali text-align">As fontes limpas consistem em um sistema de produção de energia que podem ser incluídas em seu projeto. A energia fotovoltaica, eólica e solar são fontes limpas e acessíveis.</p></li>
                    </ul>

                </div> 

            </div> 
            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " >3º Passo:  Instalação de tomadas e interruptores</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-start" v-if="togi3 === true">
                    <p class="subtugali text-align">A instalação de tomadas e interruptores em múltiplas paredes de um cômodo oferece flexibilidade para configurações e ajustes futuros de layout e mobiliário. Um profissional qualificado deve ser contratado para realizar o projeto elétrico, garantindo compatibilidade entre caixas de passagem, suportes, módulos e espelhos. As necessidades específicas de tomadas gerais e especializadas devem ser consideradas, levando em conta os equipamentos e eletrodomésticos a serem utilizados, como ar-condicionado, geladeiras, freezers, secadores, cooktops, fornos elétricos, ventiladores e computadores. Para garantir eficiência na iluminação, especialmente em ambientes de trabalho, é recomendável o uso de mais de uma luminária, como iluminação focalizada, para atender às necessidades do usuário.</p>
                </div>
            </div>  
            
            

            
               
        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec851',
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