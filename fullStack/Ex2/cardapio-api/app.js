import express from 'express';
import pkg from 'pg';
const { Client } = pkg;

const app = express();

app.use(express.json());
app.use(express.static('public'));

function criarCliente() {
    return new Client({
        host:     'localhost',
        port:     5432,
        user:     'postgres',
        password: 'root',
        database: 'cardapio_db'
    });
}

app.get('/api/pratos', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();
        const resultado = await client.query(`
            SELECT
                j.id,
                j.nome,
                j.descricao,
                j.preco,
                j.disponivel,
                j.categoria_id
            FROM pratos j
        `);
        res.json(resultado.rows);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

app.get('/api/pratos/:id', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();
        const resultado = await client.query(`
                SELECT
                j.id,
                j.nome,
                j.descricao,
                j.preco,
                j.disponivel,
                j.categoria_id
            FROM pratos j
            WHERE j.id = $1
        `, [req.params.id]);

        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: 'Jogo não encontrado' });
        }
        res.json(resultado.rows[0]);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

app.get('/api/categorias', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();
        const resultado = await client.query(
            'SELECT * FROM categorias ORDER BY nome'
        );
        res.json(resultado.rows);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

app.post('/api/pratos', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();
        const { nome, descricao, preco, disponivel, categoria_id } = req.body;

        if (!nome || !descricao || !preco || !disponivel || !categoria_id) {
            return res.status(400).json({
                erro: 'Nome, descrição, preço, disponivel e categoria são obrigatorios!'
            });
        }

        const resultado = await client.query(`
            INSERT INTO pratos (nome, descricao, preco, disponivel, categoria_id)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `, [nome, descricao, preco, disponivel, categoria_id]);

        res.status(201).json(resultado.rows[0]);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

app.delete('/api/pratos/:id', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();
        const resultado = await client.query(
            'DELETE FROM pratos WHERE id = $1 RETURNING nome',
            [req.params.id]
        );
        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: 'Prato não encontrado' });
        }
        res.json({ mensagem: `"${resultado.rows[0].titulo}" removido com sucesso` });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});
 
app.put('/api/pratos/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, preco } = req.body;

    const index = pratos.findIndex(p => p.id == id);

    if (index === -1) {
        return res.status(404).json({ erro: 'Prato não encontrado' });
    }

    pratos[index] = { id: Number(id), nome, preco };

    return res.status(200).json({
        mensagem: 'Prato atualizado com sucesso',
        prato: pratos[index] 
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});