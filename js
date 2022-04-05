
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0 
let placar = 0 

let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

let articleQuestoes = document.querySelector('.questoes')
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Quantos anos nós temos?",
    alternativaA : "15 e 13",
    alternativaB : "17 e 15",
    alternativaC : "16 e 21",
    alternativaD :  "16 e 16",
    correta      : "16 e 16",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "O que mais gostavmos de comer no intervalo?",
    alternativaA : "Hamburgão",
    alternativaB : "Croassaint",
    alternativaC : "Qualquer folhado",
    alternativaD : "Barrinha de cereal",
    correta      : "Hamburgão",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual é a frequência que andamos de mãos dadas?",
    alternativaA : "Sempre",
    alternativaB : "nunca",
    alternativaC : "Eca Mão",
    alternativaD : "Sempre pra falar mal dos outros",
    correta      : "Sempre pra falar mal dos outros",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Se fossemos um animal, qual seriamos?",
    alternativaA : "Mula",
    alternativaB : "Anta",
    alternativaC : "Cavalo",
    alternativaD : "Boi",
    correta      : "Boi",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual estilo nosso de música favorita??",
    alternativaA : "Pagode",
    alternativaB : "Funk",
    alternativaC : "Sertanejo",
    correta      : "Funk",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Como geralmente nos referenciamos aos bonitos da sala?",
    alternativaA : "Olha la",
    alternativaB : "Teu bonito e/ou meu bonito",
    alternativaC : "Pelo nome",
    alternativaD : "Piscadinha",
    correta      : "Teu bonito e/ou meu bonito",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual é o melhoor lugar para fofocar?",
    alternativaA : "deck da cantina",
    alternativaB : "sala",
    alternativaC : "todo lugar é lugar",
    correta      : "todo lugar é lugar",
}

    const q8 = {
        numQuestao   : 8,
        pergunta     : "Qaul é o apelido da Ana?",
        alternativaA : "Loira",
        alternativaB : "baixinha",
        alternativaC : "pão doce",
        alternativaD : "Ana Vi",
        alternativaE : "Todas estão corretas",
        correta      : "Todas estão corretas",

    }        
    const q9 = {
        numQuestao   : 9,
        pergunta     : "Qual é o apelido da Júlia?",
        alternativaA : "Ju",
        alternativaB : "Tia Juju",
        alternativaC : "Julinha soca fofo",
        alternativaD : "Todas estão corretas",
        correta      : "Todas estão corretas",

    }
    const q10 = {
        numQuestao   : 10,
        pergunta     : "Qual professor nós amamos?",
        alternativaA : "Battistella",
        alternativaB : "Battistella",
        alternativaC : "Battistella",
        correta      : "Battistella",

    }

const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
   
    let certa = questoes[numeroDaQuestao].correta

    if(respostaEscolhida == certa) {
        pontos += 10 
    } else 
    

    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    bloquearAlternativas()

    setTimeout(function() {
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('vix melhore!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = " vix melhore!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "para de prestar atenção na gente kkkkkk" + pontos + " " + pont

    aviso.textContent = "para de prestar atenção na gente kkkkkk " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 
        location.reload();
    }, 2000)
}
