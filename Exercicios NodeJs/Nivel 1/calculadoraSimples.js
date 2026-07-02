let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);

let soma = num1 + num2;
let subt = num1 - num2;
let mult = num1 * num2;
let divs = num1 / num2;

console.log("=== Calculadora Simples ===")
console.log("Soma: ", soma);
console.log("Subtração: ", subt);
console.log("Multiplicação: ", mult);
console.log("Divisão: ", divs);