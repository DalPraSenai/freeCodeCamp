CREATE TABLE IF NOT EXISTS "tarefas" (
	"id" SERIAL NOT NULL,
	"titulo" CHAR(255) NOT NULL,
	"concluida" BOOLEAN NOT NULL,
	PRIMARY KEY("id")
);

INSERT INTO tarefas (titulo, concluida) VALUES
	('Arrumar a cama', FALSE),
	('Escovar os dentes', TRUE),
	('Projeto ESP32', FALSE),
	('Pedir Demissão', TRUE);