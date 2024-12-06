<template>
    <div class="w-100 d-flex justify-content-around  alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round2 edit">
            <
        </button>
        <div class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp colo48 "> Conheça o reforma</h1>
            <div class="wid  pad margip3"></div>
            <span class="w-80 margaro">
                <p class="hmp2 cril2">Nem sempre moradias são planejadas para se adaptarem às mudanças. Entretanto, a forma como mudamos e reformamos moradias pode ser um caminho para uma melhor qualidade de vida. E é por isso que o Reforma na Palma da Mão existe!</p>
                <p class="hmp2 cril2">Este site está disponibilizando um conjunto de dicas, orientações e soluções, que nossa equipe de profissionais organizou com muito cuidado, para que informações sobre reformas estejam na palma da mão! Moradores, arquitetos e urbanistas e/ou prestadores de serviços estão todos convidados a utilizar essas informações em suas reformas</p>
            </span>
            <div class=" setune d-flex flex-column justify-content-center align-items-center ">
                <p class="hmp3 cril2">E fique atento sempre que este botão aparacer</p>
                <button class="hmp3 tip colo4 nolans p-1 pad2 marko25 "> Ache um arquiteto </button>
                <p v-if="this.windowWidth < 600" class="hmp3 cril2"> Significa que é OBRIGATÓRIO buscar a ajuda de um profissional o trabalho. Ao clicar no botão, você </p>
                <p v-if="this.windowWidth > 600" class="hmp3 cril2"> Significa que é OBRIGATÓRIO buscar a ajuda de um profissional qualificado, para realizar a ação. Ao clicar no botão, você </p>
                <p class= "hmp3 cril2">será redirecionado para o portal do CAU para encontrar o profissional que vai planejar e executar sua obra.</p>
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indicator "></div>
                    <div class="indi34 "></div>
                    <div class="indi34 "></div>
                    <div class="indi34 "></div>
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round2 edit">
            >
        </button>
    </div>
    <div class="w-100 d-flex justify-content-around  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round edit">
            <
        </button>
        <div class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp text-light"> Antes e Depois</h1>
            <div class="wid  pad margip3"></div>
            <div class="w-100 d-flex ">
                <span class="hlk margaro">
                    <p class="hmp2 text-light">Ana Silva, auxiliar administrativa de 35 anos do Bairro Shopping Park em Uberlândia, buscava ampliar sua cozinha pequena para melhor atender sua família. No site "Reforma na Palma da Mão", encontrou informações no tópico "Aumentar minha casa" que oferecem orientações específicas para melhorar espaços pequenos. Com a orientação técnica recomendada pelo site, Ana transformou sua cozinha em um ambiente mais prático e funcional. "As informações do site foram essenciais para realizar meu desejo. Agora, nossa casa é ainda mais acolhedora. O site é nota 1000! ", afirma Ana.</p>
                    
                
                </span>
                <div class="quid2 d-flex">
                    <span class="w-40 d-flex flex-column justify-content-center align-items-center">
                        <img class="tamamp00" src="@/assets/image 3.svg" alt="Logo2">
                        <p class="fonfonfon">Antes</p>
                    </span>
                    <span class="w-60 d-flex flex-column justify-content-center align-items-center">
                        <img class="tamamp2" src="@/assets/image 2.svg" alt="Logo2">
                        <p class="fonfonfon">Depois</p>
                    </span>
                </div>
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indicator "></div>
                    <div class="indi "></div>
                    <div class="indi"></div>
                    <div class="indi "></div>
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round edit">
            >
        </button>
    </div> 
    <div class="w-100 d-flex justify-content-around  alturatotal align-items-center bg-light">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round2 edit">
            <
        </button>
        <div class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp colo48"> Problemas da Autoconstrução</h1>
            <div class="wid  pad margip3"></div>
            <span class="w-80 margaro">
                <p class="hmp2 cril2">A autoconstrução ocorre quando moradores constroem ou reformam suas casas sem o auxílio de profissionais especializados. Essa prática pode resultar em falta de segurança, uso inadequado de materiais e projetos mal planejados.  É um equívoco pensar que arquitetos, engenheiros e designers de interiores são serviços apenas para pessoas ricas. No entanto, a Lei ATHIS (Assistência Técnica para Habitação de Interesse Social) garante assistência técnica gratuita para moradores de baixa renda, assegurando que suas construções sejam seguras, funcionais e esteticamente agradáveis.  
                    O CAU/BR (Conselho de Arquitetura e Urbanismo do Brasil) fornece uma lista de profissionais qualificados que podem ajudar você na sua reforma ou construção. Clique nos botões abaixo para baixar artigos do grupo de pesquisa MORA acerca das problemáticas da autoconstrução e acessar a lista de recomendação de arquitetos do CAU/BR:</p>
                
            </span>
            <div class="setune3 d-flex flex-column justify-content-around align-items-center">
                <p class="hmp3 mt-3 cril2">Clique nos botões para acesso aos conteúdos sobre a temática e  à lista de arquitetos recomendados pelo</p>
                <p class="hmp3 cril2">Conselho de Arquitetura e Urbanismo (CAU/BR)</p>
                <div class="d-flex w-100 align-items-center justify-content-center">
                    <button class=" hmp3 tip  colo4  mako2 margip6 p-1">  Conteúdos </button>
                    <button class=" hmp3 tip  colo4 mako2 margip6 p-1 "> Ache um arquiteto</button>
                </div>
                
                
            </div>
            <div class=" size d-flex justify-content-between">
                    <div class="indicator "></div>
                    <div class="indi34 "></div>
                    <div class="indi34 "></div>
                    <div class="indi34 "></div>
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round2 edit">
            >
        </button>
    </div> 
    <div class="w-100 d-flex justify-content-around  alturatotal align-items-center tuna">
        <button @click="ShiftLeft" id="shift-left" class="btn-hover-yellow  btn-round edit">
            <
        </button>
        <div class="d-flex flex-column justify-content-center align-items-center tamanho">
            <h1 class="hmp text-light"> Antes e Depois</h1>
            <div class="wid  pad margip3"></div>
            <span class="w-80 margaro">
                <p class="hmp2 text-light"> [MORA] Pesquisa em Habitação é um espaço físico e virtual dedicado a diversas discussões sobre o habitar, formado em junho de 2009 pela Faculdade de Arquitetura, Urbanismo e Design (FAUeD) da Universidade Federal de Uberlândia. O grupo é composto por alunos e professores de graduação e pós-graduação dos cursos de Arquitetura e Urbanismo, Design, Geografia e Ciência da Computação, e faz parte do NUPPA (Núcleo de Pesquisa em Projeto de Arquitetura) da FAUeD/UFU. O objetivo do [MORA] é ser um espaço aberto à crítica e à reflexão, em busca de uma maior integração entre o meio acadêmico e a prática por meio de ações que contribuam efetivamente para a melhoria da qualidade da habitação. As pesquisas realizadas incluem diferentes abordagens, como inovações tecnológicas, sustentabilidade, qualidade espacial e avaliação pós-ocupação. O [MORA] conta com mais de 40 pesquisadores atuantes e desenvolve projetos interdisciplinares de pesquisa e extensão focados no tema da habitação, financiados por órgãos nacionais e internacionais.</p>
            </span>
            <div class="d-flex w-100 justify-content-center align-items-center">
                <img class="tamamp29" src="@/assets/d31e3010-2030-427d-958e-36674aca7fd4 1.svg" alt="Logo2">
                
            </div>
            <div class=" size d-flex justify-content-center">
                    <div class="indicator acabalogo "></div>
                    <div class="indi "></div>
            
                </div>

        </div>
        
       
        
        <button @click="ShiftRight" id="shift-right" class="btn-hover-yellow  btn-round edit">
            >
        </button>
    </div> 
