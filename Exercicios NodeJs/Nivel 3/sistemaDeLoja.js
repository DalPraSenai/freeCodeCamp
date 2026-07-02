let nomeItem = "Colar de Sangue";
let preco = 367;
let ouro = 400;
let calculo =  preco - ouro;

console.log("\n=== Loja do Menino Dal Pra ===\n\n");
console.log(`Item: ${nomeItem} Valor: ${preco}`);
console.log(`\nSua quantidade de ouro no bolso: ${ouro}`);
if (ouro >= preco){console.log(`\nVocê comprou ${nomeItem}`);}
else{console.log(`Ouro insuficiente! Faltam ${calculo} de ouro.`);}
