let ataque = Number(process.argv[2]);
let defesa = 30;
let dano = defesa - ataque;


console.log(`Sistema de Combate Simples`);
console.log(`Seu ataque: ${ataque}`);
console.log(`Defesa Inimiga: ${defesa}`);

if(ataque <= 0){
    console.log(`Seu ataque é MUITO fraco, então nao deu dano algum né, fracote imundo!\nVida do inimigo: ${dano}`);
}
else{
    console.log(`Seu ataque é bom hein! \nVida do inimigo: ${dano}`);
}

