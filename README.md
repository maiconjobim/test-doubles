# Test Doubles: Uma Exploração sobre Mocks, Stubs, Dummies e Spies

Este repositório é uma extensão prática do artigo "[Por que não usar Mocks?](https://medium.com/@maicon.jobim/por-que-n%C3%A3o-usar-mocks-84f80328c52e)", onde exploramos as nuances de diferentes tipos de objetos de dublê de teste conforme definido por Gerard Meszaros. Os exemplos de código são apresentados em TypeScript e utilizam o framework de teste Jest.

## Overview

- **Dummy**: Objetos que não fazem nada e são utilizados quando um parâmetro é necessário mas não é usado no teste atual.
- **Stub**: Extensões dos Dummies que retornam valores específicos necessários para o teste.
- **Spy**: Stubs que também mantêm um registro de como foram chamados, por exemplo, quantas vezes um método foi chamado e com quais argumentos.
- **Mock**: Incorporam todas as características dos Spies mas também contêm asserções para verificar o comportamento no teste.

Visite o artigo completo para uma discussão aprofundada e explore este repositório para exemplos práticos desses conceitos em ação.

## Commands
npm install

npm run test
