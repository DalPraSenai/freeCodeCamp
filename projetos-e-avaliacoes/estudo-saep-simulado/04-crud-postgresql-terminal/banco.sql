CREATE DATABASE mercado_saep;

-- Depois de criar o banco, conecte nele no pgAdmin e execute o restante.

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    preco NUMERIC(10, 2),
    estoque INTEGER,
    descricao TEXT
);

INSERT INTO produtos (nome, categoria, preco, estoque, descricao)
VALUES
    ('Arroz 5kg', 'Alimento', 24.90, 20, 'Pacote de arroz branco'),
    ('Feijao 1kg', 'Alimento', 8.50, 35, 'Feijao carioca'),
    ('Sabonete', 'Higiene', 3.20, 50, 'Sabonete comum'),
    ('Detergente', 'Limpeza', 2.80, 40, 'Detergente neutro'),
    ('Cafe 500g', 'Alimento', 18.90, 15, 'Cafe torrado e moido');

SELECT * FROM produtos;
