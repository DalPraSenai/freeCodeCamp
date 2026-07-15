function numeroPositivo(valor) {
    if(valor > 0){return true;}
    else{return false;};
}

function textoObrigatorio(texto) {
    if(texto != ''){return true;}
    else{return false;};
}

module.exports = {
    numeroPositivo,
    textoObrigatorio
};
