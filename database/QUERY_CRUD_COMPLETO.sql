CREATE DATABASE ng_livros_db;

USE ng_livros_db;

CREATE TABLE livros(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    sinopse VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE livros;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Antropologia7!';

ALTER USER 'root'@'localhost' IDENTIFIED BY 'Antropologia7!'; 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'PauloFreire7!';

FLUSH PRIVILEGES;

select * from livros;

ALTER TABLE livros CHANGE COLUMN sinopse author VARCHAR(150);