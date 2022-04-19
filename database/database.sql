CREATE DATABASE ng_livros_db;

USE ng_livros_db;

CREATE TABLE livros(
    id INT(11) NOT NULL AUTO_INCREMENT  PRIMARY KEY,
    title VARCHAR(180),
    sinopse VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE livros;
