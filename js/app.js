function comprar() {
    quantidadeDeIngressos();
}

function quantidadeDeIngressos() {
    let tipoDeCadeira = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);
    comprarCadeira(tipoDeCadeira, quantidade);
    console.log(`Você está comprando a cadeira: ${tipoDeCadeira}`);
    console.log(`Você está comprando ${quantidade} ingressos.`);
    document.getElementById("qtd").value = 0;
}

function comprarCadeira(tipoDeCadeira, quantidade) {
    if (tipoDeCadeira == "pista") {
        comprarPista(quantidade);

    } else if (tipoDeCadeira == "superior") {
        comprarSuperior(quantidade);

    } else {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade) {
    let cadeiraPista = parseInt(document.getElementById("qtd-pista").textContent);
    console.log(`Quantidade de cadeiras disponiveis: ${cadeiraPista}`);

    if (quantidade > cadeiraPista) {
        alert("Erro quantidade indisponivel.");

    } else {
        cadeiraPista = cadeiraPista - quantidade;
        document.getElementById("qtd-pista").textContent = cadeiraPista;
    }
}

function comprarSuperior(quantidade) {
    let cadeiraSuperior = parseInt(document.getElementById("qtd-superior").textContent)
    if (quantidade > cadeiraSuperior) {
        alert("Erro quantidade indisponivel");
    } else {
        cadeiraSuperior = cadeiraSuperior - quantidade;
        document.getElementById("qtd-superior").textContent = cadeiraSuperior;
    }
}

function comprarInferior(quantidade) {
    let cadeiraInferior = parseInt(document.getElementById("qtd-inferior").textContent)
    if (quantidade > cadeiraInferior) {
        alert("Erro quantidade indisponivel")
    } else {
        cadeiraInferior = cadeiraInferior - quantidade;
        document.getElementById("qtd-inferior").textContent = cadeiraInferior;
    }
}