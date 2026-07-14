let idade = Number(process.argv[2]);
if (idade >= 18){
    console.log(`Status: Maior de idade! Tem ${idade} anos!`);
}else{ console.log(`Status: Menor de idade! Tem ${idade} anos!`);}