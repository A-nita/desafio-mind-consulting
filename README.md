# Desafio Mind Consulting

Desenvolvimento de um sistema para que um professor realize um login e consiga cadastrar um curso para sua plataforma.

# Executando

Será necessário rodar o projeto da API e o da aplicação WEB.

Para a API, é necessário criar um arquivo `api/.env` como mostrado no `api/.env.example` (o módulo web está fazendo requisições para a api na porta `3000`)

Também é necessário configurar um banco de dados postgresql e rodar o script `enviroment/db.sql` para criar as tabelas.

Para facilitar a configuração do ambiente, foi disponibilizado um arquivo `enviroment/docker-compose.yml` para criar um container docker com o banco de dados e o pgadmin4 para gerenciamento.

As portas utilizadas para o `postgres` e o `pgadmin4` são `5432` e `15432` respectivamente.

Caso tenha o docker instalado em sua máquina, para criar o container basta executar o seguinte comando na pasta `enviroment/` no terminal:

```
docker compose up
```

Dentro da pasta `api/` executar o seguinte comando no terminal:

```
npm i
npm run start
```

Dentro da pasta `web/` o seguinte comando no terminal:

```
npm i
npm run dev
```

Com isso a aplicação estará sendo executada na porta 3003 e a api na porta 3000.

# Tecnologias utilizadas

- Node.js
- React.js
- Typescript
- Postgres

# Banco de dados

Foram criadas 3 tabelas:

- **courses:** `(id[pk] - title - descriptio - category[fk] - professor[fk] - active)`

- **category:** `(id[pk] - title)`

- **users:** `(id[pk] - name - email - password - admin)`


Para realizar login:

- User admin: 

email: msantos@gmail.com 
senha: admin

- User professor:
email: jsantos@gmail.com 
senha: 123456

As configurações para o acesso ao banco de dados estão no arquivo `api/.env.example`

# Bibliotecas usadas

## API

- **Server:**

  express express-fileupload

- **Autenticação de usuário:**

  passport, passport jwt, jsonwebtoken e bcrypt

- **Utilização de Cross-origin resource sharing:**

  cors

- **Conexão com o postgresql:**

  pg

- **Configurações de modo geral da aplicação:**

  nodemon, eslint, prettier

- **Variáveis de ambiente:**

  dotenv


## WEB

- **Requisições para a API:**

  axios e tankard/react-query

- **Configuração inicial:**

  vite

- **rotas do front-end:**

  react-router-dom

# Arquitetura API

Na API foi utilizado o Node.js com typescript, com as configurações desse no arquivo tsconfig.json, ainda foi utilizado o eslint os quais as configurações se encontram no arqui .eslintrc.json.

O arquivo index no diretório /src desempenha o papel de ponto inicial da aplicação, iniciando o servidor e aplicnado os midare do express. Nele também são definidas as rotas quais estão descitas a seguir:

- GET(/list-courses)
- POST(/create-course)
- POST(/edit-course)
- GET(/list-categories)
- POST(/login)

Nos controllers foram tratados os dados e possíveis erros e tambés realizada a conexão com os repositories os quais se conectam com o banco de dados.
Foram criadas interfaces para todos os repositories, de forma que em caso de mudança do banco a refatoração seria feita de forma fácil. 
Ainda há uma pasta de model com as interfaces de cada entidade do banco de dados

A conexão com o banco de dados é realizada repositórios db e chamada dentro dos repositories.

No diretório utils é feita a configuração da autenticação dos usuários.

* A pasta temp tem como intuito guardar as imagens para salvar no banco de dados.

# Banco de dados

Para o banco de dados foi criado um cointainer no docker e ele se encontra na pasta enviroment, assim como o script de criação do banco de dados.

O dump do banco de dados também se encontra na pasta enviroment.

# WEB

No front-end foi utilizado React.js com typescript também

Foram criados 3 componentes: 
- Barra de busca
- Cards que exibem os curso
- Modal para cadastro de cursos

Foram criadas 3 página:
- dashboard para visualização dos cursos
- login
- página padrão de erro

## Limitações

* A página de castro de cursos e dashboard de administrador, foram centralizadas na mesma visualização

* A função de desativar e ativar o curso não foi implementada no front-end

