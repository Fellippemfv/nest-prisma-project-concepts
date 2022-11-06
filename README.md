<h1 align="center"> Projeto - Conceitos de nest e prisma </h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Fellippemfv/nest-prisma-project-concepts">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Fellippemfv/nest-prisma-project-concepts?color=red">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Fellippemfv/nest-prisma-project-concepts?color=yellow">
  
  <a href="https://github.com/Fellippemfv/nest-prisma-project-concepts/commits/master">
  	<img alt="last-commit" src="https://img.shields.io/github/last-commit/Fellippemfv/nest-prisma-project-concepts">
  </a>

  <a href="https://github.com/Fellippemfv/nest-prisma-project-concepts/blob/master/LICENSE.md">
  	<img alt="GitHub/license" src="https://img.shields.io/github/license/Fellippemfv/nest-prisma-project-concepts">
  </a>
</p>

<p align="center">
  <a href="#round_pushpin-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="logo" title="logo" src="https://user-images.githubusercontent.com/67835741/200043624-cfa0a999-6a95-482c-ab68-7e546a02282e.png" />
</p>

<br>

## :round_pushpin: Sobre o projeto

 Projeto realizado para conhecer as principais funcionalidades do prisma usando nestJS.


## :rocket: Tecnologias utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

-  [NodeJS](https://nodejs.org/en/)
-  [Docker](https://www.docker.com)
-  [NestJS](https://docs.nestjs.com )
-  [Prisma](https://www.prisma.io)
-  [TypeScript](https://www.typescriptlang.org)
-  [Eslint](https://eslint.org)

## :information_source: Como usar

Para clonar e executar esta aplicação, você precisará do [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Npm](https://www.npmjs.com/), [Docker](https://www.docker.com) e um editor de texto igual ao [Vs code](https://code.visualstudio.com/) instalado em seu computador. Na sua linha de comando:

```bash
# Clonar este repositório
$ git clone https://github.com/Fellippemfv/nest-prisma-project-concepts.git

# Ir até a pasta criada
$ cd nest-prisma-project-concepts

# Instalar dependências
$ npm install
```
Para rodar totalmente este projeto você vai precisar criar e iniciar um container no docker, iniciar um servidor para o node e outro para o prisma studio e usar o aplicativo insomnia para testes das rotas.

##### Passo  1° Criar e iniciar container

```bash
# Para criar e iniciar um container em primeiro plano
$ docker-compose -f docker-compose.yml up

# Para criar e iniciar container em segundo plano
$ docker-compose up -d

# Para iniciar container
$ docker-compose start

# Para pausar container
$ docker-compose stop
```

##### Passo 2° - Iniciar servidor para o node

```bash
# development - Inicia um servidor nodejs em primeiro plano
$ npm run start

# watch mode - Inicia um servidor nodejs em segundo plano
$ npm run start:dev

# production mode - Inicia um servidor nodejs com pasta dist
$ npm run start:prod
```


##### Passo  3° - Iniciar servidor para o prisma studio

```bash

# Para iniciar o prisma studio na porta 5555
$ npx prisma studio
```

##### Passo  4° - Para rodar a migration (Ela que vai gerar as tabelas no banco de dados). E Usar seed (Ela que vai gerar os dados das tabelas).
```bash
# Para criar tabelas
$ npx prisma migrate dev

# Para Criar dados para as tabelas
$ npx prisma db seed
```

##### Para testar aplicação
```bash
# unit tests - Testes unitários
$ npm run test

# e2e tests - Testes end-to-end
$ npm run test:e2e

# test coverage - Teste de cobertura
$ npm 
```
##### Para testar rotas 
Abrir aplicativo inmsomnia e importar o arquivo que está dentro da pasta "inmsomnia" na pasta raiz deste projeto. Com isso você já vai ter configurado as rotas para teste.

## :memo: Licença

Este projeto está sob a licença do MIT. Veja o [LICENSE](https://github.com/Fellippemfv/prisma-project-movie-rentals/blob/master/LICENSE.md) para mais informação.

---