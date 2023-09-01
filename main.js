const btnSortear = document.querySelector(".sortear");
const textarea = document.querySelector("textarea");
const tagResultado = document.querySelector(".resultado p");
const popUpResultado = document.querySelector(".resultado");

function pegarDadosFormulario() {
    const valorCamp = textarea.value; // pega todos os valores da text area
    const listaNomes = valorCamp.split(","); // separa todos os nomes pela virgula
    const tamanhoArray = listaNomes.length; // conta quantos nomes tem
    const posicaoNome = gerarNomeAleatorio(tamanhoArray); // escolhe uma posição aleatoria
    const nome = listaNomes[posicaoNome] // guarda o nome sorteado
    mostrarResultado(nome); // mostra o resultado

    textarea.value = "" // limpa textarea
}
btnSortear.addEventListener("click", pegarDadosFormulario)

function gerarNomeAleatorio(tamanhoArray) {
    // RETORNA O NOME
    return Math.floor(Math.random()*(tamanhoArray - 0) + 0)
}

function mostrarResultado(nome) {
    tagResultado.innerHTML = `Resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")
}