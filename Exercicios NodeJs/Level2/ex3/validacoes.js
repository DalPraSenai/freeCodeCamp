function validarNome(nome){
    let tamanho = nome.length
    if (tamanho < 3){
        console.log("Seu nome é muito curto!!! Ta achando q é apelido é?");
    } 
    else{console.log("Seu nome foi validado com total êxito");}
}
function validarIdade(idade){
    idade = Number(idade);
    if (idade > 0){
        console.log("Sua idade foi validada com total êxito");
    }else{console.log("Ta achando que nasceu ontem é caralho? Bota essa idade certa ai o JAMELÃO!");}
}

module.exports = {validarNome, validarIdade};