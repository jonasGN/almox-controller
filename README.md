# Almox Controller

Esse é um projeto baseado em uma aplicação real desenvolvida para uma grande empresa cervejeira do Brasil, com o objetivo de controlar o almoxarifado da mesma.

Essa versão da aplicação conta com diversas melhorias (design, funcionalidades e etc) que não foram possíveis serem adicionadas ao projeto original devido as especificações do projeto e seus detalhes de implementação que dependia de um sistema utilizado internamente pela empresa.

## Preview

Preview do front-end da aplicação finalizada 

---

## Dependências

Antes de executar o projeto, é necessário instalar as dependências do mesmo em seu ambiente de trabalho. 

> Os comandos utilizados neste guia correspondem ao sistema operacional Linux, para sistemas baseados em Debian e Ubuntu. Para realizar a instalação das dependências em outro SO, acesse a página oficial da ferramenta e siga as instruções para o SO dejesado.

É recomendado a utilização do **Docker** para evitar possíveis erros de dependências do projeto devido a seu escopo. 

Realize a instalação do Docker para seu sistema operacional de acordo com as instruções na página oficial da ferramenta. Feito a instalação, basta executar o comando abaixo na pasta raíz do projeto:

```bash
$ sudo docker compose up
```

Contudo, caso seja necessário a utilização do mesmo fora do ambiente Docker, será necessário realizar a instalação das dependências de cada contexto, conforme citado abaixo. 

### Front-end

A aplicação front-end fora desenvolvida em ReactJS, portanto, é necessário realizar a instalação das seguintes dependências:

**NodeJS**

```bash
$ curl -fsSL https://deb.nodesource.com/setup_lts.x \
    | sudo -E bash - && \
    sudo apt install -y nodejs
```

**Yarn**

```bash
$ npm install --global yarn
```

> OBS: Utilize somente o yarn para este projeto e não npm

### Back-end

Adicionar dependências aqui

### Mobile

Adicionar dependências aqui

---

## Como utilizar

Esse é um Monorepo contendo o front-end web da aplicação, o back-end e também o mobile da plataforma, por esse motivo as especificidades de cada um fora separado e alocado em suas respectivas documentações. 

### Front-end

[Front-end page](./frontend/README.md)

### Back-end

[Front-end page](./backend/README.md)

### Mobile

[Front-end page](./mobile/README.md)

---

## Melhorias a serem feitas

Durante o desenvolvimento dessa plataforma, fora observado a possibilidade de realizar algumas melhorias no projeto em geral. São elas:

- Adicionar prefixos automáticos aos commits de acordo com o contexto do projeto (frontend, backend e mobile)
- Criar um container contendo todas as dependências do projeto, devido a sua complexidade de configuração do ambiente.
- Adicionar tradução para o inglês da documentação.
- Não permitir importações em determinadas pastas do projeto (front-end) 
