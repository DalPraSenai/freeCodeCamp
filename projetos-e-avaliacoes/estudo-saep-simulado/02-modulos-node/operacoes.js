function calcularTotal(preco, quantidade) {
   const total = preco * quantidade;
   console.log(`Valor total: R$ ${total}`);
   return total;
}

function aplicarDesconto(total, percentual) {
    const desconto = (percentual / 100)
    const totalComDesconto = total - (total * desconto);
    console.log(`Valor total com Desconto de ${percentual}% : R$ ${totalComDesconto}`);
    return totalComDesconto;
}

function calcularTroco(valorPago, totalComDesconto) {
    if(valorPago < totalComDesconto){console.log("Erro: Valor pago é menor que o total da compra");}
    else{
        const troco = valorPago - totalComDesconto;
        console.log(`
            Valor pago: R$ ${valorPago}\n
            Valor da compra: R$ ${totalComDesconto}\n
            Valor do troco: R$ ${troco}`);
            return troco;
    }
}

module.exports = {
    calcularTotal,
    aplicarDesconto,
    calcularTroco
};
