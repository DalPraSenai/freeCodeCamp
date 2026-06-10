const caixa = document.querySelector("#caixa");
caixa.classList.add("destaque");
console.log("A caixa tem a classe destaque?", caixa.classList.contains("destaque"));

const alerta = document.querySelector("#alerta");
alerta.classList.add("oculto");
console.log("O alerta tem a classe oculto?", alerta.classList.contains("oculto"));

const card = document.querySelector("#card");
card.classList.add("erro");
console.log("O Card tem a classe erro?", card.classList.contains("erro"));