## Test Doubles: An Exploration of Mocks, Stubs, Dummies, and Spies

This repository is a practical extension of the article "[Why Not to Use Mocks?](https://medium.com/@maicon.jobim/por-que-n%C3%A3o-usar-mocks-84f80328c52e)" where we explore the nuances of different types of test doubles as defined by Gerard Meszaros. The code examples are written in TypeScript and use the Jest testing framework.

## Overview

* **Dummy**: Objects that do nothing and are used when a parameter is required but not actually used in the current test.
* **Stub**: Extensions of Dummies that return specific values needed for the test.
* **Spy**: Stubs that also keep track of how they were called, such as how many times a method was called and with which arguments.
* **Mock**: Incorporate all the features of Spies but also include assertions to verify behavior during the test.

Visit the full article for an in-depth discussion and explore this repository for practical examples of these concepts in action.

## Commands

```bash
npm install

npm run test
```
----

# Test Doubles: Uma Exploração sobre Mocks, Stubs, Dummies e Spies

Este repositório é uma extensão prática do artigo "[Por que não usar Mocks?](https://medium.com/@maicon.jobim/por-que-n%C3%A3o-usar-mocks-84f80328c52e)", onde exploramos as nuances de diferentes tipos de objetos de dublê de teste conforme definido por Gerard Meszaros. Os exemplos de código são apresentados em TypeScript e utilizam o framework de teste Jest.

## Overview

* **Dummy**: Objetos que não fazem nada e são utilizados quando um parâmetro é necessário mas não é usado no teste atual.
* **Stub**: Extensões dos Dummies que retornam valores específicos necessários para o teste.
* **Spy**: Stubs que também mantêm um registro de como foram chamados, por exemplo, quantas vezes um método foi chamado e com quais argumentos.
* **Mock**: Incorporam todas as características dos Spies mas também contêm asserções para verificar o comportamento no teste.

Visite o artigo completo para uma discussão aprofundada e explore este repositório para exemplos práticos desses conceitos em ação.

## Commands

```bash
npm install

npm run test
```