</template>

<script>        
import Subguia1 from './subguia1.vue';
import Subguia2 from './subguia2.vue';
import Subguia3 from './subguia3.vue';
import Subguia4 from './subguia4.vue';

export default {
    name: 'Guia2',
    components: {
        Subguia1,
        Subguia2,
        Subguia3,
        Subguia4
    },
    data() {
      return {
        controlador: [0, 0], // [índice atual, direção da animação]
        windowWidth: window.innerWidth,
      };
    },
    mounted() {
    // Adiciona um ouvinte de evento para mudanças no tamanho da tela
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    // Remove o ouvinte de evento quando o componente for destruído
    window.removeEventListener('resize', this.handleResize);
  },
    methods: {
        ShiftRight() {
            console.log('oi')
            if (this.controlador[0] < 3) {
                this.controlador = [this.controlador[0] + 1, 1]; // Muda o índice e define a direção como 1 (direita)
            }
        },
        ShiftLeft() {
            if (this.controlador[0] > 0) {
                this.controlador = [this.controlador[0] - 1, -1]; // Muda o índice e define a direção como -1 (esquerda)
            }
        },
        handleResize() {
      // Atualiza a largura da janela sempre que o tamanho mudar
      this.windowWidth = window.innerWidth;
        }
    }
};
</script>

