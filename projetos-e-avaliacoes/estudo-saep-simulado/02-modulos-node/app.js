const prompt = require('prompt-sync')();
const operacoes = require('./operacoes');
const validacoes = require('./validacoes');



console.log('\n╔════════════════════════════════════════════════════╗');
console.log('║                    Calculadora Teste                ║');
console.log('╚════════════════════════════════════════════════════╝\n');

//pegar dados
const produto = prompt('Nome do produto: ');
const preco = Number(prompt('Preço: '));
const quantidade = Number(prompt('Quantidade: '));
const percentual = Number(prompt('Percentual de desconto: '));
const pago = Number(prompt('Valor pago: '));

//validar dados (cada um tem o seu "erro" que é pelo operador ! que significa NAO)
validacoes.numeroPositivo(preco);
if (!validacoes.numeroPositivo(preco)) {
    console.log('Preco precisa ser maior que zero.');
    process.exit(1);
}
validacoes.numeroPositivo(quantidade);
if (!validacoes.numeroPositivo(quantidade)) {
    console.log('Preco precisa ser maior que zero.');
    process.exit(1);
}
validacoes.numeroPositivo(percentual);
if (!validacoes.numeroPositivo(percentual)) {
    console.log('Preco precisa ser maior que zero.');
    process.exit(1);
}
validacoes.textoObrigatorio(produto);
if (!validacoes.textoObrigatorio(produto)) {
    console.log('Produto precisa ter algo escrito.');
    process.exit(1);
}

const total = operacoes.calcularTotal(preco, quantidade);
const totalDesconto = operacoes.aplicarDesconto(total, percentual);

operacoes.calcularTroco(pago, totalDesconto);


console.log('=== CALCULADORA DE LOJA ===');
