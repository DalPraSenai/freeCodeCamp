const { Client } = require('pg');
const prompt = require('prompt-sync')();

function criarCliente() {
    return new Client({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'sua_senha',
        database: 'mercado_saep'
    });
}

async function listarProdutos() {
    const client = criarCliente();

    try {
        // TODO: conectar
        // TODO: SELECT * FROM produtos ORDER BY id
        // TODO: mostrar produtos no terminal
    } catch (erro) {
        console.log('Erro ao listar produtos:', erro.message);
    } finally {
        await client.end();
    }
}

async function cadastrarProduto() {
    const client = criarCliente();

    try {
        // TODO: pedir nome, categoria, preco, estoque, descricao
        // TODO: validar nome e preco
        // TODO: INSERT INTO produtos (...) VALUES ($1, $2, $3, $4, $5)
        // TODO: usar RETURNING *
    } catch (erro) {
        console.log('Erro ao cadastrar produto:', erro.message);
    } finally {
        await client.end();
    }
}

async function buscarProdutoPorNome() {
    const client = criarCliente();

    try {
        // TODO: pedir parte do nome
        // TODO: SELECT com WHERE nome ILIKE $1
        // Dica: usar `%${nome}%`
    } catch (erro) {
        console.log('Erro ao buscar produto:', erro.message);
    } finally {
        await client.end();
    }
}

async function atualizarEstoque() {
    const client = criarCliente();

    try {
        // TODO: pedir id
        // TODO: pedir novo estoque
        // TODO: UPDATE produtos SET estoque = $1 WHERE id = $2 RETURNING *
        // TODO: avisar se id nao existe
    } catch (erro) {
        console.log('Erro ao atualizar estoque:', erro.message);
    } finally {
        await client.end();
    }
}

async function removerProduto() {
    const client = criarCliente();

    try {
        // TODO: pedir id
        // TODO: buscar produto antes de deletar
        // TODO: pedir confirmacao
        // TODO: DELETE FROM produtos WHERE id = $1 RETURNING *
    } catch (erro) {
        console.log('Erro ao remover produto:', erro.message);
    } finally {
        await client.end();
    }
}

async function menu() {
    let opcao = '';

    while (opcao !== '0') {
        console.log('\n=== MERCADO DO BAIRRO ===');
        console.log('1 - Listar produtos');
        console.log('2 - Cadastrar produto');
        console.log('3 - Buscar produto por nome');
        console.log('4 - Atualizar estoque');
        console.log('5 - Remover produto');
        console.log('0 - Sair');

        opcao = prompt('Escolha uma opcao: ');

        if (opcao === '1') {
            await listarProdutos();
        } else if (opcao === '2') {
            await cadastrarProduto();
        } else if (opcao === '3') {
            await buscarProdutoPorNome();
        } else if (opcao === '4') {
            await atualizarEstoque();
        } else if (opcao === '5') {
            await removerProduto();
        } else if (opcao === '0') {
            console.log('Saindo...');
        } else {
            console.log('Opcao invalida.');
        }
    }
}

menu();
