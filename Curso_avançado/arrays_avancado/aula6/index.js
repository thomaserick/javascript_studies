//Reduce -> Reduzir o array/obj em um elemento

//1-Some todos os numeros
//2-Retorne um array com os pares(filter)
//3-Retorne um array com o dobro dos valores(Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, indeci, array) {
  //1- acumulador += valor;
  //return acumulador;
  //2-if (valor % 2 === 0) acumulador.push(valor);
  //return acumulador;
  acumulador.push(valor * 2);
  return acumulador;
}, []);

console.log(total);

//Retorne a pessoa mais velha
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 90 },
  { nome: "Wallace", idade: 47 },
  { nome: "Thomas", idade: 30 }
];

const maisVelha = pessoas.reduce(function(acumulador, obj, indice, array) {
  if (acumulador.idade > obj.idade) return acumulador;
  return obj;
});

console.log(maisVelha);
