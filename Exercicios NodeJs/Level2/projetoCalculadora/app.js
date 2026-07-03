const operacoes = require("./utils/operacoes");
const validacoes = require("./utils/validacoes");

let numeroA = 10;
let numeroB = 5;

if (
    validacoes.validarNumero(numeroA) &&
    validacoes.validarNumero(numeroB)
) {
    console.log("Soma:", operacoes.soma(numeroA, numeroB));
    console.log("Subtração:", operacoes.subtracao(numeroA, numeroB));
    console.log("Multiplicação:", operacoes.multiplicacao(numeroA, numeroB));
    console.log("Divisão:", operacoes.divisao(numeroA, numeroB));
} else {
    console.log("Um ou ambos os valores são inválidos.");
}