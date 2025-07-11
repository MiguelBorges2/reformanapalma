<template>
    <div class="gho w-100 d-flex flex-column justify content-center align-items-center">
           <div class="dev d-flex flex-column justify-content-center ">
                <p class="fo famp">Importância para saúde</p>
                <p class="fo3 famp">As goteiras geram excesso de umidade e mofo nos ambientes, podendo causar ou piorar problemas respiratórios, principalmente em idosos, crianças e imunossuprimidos, os deixando mais vulneráveis às doenças.</p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Aprovação para fazer</p>
                <p class="fo3 famp">Não é necessario nenhuma aprovação da Prefeitura Municipal.  </p>
           </div>
           <div class="dev2 d-flex flex-column justify-content-center ">
                <p class="fo">Escala da intervenção</p>
                <p class="fo3 famp">Pontual. </p>
           </div>
           <div class="w-80 dev3 ">
                <P class="fo2 famp">Prefira contratar profissionais especializados para realizar os reparos e serviços necessários. Veja algumas dicas para se orientar.</P>
            </div>
            <div class="w-100 d-flex flex-column justify-content-center align-items-center">
                <div @click="changes()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao1" class="d-flex w-100 color22 tucs2">
                        <span id="barra1" class="tupi white tucs " > 1º Passo: verificar se tem buracos nas telhas</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi1 === true">
                        <p class="subtugali"> Chuvas com granizo e a instalação inadequada de aquecedores solares podem criar buracos e rachaduras nas telhas por onde a água de chuva entra, formando goteiras.</p>
                        <img class="tamanho83" src="@/assets/imagem221.svg" alt="Logo2">
                        <img class="tamanho83" src="@/assets/imagem211.svg" alt="Logo2">
                        <p class="subtugali"> Caso verifique a presença de furos nas telhas, recomenda-se aplicar manta/fita adesiva aluminizada ou outros produtos impermeabilizantes neles.</p>
                    </div>
                </div>      
                <div @click="changes2()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao2" class="d-flex w-100 color1 tucs2">
                        <span id="barra2" class="tupi white tucs " >2º Passo: Verificar posicionamento das telhas</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali w-100 d-flex justify-content-center align-items-center flex-column" v-if="togi2 === true">
                        <p class="subtugali"> Após ventos fortes ou algum serviço no telhado, telhas podem ficar mal posicionadas entre si ou mesmo se quebrarem, gerando frestas por onde a água de chuva vaza.
Ao verificar telhas desencaixadas, desmonte a área em volta e a remonte, retirando algumas telhas e as recolocando com cuidado, garantindo que fiquem bem posicionadas, justas e travadas entre si.
</p>
                    </div>
                </div>    
                <div @click="changes3()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao3" class="d-flex w-100 color22 tucs2">
                        <span id="barra3" class="tupi white tucs " > 3º Passo: Verificar desgaste na estrutura do telhado</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi3 === true">
                        <p class="subtugali">Peças da estrutura podres, tortas ou mesmo faltantes podem levar a um entortamento do telhado, favorecendo a passagem da água de chuva.</p>
                        <img class="tamanho81" src="@/assets/imagem31.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/imagem421.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/imagem411.svg" alt="Logo2">
                        <p class="subtugali">Pode ser necessário desmontar e remontar o telhado respeitando-se as recomendações de fabricantes quanto à: distância máxima entre escoramentos (ripas, terças e caibros), a faixa de sobreposição mínima de telhas- DISTÂNCIA MÉDIA ENTRE RIPAS) e a inclinação mínima do telhado.</p>
                        <img class="tamanho81" src="@/assets/imagem52.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/imagem51.svg" alt="Logo2">
                        <img class="tamanho81" src="@/assets/imagem6.svg" alt="Logo2">
                        <p class="subtugali">Em todo caso, é necessária uma avaliação profissional específica para cada caso. Veja mais informações em Quais cuidados tomar. 
                        </p>
                    </div>
                </div>    
                <div @click="changes4()"  class="d-flex tcs flex-column  justify-content-center align-items-center">
                    <div id="botao4" class="d-flex w-100 color1 tucs2">
                        <span id="barra4" class="tupi white tucs " > 4º Passo: Instalar calhas e rufos</span>
                        <span class="tupi2 "> &#709; </span>
                    </div>
                    <div class="tugali d-flex flex-column justify-content-center align-items-center" v-if="togi4 === true">
                        <p class="subtugali">Devem existir calhas na beirada mais baixa de telhados e entre superfícies de um mesmo telhado para coletar as águas de chuva</p>
                        <img class="tamanho81" src="@/assets/imagem911.svg" alt="Logo2">
                        <img class="tamanho83" src="@/assets/imagem93.svg" alt="Logo2">
                        <img class="tamanho83" src="@/assets/imagem92.svg" alt="Logo2">
                        <p class="subtugali">Os rufos, por sua vez, protegem o encontro entre telhado e parede/muro, conduzindo a água. As calhas e rufos evitam que a água escorra para dentro dos ambientes, gerando goteiras, e infiltrações. Essas peças devem ser bem encaixados no telhado e vedados, garantindo inclinação mínima para que a água escoe através delas e não das telhas. Diferentes tipos de telhados demandam diferentes tipos de calhas e rufos conforme as imagens.
Garanta que seu telhado tenha essas peças. Conte com a ajuda de um profissional para definir as melhores estratégias para seu caso.
</p>
                        <img class="tamanho83" src="@/assets/imagem101.svg" alt="Logo2">
                        <img class="tamanho83" src="@/assets/imagem103.svg" alt="Logo2">
                        <img class="tamanho83" src="@/assets/imagem102.svg" alt="Logo2">

                    </div>
                </div>            
               
                
            </div>
            
        </div>
       
    
    </template>
    <script>
        export default {
            name: 'sec121',
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
    