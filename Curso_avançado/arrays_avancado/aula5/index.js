//Map

//Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(function(valor, indice, array) {
  return valor * 2;
});

console.log(numerosEmDobro);

//1-Retorne apenas uma string com o nome da pessoa
//2-Retorne apenas a chave 'nome' do objeto
//3-Adicione uma chave id em casa objeto
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
  { nome: "Thomas", idade: 30 }
];

const nomes = pessoas.map((obj, indice, array) => {
  //1- return obj.nome;
  //2- delete obj.nome
  // return obj
  //return { idade: obj.idade };
  obj.id = indice + 1;
  return obj;
});

console.log(nomes);
