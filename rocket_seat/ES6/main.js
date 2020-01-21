// class List {
//   constructor() {
//     this.data = [];
//   }

//   add(data) {
//     this.data.push(data);
//     console.log(this.data);
//   }
// }

// class TodoList extends List {
//   constructor() {
//     super();
//     this.usuario = "Thomas";
//   }

//   mostraUsuario() {
//     console.log(this.usuario);
//   }
// }

// const MinhaLista = new TodoList();

// document.getElementById("newtodo").onclick = function() {
//   MinhaLista.add("Novo Todo");
// };

// MinhaLista.mostraUsuario();

//Não funciona por ser statico
// class TodosList {
// constructor() {
//     this.todos = [];
// }

//   static addTodo() {
//     this.todos.push("Novo Todo");
//     console.log(this.todos);
//   }
// }
// TodosList.addTodo();

// Funciona pois nao precisa de informção do restante da classe;
// class Matematic {
// static soma(a, b) {
//     return a + b;
// }
// }
// console.log(Matematic.soma(2, 5));

//Const e Let

// const t = 30;

// function teste(x) {
//   let y = 2;

//   if (x > 5) {
//     let y = 4;
//   }
//   console.log(x, y);
// }

// teste();

//Array

// const arr = [1, 3, 4, 5, 8, 9];

//*Map pecorre o Array
// const newArr = arr.map(function(item, index) {
//   return item + index;
// });
// console.log(newArr);

// const sum = arr.reduce(function(total, next) {
//   return total + next;
// });
////0 -> 1
////1 -> 3
////4 -> 4
// console.log(sum);

//*Numeros Pares
// const filter = arr.filter(function(item) {
//   return item % 2 === 0;
// });
// console.log(filter);

//*Pesquisa no array

// const find = arr.find(function(item) {
//   return item === 4;
// });
// console.log(find);

//*Arrow Functions
// const arr = [1, 3, 4, 5, 6];

// //const newArr = arr.map(function(item) {
// //  return item * 2;
// //});

// const newArr = arr.map(item => item * 1);
// console.log(newArr);

// //Objetos
// const teste = () => ({ nome: "Thomas" });

// console.log(teste());

//* Valores Padrão

// function soma(a = 0, b = 0) {
//   return a + b;
// }
//Arrow ->
// const soma = (a = 0, b = 0) => a + b;

// console.log(soma(2));

//*Desestruturação

// const usuario = {
//   nome: "Thomas",
//   idade: "30",
//   endereco: {
//     cidade: "Joinville",
//     estado: "SC"
//   }
// };

// // const nome = usuario.nome;
// // const idade = usuario.idade;
// // const cidade = usuario.endereco.cidade;
// const {
//   nome,
//   idade,
//   endereco: { cidade }
// } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);

// function mostraNome({ nome, idade }) {
//   console.log(nome);
//   console.log(idade);
// }

// mostraNome(usuario);

//*REST -> RESTO DAS PROPRIEDADE

// const usuario = {
//   nome: "Thomas",
//   idade: "30",
//   endereco: {
//     cidade: "Joinville",
//     estado: "SC"
//   }
// };

// const { nome, ...resto } = usuario;

// console.log(nome);
// console.log(resto);

// const arr = [1, 2, 3, 4];

// const [a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// function soma(a, b, ...params) {
//   return params;
// }
// console.log(soma(1, 2, 3, 4, 5, 6));

//*SPREAD

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const usuario1 = {
//   nome: "Thomas",
//   idade: 30,
//   empresa: "GOV"
// };

// const usuario2 = { ...usuario1, nome: "Joao" };

// console.log(usuario2);

//* Template Literals

const nome = "Thomas";
const idade = 30;

console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");
console.log(`Menu nome é ${nome} e tenho ${idade} anos.`);