<style>
html, body {
  height: 100%; /* Faz com que o html e o body ocupem toda a altura */
  margin: 0;
  padding: 0;
}
.acabalogo{
    margin-right: 4%;
}
.colo4{
        color: #4A4A48;
        font-weight: 500 !important;
   }
.nolans {
    border: none;
}
.hlk{
    width: 50%;
}
.cril2 {
    color: #263238;
    font-weight: 400 !important;
}
.setune {
    border: 2px solid #FFC676;
    border-radius: 24px;
    padding: 1%;
    width: 95%;
}
.setune3 {
    border: 2px solid #FFC676;
    border-radius: 24px;
    width: 95%;
}
.quid2 {
    width: 40%;
    margin-left: 7%;  
}
.colo48 {
    color: #4A4A48;
    font-weight: 600 !important;
}
.tamamp00 {

    width: 100% !important;
    height: auto;
}
.tamamp2 {

width: 100%;
height: auto;
}
.tamamp29 {

width: 30%;
height: auto;
}
.fonfonfon {
    font-size: 2.2vw;
    color: white;
    font-weight: 50;
}
.hmp2 {
    font-size: 1.7vw;
    font-weight: 10;
    margin: 0;
}
.hmp3 {
    font-size: 1.3vw;
    font-weight: 10;
    margin: 0;
}

.hmp {
    font-size: 4vw;
    margin: 3%;
    font-weight: 10;
}
.tuna {
    background: linear-gradient(to top, #749695, #394A55);
}

.btn-round2 {  
  height: 3vw;
  width: 3%;      
  padding: 0;              
  display: flex;           
  align-items: center;     
  justify-content: center; 
  border-radius: 80px;       
  color: black;          
  border: 1px solid black; 
  transition: background-color 0.3s ease; 
  margin: 0.1%;
}
.marko25 {
    margin: 1%;
    background-color: #FFC676;
  }
.margaro {
    margin: 2%;
}
.alturatotal {
    height: auto;
    transition: height 0.5s ease, width 0.5s ease; 
}

.edit {
    color: black;
}
.indi34 {
                width: 20%;
                background-color: grey;
                border-radius: 24px;
                height: 0.8vw;
            }
.gradient-bg {
    background: linear-gradient(to top, #749695, #394A55); 
    border-radius: 0 0 24px 24px;
}

.btn-hover-yellow:hover {
    background-color:   #FFC676;
    
}

@media (max-width: 768px) {
    .btn-round {
        width: 4%; 
        height: 4vw;   
    }
    .setune {
        padding: 2%;
    }
    
}
@media (max-width: 500px) {
    .hmp3 {
        font-size: 1.7vw;
    }
    .hmp2 {
        font-size: 2vw;
    }
    .setune3{
        width: 97%;
    }
    .hlk {
        width: 60%;
    }
    
}



</style>
