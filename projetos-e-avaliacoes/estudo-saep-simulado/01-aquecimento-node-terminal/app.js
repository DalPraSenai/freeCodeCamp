const prompt = require('prompt-sync')();

const itens = [];

function adicionarItem(nome, tipo, quantidade) {
    // TODO: validar nome
    // TODO: validar quantidade
    // TODO: criar objeto { nome, tipo, quantidade }
    // TODO: adicionar no array itens
}

function listarItens() {
    // TODO: se o array estiver vazio, avisar
    // TODO: mostrar todos os itens no terminal
}

function buscarItemPorNome(nome) {
    // TODO: procurar item pelo nome
    // TODO: mostrar o item encontrado ou avisar que nao existe
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
