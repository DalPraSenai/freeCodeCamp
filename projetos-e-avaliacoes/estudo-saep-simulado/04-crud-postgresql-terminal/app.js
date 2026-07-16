const { Client } = require('pg');
const prompt = require('prompt-sync')();

function criarCliente() {
    return new Client({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'root',
        database: 'mercado_saep'
    });
}

async function listarProdutos() {
    const client = criarCliente();

    try {
        await client.connect();
        const resultado = await client.query(
            'SELECT * FROM produtos ORDER BY id'
        );
        if(resultado.rows.length === 0){
            console.log("O mercado ta vazio no momento.");
        }
        else{
            resultado.rows.forEach(produtos => {
                console.log(`[${produtos.id}] ${produtos.nome}`);
                console.log(`Categoria: ${produtos.categoria} | Preço: R$ ${produtos.preco} | Estoque: ${produtos.estoque}`) ;
                console.log(`Descrição: ${produtos.descricao}`)  ;
            });
        }

    } catch (erro) {
        console.log('Erro ao listar produtos:', erro.message);
    } finally {
        await client.end();
    }
}

async function cadastrarProduto() {
    const client = criarCliente();

    try {
        await client.connect();

        console.log("\n\n----- Cadastrar novo Item -----");
        const nome = prompt("Nome do produto:");
        const categoria = prompt("Categoria do produto:");
        const preco = prompt("Preço do produto:");
        const estoque = prompt("Estoque do produto:");
        const descricao = prompt("Descrição do produto:");
        
        if (!nome || !categoria || !preco) {
            console.log('❌ Nome, tipo e preço são obrigatórios.');
            return;
        }

        const resultado = await client.query(
            `INSERT INTO produtos (nome, categoria, preco, estoque, descricao)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [nome, categoria, preco, estoque, descricao]
        );
        
        console.log('\n✅ Produtos cadastrado com sucesso!');
        console.log(`   ID: ${resultado.rows[0].id} | ${resultado.rows[0].nome}`);
 
    } catch (erro) {
        console.log('Erro ao cadastrar produto:', erro.message);
    } finally {
        await client.end();
    }
}

async function buscarProdutoPorNome() {
    const client = criarCliente();

    try {
        const nome = prompt('Nome do produto para buscar: ');
        await client.connect();

        const resultado = await client.query(
            `SELECT * FROM produtos
             WHERE nome ILIKE $1
             ORDER BY nome`,
            [`%${nome}%`]
        );

        if (resultado.rows.length === 0) {
            console.log('Nenhum produto encontrado.');
            return;
        }

        console.log('\n--- PRODUTOS ENCONTRADOS ---');
        resultado.rows.forEach(produto => {
            console.log(`[${produto.id}] ${produto.nome}`);
            console.log(`Categoria: ${produto.categoria} | Preco: R$ ${produto.preco} | Estoque: ${produto.estoque}`);
            console.log(`Descricao: ${produto.descricao}`);
        });
    } catch (erro) {
        console.log('Erro ao buscar produto:', erro.message);
    } finally {
        await client.end();
    }
}

async function atualizarEstoque() {
    const client = criarCliente();

    try {
        await client.connect();

        const lista = await client.query(
            'SELECT id, nome, estoque FROM produtos ORDER BY nome'
        );
         
        console.log("\n-*-*-*- Atualizar Estoque -*-*-*-");
        
        lista.rows.forEach(produtos => {
            console.log(`[${produtos.id}] ${produtos.nome} - Estoque: ${produtos.estoque}`);
        });

        console.log('');
        const id = prompt('ID do produto: ');
        const novoEstoque = prompt('Novo estoque: ');

        const resultado = await client.query(
            `UPDATE produtos SET estoque = $1 WHERE id = $2 RETURNING nome, estoque`,
            [novoEstoque, id]
        );

        if(resultado.rows.length === 0){
            console.log("Erro: Produto não encontrado.");
        }else{
            console.log(`\n OK! ${resultado.rows[0].nome}: ${resultado.rows[0].estoque} unidades`);
        }
       
    } catch (erro) {
        console.log('Erro ao atualizar estoque:', erro.message);
    } finally {
        await client.end();
    }
}

async function removerProduto() {
    const client = criarCliente();

    try {
        await client.connect();
        
        const lista = await client.query(
            'SELECT id, nome, categoria FROM produtos ORDER BY nome'
        );

        console.log('\n REMOVER ITEM\n');
        lista.rows.forEach(produtos => {
            console.log(`[${produtos.id}] ${produtos.nome} (${produtos.categoria})`);
        });

        console.log('');
        const id = prompt('ID do produto a remover: ');

        const busca = await client.query(
            'SELECT nome FROM produtos WHERE id = $1', [id]
        );

        if (busca.rows.length === 0) {
            console.log('Produto não encontrado.');
            return;
        }

        const confirmacao = prompt(
            `⚠️  Remover "${busca.rows[0].nome}"? (s/n): `
        );

        if (confirmacao.toLowerCase() !== 's') {
            console.log('Operação cancelada.');
            return;
        }

        const resultado = await client.query(
            'DELETE FROM produtos WHERE id = $1 RETURNING nome',
            [id]
        );

        console.log(`Produto removido com sucesso: ${resultado.rows[0].nome}`);

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
