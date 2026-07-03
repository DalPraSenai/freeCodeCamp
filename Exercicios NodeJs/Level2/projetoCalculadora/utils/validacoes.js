function validarNumero(valor) {
    return typeof valor === "number" && !isNaN(valor);
}

module.exports = {
    validarNumero
};