<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```txt
* Primeiramente, recomendo criar seu repositório e clonar posteriormente em seu computador,
execute o Visual Studio Code diretamente pelo repo clonado.

### Agora vamos instalar o NestJS em nosso projeto: ###
  - $ npm i -g @nestjs/cli
  - $ npm nest new .
  - $ npm install -D typescript ts-node @types/node

### Instale o Docker Desktop em seu computador: ###
  - $ Criar na raiz do projeto o arquivo 'docker-compose.yml' e após configurado,
    em outro terminal (Split Terminal) 'docker-compose up' com o Docker Desktop rodando.

### Utilizaremos o Prisma como nosso ORM: ###
  - $ npm install prisma --save-dev
  - $ npx prisma
  - $ npx prisma init

### Após iniciar o prisma em nosso projeto, precisamos do Client: ###
  - $ npm install @prisma/client

### Por último, apenas vamos adicionar o pacote de config e swagger em nossa API: ###
  - $ npm i --save @nestjs/config -> Oitava coisa
  - $ npm install --save @nestjs/swagger swagger-ui-express
```

## Nest Generate

```txt
 - $ nest generate <schematic> <name> [options]
    Example
      - $ nest generate controller
      - $ nest generate service
      - $ nest generate module
      - $ nest generate resource
More info @ https://docs.nestjs.com/cli/usages
```

## Run Project

```txt
$ npm start dev
```

## Deploy no Heroku

```txt
### Heroku ###
  - Crie uma conta na plataforma e em seguida:
    - $ npm install -g heroku
    - $ heroku --version (Para verificar a versão e se o heroku foi instalado corretamente, talvez alguns erros serão mencionados...)
    - $ heroku login (Este irá retornar o acesso ao navegador para o login e em seguida será confirmado no terminal.)
    - $ heroku git:remote -a ecommercerest
    - $ git push heroku master (Antes de executar esse comando, crie na raiz o arquivo "Procfile" e adicone uma linha com -> web: npm run start:prod, apenas isso.)
```

## Migration do arquivo "schema.prisma"

```txt
  - $ npx prisma migrate dev
```

## Enviando o seed

```txt
  - $ npx prisma db seed
```

## Prisma ORM

## Docker

## Class Validator & Class Transformer

```txt
  - $ npm install class-validator class-transformer --save
```
