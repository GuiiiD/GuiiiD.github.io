// Banco de palavras com o tema de escritório
var bancoDePalavras = [
    "computador",
    "escritório",
    "cadeira",
    "arquivo",
    "reunião",
    "telefone",
    "impressora",
    "documento",
    "agenda",
    "funcionário",
    "chefia",
    "projetor",
    "cafeteira",
    "fax",
    "grampeador",
    "papel",
    "caneta",
    "teclado",
    "mouse",
    "laptop"
];

// Variáveis globais
var palavraSecreta = gerarPalavraSecreta();
var palavraAdivinhada = Array(palavraSecreta.length).fill("_");
var letrasUtilizadas = [];
var tentativasRestantes = 6;

// Função para gerar uma palavra secreta aleatória do banco de palavras
function gerarPalavraSecreta() {
    var indice = Math.floor(Math.random() * bancoDePalavras.length);
    return bancoDePalavras[indice];
}

// Função para atualizar a interface
function atualizarInterface() {
    document.querySelector(".word").textContent = palavraAdivinhada.join(" ");
    document.querySelector(".used-letters").textContent = letrasUtilizadas.join(", ");
    document.querySelector(".attempts").textContent = tentativasRestantes;
}

// Função para verificar se o jogador ganhou o jogo
function verificarVitoria() {
    if (palavraAdivinhada.join("") === palavraSecreta) {
        alert("Parabéns! Você adivinhou a palavra: " + palavraSecreta);
        reiniciarJogo();
    } else if (tentativasRestantes === 0) {
        alert("Fim de jogo! A palavra era: " + palavraSecreta);
        reiniciarJogo();
    }
}

// Função para checar a letra inserida pelo jogador
function checarLetra() {
    var letra = document.getElementById("letra").value.toLowerCase();
    if (letrasUtilizadas.includes(letra)) {
        alert("Você já tentou essa letra!");
    } else {
        letrasUtilizadas.push(letra);

        if (palavraSecreta.includes(letra)) {
            for (var i = 0; i < palavraSecreta.length; i++) {
                if (palavraSecreta[i] === letra) {
                    palavraAdivinhada[i] = letra;
                }
            }
        } else {
            tentativasRestantes--;
        }

        atualizarInterface();
        verificarVitoria();
    }
    document.getElementById("letra").value = "";
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    palavraSecreta = gerarPalavraSecreta();
    palavraAdivinhada = Array(palavraSecreta.length).fill("_");
    letrasUtilizadas = [];
    tentativasRestantes = 6;
    atualizarInterface();
}

// Event Listeners
document.getElementById("chutar").addEventListener("click", checarLetra);
document.getElementById("reiniciar").addEventListener("click", reiniciarJogo);

// Chamada inicial para configurar a interface
atualizarInterface();