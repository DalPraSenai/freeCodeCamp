const prompt = require('prompt-sync')();

const itens = [];

function adicionarItem(nome, tipo, quantidade) {
   
    if( nome.trim() === ''){
        console.log("Erro: Nome vazio"); return;}
    if(quantidade <= 0){console.log("Erro: quantidade nao pode ser menor que 0");return;}
    
    const itemObjeto = {
        nome,
        quantidade,
        tipo
    };
    itens.push(itemObjeto);
}

function listarItens() {
    if(itens.length === 0){
        console.log("Erro: Array vazio");
        return;
    }
    else{
        for(let i = 0; i != itens.length; i++){
            console.log(`Item ${i}\n
                Nome: ${itens[i].nome}\n
                Tipo: ${itens[i].tipo}\n
                Quantidade: ${itens[i].quantidade}`);
        };
    }
}

function buscarItemPorNome(nome) {
    const itemEncontrado = itens.find(item => item.nome === true);
    if(itemEncontrado == true){console.log(`Item encontrado! ${
        console.log(`Item:
                Nome: ${itens.nome}\n
                Tipo: ${itens.tipo}\n
                Quantidade: ${itens.quantidade}`);}`);
    }
    else{console.log(`Seu item não foi encontrado... item: ${itens}`);}
}

function removerItem(nome) {
    // TODO: encontrar a posicao do item
    // TODO: remover usando splice
    // TODO: avisar se removeu ou se nao encontrou
}

function menu() {
    let opcao = '';

    while (opcao !== '0') {
        console.log('\n=== MOCHILA DO AVENTUREIRO ===');
        console.log('1 - Adicionar item');
        console.log('2 - Listar itens');
        console.log('3 - Buscar item');
        console.log('4 - Remover item');
        console.log('0 - Sair');

        opcao = prompt('Escolha uma opcao: ');

        if (opcao === '1') {
            const nome = prompt('Nome: ');
            const tipo = prompt('Tipo: ');
            const quantidade = Number(prompt('Quantidade: '));
            adicionarItem(nome, tipo, quantidade);
        } else if (opcao === '2') {
            listarItens();
        } else if (opcao === '3') {
            const nome = prompt('Nome para buscar: ');
            buscarItemPorNome(nome);
        } else if (opcao === '4') {
            const nome = prompt('Nome para remover: ');
            removerItem(nome);
        } else if (opcao === '0') {
            console.log('Saindo...');
        } else {
            console.log('Opcao invalida.');
        }
    }
}

menu();
