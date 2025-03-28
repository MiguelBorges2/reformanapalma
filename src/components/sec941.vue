<template>
    <div class="gho w-100 d-flex flex-column justify-content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">importância para saúde</p>
                <p class="fo3 famp text-align">O aquecimento de água por energia solar pode ter um impacto positivo significativo na saúde humana, proporcionando água mais limpa e segura, promovendo o bem-estar e contribuindo para a sustentabilidade ambiental.
                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">É necessária aprovação do orgão fornecedor de energia.

                </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Escala da intervenção</p>
                <p class="fo3 famp">Pontual ou edificação</p>
           </div>
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar</P>
            </div>
            <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao1" class="d-flex w-100 color22 tucs2">
                    <span id="barra1" class="tupi white tucs " >1º Passo: Definir área de instalação das placas solares</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                    <p class="subtugali text-align">Um sistema de aquecimento de água por energia solar, também conhecido como aquecedor solar, é constituído pelos coletores solares (ou placas solares) e pelo reservatório térmico, comumente chamado de boiler.  Por meio desse sistema há economia na conta de energia, visto que com o sistema de aquecimento solar evita o uso de chuveiro elétrico.
O sistema de aquecimento solar utiliza a captação do sol para transformar em energia térmica. Este sistema aproveita o calor do sol diretamente, empregando placas solares ou tubos a vácuo para captar a energia solar e transferir o calor para a água. A água que circula dentro dos coletores é aquecida após a radiação solar passar a camada de vidro.
A instalação de um sistema de aquecimento solar envolve vários passos. Aqui estão os principais:
Determine a melhor área para instalar os coletores solares, geralmente no telhado ou em uma estrutura elevada que receba muita luz solar durante o dia. No Brasil, o indicado é posicionar para o telhado mais voltado para o NORTE e com uma inclinação indicada de acordo com a latitude da cidade a ser instalado:
A placa solar deve ser orientada para o norte com inclinação de acordo com a latitude do local mais 10 graus, desde que não ultrapasse 45 graus.
</p>
                    <img class="tacks22" src="@/assets/image10.svg">
    
                    
                </div>
            </div>
            <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao2" class="d-flex w-100 color1 tucs2">
                    <span id="barra2" class="tupi white tucs " >2º Passo: Calcular quantidade de placas solares</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                    <p class="subtugali text-align"> Calcule a quantidade necessária de coletores solares e o tamanho do reservatório térmico (boiler) com base na demanda de água quente da residência ou do local a ser aquecido.

É sempre recomendável contar com o apoio de um especialista ao escolher um produto. Os melhores fornecedores geralmente possuem equipes capacitadas para orientar os clientes. Para dimensionar corretamente um aquecedor de água, é necessário calcular o número de pessoas na residência e a quantidade média de litros utilizada por cada uma diariamente. Em média, uma pessoa consome cerca de 45 litros de água quente em casas e 60 litros em apartamentos com aquecedores elétricos. No caso de aquecedores a gás, o consumo é aproximadamente 10% menor, devido ao maior poder calorífico, enquanto os aquecedores solares apresentam um consumo 10% maior.

Por exemplo, em uma casa com cinco moradores, um aquecedor elétrico deve produzir cerca de 225 litros de água quente por dia (5 pessoas x 45 litros). Para um aquecedor a gás, esse valor cai para 200 litros, e no caso de um aquecedor solar, aumenta para aproximadamente 250 litros. Com esses dados, é possível escolher o equipamento adequado. Modelos com capacidades entre 200 e 250 litros atenderiam bem a essas necessidades, mas existem opções de 50 a 1000 litros disponíveis no mercado.

É importante considerar equipamentos que possam alterar significativamente o consumo, como banheiras de grande capacidade. Uma banheira de 200 litros, por exemplo, exige um aquecedor com capacidade adicional de 100 litros por dia. Além disso, deve-se levar em conta a localização geográfica, já que em regiões mais quentes a demanda por água aquecida tende a ser menor, reduzindo a potência necessária do aquecedor. Consultar o fabricante é essencial para garantir a escolha adequada ao clima e às condições de uso.
Aquecedores solares
  No caso dos aquecedores solares, é necessário calcular a quantidade de placas coletoras. Com base no volume de água a ser aquecido, consulte a tabela dos fabricantes. Existem dois modelos comuns no mercado: placas de 1,42 m², com capacidade de aquecer 103 litros diários, e de 1,95 m², que aquecem 104 litros por dia. Para uma residência que necessita de 250 litros de água quente por dia, seriam necessárias três placas de 1,42 m², além de um reservatório complementar de 250 litros.

Por fim, como as tecnologias de aquecimento estão em constante evolução, é essencial buscar informações atualizadas com especialistas. Dessa forma, é possível identificar as opções mais eficientes, econômicas e sustentáveis, garantindo o correto dimensionamento e melhor desempenho do equipamento.
 </p>
                
                </div> 

            </div> 

            <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                <div id="botao3" class="d-flex w-100 color22 tucs2">
                    <span id="barra3" class="tupi white tucs " >3º Passo: Instalar placas solares</span>
                    <span class="tupi2 "> &#709; </span>
                </div>
                <div class="tugali d-flex flex-column justify-content-center align-items-start" v-if="togi3 === true">
                    <ul>
                        <li><p class="subtugali text-align">Limpe a área onde os coletores solares serão instalados, garantindo que o telhado ou a estrutura estejam em boas condições.</p></li>
                        <li><p class="subtugali text-align">Fixe os coletores solares no telhado ou na estrutura designada, garantindo uma orientação e inclinação adequadas para captar a maior quantidade possível de luz solarp</p></li>
                        <li><p class="subtugali text-align">Instale os tubos que conduzirão a água quente dos coletores solares para o reservatório térmico.</p></li>
                        <li><p class="subtugali text-align">Posicione e conecte o boiler em um local adequado, geralmente próximo aos coletores solares para minimizar as perdas de calor nas tubulações.</p></li>
                        <li><p class="subtugali text-align">Conecte o sistema de aquecimento solar ao sistema de água quente da residência ou do local, garantindo que o fluxo de água seja adequado e seguro.</p></li>
                        <li><p class="subtugali text-align">Após a instalação, teste o sistema para garantir que esteja funcionando corretamente. Faça ajustes conforme necessário para otimizar o desempenho do sistema.</p></li>
                        <li><p class="subtugali text-align">O instalador deve passar instruções para os usuários sobre como operar e manter o sistema de aquecimento solar de forma eficiente e segura.</p></li>
                        <img class="tacks22" src="@/assets/image101.svg">
                    </ul>
                </div>
            </div>  

        </div>
        
      
       
</template>
<script>
export default {
    name: 'sec941',
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
    .tacks22 {
    width: 25%;
    height: auto;
    display: block;
    margin: auto;
}
</style>