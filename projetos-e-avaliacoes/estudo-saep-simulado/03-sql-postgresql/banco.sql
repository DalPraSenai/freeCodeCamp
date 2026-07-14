CREATE DATABASE biblioteca_saep;

-- Depois de criar o banco, conecte nele no pgAdmin e execute o restante.

CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100),
    categoria VARCHAR(50),
    preco NUMERIC(10, 2),
    quantidade INTEGER
);

-- TODO: inserir 5 livros usando INSERT INTO

-- TODO: listar todos os livros

-- TODO: buscar livros por categoria

-- TODO: atualizar a quantidade de um livro pelo id

-- TODO: remover um livro pelo id

-- TODO: fazer SELECT final para conferir
