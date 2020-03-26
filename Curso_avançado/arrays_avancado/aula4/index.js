//Filter -> Retorna um novo array

//Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numMax = numeros.filter(function callbackFilter(valor) {
//   return valor > 10;
// });
//Função de callback Arrow
//const numMax = numeros.filter(valor => valor > 10);
const numMax = numeros.filter((valor, indice, array) => {
  console.log(valor, indice);
  valor > 10;
});

console.log(numMax);

//1-Retorne as pessoas que tem o nome com 5 letras ou mais
//2-Retorne as pessoas com mais de 50 anos
//3-Retorn as pessoas cujo nome termina com a
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
  { nome: "Thomas", idade: 30 }
];

const pessoasComNomeGrande = pessoas.filter(function(obj) {
  //1- return obj.nome.length >= 5;
  //2- return obj.idade > 50;
  return obj.nome.toLowerCase().endsWith("a");
});

console.log(pessoasComNomeGrande);
