"use strict";
let dados = {
    nome: 'Douglistildes',
    idade: 25,
    status: 'ativo',
    ola: () => {
        console.log('Oi');
    },
    info: (p) => {
        console.log(p);
    },
};
dados.nome = 'Josistelderson';
console.log(typeof dados);
console.log(dados.nome);
dados.ola();
dados.info(dados.nome);
