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
        database: 'teste_db'
    });
}

app.get('/api/tarefas', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();
        const resultado = await client.query(`
            SELECT
                j.id,
                j.titulo,
                j.concluida
            FROM tarefas j
        `);
        res.json(resultado.rows);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

app.post('/api/tarefas', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();
        const { titulo, concluida } = req.body;

        if (!titulo || !concluida) {
            return res.status(400).json({
                erro: 'Título, e Concluida são necessarios'
            });
        }

        const resultado = await client.query(`
            INSERT INTO tarefas (titulo, concluida)
            VALUES ($1, $2)
            RETURNING *
        `, [titulo, concluida]);

        res.status(201).json(resultado.rows[0]);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});