create table category 
(id SERIAL PRIMARY KEY, 
title varchar(50) NOT NULL);

insert into category (title) VALUES
('Matemática'),
('Física'),
('Química'),
('Biologia'),
('Geografia'),
('História'),
('Filosofia'),
('Sociologia'),
('Português');

select * from category;

create table users 
(id SERIAL PRIMARY KEY, 
name varchar(50) NOT NULL,
email varchar(50) NOT NULL,
password varchar(255) NOT NULL,
admin boolean NOT NULL DEFAULT false);

INSERT INTO users (name, email, password) VALUES
('João Santos', 'jsantos@gmail.com', '$2b$10$ERv/8eFUGXLsJQ0AKOpLQeiehhbPEBylY14CLMpxGivKSFooYJLn.'),
('Carlos Oliveira', 'coliveira@gmail.com', '$2b$10$ERv/8eFUGXLsJQ0AKOpLQeiehhbPEBylY14CLMpxGivKSFooYJLn.'),
('Ana Pereira', 'apereira@gmail.com', '$2b$10$ERv/8eFUGXLsJQ0AKOpLQeiehhbPEBylY14CLMpxGivKSFooYJLn.'),
('Rafael Lima', 'rlima@gmail.com', '$2b$10$ERv/8eFUGXLsJQ0AKOpLQeiehhbPEBylY14CLMpxGivKSFooYJLn.'),
('Juliana Costa', 'jcosta@gmail.com', '$2b$10$ERv/8eFUGXLsJQ0AKOpLQeiehhbPEBylY14CLMpxGivKSFooYJLn.'),
('Pedro Martins', 'pmartins@gmail.com', '$2b$10$ERv/8eFUGXLsJQ0AKOpLQeiehhbPEBylY14CLMpxGivKSFooYJLn.'),
('Camila Rodrigues', 'crodrigues@gmail.com', '$2b$10$ERv/8eFUGXLsJQ0AKOpLQeiehhbPEBylY14CLMpxGivKSFooYJLn.'),
('Lucas Ferreira', 'lferreira@gmail.com', '$2b$10$ERv/8eFUGXLsJQ0AKOpLQeiehhbPEBylY14CLMpxGivKSFooYJLn.'),
('Mariana Souza', 'msouza@gmail.com', '$2b$10$ERv/8eFUGXLsJQ0AKOpLQeiehhbPEBylY14CLMpxGivKSFooYJLn.'),
('Maria Silva', 'msilva@gmail.com', '$2b$10$/oN5VNefBqWveDDeNWt.4u931Yyjyru4xKVE3AwbBSXhAPVlNLQu6');

INSERT INTO users (name, email, password, admin) VALUES
('Maria Santos', 'msantos@gmail.com', '$2b$10$wtntESpKnPGzXMbaAa8exOpw65R6a329n34BhqIWOn86AOvKczUSW', true);

select * from users;


create table courses
(id SERIAL PRIMARY KEY,
title varchar(50) NOT NULL,
description varchar(255) NOT NULL,
category_id int NOT NULL,
professor_id int NOT NULL,
image BYTEA NOT NULL,
active boolean NOT NULL DEFAULT true,
FOREIGN KEY (category_id) REFERENCES category(id),
FOREIGN KEY (professor_id) REFERENCES users(id));

select * from courses;
