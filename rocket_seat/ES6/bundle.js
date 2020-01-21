"use strict";

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
var arr = [1, 3, 4, 5, 8, 9]; //Map pecorre o Array

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
}); //0 -> 1
//1 -> 3
//4 -> 4

console.log(sum); //Numeros Pares

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //Pesquisa no array

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
