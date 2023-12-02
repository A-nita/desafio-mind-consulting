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
('João Santos', 'jsantos@gmail.com', '123456'),
('Maria Silva', 'msilva@gmail.com', 'abcdef'),
('Carlos Oliveira', 'coliveira@gmail.com', '789012'),
('Ana Pereira', 'apereira@gmail.com', 'qwerty'),
('Rafael Lima', 'rlima@gmail.com', '456789'),
('Juliana Costa', 'jcosta@gmail.com', 'abc123'),
('Pedro Martins', 'pmartins@gmail.com', '987654'),
('Camila Rodrigues', 'crodrigues@gmail.com', 'zxcvbn'),
('Lucas Ferreira', 'lferreira@gmail.com', '135790'),
('Mariana Souza', 'msouza@gmail.com', 'poiuyt');

INSERT INTO users (name, email, password, admin) VALUES
('Maria Santos', 'msantos@gmail.com', '123456', true);

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


INSERT INTO courses (title, description, category_id, professor_id, image) VALUES
('Álgebra Linear Avançada', 'Estudo avançado de álgebra linear para aplicações em ciências e engenharia.', 1, 1, 'algebra_linear.jpg'),
('Mecânica Quântica', 'Exploração dos princípios e aplicações da mecânica quântica.', 2, 2, 'mecanica_quantica.jpg'),
('Química Orgânica Avançada', 'Curso avançado sobre estruturas e reações de compostos orgânicos.', 3, 3, 'quimica_organica.jpg'),
('Genética Molecular', 'Estudo avançado da genética molecular e manipulação de DNA.', 4, 4, 'genetica_molecular.jpg'),
('Climatologia', 'Análise aprofundada dos padrões climáticos e suas implicações.', 5, 5, 'climatologia.jpg'),
('História Antiga', 'Exploração das civilizações antigas e seus impactos na sociedade moderna.', 6, 6, 'historia_antiga.jpg'),
('Filosofia Contemporânea', 'Discussão de temas filosóficos modernos e suas implicações.', 7, 7, 'filosofia_contemporanea.jpg'),
('Sociologia Urbana', 'Estudo das dinâmicas sociais nas áreas urbanas.', 8, 8, 'sociologia_urbana.jpg'),
('Literatura Brasileira', 'Análise de obras literárias brasileiras clássicas e contemporâneas.', 9, 9, 'literatura_brasileira.jpg'),
('Geometria Analítica', 'Curso introdutório sobre geometria analítica e suas aplicações.', 1, 1, 'geometria_analitica.jpg'),
('Termodinâmica Avançada', 'Exploração dos princípios termodinâmicos em sistemas complexos.', 2, 2, 'termodinamica_avancada.jpg'),
('Química Inorgânica Moderna', 'Estudo avançado de compostos inorgânicos e suas propriedades.', 3, 3, 'quimica_inorganica.jpg'),
('Biologia Marinha', 'Exploração da vida marinha e ecossistemas aquáticos.', 4, 4, 'biologia_marinha.jpg'),
('Geopolítica', 'Análise de questões geopolíticas globais e regionais.', 5, 5, 'geopolitica.jpg'),
('História do Século XX', 'Exploração dos eventos e movimentos do século XX.', 6, 6, 'historia_seculo_xx.jpg'),
('Ética Filosófica', 'Discussão de questões éticas fundamentais na filosofia.', 7, 7, 'etica_filosofica.jpg'),
('Desigualdade Social', 'Análise das formas e causas da desigualdade social.', 8, 8, 'desigualdade_social.jpg'),
('Redação Criativa', 'Desenvolvimento de habilidades de escrita criativa em português.', 9, 9, 'redacao_criativa.jpg'),
('Álgebra Linear Aplicada', 'Aplicações práticas de álgebra linear em ciência de dados e engenharia.', 1, 1, 'algebra_linear_aplicada.jpg'),
('Física Nuclear', 'Estudo das propriedades e aplicações da física nuclear.', 2, 2, 'fisica_nuclear.jpg');

select * from courses;
