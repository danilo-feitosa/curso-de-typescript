/**
 * Aula 08 - Aprendendo sobre o tipo OBJECT em Typescript
 */

let dados = {
  nome: 'Douglistildes',
  idade: 25,
  status: 'ativo',
  ola: () => {
    console.log('Oi');
  },
  info: (p: string) => {
    console.log(p);
  },
};

dados.nome = 'Josistelderson';

console.log(typeof dados);
console.log(dados.nome);

dados.ola();

dados.info(dados.nome);
