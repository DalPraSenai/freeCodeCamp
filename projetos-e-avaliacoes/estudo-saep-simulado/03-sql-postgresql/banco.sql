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

INSERT INTO livros (titulo, autor, categoria, preco, quantidade)
VALUES('Iracema', 'Jose de Alencar', 'Romance', 40, 3);

INSERT INTO livros (titulo, autor, categoria, preco, quantidade)
VALUES('Triste Fim de Policarpo Quaresma', 'Lima Barreto', 'Romance', 67, 2);

INSERT INTO livros (titulo, autor, categoria, preco, quantidade)
VALUES('Vidas Secas', 'Graciliano Ramos', 'Romance', 20, 8);

INSERT INTO livros (titulo, autor, categoria, preco, quantidade)
VALUES('Os Sertões', 'Euclides da Cunha', 'Romance', 50, 4);

INSERT INTO livros (titulo, autor, categoria, preco, quantidade)
VALUES('Memórias Póstumas de Brás Cubas', 'Machado de Assis', 'Crime Real', 26, 4);

SELECT *
FROM livros;


SELECT *
FROM livros
WHERE categoria = 'Romance';

UPDATE livros
SET quantidade = 10
WHERE id = 1;

DELETE FROM livros
WHERE id = 5;

SELECT * FROM livros;
